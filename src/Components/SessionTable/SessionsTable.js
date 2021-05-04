import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    gridArea: "table",
  },
});

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
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={"5"}>Sessões de estudo</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Músicas</TableCell>
            <TableCell align="right">Anexos</TableCell>
            <TableCell align="right"></TableCell>
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
    </TableContainer>
  );
}
