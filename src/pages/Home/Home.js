import { Fragment } from "react";
import HomeControls from "../../Components/HomeControls/HomeControls";
import InfoBox from "../../Components/InfoBox/InfoBox";
import SessionsTable from "../../Components/SessionTable/SessionsTable";

const Home = () => (
  <Fragment>
    <h2>Home</h2>
    <HomeControls />
    <InfoBox />
    <SessionsTable />
  </Fragment>
);

export default Home;
