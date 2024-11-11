import { SxProps } from "@/theme/types";

export const styles: Record<"children", SxProps> = {
  children: (theme) => ({
    marginTop: theme.spacing(8),
  }),
};
