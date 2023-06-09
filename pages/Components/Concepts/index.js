import React from "react";
import style from "./style.module.css";

export default function Concepts() {
  return (
    <div className={style.concept}>
      <h1>
        Have an amazing concept, <br /> Let&apos;s talk{" "}
      </h1>
      <div className={style.email_box}>
        <input type="email" placeholder="name@email.com" />
        <button>Get Started</button>
      </div>
    </div>
  );
}
