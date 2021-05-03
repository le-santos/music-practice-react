import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function ControlButton({ name, icon, color }) {
  const classes = useStyles();

  return (
    <Button
      variant="outlined"
      size="large"
      className={classes.margin}
      startIcon={icon}
      color={color}
    >
      {name}
    </Button>
  );
}
