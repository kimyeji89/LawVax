/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Title from "@components/user/Title";
import { StyledTitleWrap } from "@userPages/NewsLetter";
import FieldList from "@userComponents/FieldList";
import FieldItem from "@userComponents/FieldItem";

function Field() {
  return (
    <>
      <StyledTitleWrap>
        <Title
          titleFirst="F"
          title={
            <>
              IELD
              <br />
              OF WORK
            </>
          }
        />
      </StyledTitleWrap>

      <div css={field_list_wrap}>
        <FieldList title="업무분야_1">
          <FieldItem title="업무분야" link={"/field/detail"} />
          <FieldItem title="업무분야" link={"/field/detail"} />
          <FieldItem title="업무분야" link={"/field/detail"} />
          <FieldItem title="업무분야" link={"/field/detail"} />
        </FieldList>
        <FieldList title="업무분야_2">
          <FieldItem title="업무분야" link={"/field/detail"} />
          <FieldItem title="업무분야" link={"/field/detail"} />
        </FieldList>
        <FieldList title="업무분야_3" />
        <FieldList title="업무분야_4" />
        <FieldList title="업무분야_5" />
        <FieldList title="업무분야_6" />
        <FieldList title="업무분야_7" />
        <FieldList title="업무분야_8" />
        <FieldList title="업무분야_9" />
        <FieldList title="업무분야_10" />
      </div>
    </>
  );
}

export default Field;

const field_list_wrap = css`
  border-top: 1px solid #c2c7cd;
  margin: 0 16px 130px 16px;
`;
