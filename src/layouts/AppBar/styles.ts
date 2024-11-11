import { SxProps } from "@/theme/types";

export const styles: Record<
  "root" | "logo" | "hamburger" | "link" | "linkBox" | "profileMenu",
  SxProps
> = {
  root: (theme) => ({
    marginTop: theme.spacing(8),
  }),
  logo: (theme) => ({
    mr: theme.spacing(2),
    display: { xs: "none", md: "flex" },
    textDecoration: "none",
  }),
  hamburger: () => ({ flexGrow: 1, display: { xs: "flex", md: "none" } }),
  link: (theme) => ({ my: theme.spacing(2), display: "block" }),
  linkBox: () => ({ flexGrow: 1, display: { xs: "none", md: "flex" } }),
  profileMenu: (theme) => ({ mt: theme.spacing(5) }),
};
