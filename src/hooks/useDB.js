import {
  doc,
  setDoc,
  collection,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { db } from "../firebase";

export const useDB = (colName) => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const collRef = collection(db, colName);
    setLoading(true);
    onSnapshot(
      collRef,
      (snapshots) => {
        let posts = [];
        snapshots.docs.forEach((doc) => {
          posts.push({ ...doc.data(), id: doc.id });
        });
        setPosts([...posts]);
        setLoading(false);
      },
      (err) => {
        setLoading(false);
        setPosts([]);
      }
    );
  }, [colName]);

  const getData = () => {
    return [posts, loading];
  };

  const addData = async (name, userId = "") => {
    console.log(colName, userId);
    try {
      await setDoc(doc(db, colName, userId), { name });
    } catch (error) {
      console.log(error);
    }
  };

  const updateLike = async (postLike, postId, type) => {
    try {
      const docRef = doc(db, "posts", postId);
      console.log(type, postLike);
      await updateDoc(
        docRef,
        { likes: postLike + (type === "decrement" ? -1 : 1) },
        { merge: true }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return { addData, getData, updateLike };
};
