import "./App.css";
import Header from "./Components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import PunkList from "./Components/PunkList";
import { Main } from "./Components/Main";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        `https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0xd83143AE93b9bCFfa5360b9dbaeA25Cea5e1364f`
      );
      // console.log("working");
      setPunkListData(openseaData.data.assets);
    };
    return getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      <Main punkListData={punkListData} selectedPunk={selectedPunk} />
      {punkListData.length > 0 && (
        <>
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
}

export default App;
