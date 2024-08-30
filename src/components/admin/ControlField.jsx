/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useMemo } from "react";
import { TextField } from "@adminComponents/TextField";
import { Btn36 } from "@adminComponents/Btns";
import { SelectBox } from "@adminComponents/SelectBox";
import { ReactComponent as Add } from "@images/add-outline.svg";
import { ReactComponent as Trash } from "@images/trash-outline.svg";
import { v4 as uuidv4 } from "uuid";

function ControlField({ id, placeholder, addField }) {
  function removeField() {
    let target = document.querySelector(`#${id}row`);
    if (target) {
      target.remove();
    }
  }
  return (
    <div css={multiInputCtnSmall} id={`${id}row`}>
      <TextField
        id={`content${id}`}
        label={"내용"}
        size={small538}
        placeholder={placeholder}
        isSingle={true}
      />
      <Btn36 event={addField}>
        <Add />
      </Btn36>
      <Btn36 event={removeField}>
        <Trash />
      </Btn36>
    </div>
  );
}

function ControlSelectField({ id, placeholder, addField }) {
  const [selected, setSelected] = useState("");

  const dataWithKeys = useMemo(
    () =>
      yearData.map((year) => ({
        value: year,
        text: year,
        key: `${id}-${uuidv4()}`,
      })),
    [id]
  );

  function removeField() {
    let target = document.querySelector(`#${id}row`);
    if (target) {
      target.remove();
    }
  }

  const handleSelect = (id, value) => {
    setSelected(value);
  };

  return (
    <div css={multiInputCtnSmall} id={`${id}row`}>
      <SelectBox
        label="년도"
        placeholder="선택"
        size={small159}
        selectedValue={selected}
        data={dataWithKeys}
        onSelect={handleSelect}
        id={`select${id}`}
        isMulti={false}
      />
      <TextField
        id={`content${id}`}
        label={"내용"}
        size={small369}
        placeholder={placeholder}
        isSingle={true}
      />
      <Btn36 event={addField}>
        <Add />
      </Btn36>
      <Btn36 event={removeField}>
        <Trash />
      </Btn36>
    </div>
  );
}

function ControlPeriodField({ id, placeholder, addField }) {
  function removeField() {
    let target = document.querySelector(`#${id}row`);
    if (target) {
      target.remove();
    }
  }
  return (
    <div css={multiInputCtnSmall} id={`${id}row`}>
      <div css={periodCtn}>
        <TextField
          id={`start${id}`}
          label={"시작년도"}
          size={small69}
          placeholder={placeholder[0]}
          isSingle={true}
        />
        <span>~</span>
        <TextField
          id={`end${id}`}
          label={"종료년도"}
          size={small69}
          placeholder={placeholder[0]}
          isSingle={true}
        />
      </div>
      <TextField
        id={`content${id}`}
        label={"내용"}
        size={small369}
        placeholder={placeholder[1]}
        isSingle={true}
      />
      <Btn36 event={addField}>
        <Add />
      </Btn36>
      <Btn36 event={removeField}>
        <Trash />
      </Btn36>
    </div>
  );
}

const yearData = Array.from(
  { length: new Date().getFullYear() - 1940 + 1 },
  (_, i) => new Date().getFullYear() - i
);

const small159 = css`
  width: 159px;
  height: 36px;
`;

const small538 = css`
  width: 538px;
  height: 36px;
`;

const small369 = css`
  width: 369px;
  height: 36px;
`;

const small69 = css`
  width: 69px;
  height: 36px;
  text-align: center;
`;

const multiInputCtnSmall = css`
  display: Flex;
  gap: 10px;
  align-items: end;
  .label {
    display: none;
  }
`;

const addNdelBtn = css`
  width: 36px;
  height: 36px;
  padding: 6px;
  box-sizing: border-box;
  border-radius: 6px;
  background-color: var(--mono-gray-bg-1);
  box-shadow: 0 0 0 0.6px #d5d5d5 inset;
`;

const periodCtn = css`
  display: flex;
  gap: 6px;
  align-items: center;
  span {
    font-size: 14px;
    font-weight: 500;
    line-height: 16.71px;
    color: #606060;
  }
`;

export { ControlField, ControlSelectField, ControlPeriodField };
