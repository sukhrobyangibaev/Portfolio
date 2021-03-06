import React, { UIEvent } from "react";
import Link from "next/link";
import { NextPage } from "next";
import Layout from "../components/Layout";

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <div className="middleText">
        <p>Hi! My name is Sukhrob Yangibaev and I'm</p>
        <h1>Web Developer</h1>
        <div className="arrow"></div>
      </div>
      <h2>What can i do</h2>

      <div className="canDo">
        <div className="row">
          <img className="stacks" src="canDo/front.jpeg"></img>
          <div className="info">
            Frontend
            <span>
              Architect and develop websites and applications using web
              technologies (i.e., HTML, CSS, DOM, and JavaScript), which run on
              the Open Web Platform or act as compilation input for non-web
              platform environments.
            </span>
          </div>
        </div>
        <div className="row">
          <div className="info">
            Backend
            <span>
              Writing server-side code, writing code to interact with a
              database, ensuring that the server-side code is secure and free of
              vulnerabilities, ensuring that the server-side code is optimised
              enough to handle large volumes of traffic.
            </span>
          </div>
          <img className="stacks" src="canDo/back.png"></img>
        </div>
        <div className="row">
          <img className="stacks" src="canDo/full.png"></img>
          <div className="info">
            Fullstack
            <span>
              Working with both, back-end and front-end technologies. More
              specifically, it means I can work with server side languages,
              databases, HTML, CSS, JavaScript and everything in between.
            </span>
          </div>
        </div>
      </div>
      <hr />
      <h2>My Portfolio</h2>

      <div className="container">
        <div className="cont">
          <a href="https://sukhrobyangibaev.github.io/Piano-Museum/">
            <img className="portImg" src="porfolio/museum.png" />
          </a>
          <div className="middle">
            <div className="text">Piano Museum</div>
          </div>
        </div>
        <div className="cont">
          <a href="https://yelp-camp-yangibaev.herokuapp.com/">
            <img className="portImg" src="porfolio/yelp.png" />
          </a>
          <div className="middle">
            <div className="text">Yelp Camp</div>
          </div>
        </div>
        <div className="cont">
          <a href="https://simple-dice.herokuapp.com/">
            <img className="portImg" src="porfolio/dice.png" />
          </a>
          <div className="middle">
            <div className="text">Simple Dice</div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="cont">
          <a href="https://lights-out-reac.herokuapp.com/">
            <img className="portImg" src="porfolio/lights.png" />
          </a>
          <div className="middle">
            <div className="text">Lights out</div>
          </div>
        </div>
        <div className="cont">
          <a href="https://yahtzee-next.herokuapp.com/">
            <img className="portImg" src="porfolio/yah.png" />
          </a>
          <div className="middle">
            <div className="text">Yahtzee</div>
          </div>
        </div>
        <div className="cont">
          <a href="https://classical-music-test-react.herokuapp.com/">
            <img className="portImg" src="porfolio/cmt.png" />
          </a>
          <div className="middle">
            <div className="text">Classical Music Test</div>
          </div>
        </div>
      </div>
      <hr />
      <style jsx>{`
        .middleText {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #eee;
        }
        p {
          font-family: "Raleway", sans-serif;
          font-size: 1.3em;
          font-weight: 300;
          margin: 0;
        }
        h1 {
          font-size: 3em;
          letter-spacing: 10px;
          text-align: center;
        }
        h2 {
          font-family: "Raleway", sans-serif;
          text-align: center;
          font-size: 3em;
        }

        .arrow:before {
          position: absolute;
          left: 50%;
        }
        .arrow {
          position: absolute;
          width: 40px;
          height: 40px;
          left: 50%;
          top: 90%;
          margin: -20px 0 0 -20px;
          -webkit-transform: rotate(45deg);
          border-left: none;
          border-top: none;
          border-right: 2px #fff solid;
          border-bottom: 2px #fff solid;
        }
        .arrow:before {
          content: "";
          width: 20px;
          height: 20px;
          top: 50%;
          margin: -10px 0 0 -10px;
          border-left: none;
          border-top: none;
          border-right: 1px #fff solid;
          border-bottom: 1px #fff solid;
          animation-duration: 2s;
          animation-iteration-count: infinite;
          animation-name: arrow;
        }
        @keyframes arrow {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translate(-10px, -10px);
          }
        }
        hr {
          margin: -5px auto 50px;
          padding: 0;
          height: 50px;
          border: none;
          border-bottom: 1px solid #1f1209;
          box-shadow: 0 20px 20px -20px #333;
          width: 85%;
        }
        .canDo {
          width: 70%;
          margin: 0 auto;
          font-family: "Raleway", sans-serif;
          text-align: center;
          font-size: 2em;
          font-weight: 300;
        }

        .row {
          font-weight: 300;
          display: flex;
          text-align: left;
          margin: 15px;
        }
        .info {
          padding: 25px;
        }

        .info span {
          font-size: 0.8em;
          display: block;
        }
        .stacks {
          width: 250px;
          height: 250px;
        }

        .container {
          width: 85%;
          display: flex;
          margin: 0 auto;
          font-family: "Raleway", sans-serif;
          text-align: center;
          font-size: 2em;
          font-weight: 300;
        }
        .portImg {
          opacity: 1;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.5s ease;
          backface-visibility: hidden;
        }
        .middle {
          transition: 0.5s ease;
          opacity: 0;
          transform: translate(0%, -300%);
        }

        .cont {
          width: 30%;
          height: 220px;
          margin: 1.66%;
          cursor: pointer;
        }
        .cont:hover .portImg {
          opacity: 0.3;
        }
        .cont:hover .middle {
          opacity: 1;
        }

        @media (max-width: 1050px) {
          .canDo {
            width: 80%;
          }
          .info {
            font-size: 0.9em;
          }
          .stacks {
            width: 200px;
            height: 200px;
          }
        }
        @media (max-width: 860px) {
          .canDo {
            width: 90%;
          }
          .info {
            font-size: 0.8em;
          }
          .stacks {
            width: 200px;
            height: 200px;
          }
        }
        @media (max-width: 650px) {
          p {
            font-size: 0.9em;
          }
          h1 {
            font-size: 2em;
            letter-spacing: 10px;
          }
          h2 {
            font-size: 1em;
          }
          .row {
            font-size: 1em;
            display: block;
          }
          .info {
            padding: 10px 0;
          }
          .stacks {
            display: none;
          }
        }
      `}</style>
    </Layout>
  );
};

export default IndexPage;
