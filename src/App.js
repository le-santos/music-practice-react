import HomeControls from "./Components/HomeControls/HomeControls";
import InfoBox from "./Components/InfoBox/InfoBox";
import Layout from "./Components/Layout/Layout";
import SessionsTable from "./Components/SessionTable/SessionsTable";
import Routes from "./main/Routes";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes />
      </Layout>
    </div>
  );
}

export default App;
