import { useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import MenuBar from "../menuBar/MenuBar";
import MainHeader from "../mainHeader/MainHeader";
import BicycleCatalog from "../bicycleCatalog/BicycleCatalog";
import BicyclePartsCatalog from "../bicyclePartsCatalog/BicyclePartsCatallog";
import BicycleAccsCatalog from "../bicycleAccsCatalog/BicycleAccsCatalog";
import ModalWindow from "../modalWindow/ModalWindow";
import CharacteristicsTable from '../characteristicsTable/CharacteristicsTable';
import BicycleDetails from "../bicycleDetails/BicycleDetails";
import BicycleService from "../bicycleService/BicycleService";

import '../../baseStyles.scss';
import styles from './App.module.scss';

function App() {
  const [isModalActive, setModalActive] = useState(false);
  const [modalWinEl, setModalWinEl] = useState(null);

  return (
    <div className={styles.App}>
      <Router>
        <MenuBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<MainHeader />} />
            <Route path="/bicycles" element={<BicycleCatalog active={isModalActive} setActive={setModalActive} />} />
            <Route path="/bicycleParts" element={<BicyclePartsCatalog />} />
            <Route path="/bicycleAccs" element={<BicycleAccsCatalog />} />
            <Route path="/bicycleService" element={<BicycleService />} />
          </Routes>
        </div>
      </Router>
      <ModalWindow active={isModalActive} setActive={setModalActive}>
        <div className={styles.bicycleModalWindow}>
          <img src={`${process.env.PUBLIC_URL}/bicycle.png`} />
          <div className={styles.info}>
            <BicycleDetails modalWinEl={modalWinEl} setModalWinEl={setModalWinEl} />
            <CharacteristicsTable modalWinEl={modalWinEl} setModalWinEl={setModalWinEl} />
          </div>
          <button className={styles.closeModalWinBtn} onClick={() => setModalActive(false)}>x</button>
        </div>
      </ModalWindow>
    </div>
  );
}

export default App;
