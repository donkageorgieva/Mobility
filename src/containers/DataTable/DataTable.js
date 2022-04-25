import { useSelector } from "react-redux";
import {
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper,
  Box,
  Table,
} from "@mui/material";

import { primaryColor } from "../../assets/theme/theme";
import TableRows from "../../components/TableRows/TableRows";

const DataTable = (props) => {
  const selectedRoute = useSelector((state) => state.routes.displayedRoute);
  const allRoutes = useSelector((state) => state.routes.routes);
  return (
    <TableContainer component={Paper} sx={{ mt: 10, pt: 5 }}>
      <Box>
        <Table
          aria-label="simple table "
          sx={{
            minWidth: "100%",

            borderCollapse: "collapse",
            margin: "0 auto",
            boxShadow: "1",
            tableLayout: "fixed",
          }}
        >
          <TableHead>
            <TableRow>
              {selectedRoute.stops ? (
                <TableCell
                  sx={{
                    fontSize: {
                      lg: "18px",
                      md: "14px",
                    },
                    color: primaryColor,
                    fontWeight: 600,
                  }}
                >
                  <p>{selectedRoute.name.toUpperCase()}</p>
                </TableCell>
              ) : (
                allRoutes.map((route) => (
                  <TableCell
                    sx={{
                      fontSize: {
                        lg: "18px",
                        md: "14px",
                      },
                      color: primaryColor,
                      fontWeight: 600,
                    }}
                  >
                    <p>{route.name.toUpperCase()}</p>
                  </TableCell>
                ))
              )}
            </TableRow>
          </TableHead>
          <TableBody sx={{ maxWidth: "100%", fontSize: "14px" }}>
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
