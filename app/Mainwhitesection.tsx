"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import styles from "./page.module.css";
import "swiper/css";
import "swiper/css/navigation";
interface SlideItem { id: number; bg: string; bt: string; mt: string; bc: string }
interface CardItem  { id: number; bg: string; bt: string; mt: string; bc: string; author: string }
const slides: SlideItem[] = [
  { id: 1,  bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_45-min-1024x508.jpg", bt: "dessert",    mt: "The best street foods around the world you must try ...", bc: "#5e2bff" },
  { id: 2,  bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_28-min-1024x508.jpg", bt: "food",       mt: "Learn how to create a vibrant vegetable stir fry",        bc: "#00b5ed" },
  { id: 3,  bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_30-min-1024x508.jpg", bt: "vegetables", mt: "Discover a fresh herb roasted vegetable tray that ...",    bc: "#54bd05" },
  { id: 4,  bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/10/post_33-min-1024x508.jpg", bt: "bakery",     mt: "Discover a simple creamy pasta dish that fills ...",      bc: "#ff3a3a" },
  { id: 5,  bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_22-min.jpg",          bt: "dinner",     mt: "A warm and comforting homemade potato soup recipe",       bc: "#f27100" },
  { id: 6,  bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_26-min.jpg",          bt: "beverages",  mt: "A flavorful chicken curry that balances tender meat ...",  bc: "#348aa7" },
  { id: 7,  bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_31-min.jpg",          bt: "pizza",      mt: "Make a sweet and soft cinnamon roll breakfast that ...",   bc: "#f69c00" },
  { id: 8,  bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_27-min.jpg",          bt: "dessert",    mt: "A delicious baked salmon recipe that honors gentle ...",   bc: "#5e2bff" },
  { id: 9,  bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_32-min.jpg",          bt: "breakfast",  mt: "A mellow mushroom soup with earthy notes and soft ...",    bc: "#0073ff" },
  { id: 10, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_20-min.jpg",          bt: "dessert",    mt: "A delicious baked salmon recipe that honors gentle ...",   bc: "#5e2bff" },
];
const cards: CardItem[] = [
  { id: 11, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_22-min-768x381.jpg",  bt: "beverages",  mt: "A flavorful chicken curry that balances tender", bc: "#348aa7", author: "matt rosnor" },
  { id: 12, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_28-min-1024x508.jpg", bt: "food",       mt: "Learn how to create a vibrant vegetable stir fry", bc: "#00b5ed", author: "matt rosnor" },
  { id: 13, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_30-min-1024x508.jpg", bt: "vegetables", mt: "Discover a fresh herb roasted vegetable tray",     bc: "#54bd05", author: "matt rosnor" },
  { id: 14, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/10/post_33-min-1024x508.jpg", bt: "bakery",     mt: "Discover a simple creamy pasta dish",             bc: "#ff3a3a", author: "matt rosnor" },
  { id: 15, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_45-min-1024x508.jpg", bt: "dessert",    mt: "The best street foods around the world",          bc: "#5e2bff", author: "matt rosnor" },
  { id: 16, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_31-min.jpg",          bt: "pizza",      mt: "Make a sweet and soft cinnamon roll breakfast",   bc: "#f69c00", author: "matt rosnor" },
];
function MetaRow({ author, views, white = false }: { author: string; views: number; white?: boolean }) {
  return (
    <ul className="d-flex justify-content-between align-items-center list-unstyled flex-wrap mb-0"
      style={{ gap: 8, fontSize: 14, color: white ? "white" : "#69747C", fontWeight: 400 }}>
      <li className="text-capitalize">by {author}</li>
      <li><i className="fa-regular fa-eye me-1" />{views} <span>View</span></li>
    </ul>
  );
}
export default function Mainwhitesection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [viewCounts, setViewCounts] = useState<Record<number, number>>({});
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const uniqueIds = [...new Set([...slides.map((d) => d.id), ...cards.map((c) => c.id)])];
        const fetchViews = async () => {
          const results = await Promise.all(uniqueIds.map((id) => fetch(`/api/views/${id}`).then((r) => r.json())));
          const counts: Record<number, number> = {};
          results.forEach((data, i) => { counts[uniqueIds[i]] = data.views; });
          setViewCounts(counts);
        };
        fetchViews();
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  const handleViewClick = async (id: number) => {
    const res  = await fetch(`/api/views/${id}`, { method: "POST" });
    const data = await res.json();
    setViewCounts((prev) => ({ ...prev, [id]: data.views }));
  };
  return (
    <div ref={sectionRef} className={`${styles["featured-section"]} d-flex flex-column justify-content-center align-items-center`}>
      <div className={`${styles["featured-section__swiper-wrap"]} d-flex justify-content-center align-items-center`}>
        <div className={styles["swiper-wrap"]}>
          <button className={`custom-prev-btn ${styles["swiper-wrap__nav-btn"]} ${styles["swiper-wrap__nav-btn--prev"]}`}>
            <i className="fa-solid fa-chevron-left" style={{ fontSize: 14 }} />
          </button>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{ prevEl: ".custom-prev-btn", nextEl: ".custom-next-btn" }}
            spaceBetween={30}
            loop
            speed={600}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              0:    { slidesPerView: 1 },
              804:  { slidesPerView: 2 },
              992:  { slidesPerView: 3 },
              1365: { slidesPerView: 4 },
            }}
          >
            {slides.map((item) => (
              <SwiperSlide key={item.id}>
                <Link href={`/${item.bt}`} onClick={() => handleViewClick(item.id)} style={{ textDecoration: "none" }}>
                  <div
                    className={styles["slide-card"]}
                    style={{ backgroundImage: `url(${item.bg})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: 10, position: "relative", color: "white" }}
                  >
                    <div style={{ position: "absolute", bottom: 0, left: 0, padding: "0 30px 30px 35px" }}>
                      <button className={styles["btn-pill"]} style={{ textTransform: "uppercase", marginBottom: 10, backgroundColor: item.bc }}>{item.bt}</button>
                      <h4 className={`${styles["slide-card__title"]} text-white`}>{item.mt}</h4>
                      <ul className="d-flex align-items-center list-unstyled flex-wrap mb-0" style={{ gap: 8, fontSize: 14, color: "white", fontWeight: 400 }}>
                        <li className="text-capitalize">by matt rosnor</li>
                        <li><i className="fa-regular fa-eye me-1" />{viewCounts[item.id] ?? 0} <span>View</span></li>
                        <li className={styles["hide-xl"]}><i className="fa-regular fa-calendar me-1" /><span>Nov 4, 2025</span></li>
                      </ul>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className={`custom-next-btn ${styles["swiper-wrap__nav-btn"]} ${styles["swiper-wrap__nav-btn--next"]}`}>
            <i className="fa-solid fa-chevron-right" style={{ fontSize: 14 }} />
          </button>
        </div>
      </div>
      <div className={`${styles["featured-section__cards-wrap"]} d-flex flex-column justify-content-center align-items-center`}>
        <div className="container">
          <div className="d-flex flex-column gap-4 pb-5">
            <div className={styles["featured-section__heading"]} style={{ paddingTop: 60, paddingBottom: 20 }}>
              <div className="d-flex align-items-center gap-3 w-100">
                <div className={styles["divider__diamond"]} />
                <div className={styles["divider__line"]} />
                <h2 className="text-uppercase mb-0" style={{ whiteSpace: "nowrap", fontWeight: 700, color: "#121213" }}>featured recipes</h2>
                <div className={styles["divider__line"]} />
                <div className={styles["divider__diamond"]} />
              </div>
            </div>
            <div className={styles["featured-section__grid"]}>
              <div className="row g-3">
                {cards.map((item) => (
                  <div className="col-xl-4 col-md-6 col-12" key={item.id}>
                    <Link href={`/${item.bt}`} onClick={() => handleViewClick(item.id)} style={{ textDecoration: "none", color: "inherit" }}>
                      <div className={styles["post-card"]}>
                        <div className={styles["post-card__img-col"]}>
                          <img src={item.bg} alt={item.bt} loading="lazy" className={styles["post-card__img"]} />
                        </div>
                        <div className={styles["post-card__body"]}>
                          <button className={styles["badge-pill"]} style={{ backgroundColor: item.bc }}>{item.bt}</button>
                          <h6 className="text-uppercase mt-1">{item.mt}</h6>
                          <MetaRow author={item.author} views={viewCounts[item.id] ?? 0} />
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}