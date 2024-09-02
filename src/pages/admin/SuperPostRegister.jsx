/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { ImgInput } from "@adminComponents/ImgInput";
import { Btn274 } from "@adminComponents/Btns";
import CheckBox from "@adminComponents/CheckBox";
import { SelectBoxPost } from "@adminComponents/SelectBox";
import { TextFieldPost } from "@adminComponents/TextField";
import FileInput from "@adminComponents/FileInput";
import { v4 as uuidv4 } from "uuid";

export default function SuperPostRegister() {
  const [image, setImage] = useState(null);
  const [catrgory, setCategory] = useState("");
  const [file, setFile] = useState(null);

  const handleSelect = (id, value) => {
    setCategory(value);
  };

  return (
    <main>
      <h2 className="admin-pageTitle">게시글 작성</h2>
      <div css={ctn}>
        <ImgInput onChange={setImage} image={image} label="사진 등록" />
        <form action="GET" css={form}>
          <div css={top}>
            <SelectBoxPost
              label="카테고리"
              placeholder="선택"
              selectedValue={catrgory}
              data={categoryData}
              onSelect={handleSelect}
              id="Category"
              isMulti={false}
            />
            <TextFieldPost
              id="title"
              label="제목"
              placeholder="제목을 입력하세요"
            />
          </div>
          <div>
            <p css={textInputLabelPost}>내용</p>
            <div css={editorLibraryArea}>
              <span>[editorLibraryArea] 게시글 작성 라이브러리 적용 영역</span>
            </div>
          </div>
          <div>
            <FileInput onChange={setFile} />
          </div>
        </form>
        <div css={bottom}>
          <Btn274 text="저장" />
          <CheckBox label="비공개" />
        </div>
      </div>
    </main>
  );
}

const categoryData = [{ value: "샘플", text: "샘플", key: uuidv4() }];

const textInputLabelPost = css`
  font-size: 14px;
  font-weight: 500;
  line-height: 16.71px;
  color: var(--mono-gray-txt-dark);
  margin-bottom: 6px;
  white-space: nowrap;
  display: block;
`;

const editorLibraryArea = css`
  width: 1430px;
  height: 447px;
  box-shadow: var(--input-bd-inner-1);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ctn = css`
  width: 1550px;
  height: 884px;
  border-radius: 14px;
  background-color: var(--mono-white);
  box-shadow: var(--ctn-bd-inner);
  display: flex;
  flex-direction: column;
  padding: 40px 60px;
  box-sizing: border-box;
  gap: 20px;
`;

const form = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const top = css`
  display: flex;
  gap: 7px;
`;

const bottom = css`
  display: flex;
  justify-content: center;
  position: relative;
`;
