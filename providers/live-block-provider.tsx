"use client";
import { LiveblocksProvider } from "@liveblocks/react";
import React from "react";

type LiveBlocksProviderWrapperProps = {
  children: React.ReactNode;
};

const LiveBlocksProviderWrapper = ({
  children,
}: LiveBlocksProviderWrapperProps) => {
  return (
    <LiveblocksProvider publicApiKey="pk_dev_icsHEv2lpDy4Dfo3ArELCDv0AiaZgNttxX6NpsMmOIxz586a4qsTBA3r4OQlaI19">
      {children}
    </LiveblocksProvider>
  );
};

export default LiveBlocksProviderWrapper;
