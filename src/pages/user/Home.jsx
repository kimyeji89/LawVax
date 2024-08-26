/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import homeImg1 from "@images/home_img-1.png";

function Home() {
  return (
    <>
      <img src={homeImg1} css={img_1} />
    </>
  );
}

export default Home;

const img_1 = css`
  height: 872px;
  width: 100%;
  max-width: 1024px;
  min-width: 430px;
  object-fit: cover;
`;
