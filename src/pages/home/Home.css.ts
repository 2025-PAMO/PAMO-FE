import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css"; 

export const homeStyle = style({
  backgroundColor: vars.color.primary,
  height: "100vh",
});
