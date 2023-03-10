import React from "react";
import "../Style/main.scss";
import ghLogo from '../../assets/Img/github.png';
import tgLogo from '../../assets/Img/telegram.png';
import waLogo from '../../assets/Img/whatsapp.png';

export const Footer = () => {
  return <footer className="footer">
    <div className="footer__inner">
          <a href="https://github.com/PolinaKuksova2022">
            <img
              src={ghLogo}
              alt="github.com PolinaKuksova2022"
            />
            <p className="footer__title">Polina Kuksova</p>
          </a>
          <a href="https://t.me/t.me">
            <img
              src={tgLogo}
              alt="t.me t.me"
            />
          </a>
          <a href="https://wa.me/79995275091">
            <img
              src={waLogo}
              alt="t.me 79995275091"
            />
          </a>
          <p className="footer__title">2023</p>
    </div>
  </footer>;
};