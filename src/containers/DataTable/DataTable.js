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
  Typography,
} from "@mui/material";

import { primaryColor } from "../../assets/theme/theme";
import TableRows from "../../components/TableRows/TableRows";

const DataTable = (props) => {
  const selectedRoute = useSelector((state) => state.routes.displayedRoute);
  const allRoutes = useSelector((state) => state.routes.routes);
  return (
    <TableContainer
      component={Paper}
      sx={{
        my: {
          md: 10,
          sx: 5,
        },
        py: 10,
        boxShadow: "none",
      }}
    >
      <Box
        sx={{
          width: {
            sx: "100%",
            md: "50%",
          },
          margin: "0 auto",
          boxShadow: {
            md: 1,
            xs: "none",
          },
          padding: {
            xs: "0.50em",
            md: "2em",
          },
        }}
      >
        <Table
          aria-label="simple table "
          sx={{
            minWidth: "100%",

            borderCollapse: "collapse",
            margin: "0 auto",
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
                      py: 1,
                      px: 4,
                    },
                    color: primaryColor,
                    fontWeight: 600,
                  }}
                  component="th"
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
                    component="th"
                    key={route.id}
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
                <TableCell component="tr" key={route.id}>
                  <TableRows
                    rowInfo={route.stops}
                    wrapper="td"
                    component="div"
                  />
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
