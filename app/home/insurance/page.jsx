import React from "react";

import Header from "@/components/home-page/home-6/Header";
import Hero from "@/components/home-page/home-6/Hero";
import PopUp from "@/components/home-page/home-6/PopUp";
import Grid from "@/components/home-page/home-6/Grid";
import Main  from "@/components/home-page/home-6/Main";
import ECommerceProductsSelect from "@/components/home-page/home-6/ECommerceProductsSelect";
import History from "@/components/home-page/home-6/History";

export const metadata = {
  title: "Sass Product || Jano - Creative Multipurpose React NextJS Template",
};

const Insurance = () => {
  return (
    <>
      <Header />

      <ECommerceProductsSelect/>
      {/* <Main/> */}

      <History/>

      {/* <Hero /> */}

      {/* <Grid /> */}

      {/* <PopUp/> */}


    </>
  );
};

export default Insurance;
