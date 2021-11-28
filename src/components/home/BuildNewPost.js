import React from "react";

function BuildNewPost({ post, counterLikes, willhandleLikeBtn }) {
  return (
    <div>
      <span>{post}</span>
      <button className="like-btn" onClick={willhandleLikeBtn}>
        Like {counterLikes}
      </button>
    </div>
  );
}

export default BuildNewPost;
