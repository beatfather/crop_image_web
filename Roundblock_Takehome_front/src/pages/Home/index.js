import React, { useState, useRef } from "react";
import "./index.scss";
import { Card, Form, Button, message, Upload, Popover } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { createZipFromImage } from "@/utils";



const Home = () => {
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ aspect: 1, unit: "%" });
  const [croppedImage, setCroppedImage] = useState(null);
  const [src, setSrc] = useState(null);
  const [completedCrop, setCompletedCrop] = useState(null);
  const imageRef = useRef(null);
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [isUploading, setIsUploading] = useState(false);


  const handleSubmit = async (info) => {
    if (croppedImage === null) {
      message.error("哎哟，你干嘛哎哟，请先完成裁剪啦");
      return;
    }
    try {
      setIsUploading(true);
      const zip = await createZipFromImage(croppedImage);
  
      const formData = new FormData();
      formData.append("file", zip, "image.zip");
  
      await uploadFileWithProgress(formData, (percentage) => {
        setUploadPercentage(percentage);
      });
  
      message.success("上传成功");
    } catch (error) {
      console.error(error);
      message.error("上传失败，请重试");
    } finally {
      setIsUploading(false);
      setUploadPercentage(0);
    }
  };
  

  // 裁剪图片
  const cropImageNow = () => {
    const image_HTML = new Image();
    image_HTML.src = src;

    const canvas = document.createElement('canvas');
    console.log("src",src);
    console.log("canvas",canvas);
    console.log("image",image);
    
    const scaleX = image_HTML.naturalWidth / imageRef.current.clientWidth;
    const scaleY = image_HTML.naturalHeight / imageRef.current.clientHeight;
    console.log("scaleX",scaleX)
    console.log("image_HTML.naturalWidth",image_HTML.naturalWidth)
    console.log("image_HTML.width",image_HTML.width)
    console.log("scaleY",scaleY)
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    const pixelRatio = window.devicePixelRatio;
    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = 'high';
    
    console.log("crop",crop)
    
    

    console.log("image_HTML",image_HTML);
    ctx.drawImage(
      image_HTML,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height,
    );

    // Converting to base64
    const base64Image = canvas.toDataURL('image/jpeg');
    setCroppedImage(base64Image);
    console.log("base64Image",base64Image);
  };

  // 本地上传之前检查图片
  const checkLocalUpload = async (file) => {
    if (!file || !file.type.startsWith('image/')) {
      message.error('请选择一个图片文件。');
      return false;
    }
  
    // 检查是否已经有图片存在并且尚未提交到后端，要求用户确认是否放弃之前的更改
    if (image !== null) {
      const confirmResult = window.confirm('前一个图片尚未上传，您确定要放弃之前的编辑和更改吗？');
      if (!confirmResult) {
        return false;
      }
      setCroppedImage(null);  // 清空之前的图片
      setCrop(null); // 清空之前的裁剪信息
    }

    return true;
  };

  // 本地上传
  const handleBeforeUpload = async (file) => {
    if (await checkLocalUpload(file)) {
      setSrc(URL.createObjectURL(file));
      setImage(file);
      console.log("local upload success");
    } else {
      console.log("local upload failed", image);
    }
    return false;
  };


  // 上传到后端
  const uploadFileWithProgress = (formData, onUploadProgress) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
  
      xhr.open("POST", "http://54.180.149.62:8080/files/upload");  // 服务器用
      //xhr.open("POST", "http://localhost:8080/files/upload"); // 本地测试用
  
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentage = Math.round((event.loaded * 100) / event.total);
          onUploadProgress(percentage);
        }
      };
  
      xhr.onload = (event) => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.responseText);
        } else {
          reject(new Error("Upload failed with status: " + xhr.statusText));
        }
      };
  
      xhr.onerror = () => {
        reject(new Error("Upload failed with status: " + xhr.statusText));
      };
  
      xhr.send(formData);
    });
  };
  
  // 下载最新的文件
  const downloadLatestFile = async () => {
    try {
      
      const response = await fetch('http://54.180.149.62:8080/files/download', {
        method: 'GET',
      });
      
      /*
      const response = await fetch('http://localhost:8080/files/download', {
        method: 'GET',
      });
      */
      console.log("response",response);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'example.zip'); // Use a dynamic name based on your requirements
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Downloading file failed:", error);
      message.error("下载失败，请重试");
    }
  };
  
  return (
    <div className="outer-container">
      <Card title="图片剪裁" className="home-container">
        <Form layout="vertical">
          {image ? (
            <>
              <Card className="crop-container">
                <Form.Item label="裁剪图片" className="image-center">
                  <ReactCrop src={src} onImageLoaded={setImage} crop={crop} onChange={(c) => setCrop(c)} onComplete={(c) => setCompletedCrop(c)}>
                    <Form.Item >
                      <img  className= "image-center" src={src} ref={imageRef}/>
                    </Form.Item>
                  </ReactCrop>

                  <Form.Item>
                    <Button className="submit-button" onClick={cropImageNow}>
                      裁剪
                    </Button>
                  </Form.Item>
                  
                </Form.Item>
              </Card>
              {croppedImage && (
                <Card className="crop-container">
                  <Form.Item label="预览" className="image-center">
                    <img src={croppedImage} alt="裁剪后的图片" />
                  </Form.Item>
                </Card>
              )}
              
            </>
          ) : (
            <p className="image-center">请在下方上传图片</p>
          )}
  
          <Form.Item label="上传图片">
            <Upload.Dragger
              accept="image/*"
              showUploadList={false}
              beforeUpload={handleBeforeUpload}
              onRemove={(file) => {
                console.log("onRemove", file);
                setSrc(null);
                setImage(null);
              }}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p>点击这里或者拖拽图片到此处上传</p>
            </Upload.Dragger>
          </Form.Item>
  
          <Form.Item>
            <Button className="submit-button" onClick={handleSubmit} type="primary">
              上传图片
            </Button>
          </Form.Item>
          <Form.Item>
            <Button className="submit-button" onClick={downloadLatestFile} type="primary">
              下载文件
            </Button>
          </Form.Item>
          

        </Form>
      </Card>
    </div>
  );
};

export default Home;

