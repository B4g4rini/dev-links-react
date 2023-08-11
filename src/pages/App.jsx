import { useState } from "react";
import Profile from "../components/profile/profile";

import "./App.css";

import imgDarkMode from "../img/avatar.jpg"
import imgLightMode from "../img/avatar-light.jpg"

const App = () => {
  const [isLightMode,setIsLightMode] = useState(false);

  const imgSrc =  isLightMode ? imgLightMode : imgDarkMode;
  const imgAlt = isLightMode ? "Imagem no Modo Claro" : "Imagem no Modo Escuro"
  return (
  <div>
    <Profile imgSrc={imgSrc} imgAlt={imgAlt}>@B4g4rini</Profile>
  </div>
  );
};

export default App;
