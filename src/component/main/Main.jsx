import "./main.css";
import createGlobe from "cobe";
import { motion } from "framer-motion";
import top from "../../../public/top.png";
import bottom from "../../../public/buttom.png";
import React, { useEffect, useRef } from "react";
import Portfolio from "../../../public/portfolio.png";

export const Main = () => {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 460 * 2,
      height: 420 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);
  return (
    <div className="header-background">
      <img src={top} alt="" className="top-img" />
      <img src={bottom} alt="" className="bottom-img" />
      <div className="d-flex style-items container globus">
        <div className="abaut-us">
          <motion.div
            initial={{ opacity: 0, y: -50 }} // Boshlang'ich holat (chap tomondan keladi)
            whileInView={{ opacity: 1, y: 0 }} // Ko'ringanda harakatlanish
            transition={{ duration: 1 }} // Animatsiya davomiyligi
            viewport={{ once: true }} // Faqat bir marta ishga tushadi
          >
            <span className="h1 text-light d-block font">
              Biz veb-saytlar, ilovalarni ishlab chiqamiz
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }} // Boshlang'ich holat (chap tomondan keladi)
            whileInView={{ opacity: 1, x: 0 }} // Ko'ringanda harakatlanish
            transition={{ duration: 1 }} // Animatsiya davomiyligi
            viewport={{ once: true }} // Faqat bir marta ishga tushadi
          >
            <p className="bio">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </motion.div>
          <img src={Portfolio} alt="" className="logo-portfolio" />
        </div>
        <div>
          <canvas
            ref={canvasRef}
            className="canvas"
            style={{
              width: 500,
              height: 400,
              maxWidth: "100%",
              aspectRatio: 1,
            }}
          />
        </div>
      </div>
    </div>
  );
};
