import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { Button, DialogActions, DialogTitle, Typography } from "@mui/material";
import AvatarEditor from "react-avatar-editor";
import { useEffect, useRef, useState } from "react";
import * as constants from "../../utils/constants";
import SyncIcon from '@mui/icons-material/Sync';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';

const ImageEditor = ({ open, handleClose, imageToEdit }) => {
  const editor = useRef(null);
  const [imageDimension, setImageDimension] = useState({
    width: constants.DEFAULT_CANVAS_WIDTH,
    height: constants.DEFAULT_CANVAS_HEIGHT,
  });

  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);

  const zoomIn = () => {
    setZoom(zoom + 0.2);
  };

  const zoomOut = () => {
    if (zoom > 1) {
      setZoom(zoom - 0.2);
    }
  };

  const resetAll = () => {
    setZoom(1);
    setRotation(0);
  };

  useEffect(() => {
    resetAll();
  }, [open]);

  const rotateLeft = () => {
    if (rotation === 270) {
      setRotation(0);
    } else {
      setRotation(rotation - 90);
    }
  };

  useEffect(() => {
    let image = new Image();
    image.onload = function () {
      setImageDimension({ width: image.width, height: image.height });
    };
    image.src = imageToEdit;
  }, [imageToEdit]);

  const downloadImage = (canvasSize) => {
    if (editor.current) {
      const canvas = canvasSize
        ? editor.current.getImageScaledToCanvas()
        : editor.current.getImage();

      var image = canvas.toDataURL("image/jpg");
      var a = document.createElement("a");
      a.href = image;
      a.download = "image.jpg";
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <>
      <Dialog maxWidth="xl" open={open} close={() => handleClose(false)}>
        <DialogTitle>
          <Typography variant="h4">Image Editor</Typography>
        </DialogTitle>
        <DialogContent>
          <div className="canvas-editor">
            <AvatarEditor
              image={imageToEdit}
              width={imageDimension.width}
              height={imageDimension.height}
              border={constants.BORDER_SIZE}
              color={[255, 255, 255, 0.6]} // RGBA
              scale={zoom}
              rotate={rotation}
              ref={editor}
            />
            <div className="editing-tools">
              <div className="icon" title="Zoom In" onClick={zoomIn}>
                <ZoomInIcon />
              </div>
              <div className="icon" title="Zoom Out" onClick={zoomOut}>
                <ZoomOutIcon />
              </div>
              <div className="icon" title="Rotate Left" onClick={rotateLeft}>
                <RotateLeftIcon />
              </div>
              <div className="icon" title="Reset" onClick={resetAll}>
                <SyncIcon />
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)}>Close</Button>
          <Button onClick={() => downloadImage(false)} autoFocus>
            Download
          </Button>
          <Button onClick={() => downloadImage(true)} autoFocus>
            Download Canvas Size
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ImageEditor;
