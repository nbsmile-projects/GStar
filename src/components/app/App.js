import { useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import MenuBar from "../menuBar/MenuBar";
import MainHeader from "../mainHeader/MainHeader";
import BicycleCatalog from "../bicycleCatalog/BicycleCatalog";
import BicyclePartsCatalog from "../bicyclePartsCatalog/bicyclePartsCatallog";
import BicycleAccsCatalog from "../bicycleAccsCatalog/BicycleAccsCatalog";
import ModalWindow from "../modalWindow/ModalWindow";

import '../../baseStyles.scss';
import styles from './App.module.scss';

function App() {

  const [modalActive, setModalActive] = useState(false);

  const modalWindow = modalActive ? <ModalWindow active={modalActive} setActive={setModalActive} /> : null;

  return (
    <div className={styles.App}>
      <Router>
        <MenuBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<MainHeader />} />
            <Route path="/bicycles" element={<BicycleCatalog active={modalActive} setActive={setModalActive} />} />
            <Route path="/bicycleParts" element={<BicyclePartsCatalog />} />
            <Route path="/bicycleAccs" element={<BicycleAccsCatalog />} />
          </Routes>
        </div>
      </Router>
      {modalWindow}
    </div >
  );
}

export default App;
