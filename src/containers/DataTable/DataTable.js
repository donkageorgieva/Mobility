import {
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Table,
  Paper,
} from "@mui/material";
const DataTable = (props) => {
  const rows = props.rows.map((row) => (
    <TableRow
      key={row.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {row.name}
      </TableCell>
    </TableRow>
  ));
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{props.title}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
