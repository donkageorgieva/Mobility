import { TableRow, TableCell } from "@mui/material";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";

import React from "react";
const TableRows = (props) => {
  const singleColRows = props.rowInfo.map((row) => {
    return (
      <TableRow
        key={row.id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        component="td"
      >
        <TableCell component="div" scope="row" sx={{ p: 1 }}>
          <div style={{ gap: "0.5em" }} className="flex">
            <DirectionsBusIcon sx={{ color: `#0092DA !important` }} />

            <p>{row.name.toUpperCase()}</p>
          </div>
        </TableCell>
      </TableRow>
    );
  });

  return <React.Fragment>{singleColRows}</React.Fragment>;
};

export default TableRows;
