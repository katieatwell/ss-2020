import React from "react";
import PropTypes from "prop-types";

function Image({ webp, fallback }) {
  return (
    <picture>
      <source srcset={webp?.src} type="image/webp" />
      <source srcset={fallback?.src} type={`image/${fallback.type}`} />
      <img
        srcset={fallback?.src}
        type={`image/${fallback.type}`}
        alt={fallback?.alt}
      />
    </picture>
  );
}

Image.propTypes = {};

export default Image;
