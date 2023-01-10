import { useContext, useState } from "react";
import "./writep.css";
import axios from "axios";
import { Context } from "../../context/Context";
import {BiBed,BiBath,BiArea} from 'react-icons/bi'
import {MdOutlineMarkEmailRead} from 'react-icons/md'
import {BiDollar} from 'react-icons/bi'
import Footer from "../../components/footer/Footer";

export default function WriteP() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  // editing
  const [price,setPrice]=useState("")
  const [bedroom,setBedroom]=useState("")
  const [bathroom,setBathroom]=useState("")
  const [area,setArea]=useState("")
  const [pdesc,setPdesc]=useState("")
  const [email,setEmail]=useState("")


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,

      // editing
      price,bedroom,bathroom,area,pdesc,email
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])}/>
          <input type="text" placeholder="Title" className="writeInput" autoFocus={true} onChange={(e)=>setTitle(e.target.value)}/>
        </div>

        <div className="writeFormGroup">
          <textarea  placeholder="Property address" type="text" className="writeInput writeText" onChange={(e)=>setDesc(e.target.value)}></textarea>
        </div>
        {/* editing */}
        <div className="details">
          <div className="ptxt">
          <div className="icons">
            <div className="room">
              <BiBed/><input onChange={(e)=>setBedroom(e.target.value)}/>
              <BiBath/><input onChange={(e)=>setBathroom(e.target.value)}/>
            </div>
            <div className='area'>
                <BiArea/><input className="area-input" placeholder="Sqft Area" onChange={(e)=>setArea(e.target.value)}/></div>
            </div>
            <textarea placeholder="Property description" onChange={(e)=>setPdesc(e.target.value)}/>
          </div>

          <div className="price-email">
            <div className="input-price">
              <BiDollar/><input placeholder="Price" onChange={(e)=>setPrice(e.target.value)}></input>
            </div>
            <div className="email">
              <MdOutlineMarkEmailRead/><input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
          </div>
          
        </div>

        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
      <Footer/>
    </div>
  );
}