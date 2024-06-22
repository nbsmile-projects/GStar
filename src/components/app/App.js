import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MainPage, CatalogPage, ServicePage, ErrorPage } from "../pages";

import MenuBar from "../menuBar/MenuBar";
import ModalWindow from "../modalWindow/ModalWindow";
import DetailsPart from "../modalWindow/detailsPart/DetailsPart";
import CharacsPart from '../modalWindow/characsPart/CharacsPart';

import '../../baseStyles.scss';
import styles from './app.module.scss';

function App() {
  const [isMenuBarActive, setIsMenuBarActive] = useState(false);
  const [isModalActive, setModalActive] = useState(false);
  const [modalWinEl, setModalWinEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState({ item: {}, type: '' });
  const [loading, setLoading] = useState(false);

  const selectedItemInfo = () => {
    const { thumbnail = '' } = selectedItem.item;

    return (
      <div className={styles.itemModalWindow} >
        <img src={`${process.env.PUBLIC_URL}${thumbnail.path}`} alt={"modalWinThumbnail"} />
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
            <Route path="/bicycles" element={<CatalogPage type="bicycles" setActive={setModalActive} onItemSelected={setSelectedItem} loading={loading} setLoading={setLoading} />} />
            <Route path="/bicycle-parts" element={<CatalogPage type="bicycleParts" setActive={setModalActive} onItemSelected={setSelectedItem} loading={loading} setLoading={setLoading} />} />
            <Route path="/bicycle-accs" element={<CatalogPage type="bicycleAccs" setActive={setModalActive} onItemSelected={setSelectedItem} loading={loading} setLoading={setLoading} />} />
            <Route path="/bicycle-service" element={<ServicePage />} />
            <Route path="*" element={<ErrorPage />} />
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
