import React from "react";
import { useContext } from "react";
import { useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import { UserContext } from "../context/UserContext";

const img2 = require("../img/team2.jpg");
const img1 = require("../img/team1.jpg");
const img3 = require("../img/team3.jpg");
const team = [
  {
    id: 1,
    name: "Jane Doe",
    job: "CEO & Founder",
    desc: "Some text that describes me lorem ipsum ipsum lorem.",
    email: "jane@example.com",
    img: img1,
  },
  {
    id: 2,
    name: "Mike Ross",
    job: "Art Director",
    desc: "Some text that describes me lorem ipsum ipsum lorem.",
    email: "mike@example.com",
    img: img2,
  },
  {
    id: 3,
    name: "John Doe",
    job: "Designer",
    desc: "Some text that describes me lorem ipsum ipsum lorem.",
    email: "john@example.com",
    img: img3,
  },
];
const About = () => {

  return (
    <div>
      <Header />

      <h1 style={{ textAlign: "center" }}>OUR TEAM</h1>
      <div className='About-column'>
        {team.map((x,index) => {
          return(
            <div key={index}>
            <Card {...x} />;</div>
          ) 
        })}
      </div>
    </div>
  );
};

export default About;
