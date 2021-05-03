import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import AssessmentIcon from "@material-ui/icons/Assessment";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import SettingsIcon from "@material-ui/icons/Settings";
import MusicVideoIcon from "@material-ui/icons/MusicVideo";

export default function MenuList() {
  return (
    <List>
      <ListItem button key={"Busca"}>
        <ListItemIcon>
          <SearchIcon />
        </ListItemIcon>
        <ListItemText primary={"Busca"} />
      </ListItem>

      <ListItem button key={"Início"}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary={"Início"} />
      </ListItem>

      <ListItem button key={"Calendário"}>
        <ListItemIcon>
          <CalendarTodayIcon />
        </ListItemIcon>
        <ListItemText primary={"Calendário"} />
      </ListItem>

      <ListItem button key={"Estatísticas"}>
        <ListItemIcon>
          <AssessmentIcon />
        </ListItemIcon>
        <ListItemText primary={"Estatísticas"} />
      </ListItem>

      <ListItem button key={"Repertório"}>
        <ListItemIcon>
          <MusicVideoIcon />
        </ListItemIcon>
        <ListItemText primary={"Repertório"} />
      </ListItem>

      <ListItem button key={"Configurações"}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary={"Configurações"} />
      </ListItem>
    </List>
  );
}
