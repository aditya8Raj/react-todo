import { GitHub } from "@mui/icons-material";

function Footer() {
  return (
    <footer>
      <div className="footer">
        Website created by
        <a href="https://adityaraj.ninja" target="blank_" className="myName">
          ADITYA RAJ
        </a>
        <a href="https://github.com/aditya8Raj/" target="blank_">
          <GitHub id="github" style={{ color: "black" }} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
