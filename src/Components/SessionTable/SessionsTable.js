import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, Link } from "@material-ui/core";
import Title from "../Title/Title";

const useStyles = makeStyles((theme) => ({
  container: {
    gridArea: "table",
    padding: theme.spacing(2),
  },
  tableHeading: {
    fontWeight: 600,
  },
  seeMore: {
    marginTop: theme.spacing(2),
  },
}));

function createData(id, date, status, musics, attachments) {
  return { id, date, status, musics, attachments };
}

const rows = [
  createData(0, "03/05/2021", "pendente", 2, 4),
  createData(1, "03/05/2021", "completa", 3, 3),
  createData(2, "03/05/2021", "completa", 2, 2),
  createData(3, "03/05/2021", "completa", 3, 6),
  createData(4, "03/05/2021", "completa", 1, 4),
];

const detailsButton = (
  <Button variant="contained" color="primary">
    Detalhes
  </Button>
);

const practiceButton = (
  <Button variant="contained" color="secondary">
    Estudar
  </Button>
);

export default function SessionsTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Title>Sessões de Estudo</Title>
      <Table size="small">
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell className={classes.tableHeading}>Data</TableCell>
            <TableCell className={classes.tableHeading} align="right">
              Status
            </TableCell>
            <TableCell className={classes.tableHeading} align="right">
              Músicas
            </TableCell>
            <TableCell className={classes.tableHeading} align="right">
              Anexos
            </TableCell>
            <TableCell
              className={classes.tableHeading}
              align="right"
            ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.musics}</TableCell>
              <TableCell align="right">{row.attachments}</TableCell>
              <TableCell align="right">
                {row.status === "pendente" ? practiceButton : detailsButton}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link
          color="primary"
          href="#"
          onClick={(event) => event.preventDefault()}
        >
          Veja a lista completa...
        </Link>
      </div>
    </TableContainer>
  );
}
