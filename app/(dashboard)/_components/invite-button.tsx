import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { OrganizationProfile } from "@clerk/nextjs";
import { PlusIcon } from "lucide-react";
import React from "react";

type Props = {};

const InviteButton = (props: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <PlusIcon className="h-4 w-4 mr-2" />
          Invite members
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent b-0 max-w-[880px]">
        <OrganizationProfile
          routing="hash"
          appearance={{
            elements: {
              cardBox: {
                maxHeight: "400px",
              },
            },
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default InviteButton;
