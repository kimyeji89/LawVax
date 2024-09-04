/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import SlideCard from "../../components/user/SlideCard";

const slideData = [
  {
    category: "회계 법률",
    title: "법률AI' 거스를 수 없는 대세… 변호사 대체 아닌 '협업'으로",
    date: "2024.07.01",
  },
  {
    category: "회계 법률",
    title: "법률AI' 거스를 수 없는 대세… 변호사 대체 아닌 '협업'으로",
    date: "2024.07.01",
  },
  {
    category: "회계 법률",
    title: "법률AI' 거스를 수 없는 대세… 변호사 대체 아닌 '협업'으로",
    date: "2024.07.01",
  },
  {
    category: "회계 법률",
    title: "법률AI' 거스를 수 없는 대세… 변호사 대체 아닌 '협업'으로",
    date: "2024.07.01",
  },
  {
    category: "회계 법률",
    title: "법률AI' 거스를 수 없는 대세… 변호사 대체 아닌 '협업'으로",
    date: "2024.07.01",
  },
  {
    category: "회계 법률",
    title: "법률AI' 거스를 수 없는 대세… 변호사 대체 아닌 '협업'으로",
    date: "2024.07.01",
  },
  {
    category: "회계 법률",
    title: "법률AI' 거스를 수 없는 대세… 변호사 대체 아닌 '협업'으로",
    date: "2024.07.01",
  },
  {
    category: "회계 법률",
    title: "법률AI' 거스를 수 없는 대세… 변호사 대체 아닌 '협업'으로",
    date: "2024.07.01",
  },
  {
    category: "회계 법률",
    title: "법률AI' 거스를 수 없는 대세… 변호사 대체 아닌 '협업'으로",
    date: "2024.07.01",
  },
];

function SlideNewsLetter() {
  return (
    <Swiper
      effect="fade"
      loop={true}
      spaceBetween={16}
      slidesPerView={"auto"}
      modules={[Pagination]}
      pagination={{ type: "progressbar" }}
      css={swiperStyle}
    >
      {slideData.map((slide, index) => (
        <SwiperSlide key={index}>
          <SlideCard
            category={slide.category}
            title={slide.title}
            date={slide.date}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SlideNewsLetter;

const swiperStyle = css`
  width: 100%;
  max-width: 1280px;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  padding: 0 0 20px 0;
  .swiper-slide {
    width: 218px;
  }
  .swiper-pagination-progressbar {
    position: absolute;
    top: calc(100% - 2px);
    bottom: 0px;
    left: 0;
    height: 2px;
    background: var(--mono-gray-line-1);
  }

  .swiper-pagination-progressbar-fill {
    background: var(--point-color-2);
  }

  @media (max-width: 1280px) {
    .swiper-pagination-progressbar {
      width: calc(100% - 16px);
    }
  }
`;
