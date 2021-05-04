import { Paper, makeStyles, Typography } from "@material-ui/core";
import Title from "../Title/Title";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "0.7rem",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  number: {
    fontSize: "1.3rem",
    padding: "0 0.5rem",
  },
}));

export default function InfoRow({ content, subtitle, data }) {
  const classes = useStyles();

  return (
    <Paper variant="outlined" square className={classes.paper}>
      <div>
        <Title>{content}</Title>
        {subtitle.length !== 0 && (
          <Typography variant="subtitle2">{subtitle}</Typography>
        )}
      </div>
      <Typography className={classes.number}>{data}</Typography>
    </Paper>
  );
}
