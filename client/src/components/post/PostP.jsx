import "./PostP.css";
import { Link } from "react-router-dom";
import {BiBath,BiArea,BiBed,BiDollar} from "react-icons/bi";

export default function Post({ post }) {
  const PF = "http://localhost:3000/images/";
  return (
      <div className="indi-post">
        <div className="pic">
          <img src={PF+post.photo} alt=""/>
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <p className="p-title">{post.title}</p>
        </Link>
        <div className="address">
            <p>{post.desc}</p>
          </div>
        <div className="features">
          <div className="props"><BiBed/><label>{post.bedroom}</label></div>
          <div className="props"><BiBath/><label>{post.bathroom}</label></div>
          <div className="props"><BiArea/><label>{post.area} sq ft</label></div>
        </div>
        <div className="price">
          <BiDollar/><div className="dollarp">{post.price}</div>
        </div>
    </div>
  );
}