import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";

import EmployeeService from "../service/EmployeeService";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const useStyles = makeStyles((theme) => ({
  div: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Employee = () => {
  //const classes = useStyles();

  const [empleados, setEmpleados] = useState([]);
  useEffect(() => {
    EmployeeService.getUsers().then((response) => {
      const a = response.data;
      setEmpleados(a);
    });
  }, []);

  return (
    <div className="container">
      <div>
        <Typography component="h1" variant="h5">
          Empleados
        </Typography>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">Nombre</StyledTableCell>
              <StyledTableCell align="right">Apellido</StyledTableCell>
              <StyledTableCell align="right">
                Fecha de nacimiento
              </StyledTableCell>
              <StyledTableCell align="right">Sexo</StyledTableCell>
              <StyledTableCell align="right">Fecha de ingreso</StyledTableCell>
              <StyledTableCell align="right">Estrato</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {empleados.map((row) => (
              <StyledTableRow key="{item}">
                <StyledTableCell component="th" scope="row">
                  {row.nombre}
                </StyledTableCell>
                <StyledTableCell align="right">{row.apellido}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.fechaNacimiento}
                </StyledTableCell>
                <StyledTableCell align="right">{row.sexo}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.fechaIngreso}
                </StyledTableCell>
                <StyledTableCell align="right">{row.estrato}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Employee;
