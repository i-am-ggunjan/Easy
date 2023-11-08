// ImageComponent.js
import Image from 'next/image';

const ImageComponent = ({ src, width, height }) => {
  return (
    <div style={{ width, height }}>
      <Image
        src={{ src }}
        alt="Image"
        // layout={width && height ? 'fixed' : 'responsive'}
        width={width || 200}
        // height={height || '100%'}
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
};

export default ImageComponent;
