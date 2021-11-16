import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { ImageBlock } from "../styledComps/Utilities";
import { ButtonBlock } from "../styledComps/Button.styled";
import { Input } from "../styledComps/Inputs.styled";
import { Card, CardHeader } from "../styledComps/Card.styled";
import { useNavigate } from "react-router-dom";
import Progress from "./Progress";

const AddPost = () => {
  const [file, setFile] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [caption, setCaption] = useState("");
  const [begin, setBegin] = useState(false);
  const [upload, setUpload] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (upload === "completed") {
      setFile(null);
      setBegin(false);
      navigate("/home");
    }
  }, [upload, navigate]);

  const {
    user: { uid, displayName },
  } = useAuth();

  const changeSelection = (e) => {
    console.log("change");
    setFile(e.target.files[0]);
    setImageSrc(URL.createObjectURL(e.target.files[0]));
  };

  const addPost = (e) => {
    setBegin(true);
  };

  return (
    <>
      <Card>
        {file && begin && (
          <Progress
            file={file}
            setFile={setFile}
            caption={caption}
            userId={uid}
            userName={displayName}
            setUpload={setUpload}
          />
        )}
        <CardHeader rm={true}>Add Post</CardHeader>
        {imageSrc && <ImageBlock src={imageSrc} />}

        <input
          type="file"
          name="image"
          id="file"
          style={{ display: "none" }}
          onChange={changeSelection}
        />
        {imageSrc && (
          <Input
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            type="text"
            placeholder="Enter Caption"
          />
        )}
        <ButtonBlock
          onClick={(e) => {
            document.getElementById("file").click();
          }}
        >
          {imageSrc ? "Change File" : "Choose File"}
        </ButtonBlock>
        {imageSrc && (
          <ButtonBlock secondary onClick={addPost}>
            Add Post
          </ButtonBlock>
        )}
      </Card>
    </>
  );
};

export default AddPost;
