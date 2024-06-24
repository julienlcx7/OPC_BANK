import React from 'react';
import './Features.css'; // Make sure to create a corresponding CSS file for styling
import icon_chat from "../../img/icon-chat.png"
import icon_money from "../../img/icon-money.png"
import icon_security from "../../img/icon-security.png"
import Feature_popup from '../Feature_popup/Feature_popup';
function Features() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <Feature_popup img={icon_chat} title={"You are our #1 priority"} subtitle={"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."}/>
      <Feature_popup img={icon_money} title={"More savings means higher rate"} subtitle={"The more you save with us, the higher your interest rate will be!"}/>
      <Feature_popup img={icon_security} title={"Security you can trust"} subtitle={"We use top of the line encryption to make sure your data and money is always safe."}/>
    </section>
  );
}

export default Features;
