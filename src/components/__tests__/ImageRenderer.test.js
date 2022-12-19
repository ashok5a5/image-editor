import { render, screen, cleanup } from "@testing-library/react";
import ImageRenderer from "../image-handlers/ImageRenderer";
import * as images from "../../utils/base64/images";

test("Should render bag image", () => {
  render(<ImageRenderer imageSrc={images.BagImageBase64Content} />);
  const imageSrc = screen.getByTestId("imageTag");
  expect(imageSrc).toHaveAttribute('src', images.BagImageBase64Content);
});
