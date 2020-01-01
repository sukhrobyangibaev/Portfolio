import React, { Component, useState, UIEvent, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "Web Developer"
}) => {
  useEffect(() => {
    console.log("effect");
    const nav = document.getElementsByTagName("header")[0];
    window.addEventListener("scroll", () => {
      if (window.scrollY > nav.scrollHeight) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    });
  }, [1]);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:300,400&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <header>
        <div className="leftSide">
          <Link href="/">
            <a>web developer</a>
          </Link>
        </div>
        <div className="rightSide">
          <Link href="#">
            <a>Test 1</a>
          </Link>
          <Link href="#">
            <a>Test 2</a>
          </Link>
          <Link href="#">
            <a>test 3</a>
          </Link>
        </div>
      </header>
      <div className="background">
        <div className="backImage"></div>
      </div>
      <div id="children">{children}</div>

      <style jsx global>{`
        @font-face {
          font-family: "Azonix";
          src: url(fonts/Azonix.otf);
        }
        body {
          margin: 0;
          font-family: "Azonix";
          height: 5000px;
        }
      `}</style>
      <style jsx>{`
        header {
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
          height: 6vh;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 25px;
          transition: background 500ms;
        }
        header .onscroll {
          background: black;
        }
        .scrolled {
          background: black;
        }
        a {
          margin: 10px;
          text-decoration: none;
        }
        .leftSide a {
          color: #ccc;
        }
        .rightSide a {
          color: #444;
        }

        .backgroundImage {
          position: fixed;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 0;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .backImage {
          background-image: url(back.jpg);
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background-size: cover;
          background-position: 50% 50%;
          background-repeat: no-repeat;
          z-index: -1;
          opacity: 1;
        }
        @media (max-width: 650px) {
          .rightSide {
            display: none;
          }
          header {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
