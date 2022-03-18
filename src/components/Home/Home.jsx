import React, { useEffect, useState } from "react";
import "./Home.css";
import mount1 from "../assets/mountain1.png";
import mount2 from "../assets/mountain2.png";
import text from "../assets/text.png";
import { Container } from "@mui/material";

function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const renderContent = () => (
    <div>
      <section className="zoom">
        <img
          src={mount1}
          className="Zoom lay1"
          id="layer1"
          style={{ transform: `translateX(-${offsetY * 1.5}px)` }}
        />
        <img
          src={mount2}
          className="Zoom lay2"
          id="layer2"
          style={{ transform: `translateX(+${offsetY * 1.2}px)` }}
        />
        <img
          src={text}
          className="Zoom tex"
          id="text"
          style={{ transform: `translateY(-${offsetY * 1}px)` }}
        />

        {/* <img
          src={bgpng}
          className="Zoom lay3"
          id="layer3"
          style={{ transform: `translateY(-${offsetY * 1}px)` }}
        /> */}
        {/* <section
          className=" Zoom content"
          style={{ transform: `translateY(+${offsetY * 25}px)` }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            voluptatibus suscipit cumque doloribus excepturi hic tempora neque
            reiciendis nobis quibusdam.
          </p>
        </section> */}
        <div className="text-box"></div>
        <Container>
          <div className="content-text Zoom"></div>
        </Container>
      </section>

      <script type="text/javascript"></script>
    </div>
  );
  return (
    <section className="Zoom">
      <div className="zoom">{renderContent()}</div>
    </section>
  );
}

export default Home;
