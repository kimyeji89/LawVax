/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Title from "@components/user/Title";
import IntroCard from "../../components/user/IntroCard";
import introImg1 from "@images/introduction/intro-img-1.png";
import introImg2 from "@images/introduction/intro-img-2.png";
import introImg3 from "@images/introduction/intro-img-3.png";
import introImg4 from "@images/introduction/intro-img-4.png";

function Introduction() {
  return (
    <div css={container}>
      <div css={title_wrap}>
        <Title subTitle={"Introduction"} titleFirst="L" title="AWVAX" />
      </div>
      <p css={title_under}>Introduce ourselves</p>

      <div css={gradient}></div>

      <section css={card_list}>
        <IntroCard
          imgSrc={introImg1}
          title="Corporate ∙ Finance ∙ IT"
          text="법무법인 LawVax는 검찰 및 법원 등에서 오랜 기간 수사나 재판 경험을 쌓아온 변호사들이 중심이 되어 기업∙금융∙첨단(IT) 분야에서 최상의 서비스를 제공하고 있습니다. 특히 내부통제시스템 구축 및 감사, 기업 수사대응, 가상화폐 등 신종 금융범죄에 관한 성공적인 수행 사례를 축적해 나가고 있습니다.  "
        />
        <IntroCard
          imgSrc={introImg2}
          title="Experience ∙ Difference"
          text="LawVax는 변호사들의 차별화된 경험(experience)를 바탕으로 탁월한(difference) 법률서비스를 지향합니다. 부패∙금융 수사 분야의 특수통 검사, 30년 경력의 법관, 워크아웃 대상 기업의 법무팀 총괄책임 등 이력을 보유한 베테랑 변호사들이 원팀을 이루어 의뢰인과 직접 소통하며 의뢰인이 어려움을 이겨낼 수 있도록 수준 높은 솔루션을 찾아드립니다."
        />
        <IntroCard
          imgSrc={introImg3}
          title="Law + Vaccine"
          text="이미 문제가 발생한 후에 대응하는 것만으로는 부족합니다. 준법경영에 필요한 내부통제시스템을 갖추고, 끊임없이 체크하며 문제를 예방해야 합니다. 기업이 당면할 사법리스크를 미리 진단하고 해결책을 제시하는 기업의 법률백신(Law+Vax)이 되겠습니다. "
        />
        <IntroCard
          imgSrc={introImg4}
          title="Law + Vaccine"
          text={
            <>
              법무법인 LawVax는 검찰 및 법원 등에서 오랜 기간
              기업∙금융∙첨단(IT) 수사나 재판 경험을 쌓아온 변호사들이 중심이
              되어 2022년 2월 설립한 로펌입니다. 수사대응 및 자문, 기업감사 및
              내부통제, 가상화폐 관련 이슈 등에서 굵직한 수행사례를 이어오고
              있습니다.
              <br />
              <br />
              LawVax는 기업이 당변한 법률(Law) 리스크를 사전에 예방하고 해소하는
              백신(Vax∙Vaccine)이 되겠다는 뜻입니다. 동시에 Vax는 ‘가상(Virtual)
              자산(Asset) 거래(eXchange)’의 줄임말이기도
              합니다. 기업∙금융∙첨단(IT) 분야에 관한 수준 높은 법률 서비스를
              제공하겠다는 자신감의 담은 표현입니다.
              <br />
              <br />
              기술과 산업환경이 빠르게 변화하는 기업과 개인이 당면하는 법률
              리스크도 증가하고 있습니다. LawVax는 풍부한 경험과 노하우를
              바탕으로 외뢰인에게 최선의 해결책을 제시하는 동반자가 되겠습니다.
            </>
          }
        />
      </section>
    </div>
  );
}

export default Introduction;

const container = css`
  position: relative;
`;

const title_wrap = css`
  padding: 172px 16px 0 16px;
`;

const title_under = css`
  font-size: 42px;
  font-weight: 400;
  font-family: "Prata";
  color: #f1f0f0;
  padding: 0 14px;

  @media (max-width: 420px) {
    font-size: 38px;
  }

  @media (max-width: 390px) {
    font-size: 34px;
  }
`;

const gradient = css`
  position: absolute;
  top: 364px;
  width: 100%;
  height: 218px;
  z-index: -1;

  background: linear-gradient(
    to bottom,
    #fafafa 0%,
    rgba(250, 250, 250, 0) 100%
  );
`;

const card_list = css`
  padding: 16px 15px 138px 16px;
  z-index: 2;
`;
