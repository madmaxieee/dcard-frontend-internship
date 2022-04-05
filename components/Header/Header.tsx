import type { FC } from "react";

import AppBar from "@mui/material/AppBar";
import Breadcrumbs from "@mui/material/Breadcrumbs";

// import { Logo } from "components";
import { NavLink } from "../NavLink";
import { Box, Toolbar } from "@mui/material";

const pages = ["Home", "Dashboard"];

export const Header: FC<{ username: string; repoName?: string }> = ({
  username,
  repoName,
}) => {
  return (
    <AppBar position="static" color="transparent" sx={{ maxWidth: "100vw" }}>
      <Toolbar sx={{ minHeight: "6vh", width: "60vw", mx: "auto" }}>
        {/* <Logo />
        <Box
          sx={{
            display: "flex",
            ml: "2vw",
            gap: "1vw",
          }}
        >
          {pages.map((page) => (
            <NavLink key={page} href={page} />
          ))}
        </Box> */}
        <Breadcrumbs aria-label="breadcrumb">
          <NavLink href={`/users/${username}/repos`}>{username}</NavLink>
          {repoName && (
            <NavLink href={`/users/${username}/repos/${repoName}`}>
              {repoName}
            </NavLink>
          )}
        </Breadcrumbs>
      </Toolbar>
    </AppBar>
  );
};
