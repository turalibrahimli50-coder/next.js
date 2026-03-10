"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Tag = {
  id: number;
  bt: string;
};

type Icon = {
  id: number;
  ic: string;
};

type Category = {
  id: number;
  li: string;
};

type Post = {
  id: number;
  bg: string;
  bt: string;
  mt: string;
  bc: string;
  author: string;
};

export default function Latestpartofthewebsite() {

const [viewCounts, setViewCounts] = useState<Record<number, number>>({});

const graydivs2: Tag[] = [
  {id:94,bt:"beauty"},
  {id:95,bt:"branding"},
  {id:96,bt:"business"},
  {id:97,bt:"food"},
  {id:98,bt:"gaming"},
  {id:99,bt:"makeup"},
  {id:100,bt:"marketing"},
  {id:101,bt:"politics"},
  {id:102,bt:"printing"},
  {id:103,bt:"social"},
  {id:104,bt:"sports"},
  {id:105,bt:"technology"},
  {id:105,bt:"travel"},
  {id:106,bt:"trip"}
];

const grayicons: Icon[] = [
  {id:79,ic:"fa-brands fa-facebook-f"},
  {id:80,ic:"fa-brands fa-instagram"},
  {id:81,ic:"fa-brands fa-linkedin-in"},
  {id:82,ic:"fa-brands fa-x-twitter"}
];

const graysmalllis: Category[] = [
  {id:83,li:"dessert"},
  {id:84,li:"bakery"},
  {id:85,li:"beverages"},
  {id:86,li:"dinner"},
  {id:87,li:"pizza"},
  {id:88,li:"food"},
  {id:89,li:"brekfast"},
  {id:90,li:"vegetables"},
];

const blacklittlecards2: Post[] = [
  { id: 91, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_22-min-768x381.jpg", bt: "beverages", mt: "A flavorful chicken curry...", bc: "#348aa7", author: "matt rosnor" },
  { id: 92, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_28-min-1024x508.jpg", bt: "food", mt: "Learn how to create a vibrant...", bc: "#00b5ed", author: "matt rosnor" },
  { id: 93, bg: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2025/11/post_30-min-1024x508.jpg", bt: "vegetables", mt: "Discover a fresh herb...", bc: "#54bd05", author: "matt rosnor" },
];

useEffect(() => {

  const allIds = [...blacklittlecards2.map(c => c.id)];
  const uniqueIds = [...new Set(allIds)];

  const fetchViews = async () => {

    const results = await Promise.all(
      uniqueIds.map(id =>
        fetch(`/api/views/${id}`).then(res => res.json())
      )
    );

    const counts: Record<number, number> = {};

    results.forEach((data, index) => {
      counts[uniqueIds[index]] = data.views;
    });

    setViewCounts(counts);

  };

  fetchViews();

}, []);

const handleViewClick = async (id: number) => {

  const res = await fetch(`/api/views/${id}`, { method: "POST" });
  const data = await res.json();

  setViewCounts(prev => ({
    ...prev,
    [id]: data.views
  }));

};

return(
   <>
    <div className={`${styles["latest-part-of-the-website"]} d-flex  justify-content-center align-items-center`}>
<div className="container">
<div className="row g-3">
<div className="col-12 col-md-6 col-xl-3">
<Link href="/Nerio" className="d-flex flex-column justify-content-start align-items-start" style={{gap:"20px", textDecoration:"none", color:"inherit"}}>
   <div className={`${styles["first-of-latest-part-of-the-website"]} d-flex justify-content-start align-items-start`}>
    <img src="https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2026/02/logo.png" alt="Nerio" className={styles["img-of-first-of-latest-part-of-the-website"]}/>
  </div>
  <span className={styles["gray-writing-of-first-of-latest-part-of-the-website"]}>We love to bring to life as a developer and I aim the today do this using music whatever front end tools necessary.</span>
  <div className={`${styles["icon-divs-of-first-of-latest-part-of-the-website"]} d-flex justify-content-center align-items-center`}>
    {grayicons.map((item, index) => (
      <div key={index} className={`${styles["icons-of-first-of-latest-part-of-the-website"]} d-flex justify-content-center align-items-center`}>
        <i className={item.ic}></i>
      </div>
    ))}
  </div>
  <div className={`${styles["play-markets-of-latest-part-of-the-website"]} d-flex justify-content-end align-items-start`}>
    <img src="https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2026/02/spp_01.png" alt="Google Play" className={styles["play-market-of-latest-part-of-the-website"]}/>
    <img src="https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2026/02/spp_02.png" alt="App Store" className={styles["play-market-of-latest-part-of-the-website"]}/>
  </div>
</Link>
</div>
<div className="col-12 col-md-6 col-xl-2">
    <div className={`${styles["second-of-latest-part-of-the-website"]} d-flex flex-column justify-content-start align-items-start`}>
<div className={`${styles["a-of-second-of-latest-part-of-the-website"]} d-flex justify-content-start align-items-start`}>
   <h5 style={{color:"white"}}>Top Categories​</h5> 
</div>
<div className={styles["b-of-second-of-latest-part-of-the-website"]}></div>
<div className={`${styles["c-of-second-of-latest-part-of-the-website"]} d-flex flex-column justify-content-start align-items-start`}>
    <ul className={styles["ul-of-second-of-latest-part-of-the-website"]}>
     {graysmalllis.map((item, index) => (
  <li key={index} className={styles["li-of-second-of-latest-part-of-the-website"]}>
    <Link href={`/${item.li}`} style={{textDecoration:"none", color:"inherit"}}>
      {item.li}
    </Link>
  </li>
))}
    </ul>
</div>
    </div>
</div>
<div className="col-12 col-md-6 col-xl-4">
    <div className={`${styles["second-of-latest-part-of-the-website"]} d-flex flex-column justify-content-start align-items-start`}>
<div className={`${styles["a-of-second-of-latest-part-of-the-website"]} d-flex justify-content-start align-items-start`}>
   <h5 style={{color:"white"}}>Recent Posts​</h5> 
</div>
<div className={styles["b-of-second-of-latest-part-of-the-website"]}></div>
<div className="d-flex flex-column justify-content-start align-items-start">
    {blacklittlecards2.map((item, index) => (
  <div style={{width:"100%"}} key={index}>
    <Link href={`/${item.bt}`} style={{textDecoration:"none", color:"inherit"}}
          onClick={() => handleViewClick(item.id)}>
      <div className={styles["black-small-div-of-big-black-div"]}>
        <div className={styles["left-side-gray-small-div-of-second"]}>
          <img src={item.bg} alt={item.bt} className={styles["img-of-gray-small-div-of-second"]} style={{height:"141.89px"}}/>
        </div>
        <div className={styles["right-side-gray-small-div-of-second"]}>
          <button className={styles["blue-button-right-side-gray-small-div-of-second"]} style={{ backgroundColor: item.bc }}>{item.bt}</button>
          <h6 className="text-uppercase" style={{color:"white"}}>{item.mt}</h6>
          <ul style={{ display: "flex", justifyContent: "space-between", alignItems: "center", listStyleType: "none", gap: "8px", paddingLeft: "0px", marginLeft: "0px", fontSize: "14px", color: "#D1D1D2", fontWeight: "400", flexWrap: "wrap" }}>
            <li style={{ textTransform: "capitalize" }}>by {item.author}</li>
            <li><i className="fa-regular fa-eye"></i> {viewCounts[item.id] || 0}<span> View</span></li>
          </ul>
        </div>
      </div>
    </Link>
  </div>
))}
</div>
    </div>
</div>
<div className="col-12 col-md-6 col-xl-3">
     <div className={`${styles["second-of-latest-part-of-the-website"]} d-flex flex-column justify-content-start align-items-start`}>
   <div className={`${styles["a-of-second-of-latest-part-of-the-website"]} d-flex justify-content-start align-items-start`}>
   <h5 style={{color:"white"}}>Tags​</h5> 
</div>
<div className={styles["b-of-second-of-latest-part-of-the-website"]}></div>
        <div className={`${styles["first-of-main-right-side-divs-group2"]} d-flex flex-column justify-content-center align-items-start flex-wrap`}>
<div className={`${styles["body-of-gray-small-many-buttons-div"]} d-flex justify-content-start align-items-start`}>
 {
 graydivs2.map((item, index) => (
  <Link href={`/${item.bt}`} key={index} style={{textDecoration:"none", color:"inherit"}}>
    <div className={`${styles["tag-button2"]} d-flex justify-content-center align-items-center`}>
      {item.bt}
    </div>
  </Link>
))
}
</div>
                  </div>
</div>
</div>
</div>
</div>
    </div>
    </>
)
}