// import axios from "axios";
// import { useState,useEffect } from "react";
import "./sidebar.css";

export default function Sidebar() {
  // const [cats,setCats]=useState([])

  // useEffect(()=>{
  //   const getCats=async ()=>
  //   {
  //     const res=await axios.get("/categories")
  //     setCats(res.data)
  //   }
  //   getCats()
  // },[])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img
          src="https://images.unsplash.com/photo-1574221114300-7041bae57687?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60"
          alt=""
        />
        <p>
        Loungewell is a real estate website that focuses on providing ease of search of real estaetes ready to sell to its user through minimalist and appeasing web design. Moreover, as per the extent of match to the user needs, properties are displayed categorically along with a sneak-peek to its future prices.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
