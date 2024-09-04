/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import lawyerImg from "@images/lawyer-img.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const slides = [
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
];

function SlideProfessional() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Swiper
      slidesPerView={3}
      loop={true}
      modules={[Pagination, Autoplay]}
      pagination={{ type: "progressbar" }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
      css={swiperStyle}
    >
      {slides.map((slide, index) => (
        <div css={swiper_wrap}>
          <SwiperSlide key={index}>
            <div
              css={
                index === currentIndex
                  ? activeSlideContainer
                  : inactiveSlideContainer
              }
            >
              <img
                src={slide.image}
                alt={`${slide.name} 사진`}
                css={index === currentIndex ? colorImage : grayscaleImage}
              />
              {index === currentIndex && (
                <div css={info_container}>
                  <div>
                    <p css={info_title}>{slide.title}</p>
                    <h2 css={info_name}>{slide.name}</h2>
                  </div>
                  <div css={info_previous}>
                    <span css={info_icon}>전</span>
                    <span css={info_prev_job}>{slide.previousPosition}</span>
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        </div>
      ))}
    </Swiper>
  );
}

export default SlideProfessional;

const swiperStyle = css`
  width: 100%;
  margin: 0 auto;
  height: 168px;

  .swiper-pagination-progressbar {
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--mono-gray-line-1);
    margin-top: 166px;
  }

  .swiper-pagination-progressbar-fill {
    background: var(--point-color-2);
  }

  .swiper-slide.swiper-slide-next {
    width: 72px !important;
    margin-right: 16px;

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
    width: 205px !important;
    display: flex !important;
    flex-direction: row !important;
    margin-right: 26px;

    @media (max-width: 400px) {
      margin-right: 0px;
    }
  }
`;

const swiper_wrap = css`
  display: flex;
  justify-content: end;
  align-items: end;
`;

const activeSlideContainer = css`
  width: 205px;
  display: flex;
  flex-direction: row;
`;

const inactiveSlideContainer = css`
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
