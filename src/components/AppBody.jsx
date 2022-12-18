import { Grid } from "@mui/material";
import { useState } from "react";
import ImageEditor from "./image-handlers/ImageEditor";
import ImageRenderer from "./image-handlers/ImageRenderer";
import ImageUploadHandler from "./image-handlers/ImageUploadHandler";

const AppBody = (props) => {
  const [image, setImage] = useState("");
  const [openEditor, setOpenEditor] = useState(false);

  return (      
    <>
      <Grid container>
        <Grid item sx={{display: "flex"}} justifyContent="center" alignItems="center" xs={10}>
          <ImageRenderer imageSrc={image} />
        </Grid>
        <Grid item xs={2}>
          <ImageUploadHandler image={image} open={setOpenEditor} setImage={setImage} />
        </Grid>
      </Grid>
      <ImageEditor
        open={openEditor}
        handleClose={setOpenEditor}
        imageToEdit={image}
      />
    </>
  );
};

export default AppBody;
