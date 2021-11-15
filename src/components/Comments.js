import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { ButtonClose } from "../styledComps/Button.styled";
import { MdOutlineClose } from "react-icons/md";
import { CardFixed, CardHeader, CardBody } from "../styledComps/Card.styled";
import { useDB } from "../hooks/useDB";
import { Comment } from "../styledComps/Utilities";
import { InputFixed } from "../styledComps/Inputs.styled";

const Comments = ({ setOpen, id: postId }) => {
  const [newComment, setNewComment] = useState("");
  const { getData, addComment } = useDB("comments", postId);
  const [comments, loading] = getData();

  const {
    user: { displayName },
  } = useAuth();

  const addNewComment = (e) => {
    if (e.key === "Enter") {
      addComment(newComment, displayName, postId);
      setNewComment("");
    }
  };

  return (
    <>
      <CardFixed>
        {loading ? (
          <h2 style={{ textAlign: "center" }}>Fetching latest comments...</h2>
        ) : (
          <>
            <CardHeader>
              Comments
              <ButtonClose onClick={(e) => setOpen(false)}>
                <MdOutlineClose size={"20px"} />
              </ButtonClose>
            </CardHeader>
            <CardBody>
              {comments.map((comment) => {
                return (
                  <Comment key={comment.id}>
                    <p className="user">Tirth Trivedi</p>
                    <p className="comment">{comment.comment}</p>
                  </Comment>
                );
              })}
            </CardBody>
            <InputFixed
              onKeyUp={addNewComment}
              type="text"
              placeholder="Enter comment"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            ></InputFixed>
          </>
        )}
      </CardFixed>
    </>
  );
};

export default Comments;
