import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Img = ({ src, className, ...props }) => {
  return (
    <LazyLoadImage
      className={className || ""}
      {...props}
      effect="blur"
      src={src}
    />
  );
};

export default Img;
