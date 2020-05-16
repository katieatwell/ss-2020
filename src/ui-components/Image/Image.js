import React from "react";
import PropTypes from "prop-types";

function Image({ webp, fallback, className, cover }) {
  return (
    <picture className={className}>
      <source srcset={webp?.src} type="image/webp" />
      <source srcset={fallback?.src} type={`image/${fallback.type}`} />
      <img
        src={fallback?.src}
        style={{
          height: "100%",
          width: "100%",
          objectFit: cover ? "cover" : "contain",
        }}
        type={`image/${fallback.type}`}
        alt={fallback?.alt}
      />
    </picture>
  );
}

Image.propTypes = {};

export default Image;
