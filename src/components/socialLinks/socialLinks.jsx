import "./socialLinks.module.css";

const socialLinks = ({ icon, href }) => {
  return (
    <a href={href} target="_blank">
      <ion-icon name={icon} />
    </a>
  );
};
export default socialLinks;
