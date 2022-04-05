import type { FC } from "react";

import AppBar from "@mui/material/AppBar";
import Breadcrumbs from "@mui/material/Breadcrumbs";

import { NavLink } from "../NavLink";
import { SearchBox } from "./SearchBox";
import { Box, Stack, Toolbar } from "@mui/material";

export const Header: FC<{ username: string; repoName?: string }> = ({
  username,
  repoName,
}) => {
  return (
    <AppBar position="static" color="transparent" sx={{ maxWidth: "100vw" }}>
      <Toolbar sx={{ minHeight: "6vh", width: "60vw", mx: "auto" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Breadcrumbs aria-label="breadcrumb">
            <NavLink href={`/users/${username}/repos`}>{username}</NavLink>
            {repoName && (
              <NavLink href={`/users/${username}/repos/${repoName}`}>
                {repoName}
              </NavLink>
            )}
          </Breadcrumbs>
          <SearchBox />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
