import { Breakpoint, Theme, useMediaQuery } from "@mui/material";
import { FC } from "react";

type WidthMQ =
  | "xsDown"
  | "smDown"
  | "mdDown"
  | "lgDown"
  | "xlDown"
  | "xsUp"
  | "smUp"
  | "mdUp"
  | "lgUp"
  | "xlUp";

interface HiddenProps {
  width: WidthMQ;
  children: any;
}

export const Hidden: FC<HiddenProps> = ({ width, children }) => {
  const breakpoint = width.substring(0, 2);

  const hiddenUp = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up(breakpoint as Breakpoint)
  );
  const hiddenDown = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down(breakpoint as Breakpoint)
  );

  if (width.includes("Down")) {
    return hiddenDown ? null : children;
  }

  if (width.includes("Up")) {
    return hiddenUp ? null : children;
  }

  return null;
};
