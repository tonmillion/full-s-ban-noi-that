import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const getCloudinaryFolder = () =>
  process.env.CLOUDINARY_FOLDER || "GundamHouse";

const validateCloudinaryConfig = () => {
  const requiredKeys = [
    "CLOUDINARY_CLOUD_NAME",
    "CLOUDINARY_API_KEY",
    "CLOUDINARY_API_SECRET",
  ];

  const missingKeys = requiredKeys.filter((key) => !process.env[key]);

  if (missingKeys.length > 0) {
    throw new Error(
      `Missing Cloudinary configuration: ${missingKeys.join(", ")}`
    );
  }
};

export const uploadFileToCloudinary = async (
  fileBuffer,
  fileName,
  contentType
) => {
  try {
    if (!Buffer.isBuffer(fileBuffer)) {
      throw new TypeError("The fileBuffer argument must be of type Buffer.");
    }

    validateCloudinaryConfig();

    const uploadOptions = {
      folder: getCloudinaryFolder(),
      resource_type: "auto",
      use_filename: true,
      unique_filename: true,
    };

    if (contentType) {
      uploadOptions.resource_type = contentType.startsWith("image/")
        ? "image"
        : "auto";
    }

    if (fileName) {
      uploadOptions.filename_override = fileName;
    }

    return await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        uploadOptions,
        (error, result) => {
          if (error) {
            console.error("Error uploading file to Cloudinary:", error);
            reject(error);
            return;
          }

          resolve(result.secure_url);
        }
      );

      uploadStream.end(fileBuffer);
    });
  } catch (error) {
    console.error("Error during Cloudinary upload:", error);
    throw error;
  }
};
