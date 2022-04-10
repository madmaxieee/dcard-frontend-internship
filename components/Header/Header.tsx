import type { FC } from "react";

import AppBar from "@mui/material/AppBar";
import Breadcrumbs from "@mui/material/Breadcrumbs";

import { Box, Stack, Toolbar, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { NavLink } from "../NavLink";
import { SearchBox } from "./SearchBox";

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
          <Stack direction="row" gap="1em" alignItems="center">
            <IconButton onClick={()=>{}}>
              <HomeIcon />
            </IconButton>
            <Breadcrumbs aria-label="breadcrumb">
              <NavLink href={`/users/${username}/repos`}>{username}</NavLink>
              {repoName && (
                <NavLink href={`/users/${username}/repos/${repoName}`}>
                  {repoName}
                </NavLink>
              )}
            </Breadcrumbs>
          </Stack>
          <SearchBox />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
