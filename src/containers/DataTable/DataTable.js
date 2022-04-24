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
import TableRows from "../../components/TableRows/TableRows";
const DataTable = (props) => {
  const selectedRoute = useSelector((state) => state.routes.displayedRoute);
  const allRoutes = useSelector((state) => state.routes.routes);
  return (
    <TableContainer component={Paper} sx={{ mt: 10, pt: 5 }}>
      <Box>
        <Table sx={{ minWidth: 650 }} aria-label="simple table ">
          <TableHead>
            <TableRow>
              {selectedRoute.stops ? (
                <TableCell
                  sx={{
                    fontSize: "20px",
                    color: primaryColor,
                    fontWeight: 600,
                  }}
                >
                  {selectedRoute.name.toUpperCase()}
                </TableCell>
              ) : (
                allRoutes.map((route) => (
                  <TableCell
                    sx={{
                      fontSize: "20px",
                      color: primaryColor,
                      fontWeight: 600,
                    }}
                  >
                    {route.name.toUpperCase()}
                  </TableCell>
                ))
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {selectedRoute.stops ? (
              <TableRows rowInfo={selectedRoute.stops} />
            ) : (
              allRoutes.map((route) => (
                <TableCell>
                  <TableRows rowInfo={route.stops} />
                </TableCell>
              ))
            )}
          </TableBody>
        </Table>
      </Box>
    </TableContainer>
  );
};

export default DataTable;
