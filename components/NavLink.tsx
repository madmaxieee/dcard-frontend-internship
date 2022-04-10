import type { FC } from "react";

import { useRouter } from "hooks";
import { Link, Typography } from "@mui/material";

export const NavLink: FC<{ href: string }> = ({ href, children }) => {
  const { navigate } = useRouter();
  const handleNavLink = () => navigate(href);
  return (
    <Link onClick={handleNavLink} sx={{ cursor: "pointer" }}>
      <Typography>{children}</Typography>
    </Link>
  );
};
