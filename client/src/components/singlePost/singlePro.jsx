import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./singlePro.css";
import {BiBed,BiBath,BiArea} from 'react-icons/bi'
import {MdOutlineMarkEmailRead} from 'react-icons/md'
import {BiDollar} from 'react-icons/bi'

export default function SinglePro() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:3000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  
  //editing
  const [price,setPrice]=useState("")
  const [bedroom,setBedroom]=useState("")
  const [bathroom,setBathroom]=useState("")
  const [area,setArea]=useState("")
  const [pdesc,setPdesc]=useState("")
  const [email,setEmail]=useState("")

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);

      //editing
      setPrice(res.data.price);
      setBedroom(res.data.bedroom);
      setBathroom(res.data.bathroom);
      setArea(res.data.area);
      setPdesc(res.data.pdesc);
      setEmail(res.data.email);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false)
    } catch (err) {}
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF+post.photo} alt="" className="singlePostImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
          
        {/* editing */}
        <div className="p-details">
              <div className="feature-price">
                <div className="feature">
                <div className="ficon"><BiBed/><label>{bedroom}</label></div>
                <div className="ficon"><BiBath/><label>{bathroom}</label></div>
                <div className="ficon"><BiArea/><label>{area} sq ft</label></div>
                </div>
                <div className="dollar"><BiDollar/><label>{price}</label></div>
              </div>
                <div className="address">
                  <p>{desc}</p>
                </div>
          
          {/* {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          ) : ( */}
          <p className="singlePostDesc">{pdesc}</p>
          {/* )} */}

          <div className="mail">
            <MdOutlineMarkEmailRead/><label>{email}</label>
          </div>
        </div>


        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}