/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation } from "swiper/modules";
import ellipse from "@images/news-ellipse-28.png";
import { ReactComponent as ForwardIcon } from "@images/chevron-forward-outline.svg";
import { ReactComponent as NextIcon } from "@images/chevron-next-outline.svg";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

function SlideNewsCard({ slideData }) {
  return (
    <>
      <div css={news_slide}>
        <div css={new_slide_img}>
          <img src={ellipse} css={ellipse_1} alt="ellipse_1" />
          <img src={slideData.image} css={ellipse_2} alt="ellipse_2" />
        </div>
        <div css={news_slide_des}>
          <p
            css={slide_text}
            dangerouslySetInnerHTML={{ __html: slideData.title }}
          ></p>
          <Link to={slideData.link} css={slide_link}>
            자세히 보기
          </Link>
        </div>
      </div>
    </>
  );
}

function SlideNews({ slideDataArr }) {
  const swiperRef = useRef(null);

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
      <Swiper
        ref={swiperRef}
        effect={"fade"}
        modules={[EffectFade, Pagination, Navigation]}
        pagination={{
          type: "fraction",
          clickable: true,
        }}
        loop={true}
        css={[customPagination]}
        className="fadeSwiper"
      >
        {slideDataArr &&
          slideDataArr.map((slideData, idx) => (
            <SwiperSlide key={"slide" + idx}>
              <SlideNewsCard slideData={slideData} />
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
    </>
  );
}

const news_slide = css`
  position: relative;
  display: flex;
  height: fit-content;
  background-color: var(--mono-white);
`;

const new_slide_img = css`
  display: flex;
  align-items: end;
  height: 178px;
  @media (max-width: 420px) {
    height: 166px;
  }

  @media (max-width: 375px) {
    height: 152px;
  }
`;

const ellipse_1 = css`
  width: 178px;
  height: 178px;
  margin-right: 54px;
  @media (max-width: 420px) {
    width: 166px;
    height: 166px;
    margin-right: 44px;
  }

  @media (max-width: 375px) {
    width: 152px;
    height: 152px;
    margin-right: 36px;
  }
`;

const ellipse_2 = css`
  position: absolute;
  left: 66px;
  bottom: 0;
  width: 150px;
  height: 150px;

  @media (max-width: 420px) {
    width: 130px;
    height: 130px;
  }

  @media (max-width: 375px) {
    width: 120px;
    height: 120px;
    left: 58px;
  }
`;

const news_slide_des = css`
  margin-top: 81px;

  @media (max-width: 420px) {
    width: 120px;
  }

  @media (max-width: 375px) {
    width: 90px;
  }
`;

const customPagination = css`
  .swiper-pagination-fraction {
    width: 111px;
    position: absolute;
    top: 51px;
    left: calc(50% + 32px);
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 28px;
    font-size: 14px;
    line-height: 28px;
    color: var(--point-color-2);
    @media (max-width: 420px) {
      left: calc(50% + 16px);
    }
  }
  .swiper-pagination-fraction .swiper-pagination-current {
    color: var(--point-color-2);
  }
  .swiper-pagination-fraction .swiper-pagination-total {
    color: var(--point-color-2);
  }
`;

const customNavigation = css`
  position: absolute;
  width: 111px;
  height: 28px;
  display: flex;
  justify-content: space-between;
  padding: 2px 0;
  box-sizing: border-box;
  top: 51px;
  left: calc(50% + 32px);
  transform: translateY(-50%);
  z-index: 10;
  @media (max-width: 420px) {
    left: calc(50% + 16px);
  }
  button {
    padding: 0;
    margin: 0;
    background-color: transparent;
    width: 24px;
    height: 24px;
  }
`;

const slide_text = css`
  margin: 0 0 26px 0;
  width: 164px;
  height: 48px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: var(--mono-gray-txt-dark);

  @media (max-width: 375px) {
    width: 150px;
    font-size: 14px;
  }
`;

const slide_link = css`
  font-size: 14px;
  font-weight: 500;
  color: var(--mono-gray-txt-light);
  text-decoration: underline var(--mono-gray-txt-light);
`;

export { SlideNews };
