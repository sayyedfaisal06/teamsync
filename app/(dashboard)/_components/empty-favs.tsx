import Image from "next/image";
import React from "react";

const EmptyFavourites = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/empty-favs.svg" height={140} width={140} alt="" />
      <h2 className="text-2xl font-semibold mt-6">No favourite boards!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Add baords to favourites list
      </p>
    </div>
  );
};

export default EmptyFavourites;
