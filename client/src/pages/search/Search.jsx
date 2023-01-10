import { useEffect,useState } from "react";
import "./search.css";
import axios from "axios";
import { useLocation } from "react-router";
import Posts from "../../components/posts/Posts";
import Footer from "../../components/footer/Footer";

export default function Search() {
  const [posts,setPosts]=useState([])
  const {search}=useLocation()
  const [filter, setFilter] = useState('');
  const searchText = (event) => {
    setFilter(event.target.value);
  }

  let dataSearch = posts.filter(item => {
    return Object.keys(item).some(key =>
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
      )
})

  useEffect(()=>{
    const fetchPosts=async ()=>{
      const res=await axios.get("/posts"+search)
      setPosts(res.data)
    }
    fetchPosts()
  },[search])

  return (
    <div>
      <div className="searchBox">
        <input className="searchInput"type="text" name="" placeholder="Search" value = {filter}
                onChange = {searchText.bind(this)}/>
        <button className="searchButton" href="#">
            <i className="topSearchIcon fas fa-search"></i>
        </button>
      </div>

    <div className="posts">
      <Posts posts={dataSearch}/>
    </div>
    <Footer/>
    </div>
  );
}
