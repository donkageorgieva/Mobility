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
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { primaryColor } from "../../assets/theme/theme";

const DataTable = (props) => {
  const selectedRoute = useSelector((state) => state.routes.displayedRoute);

  const rows =
    selectedRoute.stops &&
    selectedRoute.stops.map((row) => (
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
    ));
  return (
    <TableContainer component={Paper}>
      <Box>
        <Table sx={{ minWidth: 650 }} aria-label="simple table ">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ fontSize: "20px", color: primaryColor, fontWeight: 600 }}
              >
                {selectedRoute.name && selectedRoute.name.toUpperCase()}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{selectedRoute && rows}</TableBody>
        </Table>
      </Box>
    </TableContainer>
  );
};

export default DataTable;
