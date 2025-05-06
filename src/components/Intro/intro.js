import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello"> Hi,</span>
        <span className="introText">
          {" "}
          I am <span className="introName">Navjeet Sharma </span>
          <br />
          Welcome to my Portfolio website!
        </span>
        <p className="introPara">
          Hope you have a good day. <br />
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="Hire" className="btnImg" />
            Hire me
          </button>{" "}
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
