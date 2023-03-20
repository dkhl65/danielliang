import React, { useState } from "react";

function Gallery(props) {
  const [index, setIndex] = useState(0);

  const previousImage = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(props.sources.length - 1);
    }
  };

  const nextImage = () => {
    if (index < props.sources.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  return (
    <div className="gallery">
      {props.video ? (
        <iframe
          src={props.sources[index]}
          title={`${props.title}${index}`}
          width={props.width}
          height={props.height}
          allow="autoplay"
          allowFullScreen="true"
        ></iframe>
      ) : (
        <img alt={`${index}`} src={props.sources[index]} />
      )}
      <div className="linebreak"></div>
      <button
        onClick={() => previousImage()}
        disabled={index <= 0 && props.oneway}
      >
        {"<"}
      </button>
      <div className="caption">
        <b>
          ({index + 1}/{props.sources.length}){" "}
        </b>
        {props.captions && props.captions[index]}
      </div>
      <button
        onClick={() => nextImage()}
        disabled={index >= props.sources.length - 1 && props.oneway}
      >
        {">"}
      </button>
    </div>
  );
}

export default Gallery;
