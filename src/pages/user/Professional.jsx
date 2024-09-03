import Title from "@components/user/Title";
import { StyledTitleWrap } from "./NewsLetter";
import SearchBar from "@userComponents/SearchBar";

function Professional() {
  return (
    <>
      <StyledTitleWrap>
        <Title titleFirst="P" title="ROFESSIONAL " />
      </StyledTitleWrap>

      <SearchBar />
    </>
  );
}

export default Professional;
