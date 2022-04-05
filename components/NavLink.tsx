import type { FC } from "react";

import { useRouter } from "next/router";
import { Link, Typography } from "@mui/material";

export const NavLink: FC<{ href: string }> = ({ href, children }) => {
  const router = useRouter();
  const handleNavLink = () => {
    router.push(href);
  };
  return (
    <Link onClick={handleNavLink} sx={{ cursor: "pointer" }}>
      <Typography>{children}</Typography>
    </Link>
  );
};
