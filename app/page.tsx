"use client";
import Headofpage from "./Headofpage";
import Mainwhitesection from "./Mainwhitesection";
import Blackdivinthemiddle from "./Blackdivinthemiddle";
import Blackbigdiv from "./Blackbigdiv";
import Whiteelementsectioninthemiddle from "./Whiteelementsectioninthemiddle";
import Latestmainsection from "./Latestmainsectionwhite";
import Latestpartofthewebsite from "./Latestpartofthewebsite";
import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <>
      <Headofpage/>
      <Mainwhitesection/>
      <Blackdivinthemiddle/>
      <Whiteelementsectioninthemiddle/>
      <Blackbigdiv/>
      <Latestmainsection/>
      <Latestpartofthewebsite/>
    </>
  );
}