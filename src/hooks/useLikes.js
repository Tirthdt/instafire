// import { realdb } from "../firebase";
// import { ref, set, push } from "firebase/database";
import { useEffect, useState } from "react";

export const useLikes = (userId) => {
  const [likes, setLikes] = useState(() => {
    let storedLikes = JSON.parse(localStorage.getItem("likes"));
    if (
      JSON.stringify(storedLikes) === JSON.stringify({}) ||
      storedLikes === null
    ) {
      return [];
    } else {
      return storedLikes;
    }
  });

  useEffect(() => {
    // const starCountRef = ref(realdb, `likes/${userId}`);
    // onValue(starCountRef, (snapshot) => {
    //   const data = snapshot.val();
    //   const userLikes = Object.values(data).map((like) => like.postId);
    //   console.log(userLikes);
    //   setLikes((prev) => [...userLikes]);
    // });
    console.log("likes hook");
  }, []);

  const addLike = (postId, type) => {
    let likesArray = likes;
    if (type === "remove") {
      const index = likesArray.indexOf(postId);
      likesArray.splice(index, 1);
    } else {
      likesArray.push(postId);
    }
    setLikes(likesArray);
    localStorage.setItem("likes", JSON.stringify(likesArray));
  };

  return { likes, addLike };
};
