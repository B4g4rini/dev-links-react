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
  const toggleMode = () => {
    setIsLightMode((prevMode) => !prevMode);
  };

  const imgSrc = isLightMode ? imgLightMode : imgDarkMode;
  const imgAlt = isLightMode ? "Imagem no Modo Claro" : "Imagem no Modo Escuro";

  return (
    <div id="App" className={isLightMode ? "light" : ""}>
  <div id="container">
    <Profile imgSrc={imgSrc} imgAlt={imgAlt}>@B4g4rini</Profile>
    <Switch mode={toggleMode} infoButton={isLightMode}/>
    <div id="links">
      <ul>
<Links link={"https://github.com/B4g4rini"}>GitHub</Links>
<Links link={"https://www.reddit.com/user/DARK_GHOST2007"}>Reddit</Links>
<Links link={"#"}>Portifólio</Links>
<Links link={"https://b4g4rini.github.io/"}>Projetos</Links>


      </ul>
    </div>
    <div id="socialLinks">
      <Social href={"https://github.com/B4g4rini"} icon={"logo-github"} />
      <Social href={"https://www.youtube.com/channel/UCKQUusGn73P5MIlM825dxNQ"} icon={"logo-youtube"} />
      <Social href={"https://www.instagram.com/pedro_bagarini"} icon={"logo-instagram"} />
      <Social href={"https://www.twitch.tv/dark_ghost2007"} icon={"logo-twitch"} />
      <Social href={"https://www.linkedin.com/in/pedro-bagarini-2aa2aa230"} icon={"logo-linkedin"} />


    </div>
    <Footer link={"#"}>@B4g4rini</Footer>
  </div>
  </div>
  );
};

export default App;
