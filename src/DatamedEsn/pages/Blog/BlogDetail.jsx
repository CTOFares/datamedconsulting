import React from "react";
import { useParams } from "react-router-dom";
import MainBlogDetail from "./MainBlogDetail";
import OtherBlogs from "./OtherBlogs";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { blogs } from "../../../assets/assets";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog)
    return <h1 className="text-center text-2xl">Article non trouvé</h1>;

  return (
    <div className="">
      <Navbar />
      <div className="mx-[130px]">
        <MainBlogDetail
          id={blog.id}
          date={blog.date}
          title={blog.title}
          image={blog.img}
          paragraphe={blog.content}
        />
        <OtherBlogs id={blog.id} />
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetail;

// <div className="max-w-3xl mx-auto p-6">
// <img src={blog.img} alt={blog.title} className="w-full rounded-lg" />
// <p className="text-gray-500 text-sm mt-2">{blog.date}</p>
// <h1 className="text-3xl font-bold mt-2">{blog.title}</h1>
// <p className="mt-4 text-lg">{blog.paragraphe}</p>
// </div>
