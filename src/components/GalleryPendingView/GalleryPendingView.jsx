import GalleryImage from "../GalleryImage/GalleryImage";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import loadImg from "../../loadImg.gif";

export default function GalleryPendingView() {
  const galleryRes = {
    id: "",
    webformatURL: loadImg,
    tags: "loading",
  };
  const gallery = [];
  for (let index = 0; index < 11; index++) {
    console.log(index);
    galleryRes.id = index;
    console.log(galleryRes);
    gallery.push(galleryRes);
    console.log(gallery);
  }
  return (
    <GalleryImage>
      <ImageGalleryItem gallery={gallery} onClick={null} />
    </GalleryImage>
  );
}
