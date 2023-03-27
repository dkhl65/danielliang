import React from "react";
import TableOfContents from "../TableOfContents";

import CardBomberApp from "./CardBomberApp";
import Projectile from "./Projectile";
import CardBomber from "./CardBomber";
import Rainbow from "./Rainbow";

function Java() {
  return (
    <div className="container">
      <TableOfContents />
      <div className="content">
        <h1>Java</h1>
        <p>
          My first encounter with Java is with Processing, which is an IDE based
          on Java for creating visuals. I formally learned learned Java in grade
          11 Introduction to Computer Science (ICS3U0) class, using Dr. Java
          IDE. I used it for school projects. In the summer of 2018, I
          experimented with Android Studio, using Java and XML to make Android
          apps. Below are my most significant work created with Java.
        </p>
        <CardBomberApp />
        <Projectile />
        <CardBomber />
        <Rainbow />
      </div>
    </div>
  );
}

export default Java;
