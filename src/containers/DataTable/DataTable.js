import { useSelector } from "react-redux";
import {
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Table,
  Paper,
  Box,
} from "@mui/material";
import { primaryColor } from "../../assets/theme/theme";
const DataTable = (props) => {
  const routes = useSelector((state) => state.routes.routes);
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
      <Box>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: "20px", color: primaryColor }}>
                {props.title}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{rows}</TableBody>
        </Table>
      </Box>
    </TableContainer>
  );
};

export default DataTable;
