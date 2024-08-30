/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as Camera } from "@images/camera-icon.svg";

export default function ImgInput({ onChange, image, label, gap }) {
  function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("이미지만 업로드할 수 있습니다.");
    }
  }

  return (
    <>
      <input
        type="file"
        id="imgUpload"
        css={imgUploadInput}
        onChange={handleImageUpload}
        accept="image/*"
      />
      <label htmlFor="imgUpload" css={[labelCtn, gap === "16" ? gap16 : gap8]}>
        <div className="iconCtn" css={imgCtn}>
          {image ? (
            <img src={image} alt="profile image" css={uploadedImg} />
          ) : (
            <Camera />
          )}
        </div>
        <p css={labelText}>{label}</p>
      </label>
    </>
  );
}

const labelText = css`
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  color: var(--point-color-1);
`;

const labelCtn = css`
  width: 80px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const gap16 = css`
  gap: 16px;
`;

const gap8 = css`
  gap: 8px;
`;

const imgUploadInput = css`
  display: none;
`;

const imgCtn = css`
  width: 80px;
  height: 80px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ececee;
  box-shadow: 0 0 0 0.6px #d5d5d5 inset;
  border-radius: 8px;
`;

const uploadedImg = css`
  max-width: 80px;
  max-height: 80px;
  object-fit: contain;
`;
