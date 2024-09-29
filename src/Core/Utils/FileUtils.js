import { ImageUpload } from "../../Constants";

export function validateImageFile(file) {
  const maxSizeInBytes = ImageUpload.maxSizeInMegaBytes * 1024 * 1024;

  if (!file) {
    return true; // No file, valid
  }

  const fileExtension = file.name.split(".").pop().toLowerCase();

  if (!ImageUpload.allowedExtensions.includes(`.${fileExtension}`)) {
    return `Invalid image type. Allowed types are: ${ImageUpload.allowedExtensions.join(", ")}`;
  }

  if (file.size > maxSizeInBytes) {
    return `Image size exceeds the maximum allowed size of ${ImageUpload.maxSizeInMegaBytes} MB.`;
  }

  return true; // Valid file
}
