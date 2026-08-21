import NextJsImage from "./NextJsImage";

import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

interface Slide {
  src: string;
}

interface LightBoxProps {
  open: boolean;
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
  images: Slide[];
  startIndex: number;
}

const LightBox = ({ open, setClose, images, startIndex }: LightBoxProps) => {
  return (
    <div>
      <Lightbox
        styles={{ root: { "--yarl__color_backdrop": "rgba(0, 0, 0, .8)" } }}
        open={open}
        close={() => setClose(false)}
        slides={images}
        index={startIndex}
        render={{ slide: NextJsImage }}
        plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
      />
    </div>
  );
};

export default LightBox;
