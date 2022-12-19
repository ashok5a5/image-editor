const ImageRenderer = (props) => {
  return (
    <>
      {!!props.imageSrc && (
        <div className="renderedImage imageContainer" >
          <img data-testid="imageTag" src={props.imageSrc} alt="Upload images only" />
        </div>
      )}
    </>
  );
};

export default ImageRenderer;
