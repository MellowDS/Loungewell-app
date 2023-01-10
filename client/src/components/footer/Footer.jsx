import "./Footer.css";

export default function Footer() {
  return (
    <body className="footer-body">
  <footer className="footer">
    <ul className="social-icon">
      <li className="social-icon__item"><a className="social-icon__link" href="#">
      <i className="topIcon fab fa-facebook-square"></i>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="#">
      <i className="topIcon fab fa-twitter-square"></i>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="#">
      <i className="topIcon fab fa-pinterest-square"></i>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="#">
      <i className="topIcon fab fa-instagram-square"></i>
        </a></li>
    </ul>
    <ul className="menu">
      <li className="menu__item"><a className="menu__link" href="#">Home</a></li>
      <li className="menu__item"><a className="menu__link" href="#">About</a></li>
      <li className="menu__item"><a className="menu__link" href="#">Services</a></li>
      <li className="menu__item"><a className="menu__link" href="#">Team</a></li>
      <li className="menu__item"><a className="menu__link" href="#">Contact</a></li>

    </ul>
    <p>&copy;2022 Loungewell | All Rights Reserved</p>
  </footer>
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</body>
  );
}