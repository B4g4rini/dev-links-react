import { useState } from "react";
import Profile from "../components/profile/profile";
import Switch from "../components/switch/switch";
import Links from "../components/links/links";
import Social from "../components/socialLinks/socialLinks"
import Footer from "../components/footer/footer";
import "./App.css";

import imgDarkMode from "../img/avatar.jpg"
import imgLightMode from "../img/avatar-light.jpg"

const App = () => {
  const [isLightMode,setIsLightMode] = useState(false);

  const imgSrc =  isLightMode ? imgLightMode : imgDarkMode;
  const imgAlt = isLightMode ? "Imagem no Modo Claro" : "Imagem no Modo Escuro"
  return (
  <div id="container">
    <Profile imgSrc={imgSrc} imgAlt={imgAlt}>@B4g4rini</Profile>
    <Switch></Switch>
    <div id="links">
      <ul>
<Links link={"https://github.com"}>GitHub</Links>
<Links link={"#"}>Instagram</Links>
<Links link={"#"}>Portifólio</Links>
<Links link={"#"}>Projetos</Links>


      </ul>
    </div>
    <div id="socialLinks">
      <Social href={"#"} icon={"logo-github"} />
      <Social href={"#"} icon={"logo-youtube"} />
      <Social href={"#"} icon={"logo-instagram"} />
      <Social href={"#"} icon={"logo-twitch"} />
      <Social href={"#"} icon={"logo-linkedin"} />


    </div>
    <Footer link={"#"}>@B4g4rini</Footer>
  </div>
  );
};

export default App;
