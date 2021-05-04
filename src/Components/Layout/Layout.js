import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import MenuList from "../MenuList/MenuList";
import Header from "../Header/Header";
import SideDrawer from "../SideDrawer/SideDrawer";
import { Container } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    display: "grid",
    marginTop: "4em",
    padding: theme.spacing(3),
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateAreas:
      "'control control control control' 'data data chart chart' 'table table table table'",
    gap: "16px 8px",
  },
}));

export default function Layout({ ...props }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      <SideDrawer open={open} handleDrawerClose={handleDrawerClose}>
        <MenuList />
      </SideDrawer>

      <Container maxWidth="lg" className={classes.content}>
        {props.children}
      </Container>
    </div>
  );
}
