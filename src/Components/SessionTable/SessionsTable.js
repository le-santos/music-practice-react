import React, { useEffect, useState } from "react";
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
import fetchApiData from "../../services/fetchApiData";

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
  const [praticeSessions, setPracticeSessions] = useState([]);

  const getDataFromApi = async () => {
    const endpoint = "practice_sessions";
    const data = await fetchApiData(endpoint);
    setPracticeSessions(data);
  };

  useEffect(() => {
    getDataFromApi();
  }, []);

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
          {praticeSessions.map((session) => (
            <TableRow key={session.id}>
              <TableCell>{session.created_at}</TableCell>
              <TableCell align="right">{session.status}</TableCell>
              <TableCell align="right">{session.musics}</TableCell>
              <TableCell align="right">{session.attachments}</TableCell>
              <TableCell align="right">
                {session.status === "pendente" ? practiceButton : detailsButton}
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
