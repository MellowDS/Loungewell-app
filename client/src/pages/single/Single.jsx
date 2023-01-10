import Sidebar from "../../components/sidebar/Sidebar";
import SinglePro from "../../components/singlePost/singlePro";
import "./single.css";

export default function Single() {
  return (
    <div className="single">
      <SinglePro />
      <Sidebar />
    </div>
  );
}
