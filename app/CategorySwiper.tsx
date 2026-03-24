"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
const categoryItems: string[] = [
  "Home", "Food", "Travel", "Health", "Technology",
  "Sport", "Music", "Nature", "Fashion", "Science",
];
export default function CategorySwiper() {
  return (
    <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
      <div style={{ flex: 1, overflow: "hidden", minWidth: 0 }}>
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          breakpoints={{
          0: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  576: {
    slidesPerView: 5,
    spaceBetween: 10,
  },
  1025: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
          }}
          loop={true}
          style={{ width: "100%" }}
        >
          {categoryItems.map((item) => (
            <SwiperSlide
              key={item}
              style={{
                display:        "flex",
                alignItems:     "center",
                justifyContent: "center",
                borderLeft:     "1px solid #FFFFFF33",
              }}
            >
              <Link
                href={`/${item.toLowerCase()}`}
                style={{
                  color:          "#A0A0A1",
                  textDecoration: "none",
                  fontWeight:     500,
                  whiteSpace:     "nowrap",
                  fontSize:       14,
                }}
              >
                {item}
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div style={{ display: "flex", gap: 4, marginLeft: 8, flexShrink: 0 }}>
        <button className="custom-prev" style={{ background: "none", border: "none", color: "white", cursor: "pointer", padding: 0, fontSize: 12, fontWeight: 500 }}>❮</button>
        <button className="custom-next" style={{ background: "none", border: "none", color: "white", cursor: "pointer", padding: 0, fontSize: 12, fontWeight: 500 }}>❯</button>
      </div>
    </div>
  );
}