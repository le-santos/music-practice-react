import { Box, makeStyles } from "@material-ui/core";
import ControlButton from "../ControlButton/ControlButton";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import MusicVideoIcon from "@material-ui/icons/MusicVideo";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import RouterLink from "../RouterLink/RouterLink";

const useStyles = makeStyles((theme) => ({
  box: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    gridArea: "control",
  },
}));

export default function HomeControls() {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <RouterLink to="new_practice_session">
        <ControlButton
          name={"Nova Sessão"}
          icon={<NoteAddIcon />}
          color="secondary"
        />
      </RouterLink>
      <RouterLink to="new_music">
        <ControlButton
          name={"Adicionar Música"}
          icon={<MusicNoteIcon />}
          color="primary"
        />
      </RouterLink>
      <RouterLink to="musics">
        <ControlButton
          name={"Meu Repertório"}
          icon={<MusicVideoIcon />}
          color="primary"
        />
      </RouterLink>
    </Box>
  );
}
