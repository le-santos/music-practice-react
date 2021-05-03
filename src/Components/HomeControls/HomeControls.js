import { Box, makeStyles } from "@material-ui/core";
import ControlButton from "../ControlButton/ControlButton";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import MusicVideoIcon from "@material-ui/icons/MusicVideo";
import NoteAddIcon from "@material-ui/icons/NoteAdd";

const useStyles = makeStyles((theme) => ({
  box: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
  },
}));

export default function HomeControls() {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <ControlButton
        name={"Nova Sessão"}
        icon={<NoteAddIcon />}
        color="secondary"
      />
      <ControlButton
        name={"Adicionar Música"}
        icon={<MusicNoteIcon />}
        color="primary"
      />
      <ControlButton
        name={"Meu Repertório"}
        icon={<MusicVideoIcon />}
        color="primary"
      />
    </Box>
  );
}
