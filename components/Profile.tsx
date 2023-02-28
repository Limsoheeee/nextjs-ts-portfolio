import { useState, useRef } from "react";
import styled from "styled-components";

const Profile = () => {
  const selectFile = useRef<HTMLCanvasElement>(null);
  const [imageToEdit, setImageToEdit] = useState(null);
  const [editpreview, setEditpreview] = useState(null);
  const [data, setData] = useState({});

  const fileUpload = (e) => {
    //1. 이미지 없을 때 처리
    //2. 이미지 용량 제한
    //3. 이미지만 업로드 가능하게 처리하는 법

    setImageToEdit(e.target.files[0]);
    // setEditpreview(URL.createObjectURL(e.target.files[0]));
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const onChangeProfileImage = () => {};

  return (
    <>
      <ImgWrap onSubmit={submitHandler}>
        {/* <img src={mask} alt="mask" /> */}
        <ImageLayout>
          <ImageLabel htmlFor="file" ref={selectFile}>
          <ImageEditButton
              src="/images/rmr/icon_image_edit.svg"
              alt="ebit button"
            />
            <ImageInput
              placeholder="업로드"
              id="file"
              type={"file"}
              accept={"image/*"}
              onChange={fileUpload}
            />            
          </ImageLabel>
          <ImagePreviewWrap>
            {editpreview ? (
              <ImagePreview src={editpreview} alt="basic image" />
            ) : (
              <ImagePreview
                src="/images/rmr/icon_aispera.svg"
                alt="basic image"
              />
            )}
          </ImagePreviewWrap>
        </ImageLayout>
      </ImgWrap>
    </>
  );
};

export default Profile;

const ImgWrap = styled.form`
  button {
    border: none;
    border: 1px solid #cde230;
    background-color: #fff;
    width: 120px;
    height: 30px;
    line-height: 30px;
    cursor: pointer;
    margin-top: 20px;
    transition: all 0.5s;
    :hover {
      background-color: #cde230;
    }
  }
`;

const UserName = styled.p`
  width: 50%;
  height: 50%;
  border: 1px solid #000000;
  font-size: 20px;
`;

const ImageLayout = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
  left: 0px;
  top: 0.5px;
  border: 1px solid transparent;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 30%;
`;

const ImageLabel = styled.label`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: transparent;
  cursor: pointer;
`;

const ImageInput = styled.input`
  visibility: hidden;
`;

const ImagePreview = styled.img`
  width: 102px;
  height: 18.42px;
  margin: 42% 0 0 13%;
`;
const ImageEditButton = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  margin: 82.98% 0% 0% 82.86%;
`;

const ImagePreviewWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 140px;
  height: 140px;
  object-fit: cover;
  box-sizing: border-box;
  justify-content: center;
  justify-items: center;
  align-items: center;
`;
