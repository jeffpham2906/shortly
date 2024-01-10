import { memo } from "react";
function Image({ src, alt, className }) {
  return (
    <img src={src} alt={alt} className={`w-full h-full ${{ ...className }}`} />
  );
}

const ImageMemo = memo(Image);

export default ImageMemo;
