import React from "react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  return (
    <>
      <aside
        className={cn(
          "group/sidebar h-full bg-secondary overflow-y-auto relative flex w-60 flex-col z-[99999]"
        )}
      >
        <div></div>
      </aside>
    </>
  );
};

export default Navigation;
