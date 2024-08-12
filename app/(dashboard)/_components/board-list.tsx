"use client";

import React from "react";
import EmptySearch from "./empty-search";
import EmptyFavourites from "./empty-favs";
import EmptyBoards from "./empty-boards";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import BoardCard from "./board-card";
import NewBoardButton from "./new-board-button";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favourites?: string;
  };
}

const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = useQuery(api.boards.get, { orgId });

  if (data === undefined) {
    return (
      <div>
        <h2 className="text-3xl">
          {query.favourites ? "Favourite boards" : "Team boards"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
          <NewBoardButton orgId={orgId} disabled={true} />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
        </div>
      </div>
    );
  }
  if (!data?.length && query.search) {
    return <EmptySearch />;
  }

  if (!data?.length && query.favourites) {
    return <EmptyFavourites />;
  }

  if (!data?.length) {
    return <EmptyBoards />;
  }
  console.log(data);

  return (
    <div>
      <h2 className="text-3xl">
        {query.favourites ? "Favourite boards" : "Team boards"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
        <NewBoardButton orgId={orgId} />
        {data.map(
          ({
            _id,
            title,
            authorId,
            imageUrl,
            authorName,
            orgId,
            _creationTime,
          }) => (
            <BoardCard
              key={_id}
              id={_id}
              title={title}
              imageUrl={imageUrl}
              authorId={authorId}
              authorName={authorName}
              orgId={orgId}
              createdAt={_creationTime}
              isFavourite={false}
            />
          )
        )}
      </div>
    </div>
  );
};

export default BoardList;
