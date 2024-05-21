import React, { useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Upload, message } from "antd";
import { useState } from "react";
import { Images } from "../../../theme";
import "./styles.scss";
import { CommonTextField, Loader } from "../../../components";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const ImageUploader = ({
  setFile,
  profileImage,
  placeholder = Images.sourceImg,
  text = "Tap or click to upload source Image",
  name,
  multi,
  redIcon = false,
}) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(profileImage);

  const handleChange = (file) => {
    setLoading(true);

    // setFile(file?.fileList[file?.fileList.length - 1].originFileObj ?? null);
    getBase64(
      file?.fileList[file?.fileList.length - 1].originFileObj,
      (url) => {
        setLoading(false);
        setImageUrl(url);
      }
    );
  };

  const getFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  // const beforeUpload = (file) => {
  //   const isImage = file.type.startsWith("image/");
  //   if (!isImage) {
  //     message.error("You can only upload image files!");
  //   }
  //   return isImage;
  // };

  return (
    <Form.Item
      name={name}
      getValueFromEvent={getFile}
      rules={[
        {
          required: true,
          message: "Image is required",
        },
      ]}
    >
      <Upload
        accept="image/png, image/jpeg"
        className={`my-uploader ${multi ? "multi" : "single"}`}
        name="avatar"
        showUploadList={false}
        // beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {redIcon && <img src={Images.redArrow} className="red-arrow" />}
        {loading ? (
          <Loader height="100%" />
        ) : imageUrl ? (
          <div className="preview-img">
            <img src={imageUrl} alt="avatar" />
          </div>
        ) : (
          <div className="upload-content">
            <>
              <img className="img-placeholder" src={placeholder} alt="avatar" />
              <CommonTextField
                width={"180px"}
                mt={"40px"}
                fontWeight={600}
                className={"theme-text"}
                text={text}
              />
            </>
          </div>
        )}
      </Upload>
    </Form.Item>
  );
};
export default ImageUploader;
