import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import MenuBar from "../menuBar/MenuBar";
import MainHeader from "../mainHeader/MainHeader";
import BicycleCatalog from "../bicycleCatalog/BicycleCatalog";
import BicyclePartsCatalog from "../bicyclePartsCatalog/bicyclePartsCatallog";
import BicycleAccsCatalog from "../bicycleAccsCatalog/BicycleAccsCatalog";

import '../../baseStyles.scss';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <MenuBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<MainHeader />} />
            <Route path="/bicycles" element={<BicycleCatalog />} />
            <Route path="/bicycleParts" element={<BicyclePartsCatalog />} />
            <Route path="/bicycleAccs" element={<BicycleAccsCatalog />} />
          </Routes>
        </div>
      </Router>
    </div >
  );
}

export default App;
