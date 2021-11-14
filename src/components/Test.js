import React from "react";
import CardComp from "./CardComp";
import { useDB } from "../hooks/useDB";

const Test = () => {
  const { getData } = useDB("posts");

  const [posts, loading] = getData();

  console.log(posts);

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        posts.map((post) => (
          <CardComp
            key={post.id}
            user={post.userName}
            caption={post.caption}
            imgSrc={post.url}
          />
        ))
      )}
    </>
  );
};

export default Test;
