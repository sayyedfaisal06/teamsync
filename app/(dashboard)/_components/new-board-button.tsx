"use client";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { PlusIcon } from "lucide-react";
import React from "react";
import { toast } from "sonner";

type NewBoardButtonProps = {
  orgId: string;
  disabled?: boolean;
};

const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClickHandler = () => {
    mutate({
      orgId,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board created");
      })
      .catch(() => toast.error("Failed to create board"));
  };

  return (
    <button
      disabled={pending || disabled}
      onClick={onClickHandler}
      className={cn(
        "col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6",
        {
          "opacity-75 hover:bg-blue-600 cursor-not-allowed":
            pending || disabled,
        }
      )}
    >
      <div />
      <PlusIcon className="h-12 w-12 text-white stroke-1" />
      <p className="text-sm font-light text-white">New board</p>
    </button>
  );
};

export default NewBoardButton;
