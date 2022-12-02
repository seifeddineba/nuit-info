import React, { useEffect, useRef } from "react";
import QuizForm from "../modules/QuizModule";
import FormImage from "../../assets/img/form.svg";
import LogoSida from "../../assets/img/sida.png";
import ScreenVideo from "../../assets/screen-capture.mp4";
import { Player } from "video-react";
function FormComponent() {
 const vidRef = useRef();

 useEffect(() => {
  vidRef.current?.play();
 }, []);
 return (
  <div className="container">
   <div className="row">
    <div className=" col-xl-6 col-lg-6 col-md-12 col-xs-12">
     <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
      <h3 className="text-left mt-2">
       <img src={LogoSida} width={50} height={50}></img>
       Questionnaire VIH/SIDA{" "}
      </h3>
      <QuizForm />
     </div>
    </div>
    <div className=" col-xl-6 col-lg-6 col-md-12 col-xs-12">
     <div className="d-flex flex-column">
      <Player ref={vidRef}>
       <source autoPlay src={ScreenVideo} />
      </Player>
      <p>
       Video Sida
      </p>
     </div>
    </div>
   </div>
  </div>
 );
}

export default FormComponent;
