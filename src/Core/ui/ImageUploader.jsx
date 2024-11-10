/* eslint-disable react/prop-types */
import { useRef } from "react";
import Button from "./Button";
import FormRow from "./FormRow";

function ImageUploader({ accept, register, error, imageSrc, setImageSrc }) {
  const fileInputRef = useRef();
  const { ref: regRef, onChange, ...registerCountry } = register();

  const handleImageChange = (event) => {
    if (event.target.files.length === 0) return;

    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setImageSrc(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = null;
      const event = new Event("change", { bubbles: true });
      fileInputRef.current.dispatchEvent(event);
    }
  };
  return (
    <div className="one-for-card-md relative mb-5 flex items-center justify-center gap-10 sm:flex-col">
      <div className="image-uploader abs-error flex flex-col gap-10">
        <FormRow label="Upload picture" isRequired={false} error={error}>
          <input
            type="file"
            id="image"
            accept={accept}
            {...registerCountry}
            ref={(e) => {
              fileInputRef.current = e;
              regRef(e);
            }}
            onChange={(e) => {
              handleImageChange(e);
              onChange(e);
            }}
            hidden
          />
        </FormRow>

        <Button
          onClick={handleReset}
          text="Delete Picture"
          styles="btn-primary bg-gray-300"
        />
      </div>

      <div className="flex h-[200px] w-[200px] items-center">
        <img
          src={imageSrc || "/default.png"}
          alt="Selected or Default"
          className="w-[200px] rounded-md"
        />
      </div>
    </div>
  );
}

export default ImageUploader;
