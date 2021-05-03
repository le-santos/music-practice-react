import { Paper, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "0.7rem",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  number: {
    fontSize: "1.3rem",
  },
}));

export default function InfoRow({ content, subtitle, data }) {
  const classes = useStyles();

  return (
    <Paper variant="outlined" square className={classes.paper}>
      <div>
        <Typography variant="body1">{content}</Typography>
        {subtitle.length !== 0 && (
          <Typography variant="subtitle2">{subtitle}</Typography>
        )}
      </div>
      <Typography className={classes.number}>{data}</Typography>
    </Paper>
  );
}
