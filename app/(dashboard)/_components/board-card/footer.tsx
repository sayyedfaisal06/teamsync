import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import React from "react";

type FooterProps = {
  isFavourite: boolean;
  title: string;
  authorLabel: string;
  createdAtLabel: string;
  onClick: () => void;
  disabled: boolean;
};

const Footer = ({
  authorLabel,
  createdAtLabel,
  disabled,
  isFavourite,
  onClick,
  title,
}: FooterProps) => {
  return (
    <div className="relative bg-white p-3">
      <p className="text-[13px] truncate max-w-[calc(100% - 20px)]">{title}</p>
      <p className="transition-opacity text-[11px] text-muted-foreground truncate">
        {authorLabel}, {createdAtLabel}
      </p>
      <button
        className={cn(
          "opacity-0 group-hover:opacity-100 transition absolute top-3 right-3 text-muted-foreground hover:text-blue-600",
          {
            "cursor-not-allowed opacity-75": disabled,
          }
        )}
        disabled={disabled}
        onClick={onClick}
      >
        <StarIcon
          className={cn("w-4 h-4", {
            "fill-blue-600 text-blue-600": isFavourite,
          })}
        />
      </button>
    </div>
  );
};

export default Footer;
