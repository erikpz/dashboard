import { Button } from "./Button";
import { TextField } from "./TextField";

export const componentsOverride = (theme: any) => ({
  ...Button(theme),
  ...TextField(theme)
});
