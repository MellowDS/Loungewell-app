import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Find the place where you belong</span>
        <span className="headerTitleLg">LOUNGEWELL</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80"
        alt=""
      />
    </div>
  );
}
