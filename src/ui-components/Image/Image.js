import React from "react";
import PropTypes from "prop-types";

function Image({ webp, fallback, className, cover, mobile }) {
  return (
    <picture className={className}>
      <source srcset={webp?.src} type="image/webp" />
      {mobile && (
        <>
          <source
            srcset={mobile?.webP?.src}
            type={`image/webp`}
            media={mobile?.mediaQuery}
          />
          <source
            srcset={mobile?.fallback?.src}
            type={`image/${mobile.fallback?.type}`}
            media={mobile?.mediaQuery}
          />
        </>
      )}

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
