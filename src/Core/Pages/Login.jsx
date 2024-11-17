import LoginForm from "../../Feasures/Auth/LoginForm";
import LoginLogo from "../../Feasures/Auth/LoginLogo";

function Login() {
  return (
    <div className="flex h-[calc(100vh-30px)] flex-col items-center justify-center gap-12 bg-gray-100">
      <LoginLogo />
      <h2 className="text-center sm:text-3xl">Log in to your account</h2>
      <LoginForm />
    </div>
  );
}

export default Login;
