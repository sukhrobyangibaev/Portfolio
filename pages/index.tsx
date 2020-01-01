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
        @media (max-width: 650px) {
          p {
            font-size: 0.9em;
          }
          h1 {
            font-size: 2em;
            letter-spacing: 10px;
          }
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
      `}</style>
    </Layout>
  );
};

export default IndexPage;
