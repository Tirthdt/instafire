import React from "react";
import CardComp from "./CardComp";
import { Loading } from "../styledComps/Utilities";
import { useDB } from "../hooks/useDB";
import { useLikes } from "../hooks/useLikes";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const {
    user: { uid },
  } = useAuth();
  const { getData } = useDB("posts");
  const { likes, addLike } = useLikes(uid);
  const [posts, loading] = getData();

  return (
    <>
      {loading ? (
        <Loading>
          <h1> Fetching Latest Posts...</h1>
        </Loading>
      ) : (
        posts.map((post) => (
          <CardComp
            liked={likes.includes(post.id)}
            addLike={addLike}
            key={post.id}
            postId={post.id}
            user={post.userName}
            caption={post.caption}
            imgSrc={post.url}
            postLikes={post.likes}
          />
        ))
      )}
    </>
  );
};

export default Home;
