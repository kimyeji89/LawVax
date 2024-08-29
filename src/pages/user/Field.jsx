import Title from "@components/user/Title";
import { StyledTitleWrap } from "./NewsLetter";

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
    </>
  );
}

export default Field;
