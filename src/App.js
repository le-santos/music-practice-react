import HomeControls from "./Components/HomeControls/HomeControls";
import InfoBox from "./Components/InfoBox/InfoBox";
import Layout from "./Components/Layout/Layout";
import SessionsTable from "./Components/SessionTable/SessionsTable";

function App() {
  return (
    <div className="App">
      <Layout>
        <HomeControls />
        <InfoBox />
        <SessionsTable />
      </Layout>
    </div>
  );
}

export default App;
