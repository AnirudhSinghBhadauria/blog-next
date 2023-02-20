import React, { Fragment } from "react";
import Hero from "@/components/home-page/Hero";
import FeaturedPost from "@/components/home-page/FeaturedPost";

const HomePage = () => {
  const DUMMY = [
    {
      slug: "getting-started-with-nextjs",
      title: "Getting Started With NEXTjs",
      image: "getting-started-nextjs.avif",
      exceprt:
        "NEXT JS is React Framework for production it makes making React Sites a breeze and ships with built in Server Side Rendering",
      date: "2023-11-03",
    },
    {
      slug: "getting-started-with-nextjs2",
      title: "Getting Started With NEXTjs",
      image: "getting-started-nextjs.avif",
      exceprt:
        "NEXT JS is React Framework for production it makes making React Sites a breeze and ships with built in Server Side Rendering",
      date: "2023-11-03",
    },
    {
      slug: "getting-started-with-nextjs3",
      title: "Getting Started With NEXTjs",
      image: "getting-started-nextjs.avif",
      exceprt:
        "NEXT JS is React Framework for production it makes making React Sites a breeze and ships with built in Server Side Rendering",
      date: "2023-11-03",
    },
    {
      slug: "getting-started-with-nextjs4",
      title: "Getting Started With NEXTjs",
      image: "getting-started-nextjs.avif",
      exceprt:
        "NEXT JS is React Framework for production it makes making React Sites a breeze and ships with built in Server Side Rendering",
      date: "2023-11-03",
    },
  ];

  return (
    <Fragment>
      <Hero />
      <FeaturedPost posts={DUMMY} />
    </Fragment>
  );
};

export default HomePage;
