/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { TextField, TextArea } from "@adminComponents/TextField";
import SelectBox from "@adminComponents/SelectBox";
import {
  ControlField,
  ControlSelectField,
  ControlPeriodField,
} from "@adminComponents/ControlField";
import { ReactComponent as Camera } from "@images/camera-icon.svg";
import { ReactComponent as Check } from "@images/check-icon.svg";
import { useState } from "react";

export default function ProfessionalRegister() {
  const [image, setImage] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState("");
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [selectedLangs, setSelectedLangs] = useState([]);
  const [educationFields, setEducationFields] = useState([
    { id: "education1", placeholder: "OO대학교 졸업" },
    { id: "education2", placeholder: "OO대학교 졸업" },
    { id: "education3", placeholder: "OO대학교 졸업" },
  ]);
  const [careerFields, setCareerFields] = useState([
    { id: "career1", placeholder: ["1990", "제31회 사법시험 합격"] },
    { id: "career2", placeholder: ["1990", "제31회 사법시험 합격"] },
    { id: "career3", placeholder: ["1990", "제31회 사법시험 합격"] },
  ]);
  const [casesFields, setCasesFields] = useState([
    {
      id: "cases1",
      placeholder: ["1995", "OO그룹 감사업무 대행 및 고소·고발 대리"],
    },
    {
      id: "cases2",
      placeholder: ["1995", "OO그룹 감사업무 대행 및 고소·고발 대리"],
    },
    {
      id: "cases3",
      placeholder: ["1995", "OO그룹 감사업무 대행 및 고소·고발 대리"],
    },
  ]);
  const [etcFields, setEtcFields] = useState([
    { id: "etc1", placeholder: "아시아경제 등 칼럼 게재" },
    { id: "etc2", placeholder: "아시아경제 등 칼럼 게재" },
    { id: "etc3", placeholder: "아시아경제 등 칼럼 게재" },
  ]);

  function addField(type, id, placeholder) {
    let newComponent = {
      id: id,
      placeholder: placeholder,
    };

    switch (type) {
      case "education":
        setEducationFields((prevComponents) => [
          ...prevComponents,
          newComponent,
        ]);
        break;
      case "career":
        setCareerFields((prevComponents) => [...prevComponents, newComponent]);
        break;
      case "cases":
        setCasesFields((prevComponents) => [...prevComponents, newComponent]);
        break;
      case "etc":
        setEtcFields((prevComponents) => [...prevComponents, newComponent]);
        break;
      default:
        break;
    }
  }

  function renderField(type, componentList, id, placeholder) {
    return componentList.map((component) => {
      switch (type) {
        case "education":
          return (
            <ControlSelectField
              id={component.id}
              placeholder={component.placeholder}
              addField={() => addField(type, id, placeholder)}
            />
          );
        case "career":
          return (
            <ControlPeriodField
              id={component.id}
              placeholder={component.placeholder}
              addField={() => addField(type, id, placeholder)}
            />
          );
        case "cases":
          return (
            <ControlPeriodField
              id={component.id}
              placeholder={component.placeholder}
              addField={() => addField(type, id, placeholder)}
            />
          );
        case "etc":
          return (
            <ControlField
              id={component.id}
              placeholder={component.placeholder}
              addField={() => addField(type, id, placeholder)}
            />
          );
        default:
          return null;
      }
    });
  }

  const handleSelect = (type, value) => {
    switch (type) {
      case "Position":
        setSelectedPosition(value);
        break;
      case "Task":
        if (selectedTasks.includes(value)) {
          setSelectedTasks(
            selectedTasks.filter((selected) => selected !== value)
          );
        } else {
          setSelectedTasks([...selectedTasks, value]);
        }
        break;
      case "Lang":
        if (selectedLangs.includes(value)) {
          setSelectedLangs(
            selectedLangs.filter((selected) => selected !== value)
          );
        } else {
          setSelectedLangs([...selectedLangs, value]);
        }
        break;
      default:
        break;
    }
  };

  function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid image file.");
    }
  }

  return (
    <main>
      <h2 className="admin-pageTitle">구성원 등록</h2>
      <form action="GET" css={form}>
        <div className="top" css={top}>
          <input
            type="file"
            id="imgUpload"
            css={imgUploadInput}
            onChange={handleImageUpload}
            accept="image/*"
          />
          <label htmlFor="imgUpload" css={labelCtn}>
            <div className="iconCtn" css={imgCtn}>
              {image ? (
                <img src={image} alt="profile image" css={uploadedImg} />
              ) : (
                <Camera />
              )}
            </div>
            <p css={labelText}>사진 등록</p>
          </label>
        </div>
        <div className="middle" css={middle}>
          <div className="left" css={left}>
            <div className="row" css={row}>
              <TextField
                id={"nameKR"}
                label={"이름(한글)"}
                size={full}
                placeholder={"홍길동"}
                isSingle={true}
              />
              <TextField
                id={"nameCH"}
                label={"이름(한문)"}
                size={full}
                placeholder={"洪吉童"}
                isSingle={true}
              />
            </div>
            <div className="row" css={row}>
              <div>
                <p css={textInputLabel}>생년월일</p>
                <div css={multiInputCtn}>
                  <TextField
                    id={"year"}
                    label={"년"}
                    size={triple}
                    placeholder={"0000"}
                    isSingle={false}
                  />
                  <TextField
                    id={"month"}
                    label={"월"}
                    size={triple}
                    placeholder={"00"}
                    isSingle={false}
                  />
                  <TextField
                    id={"date"}
                    label={"일"}
                    size={triple}
                    placeholder={"00"}
                    isSingle={false}
                  />
                </div>
              </div>
              <div css={multiInputCtnSmall}>
                <SelectBox
                  label="직책"
                  placeholder="선택"
                  size={half}
                  selectedValue={selectedPosition}
                  data={positionData}
                  onSelect={handleSelect}
                  id="Position"
                  isMulti={false}
                />
                <SelectBox
                  label="주요업무"
                  placeholder="선택"
                  size={half}
                  selectedValue={selectedTasks}
                  data={taskData}
                  onSelect={handleSelect}
                  id="Task"
                  isMulti={true}
                />
              </div>
            </div>
            <div className="row" css={row}>
              <TextField
                id={"email"}
                label={"E-mail"}
                size={full}
                placeholder={"hongildong@lawvax.co.kr"}
                isSingle={true}
              />
              <SelectBox
                label="언어(선택)"
                placeholder="한국어"
                size={full}
                selectedValue={selectedLangs}
                data={langData}
                onSelect={handleSelect}
                id="Lang"
                isMulti={true}
              />
            </div>
            <div className="row" css={row}>
              <TextField
                id={"phone"}
                label={"전화번호"}
                size={full}
                placeholder={"010-0000-0000"}
                isSingle={true}
              />
              <TextField
                id={"fax"}
                label={"팩스번호"}
                size={full}
                placeholder={"00-0000-0000"}
                isSingle={true}
              />
            </div>
            <div className="row" css={row}>
              <TextField
                id={"id"}
                label={"아이디"}
                size={full}
                placeholder={"입력"}
                isSingle={true}
              />
              <TextField
                id={"pw"}
                label={"비밀번호"}
                size={full}
                placeholder={"입력"}
                isSingle={true}
              />
            </div>
            <div className="row" css={row}>
              <TextArea
                id={"introduce"}
                label={"소개"}
                placeholder={"간단한 소개 글을 작성해주세요."}
              />
            </div>
          </div>
          <div className="right" css={right}>
            <div>
              <p css={textInputLabel}>학력</p>
              <div css={column}>
                {renderField(
                  "education",
                  educationFields,
                  `education${educationFields.length}`,
                  "OO대학교 졸업"
                )}
              </div>
            </div>
            <div>
              <p css={textInputLabel}>경력</p>
              <div css={column}>
                {renderField(
                  "career",
                  careerFields,
                  `career${careerFields.length}`,
                  ["1990", "제31회 사법시험 합격"]
                )}
              </div>
            </div>
            <div>
              <p css={textInputLabel}>주요 처리사례</p>
              <div css={column}>
                {renderField(
                  "cases",
                  casesFields,
                  `cases${casesFields.length}`,
                  ["1995", "OO그룹 감사업무 대행 및 고소·고발 대리"]
                )}
              </div>
            </div>
            <div>
              <p css={textInputLabel}>저서/활동/기타</p>
              <div css={column}>
                {renderField(
                  "etc",
                  etcFields,
                  `etc${etcFields.length}`,
                  "아시아경제 등 칼럼 게재"
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="bottom" css={bottom}>
          <button type="submit" css={btn}>
            <p>저장</p>
          </button>
          <div css={checkboxCtn}>
            <label htmlFor="auto" css={checkboxCustom}>
              <input type="checkbox" name="auto" id="auto" css={checkbox} />
              <Check />
            </label>
            <span css={checkboxLabel}>비공개</span>
          </div>
        </div>
      </form>
    </main>
  );
}

const positionData = [
  { value: "대표 변호사", text: "대표 변호사" },
  { value: "파트너 변호사", text: "파트너 변호사" },
  { value: "변호사", text: "변호사" },
  { value: "고문", text: "고문" },
];

const taskData = [
  { value: "기업분야", text: "기업분야" },
  { value: "개인분야", text: "개인분야" },
];

const langData = [
  { value: "한국어", text: "한국어" },
  { value: "영어", text: "영어" },
  { value: "일본어", text: "일본어" },
];

const form = css`
  display: flex;
  flex-direction: column;
  width: 1550px;
  height: 100%;
  background-color: var(--mono-white);
  padding: 60px;
  box-sizing: border-box;
`;

const top = css`
  margin-bottom: 30px;
`;

const labelCtn = css`
  width: 80px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  cursor: pointer;
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

const labelText = css`
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  color: var(--point-color-1);
`;

const middle = css`
  display: flex;
  gap: 20px;
  width: 100%;
  margin-bottom: 60px;
`;

const left = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const right = css`
  width: 630px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const row = css`
  display: flex;
  gap: 20px;
`;

const column = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const multiInputCtn = css`
  display: flex;
  gap: 13px;
  label {
    display: none;
  }
`;

const multiInputCtnSmall = css`
  display: Flex;
  gap: 10px;
  align-items: end;
  label {
    display: none;
  }
`;

const selectBoxCtn = css`
  position: relative;
`;

const textInputLabel = css`
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  color: var(--mono-gray-txt-dark);
  margin-bottom: 10px;
  white-space: nowrap;
  display: block;
`;

const full = css`
  width: 380px;
  height: 52px;
`;

const half = css`
  width: 185px;
  height: 52px;
`;

const triple = css`
  width: 118px;
`;

const bottom = css`
  display: flex;
  justify-content: center;
  position: relative;
`;

const btn = css`
  width: 274px;
  height: 56px;
  background-color: var(--point-color-1);
  border-radius: 8px;
  p {
    color: var(--mono-white);
  }
`;

const checkboxCtn = css`
  position: absolute;
  top: 50%;
  left: calc(50% + 165px);
  transform: translateY(-50%);
  display: flex;
  gap: 10px;
  align-items: center;
`;

const checkboxLabel = css`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: var(--mono-gray-txt-dark);
`;

const checkboxCustom = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background-color: #1a6cb5;
  box-shadow: 0 0 0 1px #8fc0ec inset;
`;

const checkbox = css`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;
