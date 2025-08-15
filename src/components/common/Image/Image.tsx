import { useState } from "react";

interface ImageProps {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
}

const Image = ({
  src,
  width,
  height,
  alt = "",
  className = "",
}: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const containerClasses = `
    relative
    inline-block
    overflow-hidden
    ${width ? `w-[${width}px]` : "w-full"}
    ${height ? `h-[${height}px]` : "h-full"}
    ${className}
  `;

  const imageClasses = `
    ${width ? `w-[${width}px]` : "w-full"}
    ${height ? `h-[${height}px]` : "h-full"}
    object-cover
  `;

  return (
    <div className={containerClasses}>
      {isLoading && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-200 block animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        className={imageClasses}
        height={height}
        width={width}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default Image;
