import fs from "fs";
import path from "path";
import matter from "grey-matter";

const postsDirectory = path.join(process.cwd(), "posts");

const getPostData = (filename) => {
  const filePath = path.join(postsDirectory, filename);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postSlug = filename.replace(/\.md$/, "");

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
};

export const getAllPosts = () => {
  const postFiles = fs.readdirSync(postsDirectory);

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
};
