const ImageRenderer = (props) => {
  return (
    <>
      {!!props.imageSrc && (
        <div className="renderedImage imageContainer" >
          <img src={props.imageSrc} alt="Upload images only" />
        </div>
      )}
    </>
  );
};

export default ImageRenderer;
