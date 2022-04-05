import type { RepoInfo } from "types";

import React, { useState, useRef, useEffect, useCallback, FC } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import { RowSkeleton } from "./RowSkeleton";
import { NavLink } from "components";

import { v4 as uuid } from "uuid";

import { useUserRepos } from "hooks";

export const RepoList: FC<{ username: string }> = ({ username }) => {
  const tableRef = useRef<HTMLDivElement>(null);
  const [rows, setRows] = useState<RepoInfo[]>([]);
  const [currentRange, setCurrentRange] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [distanceBottom, setDistanceBottom] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const { getRepos } = useUserRepos(username);

  const loadMore = useCallback(
    (range: number) => {
      const loadItems = async () => {
        const newRows = await getRepos([range, range + 10]);
        setLoading(false);
        setCurrentRange(range + 10);
        if (newRows.length === 0) setHasMore(false);
        else setRows((oldRown) => [...oldRown.slice(0, range), ...newRows]);
      };
      setLoading(true);
      loadItems();
    },
    [getRepos]
  );

  const scrollListener = useCallback(() => {
    if (tableRef.current !== null) {
      let bottom =
        tableRef.current.scrollHeight - tableRef.current.clientHeight;

      if (!distanceBottom) {
        setDistanceBottom(Math.round((bottom / 100) * 20));
      }
      if (
        tableRef.current.scrollTop > bottom - distanceBottom &&
        hasMore &&
        !loading
      ) {
        loadMore(currentRange);
      }
    }
    console.log("scroll!");
  }, [hasMore, loadMore, loading, currentRange, distanceBottom]);

  useEffect(() => {
    loadMore(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const tableElement = tableRef.current;
    tableElement?.addEventListener("scroll", scrollListener);
    return () => {
      tableElement?.removeEventListener("scroll", scrollListener);
    };
  });

  return (
    <Box>
      <TableContainer
        ref={tableRef}
        sx={{
          margin: "auto",
          maxHeight: "500px",
          height: "100%",
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>stars</TableCell>
              <TableCell>description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              ...rows.map(({ name, description, stargazers_count }) => (
                <TableRow key={uuid()}>
                  <TableCell>
                    <NavLink href={`/users/${username}/repos/${name}`}>
                      {name}
                    </NavLink>
                  </TableCell>
                  <TableCell>
                    <Box width="5em">⭐ {stargazers_count}</Box>
                  </TableCell>
                  <TableCell>{description}</TableCell>
                </TableRow>
              )),
              loading &&
                Array.from({ length: 3 }, () => <RowSkeleton key={uuid()} />),
            ]}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
