import { TableRow, TableCell } from "@mui/material";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import React from "react";
const TableRows = (props) => {
  const singleColRows = props.rowInfo.map((row) => {
    return (
      <TableRow
        key={row.id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          <div style={{ gap: "0.5em" }} className="flex">
            <DirectionsBusIcon sx={{ color: `#0092DA !important` }} />

            <p>{row.name.toUpperCase()}</p>
          </div>

          <ArrowDownwardIcon sx={{ color: `black !important` }} />
        </TableCell>
      </TableRow>
    );
  });

  return <React.Fragment>{singleColRows}</React.Fragment>;
};

export default TableRows;
