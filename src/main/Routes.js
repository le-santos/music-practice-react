import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Musics from "../pages/Musics/Musics";
import PracticeSessions from "../pages/PracticeSessions/PracticeSessions";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/musics" component={Musics} />
      <Route path="/practice_sessions" component={PracticeSessions} />
    </Switch>
  );
}
