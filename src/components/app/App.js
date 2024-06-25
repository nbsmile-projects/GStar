import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { MainPage, CatalogPage, ServicePage, ErrorPage } from "../pages";

import { menuBarStatus } from "../menuBar/menuBarSlice";
import { modalWinStatus } from "../modalWindow/modalWinSlice";

import MenuBar from "../menuBar/MenuBar";
import ModalWindow from "../modalWindow/ModalWindow";
import DetailsPart from "../modalWindow/detailsPart/DetailsPart";
import CharacsPart from '../modalWindow/characsPart/CharacsPart';

import '../../baseStyles.scss';
import styles from './app.module.scss';

function App() {
  const dispatch = useDispatch();
  const selectedItem = useSelector(state => state.modalWin.selectedItem);

  const selectedItemInfo = () => {
    const { thumbnail = '' } = selectedItem.item;

    return (
      <div className={styles.itemModalWindow} >
        <img src={`${process.env.PUBLIC_URL}${thumbnail.path}`} alt={"modalWinThumbnail"} />
        <div className={styles.info}>
          <DetailsPart />
          <CharacsPart />
        </div>
        <button className={styles.closeModalWinBtn} onClick={() => dispatch(modalWinStatus(false))}>x</button>
      </div>
    )
  }

  return (
    <div className={styles.App}>
      <img className={styles.burger} src={`${process.env.PUBLIC_URL}/burger/openBurger.svg`} onClick={() => dispatch(menuBarStatus(true))} alt="burgerIcon" />
      <Router>
        <MenuBar />
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/bicycles" element={<CatalogPage type="bicycles" />} />
            <Route path="/bicycle-parts" element={<CatalogPage type="bicycleParts" />} />
            <Route path="/bicycle-accs" element={<CatalogPage type="bicycleAccs" />} />
            <Route path="/bicycle-service" element={<ServicePage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </Router>
      <ModalWindow>
        {selectedItem !== null ? selectedItemInfo() : null}
      </ModalWindow>
    </div>
  );
}

export default App;