/** @jsxImportSource @emotion/react */
import { useState, useRef } from "react";
import { css } from "@emotion/react";
import lawyerImg from "@images/lawyer-img.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const LeadLawyerArr = [
  {
    name: "홍길동",
    title: "대표 변호사",
    previousPosition: "국세청장",
    image: lawyerImg,
  },
  {
    name: "김철수",
    title: "대표 변호사",
    previousPosition: "국세청장",
    image: lawyerImg,
  },
  {
    name: "이영희",
    title: "대표 변호사",
    previousPosition: "국세청장",
    image: lawyerImg,
  },
  {
    name: "홍길동",
    title: "대표 변호사",
    previousPosition: "국세청장",
    image: lawyerImg,
  },
  {
    name: "김철수",
    title: "대표 변호사",
    previousPosition: "국세청장",
    image: lawyerImg,
  },
];

const allLawyerArr = [
  {
    name: "홍길동",
    title: "변호사",
    previousPosition: "국세청장",
    image: lawyerImg,
  },
  {
    name: "김철수",
    title: "변호사",
    previousPosition: "국세청장",
    image: lawyerImg,
  },
  {
    name: "이영희",
    title: "변호사",
    previousPosition: "국세청장",
    image: lawyerImg,
  },
  {
    name: "홍길동",
    title: "변호사",
    previousPosition: "국세청장",
    image: lawyerImg,
  },
  {
    name: "김철수",
    title: "변호사",
    previousPosition: "국세청장",
    image: lawyerImg,
  },
  {
    name: "이영희",
    title: "변호사",
    previousPosition: "국세청장",
    image: lawyerImg,
  },
  {
    name: "홍길동",
    title: "변호사",
    previousPosition: "국세청장",
    image: lawyerImg,
  },
  {
    name: "김철수",
    title: "변호사",
    previousPosition: "국세청장",
    image: lawyerImg,
  },
  {
    name: "이영희",
    title: "변호사",
    previousPosition: "국세청장",
    image: lawyerImg,
  },
  {
    name: "홍길동",
    title: "변호사",
    previousPosition: "국세청장",
    image: lawyerImg,
  },
];

function SlideAllLawyer({ allLawyerArr }) {
  return (
    <Swiper
      effect={"fade"}
      modules={[EffectFade, Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="fadeSwiper"
      css={allLawyerCtn}
    >
      {allLawyerArr &&
        allLawyerArr.map((slideData, idx) => (
          <SwiperSlide key={"slide" + idx}>
            <div css={allLawyerSlideContainer}>
              <img
                src={slideData.image}
                alt={`${slideData.name} 사진`}
                css={colorImage}
              />
              <div css={info_container}>
                <div>
                  <p css={info_title}>{slideData.title}</p>
                  <h2 css={info_name}>{slideData.name}</h2>
                </div>
                <div css={info_previous}>
                  <span css={info_icon}>전</span>
                  <span css={info_prev_job}>{slideData.previousPosition}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

function SlideLeadLawyer({ LeadLawyerArr }) {
  const [progress, setProgress] = useState(0);
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={26}
        loop={true}
        modules={[Pagination]}
        css={leadLawyerSlide}
        onSwiper={(swiper) => {
          swiper.on("slideChange", () => {
            const progress = (swiper.realIndex + 1) / swiper.slides.length;
            setProgress(progress * 100);
          });
        }}
      >
        {LeadLawyerArr.map((slide, index) => (
          <div css={swiper_wrap}>
            <SwiperSlide key={index}>
              <div css={leadLawyerSlideContainer}>
                <img
                  src={slide.image}
                  alt={`${slide.name} 사진`}
                  css={grayscaleImage}
                />
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
      <div css={customProgressBar}>
        <div css={[progressBarFill, { width: `${progress}%` }]}></div>
      </div>
    </>
  );
}

function SlideProfessional() {
  return (
    <div css={professionalSlideCtn}>
      <SlideAllLawyer allLawyerArr={allLawyerArr} />
      <SlideLeadLawyer LeadLawyerArr={LeadLawyerArr} />
    </div>
  );
}

export default SlideProfessional;

const professionalSlideCtn = css`
  position: relative;
  width: 100%;
  display: flex;
  gap: 26px;
`;

const leadLawyerSlide = css`
  margin: 0 auto;
  height: 168px;

  .swiper-slide.swiper-slide-next {
    @media (max-width: 400px) {
      margin-right: 4px;
    }
  }

  .swiper-slide {
    width: 72px;
    float: right;
    height: 150px;
    display: flex;
    padding: 0 0 16px 0;
  }

  .swiper-slide.swiper-slide-active {
    display: flex !important;
    flex-direction: row !important;
    margin-right: 26px;

    @media (max-width: 400px) {
      margin-right: 0px;
    }
  }

  @media (max-width: 450px) {
    width: 430px;
  }
`;

const customProgressBar = css`
  position: absolute;
  bottom: 0px;
  top: 166px;
  left: 0;
  right: 0;
  width: 100%;
  height: 2px;
  background: var(--mono-gray-line-1);
  z-index: 1;
`;

const progressBarFill = css`
  height: 2px;
  background: var(--point-color-2);
  @media (min-width: 730px) {
    display: none;
  }
`;

const swiper_wrap = css`
  display: flex;
  justify-content: end;
  align-items: end;
`;

const allLawyerCtn = css`
  width: 100%;
  max-width: 205px;
  min-width: 205px;
  height: 150px;
  background-color: transparent;
  .swiper-slide {
    height: 150px;
  }
`;

const allLawyerSlideContainer = css`
  width: 100%;
  max-width: 205px;
  min-width: 205px;
  display: flex;
  flex-direction: row;
  background-color: var(--mono-white);
`;

const leadLawyerSlideContainer = css`
  float: right;
  width: 72px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

const colorImage = css`
  width: 108px;
  height: 150px;
  padding: 0 8px 0 0;

  @media (max-width: 375px) {
    width: 108px;
    height: 150px;
  }
`;

const grayscaleImage = css`
  width: 72px;
  height: 100px;
  filter: grayscale(100%);

  @media (max-width: 400px) {
    width: 68px;
    height: 96px;
  }

  @media (max-width: 375px) {
    width: 64px;
    height: 92px;
  }
`;

const info_container = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const info_title = css`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: var(--mono-gray-txt-dark);

  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

const info_name = css`
  font-size: 24px;
  font-weight: 700;
  line-height: 26px;
  color: var(--point-color-2);

  @media (max-width: 400px) {
    font-size: 20px;
  }
`;

const info_previous = css`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 86px;

  @media (max-width: 400px) {
    width: 76px;
  }
`;

const info_icon = css`
  width: 24px;
  height: 24px;
  border-radius: 8px;
  border: 1px solid var(--mono-gray-txt-light);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: var(--mono-gray-txt-light);
  box-sizing: border-box;

  @media (max-width: 400px) {
    width: 20px;
    height: 20px;
    font-size: 11px;
  }
`;

const info_prev_job = css`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;
