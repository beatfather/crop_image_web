// util.js
import JSZip from "jszip";

const createZipFromImage = async (imageData, imageName = "image.jpeg") => {
  const zip = new JSZip();
  const imgFolder = zip.folder("images");
  const data = imageData.replace(/^data:image\/\w+;base64,/, "");
  imgFolder.file(imageName, data, { base64: true });

  const content = await zip.generateAsync({ type: "blob" });
  return content;
};

export { createZipFromImage }; // 导出
