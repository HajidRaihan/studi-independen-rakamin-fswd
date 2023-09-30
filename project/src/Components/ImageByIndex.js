import image1 from "../asset/img/petani1.png";
import image2 from "../asset/img/petani2.png";
import image3 from "../asset/img/petani.png";

export const images = [image1, image2, image3];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
