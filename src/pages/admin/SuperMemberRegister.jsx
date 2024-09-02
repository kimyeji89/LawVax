/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { ImgInput } from "@adminComponents/ImgInput";
import { Btn274 } from "@adminComponents/Btns";
import { TextField, TextArea, PasswordField } from "@adminComponents/TextField";
import { SelectBox } from "@adminComponents/SelectBox";
import { v4 as uuidv4 } from "uuid";
import {
  ControlField,
  ControlSelectField,
  ControlPeriodField,
} from "@adminComponents/ControlField";
import CheckBox from "@adminComponents/CheckBox";

export default function SuperMemberRegister() {
  const [formData, setFormData] = useState({
    image: null,
    nameKR: "",
    nameCH: "",
    birth: { year: "", month: "", date: "" },
    position: "",
    tasks: [],
    email: "",
    langs: [],
    phone: "",
    fax: "",
    id: "",
    pw: "",
    introduce: "",
    education: [
      { year: "", text: "" },
      { year: "", text: "" },
      { year: "", text: "" },
    ],
    career: [
      { yearStart: "", yearEnd: "", text: "" },
      { yearStart: "", yearEnd: "", text: "" },
      { yearStart: "", yearEnd: "", text: "" },
    ],
    cases: [
      { yearStart: "", yearEnd: "", text: "" },
      { yearStart: "", yearEnd: "", text: "" },
      { yearStart: "", yearEnd: "", text: "" },
    ],
    etc: [""],
  });

  function handleImage(image) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: image,
    }));
  }

  function handleNameKR(nameKR) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      nameKR: nameKR,
    }));
  }

  function handleNameCH(nameCH) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      nameCH: nameCH,
    }));
  }

  function handleBirthYear(year) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      birth: { ...prevFormData.birth, year: year },
    }));
  }

  function handleBirthMonth(month) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      birth: { ...prevFormData.birth, month: month },
    }));
  }

  function handleBirthDate(date) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      birth: { ...prevFormData.birth, date: date },
    }));
  }

  function handleEmail(email) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      email: email,
    }));
  }

  function handlePhone(phone) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      phone: phone,
    }));
  }

  function handleFax(fax) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      fax: fax,
    }));
  }

  function handleId(id) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      id: id,
    }));
  }

  function handlePw(pw) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      pw: pw,
    }));
  }

  function handleIntroduce(introduce) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      introduce: introduce,
    }));
  }

  function handleSelect(type, value) {
    switch (type) {
      case "Position":
        setFormData((prevFormData) => ({ ...prevFormData, position: value }));
        break;
      case "Task":
        if (formData.tasks.includes(value)) {
          setFormData((prevFormData) => ({
            ...prevFormData,
            tasks: prevFormData.tasks.filter((item) => item !== value),
          }));
        } else {
          setFormData((prevFormData) => ({
            ...prevFormData,
            tasks: [...prevFormData.tasks, value],
          }));
        }
        break;
      case "Lang":
        if (formData.langs.includes(value)) {
          setFormData((prevFormData) => ({
            ...prevFormData,
            langs: prevFormData.langs.filter((item) => item !== value),
          }));
        } else {
          setFormData((prevFormData) => ({
            ...prevFormData,
            langs: [...prevFormData.langs, value],
          }));
        }
        break;
      default:
        break;
    }
  }

  function addField(type) {
    switch (type) {
      case "education":
        setFormData((prevFormData) => ({
          ...prevFormData,
          education: [...formData.education, { year: "", text: "" }],
        }));
        break;
      case "career":
        setFormData((prevFormData) => ({
          ...prevFormData,
          career: [
            ...formData.career,
            { yearStart: "", yearEnd: "", text: "" },
          ],
        }));
        break;
      case "cases":
        setFormData((prevFormData) => ({
          ...prevFormData,
          cases: [...formData.cases, { yearStart: "", yearEnd: "", text: "" }],
        }));
        break;
      case "etc":
        setFormData((prevFormData) => ({
          ...prevFormData,
          etc: [...formData.etc, ""],
        }));
        break;
      default:
        break;
    }
  }

  function renderField(type, componentList, id, placeholder) {
    return componentList.map((component, index) => {
      switch (type) {
        case "education":
          return (
            <ControlSelectField
              key={`${type}${index}`}
              id={`${type}${index}`}
              placeholder={placeholder}
              addField={() => addField(type)}
            />
          );
        case "career":
          return (
            <ControlPeriodField
              key={`${type}${index}`}
              id={`${type}${index}`}
              placeholder={placeholder}
              addField={() => addField(type)}
            />
          );
        case "cases":
          return (
            <ControlPeriodField
              key={`${type}${index}`}
              id={`${type}${index}`}
              placeholder={placeholder}
              addField={() => addField(type)}
            />
          );
        case "etc":
          return (
            <ControlField
              key={`${type}${index}`}
              id={`${type}${index}`}
              placeholder={placeholder}
              addField={() => addField(type)}
            />
          );
        default:
          return null;
      }
    });
  }

  return (
    <main>
      <h2 className="admin-pageTitle">구성원 등록</h2>
      <form action="POST" css={form}>
        <div className="top" css={top}>
          <ImgInput
            gap="16"
            onChange={handleImage}
            image={formData.image}
            label="사진 등록"
          />
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
                onChange={handleNameKR}
              />
              <TextField
                id={"nameCH"}
                label={"이름(한문)"}
                size={full}
                placeholder={"洪吉童"}
                isSingle={true}
                onChange={handleNameCH}
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
                    onChange={handleBirthYear}
                  />
                  <TextField
                    id={"month"}
                    label={"월"}
                    size={triple}
                    placeholder={"00"}
                    isSingle={false}
                    onChange={handleBirthMonth}
                  />
                  <TextField
                    id={"date"}
                    label={"일"}
                    size={triple}
                    placeholder={"00"}
                    isSingle={false}
                    onChange={handleBirthDate}
                  />
                </div>
              </div>
              <div css={multiInputCtnSmall}>
                <SelectBox
                  label="직책"
                  placeholder="선택"
                  size={half}
                  selectedValue={formData.position}
                  data={positionData}
                  onSelect={handleSelect}
                  id="Position"
                  isMulti={false}
                />
                <SelectBox
                  label="주요업무"
                  placeholder="선택"
                  size={half}
                  selectedValue={formData.tasks}
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
                onChange={handleEmail}
              />
              <SelectBox
                label="언어(선택)"
                placeholder="한국어"
                size={full}
                selectedValue={formData.langs}
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
                onChange={handlePhone}
              />
              <TextField
                id={"fax"}
                label={"팩스번호"}
                size={full}
                placeholder={"00-0000-0000"}
                isSingle={true}
                onChange={handleFax}
              />
            </div>
            <div className="row" css={row}>
              <TextField
                id={"id"}
                label={"아이디"}
                size={full}
                placeholder={"입력"}
                isSingle={true}
                onChange={handleId}
              />
              <PasswordField
                id={"pw"}
                label={"비밀번호"}
                size={full}
                placeholder={"입력"}
                isSingle={true}
                onChange={handlePw}
              />
            </div>
            <div className="row" css={row}>
              <TextArea
                id={"introduce"}
                label={"소개"}
                placeholder={"간단한 소개 글을 작성해주세요."}
                onChange={handleIntroduce}
              />
            </div>
          </div>
          <div className="right" css={right}>
            <div>
              <p css={textInputLabel}>학력</p>
              <div css={column}>
                {renderField(
                  "education",
                  formData.education,
                  `education${formData.education.length}`,
                  "OO대학교 졸업"
                )}
              </div>
            </div>
            <div>
              <p css={textInputLabel}>경력</p>
              <div css={column}>
                {renderField(
                  "career",
                  formData.career,
                  `career${formData.career.length}`,
                  ["1990", "제31회 사법시험 합격"]
                )}
              </div>
            </div>
            <div>
              <p css={textInputLabel}>주요 처리사례</p>
              <div css={column}>
                {renderField(
                  "cases",
                  formData.cases,
                  `cases${formData.cases.length}`,
                  ["1995", "OO그룹 감사업무 대행 및 고소·고발 대리"]
                )}
              </div>
            </div>
            <div>
              <p css={textInputLabel}>저서/활동/기타</p>
              <div css={column}>
                {renderField(
                  "etc",
                  formData.etc,
                  `etc${formData.etc.length}`,
                  "아시아경제 등 칼럼 게재"
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="bottom" css={bottom}>
          <Btn274 text="저장" />
          <CheckBox label="비공개" />
        </div>
      </form>
    </main>
  );
}

const positionData = [
  { value: "대표 변호사", text: "대표 변호사", key: uuidv4() },
  { value: "파트너 변호사", text: "파트너 변호사", key: uuidv4() },
  { value: "변호사", text: "변호사", key: uuidv4() },
  { value: "고문", text: "고문", key: uuidv4() },
];

const taskData = [
  { value: "기업분야", text: "기업분야", key: uuidv4() },
  { value: "개인분야", text: "개인분야", key: uuidv4() },
];

const langData = [
  { value: "한국어", text: "한국어", key: uuidv4() },
  { value: "영어", text: "영어", key: uuidv4() },
  { value: "일본어", text: "일본어", key: uuidv4() },
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
