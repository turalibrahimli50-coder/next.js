"use client";
import Headofpage from "./Headofpage";
import { NextRequest, NextResponse } from "next/server";
import { useState, useEffect } from "react";
import "swiper/css/navigation";
import "swiper/css";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Autoplay} from "swiper/modules";
export default function Home() {


useEffect(() => {
  const fetchViews = async () => {
    const results = await Promise.all(
      divs.map(item =>
        fetch(`/api/views/${item.id}`).then(res => res.json())
      )
    )

    const counts: Record<number, number> = {}
    results.forEach((data, index) => {
      counts[divs[index].id] = data.views
    })

    setViewCounts(counts)
  }

  fetchViews()
}, [])

const [viewCounts, setViewCounts] = useState<Record<number, number>>({});
const handleViewClick = async (id: number) => {
  const res = await fetch(`/api/views/${id}`, { method: "POST" });
  const data = await res.json();
  setViewCounts(prev => ({ ...prev, [id]: data.views }));
};
const divs = [
  {id:1,bg:"https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_45-min-1024x508.jpg",bt:"dessert",mt:"The best street foods around the world you must try ...",bc:"#5e2bff"},
  {id:2,bg:"https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_28-min-1024x508.jpg",bt:"food",mt:"Learn how to create a vibrant vegetable stir fry",bc:"#00b5ed"},
  {id:3,bg:"https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_30-min-1024x508.jpg",bt:"vegetables",mt:"Discover a fresh herb roasted vegetable tray that ...",bc:"#54bd05"},
  {id:4,bg:"https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/10/post_33-min-1024x508.jpg",bt:"bakery",mt:"Discover a simple creamy pasta dish that fills ...",bc:"#ff3a3a"},
  {id:5,bg:"https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_22-min.jpg",bt:"dinner",mt:"A warm and comforting homemade potato soup recipe",bc:"#f27100"},
  {id:6,bg:"https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_26-min.jpg",bt:"beverages",mt:"A flavorful chicken curry that balances tender meat ...",bc:"#348aa7"},
  {id:7,bg:"https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_31-min.jpg",bt:"pizza",mt:"Make a sweet and soft cinnamon roll breakfast that ...",bc:"#f69c00"},
  {id:8,bg:"https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_27-min.jpg",bt:"dessert",mt:"A delicious baked salmon recipe that honors gentle ...",bc:"#5e2bff"},
  {id:9,bg:"https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_32-min.jpg",bt:"breakfast",mt:"A mellow mushroom soup with earthy notes and soft ...",bc:"#0073ff"},
  {id:10,bg:"https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_20-min.jpg",bt:"dessert",mt:"A delicious baked salmon recipe that honors gentle ...",bc:"#5e2bff"}
];
const cards = [
  { id: 1, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_22-min-768x381.jpg", bt: "beverages", mt: "A flavorful chicken curry that balances tender", bc: "#348aa7", author: "matt rosnor", date: "Nov 4, 2025" },
  { id: 2, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_28-min-1024x508.jpg", bt: "food", mt: "Learn how to create a vibrant vegetable stir fry", bc: "#00b5ed", author: "matt rosnor", date: "Nov 5, 2025" },
  { id: 3, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_30-min-1024x508.jpg", bt: "vegetables", mt: "Discover a fresh herb roasted vegetable tray", bc: "#54bd05", author: "matt rosnor", date: "Nov 6, 2025" },
  { id: 4, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/10/post_33-min-1024x508.jpg", bt: "bakery", mt: "Discover a simple creamy pasta dish", bc: "#ff3a3a", author: "matt rosnor", date: "Nov 7, 2025" },
  { id: 5, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_45-min-1024x508.jpg", bt: "dessert", mt: "The best street foods around the world", bc: "#5e2bff", author: "matt rosnor", date: "Nov 8, 2025" },
  { id: 6, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_31-min.jpg", bt: "pizza", mt: "Make a sweet and soft cinnamon roll breakfast", bc: "#f69c00", author: "matt rosnor", date: "Nov 9, 2025" },
];
const transparentdivs= [
  { id: 1, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/fd_cat_06-min.jpg", bt: "beverages", ar:"5 Articles"},
  { id: 2, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/fd_cat_03-min.jpg", bt: "breakfast", ar:"5 Articles"},
  { id: 3, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/fd_cat_04-min.jpg", bt: "vegetables", ar:"4 Articles"},
  { id: 4, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/fd_cat_05-min.jpg", bt: "bakery", ar:"3 Articles"},
  { id: 5, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/fd_cat_001-min.jpg", bt: "dessert", ar:"3 Articles"},
  { id: 6, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/fd_cat_02-min.jpg", bt: "pizza", ar:"3 Articles"},

];
const whitedivs=[
    { id: 1, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/fd_cat_06-min.jpg", bt: "food",mt:"Learn how to create a vibrant vegetable stir fry", bc: "#00b5ed", author: "matt rosnor", date: "Nov 4, 2025"},
  { id: 2, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/fd_cat_03-min.jpg", bt: "pizza", mt:"Learn how to make perfect scrambled eggs soft creamy ...", bc: "#f69c00" , author: "matt rosnor", date: "Nov 4, 2025"},
  { id: 3, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/fd_cat_04-min.jpg", bt: "dessert", mt:"A delicious baked salmon recipe that honors gentle ...", bc: "#5e2bff", author: "matt rosnor", date: "Nov 4, 2025"},
 
]
const littlewhitedivsinfo=[
  { id: 1, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_22-min-768x381.jpg", bt: "beverages", mt: "A flavorful chicken curry that balances tender", bc: "#348aa7", author: "matt rosnor", date: "Nov 4, 2025",lp:"Your trusted news source bringing you fast, factual updates from around the globe politics economy science reports."},
  { id: 2, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_28-min-1024x508.jpg", bt: "food", mt: "Learn how to create a vibrant vegetable stir fry", bc: "#00b5ed", author: "matt rosnor", date: "Nov 5, 2025",lp:"Fast accurate and clear news coverage stay updated on political affairs world events technology culture reporting informs."},
  { id: 3, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_30-min-1024x508.jpg", bt: "vegetables", mt: "Discover a fresh herb roasted vegetable tray", bc: "#54bd05", author: "matt rosnor", date: "Nov 6, 2025",lp:"Stay connected with breaking news and insightful reporting. Covering politics business global events, and technology." },
  { id: 4, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/10/post_33-min-1024x508.jpg", bt: "bakery", mt: "Discover a simple creamy pasta dish", bc: "#ff3a3a", author: "matt rosnor", date: "Nov 7, 2025",lp:"Breaking stories, timely updates, and essential insights. Covering politics business, science and global affairs." },
  { id: 5, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_45-min-1024x508.jpg", bt: "dessert", mt: "The best street foods around the world", bc: "#5e2bff", author: "matt rosnor", date: "Nov 8, 2025",lp:"Breaking news simplified your source for reliable coverage of politics, business, global events, and science our concise reports" },
  { id: 6, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_31-min.jpg", bt: "pizza", mt: "Make a sweet and soft cinnamon roll breakfast", bc: "#f69c00", author: "matt rosnor", date: "Nov 9, 2025",lp:"Trusted news reports with clarity and speed. Get updates on politics, world affairs, technology, and business in concise." },
  { id: 7, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_45-min-1024x508.jpg", bt: "dinner", mt: "A warm and comforting homemade potato soup recipe", bc: "#F27100", author: "matt rosnor", date: "Nov 4, 2025",lp:"Your trusted news source bringing you fast, factual updates from around the globe politics economy science reports." },
  { id: 8, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_31-min.jpg", bt: "breakfast", mt: "A mellow mushroom soup with earthy notes and soft warm", bc: "#0173FF", author: "matt rosnor", date: "Nov 4, 2025",lp:"Fast accurate and clear news coverage stay updated on political affairs world events technology culture reporting informs." },

]
  return (
    <>
 <Headofpage/>
<div className={`${styles["main-white-section"]} d-flex flex-column justify-content-center align-items-center`}>
<div className={`${styles["first-part-main-white-section"]} d-flex  justify-content-center align-items-center`}>
     <div className={`${styles["first-part-main-white-section"]} d-flex justify-content-center align-items-center`}>
  <div className={styles["swiper-container"]}>
    <button className={`custom-prev-btn ${styles["swiper-nav-btn"]} ${styles["swiper-nav-left"]}`}>
      <i className="fa-solid fa-chevron-left" style={{ fontSize: "14px" }}></i>
    </button>

    <Swiper
      modules={[Navigation, Autoplay]}
      navigation={{
        prevEl: ".custom-prev-btn",
        nextEl: ".custom-next-btn",
      }}
      spaceBetween={30}
      loop={true}
      speed={600}
      autoplay={{
      delay: 3000,
      disableOnInteraction: false,
  }}
      breakpoints={{
        0: { slidesPerView: 1 },
        804: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
        1365: { slidesPerView: 4 },
      }}
    >
      {divs.map((item, index) => (
        <SwiperSlide key={index}>
          <Link href={`/${item.bt}`} onClick={() => handleViewClick(item.id)} style={{ textDecoration: "none" }}>
            <div
              style={{
                backgroundImage: `url(${item.bg})`,
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
                fontSize: "18px",
                fontWeight: "600",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
              }}
              className={styles["slide-img"]}
            >
              <div style={{ position: "absolute", bottom: "0px", left: "0px", padding: "0px 30px 30px 35px" }}>
                <button className={styles["first-oval-button-blue"]} style={{ textTransform: "uppercase", marginBottom: "10px", backgroundColor: item.bc }}>{item.bt}</button>
                <h4 className={`${styles["white-text-of-every-swiper"]} text-white`}>{item.mt}</h4>
                <ul style={{ display: "flex", justifyContent: "space-between", alignItems: "center", listStyleType: "none", gap: "8px", paddingLeft: "0px", marginLeft: "0px", fontSize: "14px", color: "white", fontWeight: "400" }}>
                  <li style={{ textTransform: "capitalize" }}>by matt rosnor</li>
                  <li><i className="fa-regular fa-eye"></i> {viewCounts[item.id] || 0}<span> View</span></li>
                  <li style={{ gap: "8px" }} className={styles["hidden-li1"]}><i className="fa-regular fa-calendar"></i><span>Nov 4, 2025</span></li>
                </ul>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>

    <button className={`custom-next-btn ${styles["swiper-nav-btn"]} ${styles["swiper-nav-right"]}`}>
      <i className="fa-solid fa-chevron-right" style={{ fontSize: "14px" }}></i>
    </button>
  </div>
</div> 
</div>
<div className={`${styles["second-part-main-white-section"]} d-flex flex-column justify-content-center align-items-center`}>
  <div className="container">
<div style={{display:"flex",gap:"20px",flexDirection:"column",paddingBottom:"80px"}}>
<div className={styles["head-part-of-second-part-main-white-section"]} style={{paddingTop:"60px",paddingBottom:"20px"}}>
  <div style={{ display: "flex", alignItems: "center", gap: "16px", width: "100%" }}>
   <div className={styles["small-blue-romb"]}></div>
    <div className={styles["side-divider"]}></div>
    <h2 className="text-uppercase" style={{ whiteSpace: "nowrap", margin: "0",fontWeight: "700",color:"#121213"}}>
      featured recipes
    </h2>
    <div className={styles["side-divider"]}></div>
    <div className={styles["small-blue-romb"]}></div>
  </div>
</div>
<div className={styles["body-part-of-second-part-main-white-section"]}>
<div className="row g-3">
  {cards.map((item, index) => (
    <div className="col-xl-4 col-md-6 col-12" key={index}>
      <div className={styles["gray-small-div-of-second"]}>
        <div className={styles["left-side-gray-small-div-of-second"]}>
          <Link href={`/${item.bt}`} style={{height:"100%"}} onClick={() => handleViewClick(item.id)}>
            <img src={item.bg} alt={item.bt} className={styles["img-of-gray-small-div-of-second"]} />
          </Link>
        </div>
        <div className={styles["right-side-gray-small-div-of-second"]}>
         <Link href={`/${item.bt}`} onClick={() => handleViewClick(item.id)}><button className={styles["blue-button-right-side-gray-small-div-of-second"]} style={{ backgroundColor: item.bc }}>{item.bt}</button></Link>
         <Link href={`/${item.bt}`} style={{textDecoration:"none",color:"inherit"}} onClick={() => handleViewClick(item.id)}><h6 className="text-uppercase">{item.mt}</h6></Link>
          <ul style={{ display: "flex", justifyContent: "space-between", alignItems: "center", listStyleType: "none", gap: "8px", paddingLeft: "0px", marginLeft: "0px", fontSize: "14px", color: "#69747C", fontWeight: "400",flexWrap:"wrap" }}>
            <li style={{ textTransform: "capitalize" }}>by {item.author}</li>
            <li><i className="fa-regular fa-eye"></i> {viewCounts[item.id] || 0}<span> View</span></li>
            </ul>
        </div>
      </div>
    </div>
  ))}
</div>
</div>
</div>
  </div>
</div>
</div>
<div className={styles["black-div-in-the-middle"]}>
<div className="container">
<div className="d-flex flex-column justify-content-center align-items-center" style={{gap:"30px"}}>
<div className={`${styles["header-part-of-black-div-in-the-middle"]} d-flex  justify-content-center align-items-center`}>
<div className={`${styles["h2-of-header-part-of-black-div-in-the-middle"]} d-flex flex-column justify-content-center align-items-start`} >
<h2 style={{color:"white"}}>Explore Categories</h2>
</div>
<div className={`${styles["lines-of-header-part-of-black-div-in-the-middle"]} d-flex justify-content-center align-items-center`}>
<div className={styles["small-blue-romb"]}></div>
<div className={styles["side-divider-black"]}></div>
<div className={styles["small-blue-romb"]}></div>
</div>
<div className={`${styles["writings-of-header-part-of-black-div-in-the-middle"]} d-flex justify-content-center align-items-center`}>
<span className={`${styles["writing-of-header-part-of-black-div-in-the-middle"]} text-uppercase`}>view all</span>
<i className={`${styles["writing-of-header-part-of-black-div-in-the-middle"]} fa-solid fa-arrow-right`}></i>
</div>
</div>
<div className={`${styles["body-part-of-black-div-in-the-middle"]} d-flex  justify-content-center align-items-center`}>
<div className="row g-3">
{
  transparentdivs.map((item,index)=>(
    <div className="col-6 col-md-4 col-lg-2" key={index}>
  <div className={`${styles["transparent-div-of-black-div-in-the-middle"]} d-flex flex-column justify-content-center align-items-center`}>
<div className={styles["top-of-transparent-div-of-black-div-in-the-middle"]}>
 <Link href={`/${item.bt}`}><img src={item.bg} alt={item.bt} className={styles["img-of-transparent-div-of-black-div-in-the-middle"]}/></Link>
</div>
<div className={`${styles["body-of-transparent-div-of-black-div-in-the-middle"]} d-flex flex-column justify-content-center align-items-start`}>
<Link href={`/${item.bt}`} style={{textDecoration:"none"}}><h6 className={`${styles["h6-of-body-of-transparent-div-of-black-div-in-the-middle"]} text-uppercase text-white`}>{item.bt}</h6></Link>
<Link href={`/${item.bt}`} style={{textDecoration:"none"}}><span className={styles["span-of-body-of-transparent-div-of-black-div-in-the-middle"]}>{item.ar}</span></Link>
</div>
  </div>
</div>
  ))
}
</div>
</div>
</div>
</div>
</div>
<div className={styles["white-element-section-in-the-middle"]}>
<div className="container">
<div className="d-flex flex-column justify-content-center align-items-center" style={{gap:"30px",paddingBottom:"80px"}}>
<div className={`${styles["header-part-of-black-div-in-the-middle"]} d-flex  justify-content-center align-items-center`}>
<div className={`${styles["h2-of-header-part-of-black-div-in-the-middle"]} d-flex flex-column justify-content-center align-items-start`} >
<h2>Trending Recipes</h2>
</div>
<div className={`${styles["lines-of-header-part-of-black-div-in-the-middle"]} d-flex justify-content-center align-items-center`}>
<div className={styles["small-blue-romb"]}></div>
<div className={styles["side-divider-black2"]}></div>
<div className={styles["small-blue-romb"]}></div>
</div>
<div className={`${styles["writings-of-header-part-of-black-div-in-the-middle"]} d-flex justify-content-center align-items-center`}>
<span className={`${styles["writing-of-header-part-of-black-div-in-the-middle"]} text-uppercase`}>view all</span>
<i className={`${styles["writing-of-header-part-of-black-div-in-the-middle"]} fa-solid fa-arrow-right`}></i>
</div>
</div>
<div className={styles["body-part-of-white-element-section-in-the-middle"]}>
  <div className="row g-3">
{
  whitedivs.map((item,index)=>(
  <div className="col-xl-4 col-md-6 col-12" key={index}>
      <div className={styles["big-white-part-of-white-element-section-in-the-middle"]}>
        <div className={styles["top-side-of-big-white-part-of-white-element-section-in-the-middle"]}>
          <Link href={`/${item.bt}`} style={{height:"100%",width:"100%"}} onClick={() => handleViewClick(item.id)}>
            <img src={item.bg} alt={item.bt} className={styles["img-of-gray-small-div-of-second"]} />
          </Link>
        </div>
        <div className={styles["bottom-side-of-big-white-part-of-white-element-section-in-the-middle"]}>
         <Link href={`/${item.bt}`} onClick={() => handleViewClick(item.id)}><button className={styles["blue-button-right-side-gray-small-div-of-second"]} style={{ backgroundColor: item.bc }}>{item.bt}</button></Link>
         <Link href={`/${item.bt}`} style={{textDecoration:"none",color:"inherit"}} onClick={() => handleViewClick(item.id)}><h6 className="text-uppercase">{item.mt}</h6></Link>
          <ul style={{ display: "flex", justifyContent: "space-between", alignItems: "center", listStyleType: "none", gap: "8px", paddingLeft: "0px", marginLeft: "0px", fontSize: "14px", color: "#69747C", fontWeight: "400",flexWrap:"wrap" }}>
            <li style={{ textTransform: "capitalize" }}>by {item.author}</li>
            <li><i className="fa-regular fa-eye"></i> {viewCounts[item.id] || 0}<span> View</span></li>
            </ul>
        </div>
      </div>
    </div>
  ))
}
  </div>
</div>
</div>

<div className={`${styles["big-img-div-in-the-middle"]} d-flex justify-content-center align-items-center`} style={{width:"100%"}}>
<Link href={"/burger-food"}><img src="https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/12/add_nsew333.jpg" alt="burger-food" style={{width:"100%",objectFit:"cover",minHeight:"100px",borderRadius:"8px"}}/></Link>
</div>
<div className={`${styles["second-big-part-of-the-white-in-the-middle"]} d-flex  flex-column justify-content-center align-items-center`}>
<div className={`${styles["header-part-of-black-div-in-the-middle"]} d-flex  justify-content-center align-items-center`}>
<div className={`${styles["h2-of-header-part-of-black-div-in-the-middle"]} d-flex flex-column justify-content-center align-items-start`} >
<h2>Trending Recipes</h2>
</div>
<div className={`${styles["lines-of-header-part-of-black-div-in-the-middle"]} d-flex justify-content-center align-items-center`}>
<div className={styles["small-blue-romb"]}></div>
<div className={styles["side-divider-black2"]}></div>
<div className={styles["small-blue-romb"]}></div>
</div>
<div className={`${styles["writings-of-header-part-of-black-div-in-the-middle"]} d-flex justify-content-center align-items-center`}>
<span className={`${styles["writing-of-header-part-of-black-div-in-the-middle2"]} text-uppercase`}>view all</span>
<i className={`${styles["writing-of-header-part-of-black-div-in-the-middle2"]} fa-solid fa-arrow-right`}></i>
</div>
</div>
<div className="row">
<div className="col-md-8">
{
 littlewhitedivsinfo.map((item,index)=>(
   <div className={styles["little-white-divs-of-row-in-the-middle"]} key={index}>
        <div className={styles["left-side-gray-small-div-of-second2"]}>
          <Link href={`/${item.bt}`} style={{height:"100%"}} onClick={() => handleViewClick(item.id)}>
            <img src={item.bg} alt={item.bt} className={styles["img-of-gray-small-div-of-second2"]} />
          </Link>
        </div>
        <div className={styles["right-side-gray-small-div-of-second2"]}>
         <Link href={`/${item.bt}`} onClick={() => handleViewClick(item.id)}><button className={styles["blue-button-right-side-gray-small-div-of-second2"]} style={{ backgroundColor: item.bc }}>{item.bt}</button></Link>
         <Link href={`/${item.bt}`} style={{textDecoration:"none",color:"inherit"}} onClick={() => handleViewClick(item.id)}><h6 className="text-uppercase">{item.mt}</h6></Link>
         <Link href={`/${item.bt}`} style={{textDecoration:"none",color:"none"}}><span className={styles["gray-writing-of-little-white-divs-of-row-in-the-middle"]}>{item.lp}</span></Link>
         <ul style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", listStyleType: "none", gap: "8px", paddingLeft: "0px", margin: "0px", fontSize: "14px", color: "#69747C", fontWeight: "400",flexWrap:"wrap"}}>
            <li style={{ textTransform: "capitalize" }}>by {item.author}</li>
            <li><i className="fa-regular fa-eye"></i> {viewCounts[item.id] || 0}<span> View</span></li>
         </ul>
        </div>
      </div>
 ))
}
</div>
<div className="col-md-4"></div>
</div>
</div>
</div>
</div>
    </>
  );
}
 