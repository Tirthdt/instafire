import {
  doc,
  setDoc,
  collection,
  onSnapshot,
  query,
  where,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

export const useDB = (colName, id) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    let collRef = collection(db, colName);
    if (id) {
      collRef = query(collRef, where("postId", "==", id));
    }
    setLoading(true);

    onSnapshot(
      collRef,
      (snapshots) => {
        let data = [];
        snapshots.docs.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });

        setData([...data]);
        setLoading(false);
      },
      (err) => {
        setLoading(false);
        setData([]);
      }
    );
  }, [colName, id]);

  const getData = () => {
    return [data, loading];
  };

  const addComment = async (comment, userName, postId) => {
    console.log(comment, userName, postId, colName);
    try {
      await addDoc(collection(db, colName), { comment, userName, postId });
    } catch (err) {
      console.log(err);
    }
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
      console.log(type, postLike, postId);
      await updateDoc(
        docRef,
        { likes: postLike + (type === "decrement" ? -1 : 1) },
        { merge: true }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return { addData, getData, updateLike, addComment };
};
