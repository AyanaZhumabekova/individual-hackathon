import React from "react";
import "./Footer.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="top_header">
          <section>
            <a href="https://www.google.ru/maps/search/%D0%A6%D1%83%D0%BC+3%D1%82%D0%B8%D0%B9+%D1%8D%D1%82%D0%B0%D0%B6/@42.8722158,74.5704135,13z/data=!3m1!4b1">
              <span>
                <LocationOnIcon sx={{ color: "white" }} />
              </span>
              <span style={{ color: "white" }}>ЦУМ 3тий этаж</span>
            </a>
            <a href="https://www.google.ru/maps/place/%D0%90%D0%B7%D0%B8%D1%8F+%D0%9C%D0%BE%D0%BB%D0%BB/@42.855705,74.5764254,15z/data=!3m1!4b1!4m5!3m4!1s0x389ec9d3088356eb:0xb6b7beaa1240556a!8m2!3d42.8557053!4d74.5851587">
              <span>
                <LocationOnIcon sx={{ color: "white" }} />
              </span>
              <span style={{ color: "white" }}>Asia Mall</span>
            </a>
          </section>

          <section>
            <span>
              <LocalPhoneIcon sx={{ color: "white" }} />
            </span>
            <span style={{ color: "white" }}>+996557442484</span>
          </section>
          <section>
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
              <span>
                <MailIcon sx={{ color: "white" }} />
              </span>
              <span style={{ color: "white" }}>info@websitename.com</span>
            </a>
          </section>
        </div>
        {/* <span class="border-shape"></span> */}
        <div class="bottom_content">
          <section>
            <a href="https://ru-ru.facebook.com/">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/johnfrank.kg/?hl=ru">
              <InstagramIcon />
            </a>
            <a href="https://twitter.com/?lang=ru">
              <TwitterIcon />
            </a>
            <a href="https://web.telegram.org/">
              <TelegramIcon />
            </a>
          </section>
        </div>
        <div class="copyright">
          Copyright © 2021 websitename - All rights reserved
        </div>
      </footer>
    </div>
  );
};

export default Footer;
