import React from 'react'
import SwiperCore, { EffectFade, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([EffectFade, Autoplay])

function sortArray(arr, prop) {
  return arr.sort((a, b) => a[prop] - b[prop]);
}

const Slider = ({ slideData }) => {

  sortArray(slideData, 'order');

  const slides = []
  slideData.forEach(data => {
    slides.push(
      <SwiperSlide key={data.id} tag="li">
        <img className="w-full" src={data.image.asset.fluid.src} alt={data.title} />
      </SwiperSlide>
    )
  })

  return (
    <Swiper className="hidden sm:block" id="main" tag="section" wrapperTag="ul"
      loop={true}
      speed={2000}
      effect="fade"
      autoplay={{ delay: 4000 }}
    >
      {slides}
    </Swiper>
  )
}
export default Slider