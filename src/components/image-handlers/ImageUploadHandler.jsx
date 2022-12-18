import Button from "@mui/material/Button";

const ImageUploadHandler = ({image, open, setImage}) => {
  const handleChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        () => setImage(reader.result?.toString())
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <>
      <Button variant="contained">
        Upload Image
        <input type="file" accept="image/*" onChange={handleChange} />
      </Button>
    

    {!!image && <Button style={{marginLeft: 10}} onClick={() => open(true)} variant="contained">
      Edit
    </Button>}
    
    </>
  );
};

export default ImageUploadHandler;
