import { useState } from "react";

const Footer = () => {

  const [isVisible, setIsVisible] = useState(false);

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 1200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  return (
    <button
      className={!isVisible ? (
        "back-to-top-button"
      ) : (
        "back-to-top-button visible-button"
      )}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}>Back to top</button>
  );
};

export default Footer;
