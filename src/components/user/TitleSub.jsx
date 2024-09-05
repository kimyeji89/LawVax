/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import MoreBtn from "./MoreBtn";
function TitleSub({ title, showMore, link }) {
  return (
    <div css={title_wrap}>
      <span>{title}</span>
      {showMore && <MoreBtn link={link} />}
    </div>
  );
}

export default TitleSub;

const title_wrap = css`
  span {
    font-size: 28px;
    font-weight: 500;
    color: var(--mono-gray-txt-dark);
  }

  padding: 0 0 24px 0;
`;
