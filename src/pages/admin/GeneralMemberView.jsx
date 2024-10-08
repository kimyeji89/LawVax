/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import sampleProfileData from "@data/sampleProfileData.json";
import { ImgInputReadOnly } from "@adminComponents/ImgInput";
import {
  TextAreaReadOnly,
  TextFieldReadOnly,
} from "@adminComponents/TextField";
import { SelectBoxReadOnly } from "@adminComponents/SelectBox";
import {
  ControlFieldReadOnly,
  ControlSelectFieldReadOnly,
  ControlPeriodFieldReadOnly,
} from "@adminComponents/ControlField";

export default function GeneralMemberView() {
  let formData = sampleProfileData[0];
  formData.image = "/assets/images/profile_view.png";

  function renderField(type, componentList) {
    return componentList.map((component, index) => {
      switch (type) {
        case "education":
          return (
            <ControlSelectFieldReadOnly
              key={`${type}${index}`}
              id={`${type}${index}`}
              selectedValue={component.year}
              textValue={component.text}
            />
          );
        case "career":
          return (
            <ControlPeriodFieldReadOnly
              key={`${component.id}-${index}`}
              id={`career${index + 1}`}
              yearStartValue={component.yearStart}
              yearEndValue={component.yearEnd}
              textValue={component.text}
            />
          );
        case "cases":
          return (
            <ControlPeriodFieldReadOnly
              key={`${type}${index}`}
              id={`${type}${index}`}
              yearStartValue={component.yearStart}
              yearEndValue={component.yearEnd}
              textValue={component.text}
            />
          );
        case "etc":
          return (
            <ControlFieldReadOnly
              key={`${type}${index}`}
              id={`${type}${index}`}
              textValue={component}
            />
          );
        default:
          return null;
      }
    });
  }

  return (
    <main>
      <h2 className="admin-pageTitle">구성원 보기</h2>
      <form action="GET" css={form}>
        <div className="top" css={top}>
          <ImgInputReadOnly gap="16" image={formData.image} label="사진 등록" />
        </div>
        <div className="middle" css={middle}>
          <div className="left" css={left}>
            <div className="row" css={row}>
              <TextFieldReadOnly
                id={"nameKR"}
                label={"이름(한글)"}
                size={full}
                value={formData.name}
                isSingle={true}
              />
              <TextFieldReadOnly
                id={"nameCH"}
                label={"이름(한문)"}
                size={full}
                value={formData.nameCH}
                isSingle={true}
              />
            </div>
            <div className="row" css={row}>
              <div>
                <p css={textInputLabel}>생년월일</p>
                <div css={multiInputCtn}>
                  <TextFieldReadOnly
                    id={"year"}
                    label={"년"}
                    size={triple}
                    value={formData.birth.year}
                    isSingle={false}
                  />
                  <TextFieldReadOnly
                    id={"month"}
                    label={"월"}
                    size={triple}
                    value={formData.birth.month}
                    isSingle={false}
                  />
                  <TextFieldReadOnly
                    id={"date"}
                    label={"일"}
                    size={triple}
                    value={formData.birth.date}
                    isSingle={false}
                  />
                </div>
              </div>
              <div css={multiInputCtnSmall}>
                <SelectBoxReadOnly
                  label="직책"
                  size={half}
                  selectedValue={formData.position}
                  id="Position"
                  isMulti={false}
                />
                <SelectBoxReadOnly
                  label="주요업무"
                  size={half}
                  selectedValue={formData.tasks}
                  id="Task"
                  isMulti={true}
                />
              </div>
            </div>
            <div className="row" css={row}>
              <TextFieldReadOnly
                id={"email"}
                label={"E-mail"}
                size={full}
                value={formData.email}
                isSingle={true}
              />
              <SelectBoxReadOnly
                label="언어(선택)"
                size={full}
                selectedValue={formData.langs}
                id="Lang"
                isMulti={true}
              />
            </div>
            <div className="row" css={row}>
              <TextFieldReadOnly
                id={"phone"}
                label={"전화번호"}
                size={full}
                value={formData.phone}
                isSingle={true}
              />
              <TextFieldReadOnly
                id={"fax"}
                label={"팩스번호"}
                size={full}
                value={formData.fax}
                isSingle={true}
              />
            </div>
            <div className="row" css={row}>
              <TextFieldReadOnly
                id={"id"}
                label={"아이디"}
                size={full}
                value={formData.id}
                isSingle={true}
              />
              <TextFieldReadOnly
                id={"pw"}
                label={"비밀번호"}
                size={full}
                value={formData.pw}
                isSingle={true}
              />
            </div>
            <div className="row" css={row}>
              <TextAreaReadOnly
                id={"introduce"}
                label={"소개"}
                value={formData.introduce}
              />
            </div>
          </div>
          <div className="right" css={right}>
            <div>
              <p css={textInputLabel}>학력</p>
              <div css={column}>
                {renderField("education", formData.education)}
              </div>
            </div>
            <div>
              <p css={textInputLabel}>경력</p>
              <div css={column}>{renderField("career", formData.career)}</div>
            </div>
            <div>
              <p css={textInputLabel}>주요 처리사례</p>
              <div css={column}>{renderField("cases", formData.cases)}</div>
            </div>
            <div>
              <p css={textInputLabel}>저서/활동/기타</p>
              <div css={column}>{renderField("etc", formData.etc)}</div>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}

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
  margin-bottom: 170px;
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
