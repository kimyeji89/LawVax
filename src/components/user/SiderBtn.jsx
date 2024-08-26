/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function SiderBtn() {
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  const [isNavVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  const closeNav = () => {
    setNavVisible(false);
  };

  return (
    <>
      <div css={side_btn} onClick={toggleNav}>
        <span css={line(isMainPage)}></span>
        <span css={line(isMainPage)}></span>
        <span css={line(isMainPage)}></span>
      </div>

      {isNavVisible && (
        <nav css={nav_style}>
          <section>
            <div css={btn_container}>
              <span css={kor_btn}>KOR</span>
              <span css={eng_btn}>ENG</span>
              <button css={close_btn} onClick={closeNav}>
                x
              </button>
            </div>

            <ul>
              <li>LawVax</li>
              <li>업무분야</li>
              <li>구성원</li>
              <li>법인소식</li>
              <li>뉴스레터</li>
            </ul>
          </section>
          <hr />
          <section></section>
          <section></section>
        </nav>
      )}
    </>
  );
}

export default SiderBtn;

const side_btn = css`
  width: 48px;
  height: 48px;
  margin: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const line = (isMainPage) => css`
  width: 36px;
  height: 3px;
  background-color: ${isMainPage
    ? `var(--mono-white)`
    : `var(--point-color-3)`};
  margin: 3px 0;
  border-radius: 30px;
`;

const nav_style = css`
  position: fixed;
  top: 0;
  min-width: 430px;
  max-width: 1024px;
  height: 100vh;
  background-color: var(--mono-white);
  padding: 28px 16px 0 16px;
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin-bottom: 15px;
  }
`;

const btn_container = css`
  font-size: 20px;
  line-height: 26px;
  font-weight: 400;
`;

const kor_btn = css`
  color: var(--point-color-2);
`;

const eng_btn = css`
  color: var(--mono-gray-txt-light);
`;

const close_btn = css`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;
