"use client";
import { NextRequest, NextResponse } from "next/server";
import { useState, useEffect } from "react";
import "swiper/css/navigation";
import "swiper/css";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Autoplay} from "swiper/modules";


export default function Headofpage() {
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
    const navItems = [
  { label: "Follow Us", icon: null },
  { label: "Home", icon: "fa-brands fa-facebook-f" },
  { label: "Author", icon: "fa-brands fa-instagram" },
  { label: "Pages", icon: "fa-brands fa-linkedin-in" },
  { label: "Contact", icon: "fa-brands fa-pinterest-p" },
];
    const items = [
    "Home",
    "Food",
    "Travel",
    "Health",
    "Technology",
    "Sport",
    "Music",
    "Nature",
    "Fashion",
    "Science"
  ];

return(
     <>
 <div className={styles["head-part-of-head"]}>
    <div className={styles["first-part-of-head"]}>
      <div className="container">
   <div className="d-flex justify-content-between align-items-center" >
<div className="d-flex justify-content-left align-items-center">
    <div style={{ padding: "20px" }}>
      <span className={styles.pulseDot}></span>
    </div>
    <span className={`${styles["red-writing-of-head"]} text-uppercase fs-6`}>
      live news
    </span>
 <div className={styles.tickerContainer}>
      <div className={styles.tickerText}>
        <p>Discover a fresh herb roasted vegetable tray that bursts natural</p>
        <p>The best street foods around the world you must try again</p>
        <p>A mellow mushroom soup with earthy notes and soft warm</p>
        <p>A warm and comforting homemade potato soup recipe</p>
      </div>
    </div>
</div>
<div className="d-flex justify-content-center align-items-center">
  <img  src="https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/09/logo.png" style={{width:"90px", height:"auto"}} alt="Norio"/>
</div>
<div>
<nav className="navbar navbar-expand-xl">
  <div className="container-fluid">
    <Link className="navbar-brand d-flex align-items-center" href="#">
      <button className={styles["first-oval-button-blue"]} style={{backgroundColor:"#0073FF"}}>February 20,2026</button>
    </Link>
    <button
      className={`${styles["togler-part-of-navbar"]} navbar-toggler`}
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasNavbar"
      onClick={() => setIsOffcanvasOpen(true)}
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div
      className="offcanvas offcanvas-end"
      id="offcanvasNavbar"
      style={{ backgroundColor: "#161A1E", width: "250px" }}
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" style={{ color: "white" }}>Menu</h5>
        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
        ></button>
      </div>
      <div className="offcanvas-body">
     <ul className="navbar-nav">
  {navItems.map((navItem, index) => (
    <li className="nav-item" key={index}>
      <Link className="nav-link" href={`/${navItem.label.toLowerCase().replace(" ", "-")}`}>
        {isOffcanvasOpen ? (
          <span style={{ color: "white", borderBottom: "1px solid #FFFFFF1A", paddingBottom: "10px", fontWeight: "500", fontSize: "16px" }}>
            {navItem.label}
          </span>
        ) : (
          navItem.icon ? (
            <i className={`${styles["navbar-icons"]} ${navItem.icon}`}></i>
          ) : (
            <span style={{ color: "white", fontWeight: "500", fontSize: "16px" }}>{navItem.label}</span>
          )
        )}
      </Link>
    </li>
  ))}
</ul>
      </div>
    </div>
  </div>
</nav>
  </div> 
</div>
      </div>
    </div>
    <div className={styles["second-part-of-head"]}>
<div className="container">
  <div className="d-flex justify-content-between align-items-center" style={{width:"100%"}}>
  <ul className={`${styles["first-ul-of-head"]} d-flex justify-content-left align-items-center`}>
    <li style={{color:"#0173FF"}}>Home</li>
      <li>Features</li>
        <li>Food</li>
          <li>Pages</li>
            <li>Contact</li>
  </ul>
<div style={{ width: "360px", padding: "0px", display: "flex", alignItems: "center" }} className={styles["swiper-of-head"]}>
  <div style={{ flex: 1, overflow: "hidden" }}>
    <Swiper
      modules={[Navigation]}
      navigation={{
        prevEl: `.custom-prev`,
        nextEl: `.custom-next`,
      }}
      slidesPerView={5}
      spaceBetween={10}
      loop={true}
      className={styles.customSwiper}
    >
      {items.map((item, index) => (
        <SwiperSlide
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#A0A0A1",
            fontWeight: "500",
            whiteSpace: "nowrap",
            fontSize: "14px",
            borderLeft: "1px solid #FFFFFF33",
            
          }}
        >
        <Link href={`/${item.toLowerCase()}`}  style={{ color: "#A0A0A1", textDecoration: "none" }}>{item}</Link>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  <div style={{ display: "flex", flexDirection: "row", gap: "4px", marginLeft: "8px" }}>
    <button className="custom-prev" style={{
      background: "none", border: "none", color: "white",
      cursor: "pointer", padding: "0", fontSize: "12px", fontWeight: "500"
    }}>❮</button>
    <button className="custom-next" style={{
      background: "none", border: "none", color: "white",
      cursor: "pointer", padding: "0", fontSize: "12px", fontWeight: "500"
    }}>❯</button>
  </div>
</div>
</div>
</div>
    </div>
  </div>
</>
)
}