"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Overlay from "./overlay";
import { useAuth } from "@clerk/nextjs";
import { formatDistanceToNow } from "date-fns";
import Footer from "./footer";
import { Skeleton } from "@/components/ui/skeleton";
import Actions from "@/components/actions";
import { MoreHorizontalIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

type BoardCardProps = {
  id: string;
  title: string;
  authorId: string;
  imageUrl: string;
  authorName: string;
  orgId: string;
  createdAt: number;
  isFavourite: boolean;
};

const BoardCard = (props: BoardCardProps) => {
  const {
    authorId,
    authorName,
    createdAt,
    id,
    imageUrl,
    isFavourite,
    orgId,
    title,
  } = props;

  const { userId } = useAuth();
  const authorLabel = userId === authorId ? "You" : authorName;
  const createdAtLabel = formatDistanceToNow(createdAt, { addSuffix: true });

  return (
    <Link href={`/board/${orgId}`}>
      <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
        <div className="relative flex-1 bg-amber-50">
          <Image alt={title} src={imageUrl} fill className="object-fit" />
          <Overlay />
          <Actions id={id} title={title} side="right">
            <Button
              size="icon"
              className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-2 outline-none rounded-full bg-transparent hover:bg-black/20"
            >
              <MoreHorizontalIcon className="text-white opacity-75 hover:opacity-100 transition-opacity" />
            </Button>
          </Actions>
        </div>
        <Footer
          isFavourite={isFavourite}
          title={title}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          onClick={() => {}}
          disabled={false}
        />
      </div>
    </Link>
  );
};

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className="aspect-[100/127] rounded-lg overflow-hidden">
      <Skeleton className="h-full" />
    </div>
  );
};

export default BoardCard;
