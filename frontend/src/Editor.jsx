import React from "react";
import ReactQuill from "react-quill";

const Editor = ({ value, onChange }) => {
  const modules = {
    // your modules setup
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  return <ReactQuill value={value} onChange={onChange} modules={modules} />;
};
export default Editor;
