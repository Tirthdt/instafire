import React, { useEffect, useState } from "react";
import { Card, CardFooter, CardHeader } from "../styledComps/Card.styled";
import { ImageBlock } from "../styledComps/Utilities";
import { FaUser } from "react-icons/fa";

import { BsHeart, BsHeartFill } from "react-icons/bs";
import { IconButton } from "../styledComps/Button.styled";
import { Caption } from "../styledComps/Utilities";
import { useDB } from "../hooks/useDB";

const CardComp = ({
  postId,
  user,
  caption,
  imgSrc,
  liked,
  postLikes,
  addLike,
}) => {
  const [likes, setLikes] = useState(0);

  const { updateLike } = useDB("posts");
  console.log(postLikes, postId);

  useEffect(() => {
    if (postLikes >= 0) {
      setLikes(postLikes);
    }
  }, [postLikes]);

  return (
    <>
      <Card>
        <CardHeader left={true} rm={true}>
          <FaUser />
          <span className="userName">{user}</span>
        </CardHeader>
        <ImageBlock src={imgSrc ? imgSrc : "https://loremflickr.com/640/360"} />
        <Caption>{caption}</Caption>
        <CardFooter>
          <IconButton
            onClick={() => {
              addLike(postId, liked ? "remove" : "add");
              updateLike(likes, postId, liked ? "decrement" : "increment");
            }}
          >
            {liked ? <BsHeartFill fill={"red"} /> : <BsHeart />}
          </IconButton>
          {likes} likes
        </CardFooter>
      </Card>
    </>
  );
};

export default CardComp;
