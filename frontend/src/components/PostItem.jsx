import React from "react";

const PostItem = () => {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      <div className="texts">
        <h2>sujee is a good boy </h2>
        <p className="info">
          <a className="author">sujee</a>
          <time>2023-01-06</time>
        </p>
        <p className="summary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          tempora quisquam non sint, quos cumque placeat repudiandae aliquid
          asperiores sit. Eveniet consequuntur blanditiis, accusamus culpa
          incidunt minus rerum recusandae fugit!
        </p>
      </div>
    </div>
  );
};

export default PostItem;
