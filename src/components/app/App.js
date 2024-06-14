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
  const [isMenuBarActive, setIsMenuBarActive] = useState(false);
  const [isModalActive, setModalActive] = useState(false);
  const [modalWinEl, setModalWinEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState({ item: {}, type: '' });
  const [loading, setLoading] = useState(false);

  const selectedItemInfo = () => {
    const { thumbnail = '' } = selectedItem.item;

    return (
      <div className={styles.bicycleModalWindow} >
        <img src={`${process.env.PUBLIC_URL}${thumbnail.path}`} />
        <div className={styles.info}>
          <BicycleDetails modalWinEl={modalWinEl} setModalWinEl={setModalWinEl} selectedItem={selectedItem} />
          <CharacteristicsTable modalWinEl={modalWinEl} setModalWinEl={setModalWinEl} />
        </div>
        <button className={styles.closeModalWinBtn} onClick={() => setModalActive(false)}>x</button>
      </div>
    )
  }

  return (
    <div className={styles.App}>
      <img className={styles.burger} src={`${process.env.PUBLIC_URL}/burger/openBurger.svg`} onClick={() => setIsMenuBarActive(true)} alt="burgerIcon" />
      <Router>
        <MenuBar isMenuBarActive={isMenuBarActive} setIsMenuBarActive={setIsMenuBarActive} />
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<MainHeader />} />
            <Route path="/bicycles" element={<BicycleCatalog setActive={setModalActive} onItemSelected={setSelectedItem} loading={loading} setLoading={setLoading} />} />
            <Route path="/bicycleParts" element={<BicyclePartsCatalog setActive={setModalActive} onItemSelected={setSelectedItem} loading={loading} setLoading={setLoading} />} />
            <Route path="/bicycleAccs" element={<BicycleAccsCatalog setActive={setModalActive} onItemSelected={setSelectedItem} loading={loading} setLoading={setLoading} />} />
            <Route path="/bicycleService" element={<BicycleService />} />
          </Routes>
        </div>
      </Router>
      <ModalWindow active={isModalActive} setActive={setModalActive}>
        {selectedItem !== null ? selectedItemInfo() : null}
      </ModalWindow>
    </div>
  );
}

export default App;
