import React from "react";

var style = {
  backgroundcolor: '#f5f5f5',
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
};

var phantom = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%"
};
var footerText = {
  color: '#808080',
  fontsize: 2,
  fontfamily: "Segoe UI"
};

function Footer({ children }) {
  return (
    <div>
      <div style={phantom} />
      <div style={style}>
        {children}
        <p style={footerText}>Mawingu Task Management System &copy; 2019</p>
      </div>
    </div>
  );
}

export default Footer;
