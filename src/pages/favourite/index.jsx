import {
  Container,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Paper,
  TableBody,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import TableComponent from "../../components/favourite/table/TableComponent";
import Spinner from "../../components/common/spinner/Spinner";
import Appbar from "../../components/favourite/appbar/Appbar";
import { fetchFavourite } from "../../utils/localStorageFunctions";
import { FolderOpen } from "@material-ui/icons";
import { useStyles } from "./Styles";

const tableHeadings = [
  "BANK",
  "IFSC",
  "BRANCH",
  "BANK ID",
  "ADDRESS",
  "REMOVE",
];

const Favourite = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [bankData, setbankData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [page, setPage] = useState(0);
  const [sortValue, setSortValue] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [tableHeadClassName, setTableHeadClassName] =
    useState("TableHeadActive");

  // getting data From Localstorage and seting to State
  useEffect(() => {
    setLoading(true);
    const data = fetchFavourite();
    setbankData(data ? data : []);
    setLoading(false);
  }, []);

  useEffect(() => {
    setCurrentData(
      bankData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    );
  }, [page, bankData, rowsPerPage]);

  const sort = (e) => {
    setSortValue(!sortValue);
    setbankData([...bankData].reverse());
  };

  // Pagination Functions

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <Container className={classes.Container}>
        <Appbar sortValue={sortValue} setSortValue={sort} />
        <TableContainer
          component={Paper}
          onMouseEnter={(e) => setTableHeadClassName("TableHeadIncative")}
          onMouseLeave={(e) => setTableHeadClassName("TableHeadActive")}
        >
          <Table className={classes.Table}>
            <colgroup>
              <col width="20%" />
              <col width="9%" />
              <col width="15%" />
              <col width="9%" />
              <col width="45%" />
              <col width="12%" />
            </colgroup>
            <TableHead className={classes.TableHead}>
              <TableRow>
                {tableHeadings.map((heading) => {
                  return (
                    <TableCell
                      key={heading}
                      align="center"
                      padding={
                        heading === "ADD TO FAVOURITE" ? "checkbox" : "normal"
                      }
                    >
                      <Typography
                        variant="body1"
                        component="h4"
                        color="inherit"
                        className={classes.TableHeading}
                      >
                        {heading}
                      </Typography>
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>

            <TableBody>
              {(!bankData || bankData.length === 0) && (
                <TableRow>
                  <TableCell colSpan={6} align="center" style={{ height: 300 }}>
                    <FolderOpen size="large" fontSize="large" />

                    <br />
                    <Typography variant="h5" align="center">
                      NO FAVOURITES
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
              {currentData &&
                currentData.map((data) => {
                  return (
                    <TableComponent
                      data={data}
                      key={data.ifsc}
                      functions={{ bankData, setbankData }}
                      tableHeadClassName={tableHeadClassName}
                    />
                  );
                })}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[10, 15, 20]}
            component="div"
            count={bankData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            className={classes.TableFooter}
          />
        </TableContainer>
      </Container>
    </div>
  );
};

export default Favourite;
