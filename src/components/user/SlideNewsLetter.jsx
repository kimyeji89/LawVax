/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
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
];

function SlideNewsLetter() {
  return (
    <Swiper
      //   spaceBetween={70}
      //   slidesPerView={2}
      loop={true}
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
  border: 1px solid pink;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  overflow: hidden;
  padding: 20px 16px;

  .swiper-pagination-progressbar {
    position: absolute;
    bottom: 0px;
    left: 0;
    // max-width: 398px;
    height: 2px;
    background: var(--mono-gray-line-1);
    margin-top: 256px;
  }

  .swiper-pagination-progressbar-fill {
    background: var(--point-color-2);
  }
`;
