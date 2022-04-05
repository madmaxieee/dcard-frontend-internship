import { FC } from "react";

import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Skeleton from "@mui/material/Skeleton";

export const RowSkeleton: FC = () => {
  return (
    <TableRow>
      {Array.from({ length: 3 }, (_, i) => (
        <CellSkeleton key={i} />
      ))}
    </TableRow>
  );
};

const CellSkeleton: FC = () => (
  <TableCell>
    <Skeleton animation="wave" />
  </TableCell>
);
