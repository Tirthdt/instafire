import { useState, useEffect } from "react";
import { storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, doc, setDoc, Timestamp } from "firebase/firestore";

export const useStorage = (file, collName, userId, caption, userName) => {
  const [error, seterror] = useState(null);
  const [progress, setprogress] = useState(null);
  const [url, seturl] = useState(null);

  useEffect(() => {
    console.log(file.name);

    const storageRef = ref(storage, "images/" + file.name);

    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snap) => {
        console.log(snap.bytesTransferred, snap.totalBytes);
        const percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setprogress(percentage);
      },
      (err) => {
        seterror(err);
      },
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        seturl(url);
        setprogress(0);
        const imageListRef = doc(collection(db, collName));
        await setDoc(imageListRef, {
          url,
          userId,
          caption,
          userName: userName ? userName : "Anonymous",
          createdAt: Timestamp.now(),
        });
      }
    );
  }, [file, collName, userId, caption, userName]);

  return { progress, url, error };
};
