import React from "react";
import BuildNewPost from "./BuildNewPost";

function FinalBuild(props) {
  return (
    <div>
      {props.post.map((post) => (
        <BuildNewPost />
      ))}
    </div>
  );
}

export default FinalBuild;
