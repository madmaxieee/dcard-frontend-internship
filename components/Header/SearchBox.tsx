import { useState } from "react";

import { useRouter } from "hooks";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBox = () => {
  const { navigate } = useRouter();

  const [username, setUserName] = useState<string>("");

  const handleSearch = () => navigate(`/users/${username}/repos`);

  return (
    <Paper
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 300 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Github users"
        value={username}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton sx={{ p: "10px" }} onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
