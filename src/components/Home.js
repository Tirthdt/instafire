import React from "react";
import CardComp from "./CardComp";
import { useNavigate } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { Loading } from "../styledComps/Utilities";
import { useDB } from "../hooks/useDB";
import { useLikes } from "../hooks/useLikes";
import { useAuth } from "../context/AuthContext";
import { ButtonFAB } from "../styledComps/Button.styled";

const Home = () => {
  const {
    user: { uid },
  } = useAuth();
  const { getData } = useDB("posts");
  const { likes, addLike } = useLikes(uid);
  const [posts, loading] = getData();

  const navigate = useNavigate();

  return (
    <>
      {loading ? (
        <Loading>
          <h1> Fetching Latest Posts...</h1>
        </Loading>
      ) : (
        <>
          {posts.map((post) => (
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
          ))}
          <ButtonFAB onClick={(e) => navigate("/addPost")}>
            <IoMdAdd />
          </ButtonFAB>
        </>
      )}
    </>
  );
};

export default Home;
