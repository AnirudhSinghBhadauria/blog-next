import AllPosts from '@/components/posts/all-posts'
import React from 'react'

const AllPostPage = () => {


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
    <AllPosts post={DUMMY} />
  )
}

export default AllPostPage