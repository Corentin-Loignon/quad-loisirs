import React from "react";
import WSPGallery from "./WSPGallery";
import Images from "./data";

const Gallery = () => {
  return (
    <section>
      <h2>Galerie photos</h2>
      <WSPGallery galleryImages={Images} />
    </section>

  );
};

export default Gallery;
