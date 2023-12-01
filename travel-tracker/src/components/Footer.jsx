const Footer = () => {
  return <button className="back-to-top-button" onClick={() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }}>Back to top</button>;
};

export default Footer;
