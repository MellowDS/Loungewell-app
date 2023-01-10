import Post from "../post/PostP";
import "./posts.css";

export default function Posts({posts}) {
  return (
    <div className="posts">
      {posts.map((p)=>(
        <Post key={p._id} post={p}/>
      ))}
    </div>
  );
}
