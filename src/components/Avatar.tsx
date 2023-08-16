import React from "react";

type Props = {
  img: string;
  alt?: string;
};

// React.FC is for return type and Props is for arguments type
const Avatar: React.FC<Props> = ({ img, alt }) => {
   return (
      <div className="rounded-full overflow-hidden w-full pt-[100%] relative">
          <div className="absolute inset-0">
              <img src={img} alt={alt || img} />
          </div>
      </div>
  );
};

export default Avatar


// <Avatar img='.jpg'  alt='image' />