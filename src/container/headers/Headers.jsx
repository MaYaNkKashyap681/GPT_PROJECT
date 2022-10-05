import React from "react";
import People from "../../assets/people.png";
import Ai from "../../assets/ai.png";
import './Headers.css'

function Headers() {
  return (
    <div className="gpt3__header section__padding">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 Open Ai
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Enter Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={People} alt="people" />
          <p>1600 people requested access a visit in last 24 hours</p>
        </div>
       
      </div>
      <div className="gpt3__header-image">
          <img src={Ai} alt="ai" />
        </div>
    </div>
  );
}

export default Headers;
