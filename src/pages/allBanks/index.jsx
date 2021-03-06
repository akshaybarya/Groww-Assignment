import React, { useEffect, useState, useMemo } from "react";
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@material-ui/core";
import Spinner from "../../components/common/spinner/Spinner";
import TableComponent from "../../components/allBanks/table/TableComponent";
import Appbar from "../../components/allBanks/appbar/Appbar";
import { useDebounce } from "../../utils/useDebouce";
import { fetchDataFromLocalStorge } from "../../utils/localStorageFunctions";
import { useStyles } from "./Styles";

const tableHeadings = [
  "BANK",
  "IFSC",
  "BRANCH",
  "BANK ID",
  "ADDRESS",
  "ADD TO FAVOURITE",
];

const AllBanks = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [allBankData, setAllBankData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("bank_name");
  const [city, setCity] = useState("Mumbai");
  const [tableHeadClassName, setTableHeadClassName] =
    useState("TableHeadActive");
  const debouncedTerm = useDebounce(search, 500);

  // Filetering functions

  const filteredBanks = useMemo(() => {
    if (!search) return allBankData;

    return allBankData.filter((bank) => {
      const lowerCaseValue = bank[type.toLowerCase()].toString().toLowerCase();

      return lowerCaseValue.includes(debouncedTerm.toLowerCase());
    });
  }, [debouncedTerm, type, allBankData.length]);

  // getting The Details of Banks
  useEffect(() => {
    setLoading(true);
    const t = async () => {
      const res = await fetchDataFromLocalStorge(city);
      setAllBankData(res);
      setCurrentData(res.slice(0, 10));
      setLoading(false);
    };
    t();
  }, [city]);

  useEffect(() => {
    if (filteredData)
      setCurrentData(
        filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      );
  }, [page, allBankData, filteredData, rowsPerPage]);

  //delay in search
  useEffect(() => {
    setFilteredData(filteredBanks);
    if (filteredBanks.length === 0) {
      setPage(0);
    }
  }, [filteredBanks]);

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
    <Container className={classes.Container}>
      <Appbar
        search={search}
        setSearch={setSearch}
        type={type}
        setType={setType}
        city={city}
        setCity={setCity}
      />
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
            {currentData &&
              currentData.map((data) => {
                return (
                  <TableComponent
                    data={data}
                    tableHeadClassName={tableHeadClassName}
                    key={data.ifsc}
                  />
                );
              })}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 15, 20]}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          className={classes.TableFooter}
        />
      </TableContainer>
    </Container>
  );
};

export default AllBanks;
