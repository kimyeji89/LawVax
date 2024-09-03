/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import lawLogo from "@images/lawvax_signature_en.svg";
import blogLogo from "@images/blog_icon.svg";
import instagramLogo from "@images/instagram_icon.svg";

function FooterUser() {
  return (
    <div css={footer_wrap}>
      <div css={footer_container}>
        <div css={icon_container}>
          <img src={lawLogo} css={logo} />
          <div css={sns_icons}>
            <img src={blogLogo} />
            <img src={instagramLogo} />
          </div>
        </div>
        <hr css={hr} />
        <div css={text_container}>
          <div css={text}>
            <span>개인처리방침</span>
            <span>면책공구</span>
            <span>유한책임</span>
          </div>
          <div css={text}>
            서울특별시 서초구 사임당로 18 석오빌딩 3층, 9층 법무법인 로백스
          </div>
          <div css={text}>공동대표 김기동, 이동열</div>
          <div css={text}>
            <span>대표전화 : 02)583 6300</span>
            <span>fax : 02)583 6303</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterUser;

const footer_wrap = css`
  width: 100%;
  height: 209px;
  background-color: var(--mono-gray-bg-3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const footer_container = css`
  height: 181px;
  margin: 14px 16px;
  width: 100%;

  @media (max-width: 350px) {
    margin: 0;
  }
`;

const icon_container = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const logo = css`
  width: 85.04px;
  height: 24px;
`;

const sns_icons = css`
  min-width: 72px;
  display: flex;
  justify-content: space-between;
`;

const hr = css`
  width:100%
  margin: 14px;
  height: 1px;
  background-color: var(--mono-gray-line-1);
  border: none;
`;

const text_container = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 24px;
  gap: 14px;
  font-size: 14px;

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

const text = css`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 24px;
  line-height: 24px;
  color: var(--mono-white);
  // font-size: 14px;

  span {
    color: var(--mono-white);
  }
`;
