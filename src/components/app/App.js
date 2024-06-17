import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MainPage, BicyclesPage, BicyclePartsPage, BicycleAccsPage, BicycleServicePage } from "../pages";

import MenuBar from "../menuBar/MenuBar";
import ModalWindow from "../modalWindow/ModalWindow";
import CharacsPart from '../modalWindow/characsPart/CharacsPart';
import DetailsPart from "../modalWindow/detailsPart/DetailsPart";

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
          <DetailsPart modalWinEl={modalWinEl} setModalWinEl={setModalWinEl} selectedItem={selectedItem} />
          <CharacsPart modalWinEl={modalWinEl} setModalWinEl={setModalWinEl} />
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
            <Route path="/" element={<MainPage />} />
            <Route path="/bicycles" element={<BicyclesPage setActive={setModalActive} onItemSelected={setSelectedItem} loading={loading} setLoading={setLoading} />} />
            <Route path="/bicycleParts" element={<BicyclePartsPage setActive={setModalActive} onItemSelected={setSelectedItem} loading={loading} setLoading={setLoading} />} />
            <Route path="/bicycleAccs" element={<BicycleAccsPage setActive={setModalActive} onItemSelected={setSelectedItem} loading={loading} setLoading={setLoading} />} />
            <Route path="/bicycleService" element={<BicycleServicePage />} />
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
