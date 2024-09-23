import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <p className="py-4 text-center m-2">
        &copy;{year} by{" "}
        <a href="https://github.com/yusuf-khan-swd" target="_blank">
          Yusuf Khan
        </a>{" "}
        . All Right Reserve
      </p>
    </div>
  );
};

export default Footer;
