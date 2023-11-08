import React from 'react';

export default function HeaderBannerTitle({ title }) {
  return (
    <div className="relative">
      <img src="/BlogImage.png" className="w-full h-36 object-cover" />
      <h1 className="absolute left-44 bottom-[44%] font-extrabold text-3xl">
        {title}
      </h1>
    </div>
  );
}
