import { makeStyles, Box } from "@material-ui/core";
import InfoRow from "./InfoRow";

const useStyles = makeStyles((theme) => ({
  box: {
    width: "100%",
    display: "flex",
    flexFlow: "column",
    justifyContent: "space-around",
    gridArea: "data",
  },
}));

export default function InfoBox() {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <InfoRow
        content={"Total de Sessões"}
        subtitle={"Últimos 30 dias"}
        data={"20"}
      />
      <InfoRow content={"Repertório Total"} subtitle={""} data={"25"} />
      <InfoRow
        content={"Horas de Estudo"}
        subtitle={"Últimos 30 dias"}
        data={"80"}
      />
    </Box>
  );
}
