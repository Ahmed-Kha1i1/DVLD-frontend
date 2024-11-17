import { useForm } from "react-hook-form";
import {
  validateEmailRule,
  validatePasswordRule,
} from "../../Core/Utils/validationRules";
import InputError from "../../Core/ui/InputError";
import SaveButton from "../../Core/ui/SaveButton";
import useLogin from "./useLogin";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { sessoin } from "../../Constants";

function LoginForm() {
  const navigate = useNavigate();

  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: { email: "newEmail2233@gmai.com", password: "AAAWWWe23#" },
  });

  useEffect(() => {
    const currentSession = localStorage.getItem(sessoin);
    if (!currentSession) return;

    const sessionObject = JSON.parse(currentSession);
    const expiresOn = new Date(sessionObject.expiresOn);

    if (sessionObject.accessToken && expiresOn > new Date()) {
      navigate("/dashboard");
    }
  }, []);

  const { isLoading, Login } = useLogin();
  function onSubmit(values) {
    Login(
      { email: values.email, password: values.password },
      {
        onSettled: () => {
          reset();
        },
        onSuccess: () => {
          navigate("/dashboard");
        },
      },
    );
  }

  return (
    <form
      className="w-[480px] rounded-md bg-white px-12 py-8 shadow-sm sm:w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="mb-2 text-xl font-semibold capitalize"
        >
          Email
        </label>
        <input
          className="input rounded-md border px-3 py-2"
          id="email"
          type="email"
          {...register("email", validateEmailRule())}
          autoComplete="email"
        />
      </div>
      <InputError>{errors?.email?.message}</InputError>
      <div className="flex flex-col">
        <label
          htmlFor="password"
          className="mb-2 text-xl font-semibold capitalize"
        >
          Password
        </label>
        <input
          className="input rounded-md border px-3 py-2"
          autoComplete="current-password"
          id="password"
          type="password"
          {...register("password", validatePasswordRule("Password"))}
        />
        <InputError>{errors?.password?.message}</InputError>
      </div>
      <SaveButton text="Log in" className="w-full" disabled={isLoading} />
    </form>
  );
}

export default LoginForm;
