/** @jsxImportSource @emotion/react */
import { useState, useRef } from "react";
import { css } from "@emotion/react";
import professionalLeadLawyerData from "@data/professionalLeadLawyerData.json";
import professionalAllLawyerData from "@data/professionalAllLawyerData.json";
import professionalData from "@data/professionalData.json";
import moreRec from "@images/rectangle-blue-wide.svg";
import { ReactComponent as ForwardIcon } from "@images/chevron-forward-outline.svg";
import { ReactComponent as NextIcon } from "@images/chevron-next-outline.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

function SlideAllLawyerMain({ allLawyerArr }) {
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
          <SwiperSlide key={"slideAllLawyer" + idx}>
            <div css={allLawyerSlideContainer}>
              <img
                src={slideData.image}
                alt={`${slideData.name} 사진`}
                css={colorImage}
              />
              <div css={mainInfoCtn}>
                <div>
                  <p css={mainInfoTitle}>{slideData.title}</p>
                  <h2 css={mainInfoNameKR}>{slideData.name}</h2>
                </div>
                <div css={mainInfoPre}>
                  <span css={mainInfoIcon}>전</span>
                  <span css={mainInfoPrePosition}>
                    {slideData.previousPosition}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

function SlideLeadLawyerMain({ LeadLawyerArr }) {
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
        {LeadLawyerArr &&
          LeadLawyerArr.map((slide, idx) => (
            <SwiperSlide key={`slideLeadLawyer${idx}`}>
              <div css={leadLawyerSlideContainer}>
                <img
                  src={slide.image}
                  alt={`${slide.name} 사진`}
                  css={grayscaleImage}
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div css={customProgressBar}>
        <div css={[progressBarFill, { width: `${progress}%` }]}></div>
      </div>
    </>
  );
}

function SlideProfessionalMain() {
  return (
    <div css={professionalSlideCtn}>
      <SlideAllLawyerMain allLawyerArr={professionalAllLawyerData} />
      <SlideLeadLawyerMain LeadLawyerArr={professionalLeadLawyerData} />
    </div>
  );
}

function SlideProfessional() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <>
      <div css={slideProfessionalCtn}>
        <Swiper
          ref={swiperRef}
          slidesPerView={"auto"}
          loop={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSlideChange={handleSlideChange}
          css={slideProfessionalWrapper}
        >
          {professionalData.map((slideData, idx) => (
            <SwiperSlide key={"slideProfessional" + idx}>
              <div css={slideProfessional}>
                <img
                  src={slideData.image}
                  alt="professional"
                  css={slideProfessionalImg}
                />
                <div css={infoCtn}>
                  <div>
                    <p css={infoTitle}>{slideData.position}</p>
                    <div css={infoName}>
                      <p css={infoNameKR}>{slideData.nameKR}</p>
                      <p css={infoNameCH}>{"(" + slideData.nameCH + ")"}</p>
                    </div>
                    <div css={infoPre}>
                      <span css={infoIcon}>전</span>
                      <span css={infoPrePosition}>{slideData.prePosition}</span>
                    </div>
                  </div>

                  <div css={more_btn}>
                    <p css={more_p}>view more</p>
                    <img src={moreRec} css={more_bg} alt="view more" />
                  </div>
                </div>
                <p css={nameInitial}>{slideData.nameInitial}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="customNavigation" css={customNavigation}>
          <button onClick={handlePrev} className="swiper-button-prev">
            <ForwardIcon />
          </button>
          <button onClick={handleNext} className="swiper-button-next">
            <NextIcon />
          </button>
        </div>
      </div>
      <div css={introduceCtn}>
        <p css={introduceText}>{professionalData[currentIndex].introduce}</p>
      </div>
    </>
  );
}

export { SlideProfessionalMain, SlideProfessional };

/* main(home) page */

/* all lawyer */

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

const mainInfoCtn = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const mainInfoTitle = css`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: var(--mono-gray-txt-dark);

  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

const mainInfoNameKR = css`
  font-size: 24px;
  font-weight: 700;
  line-height: 26px;
  color: var(--point-color-2);

  @media (max-width: 400px) {
    font-size: 20px;
  }
`;

const mainInfoPre = css`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 86px;

  @media (max-width: 400px) {
    width: 76px;
  }
`;

const mainInfoIcon = css`
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

const mainInfoPrePosition = css`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

/* lead lawyer */

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

const leadLawyerSlideContainer = css`
  float: right;
  width: 72px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

/* professional page */

const infoIcon = css`
  ${mainInfoIcon};
  width: 20px;
  height: 20px;
  font-size: 12px;
  line-height: 12px;
  text-align: center;
`;

const infoPrePosition = css`
  ${mainInfoPrePosition};
  font-size: 14px;
  line-height: 14px;
`;

const infoPre = css`
  ${mainInfoPre};
  width: fit-content;
`;

const slideProfessionalCtn = css`
  position: relative;
`;

const infoNameKR = css`
  ${mainInfoNameKR};
  font-size: 20px;
`;

const infoTitle = css`
  ${mainInfoTitle};
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  margin-bottom: 10px;
`;

const infoName = css`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const infoNameCH = css`
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  color: var(--mono-gray-txt-light);
`;

const slideProfessionalWrapper = css`
  width: 100%;
  height: 198px;
  background-color: #f9f9f9;
  .swiper-slide {
    display: flex;
    algin-items: bottom;
    justify-content: center;
    padding-top: 24px;
    box-sizing: border-box;
  }
`;

const slideProfessional = css`
  width: 297px;
  display: flex;
  gap: 35px;
  align-items: bottom;
  position: relative;
`;

const professionalSlideCtn = css`
  position: relative;
  width: 100%;
  display: flex;
  gap: 26px;
`;

const slideProfessionalImg = css`
  z-index: 1;
`;
const infoCtn = css`
  padding-bottom: 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
`;

const more_btn = css`
  cursor: pointer;
  display: flex;
  position: relative;
  z-index: 1;
  align-items: bottom;
  justify-content: center;
  text-align: center;
  width: 78px;
  height: 14px;
  text-align: center;
`;

const more_p = css`
  display: block;
  width: 70px;
  height: 14px;
  font-size: 14px;
  font-family: "Prata", serif;
  color: var(--point-color-2);
`;

const more_bg = css`
  position: absolute;
  top: 7px;
  bottom: 0;
  width: 78px;
  height: 7px;
`;

const nameInitial = css`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 100px;
  font-weight: 700;
  line-height: 100px;
  color: var(--mono-white);
  z-index: 0;
`;

const customNavigation = css`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: calc(100% - 32px);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  button {
    padding: 0;
    margin: 0;
    background-color: transparent;
    width: 24px;
    height: 24px;
  }
`;

const introduceCtn = css`
  padding: 12px 16px;
  box-sizing: border-box;
  width: 100%;
  height: 120px;
  background-color: var(--mono-white);
`;

const introduceText = css`
  font-weight: 400;
  line-height: 24px;
  color: var(--mono-gray-icon);
`;
