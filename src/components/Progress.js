import { useEffect } from "react";
import { ProgressBar } from "../styledComps/Utilities";
import { useStorage } from "../hooks/useStorage";

const Progress = ({ file, userId, caption, setUpload, userName }) => {
  const { url, progress } = useStorage(
    file,
    "posts",
    userId,
    caption,
    userName
  );

  useEffect(() => {
    if (url) {
      setUpload("completed");
    }
  }, [url, setUpload]);

  return <ProgressBar style={{ width: progress + "%" }} />;
};

export default Progress;
