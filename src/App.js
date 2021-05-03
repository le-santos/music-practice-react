import HomeControls from "./Components/HomeControls/HomeControls";
import InfoBox from "./Components/InfoBox/InfoBox";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <HomeControls />
        <InfoBox />
      </Layout>
    </div>
  );
}

export default App;
