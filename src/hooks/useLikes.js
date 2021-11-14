import { realdb } from "../firebase";
import { get, ref, set, child, push } from "firebase/database";
import { useState } from "react";

export const useLikes = (userId) => {
  const getLikesforUser = async () => {
    try {
      const dbRef = ref(realdb);
      const likedPosts = await (
        await get(child(dbRef, `likes/${userId}`))
      ).val();
      console.log(likedPosts);
    } catch (err) {
      console.log(err);
    }
  };

  const [likes, setLikes] = useState(() => {
    let storedLikes = JSON.parse(localStorage.getItem("likes"));
    getLikesforUser();
    if (storedLikes) {
      return storedLikes;
    }
    return [];
  });

  const addLike = (postId) => {
    let likesArray = JSON.parse(localStorage.getItem("likes")) || [];
    try {
      const likeRef = ref(realdb, `likes/${userId}`);
      const newLikes = push(likeRef);
      set(newLikes, { postId });
      if (likesArray) {
        likesArray.push(postId);
      }
      setLikes([...likes, postId]);
      localStorage.setItem("likes", JSON.stringify(likesArray));
    } catch (err) {
      console.log(err);
    }
  };

  return { likes, addLike };
};
