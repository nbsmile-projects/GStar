import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { MainPage, CatalogPage, ServicePage, ErrorPage } from "../pages";

import { menuBarStatus } from "../menuBar/menuBarSlice";

import MenuBar from "../menuBar/MenuBar";
import ModalWindow from "../modalWindow/ModalWindow";
import SelectedItemInfo from "../selectedItemInfo/SelectedItemInfo";
import LoginPage from "../pages/loginPage/LoginPage";
import AdminPage from "../pages/adminPage/AdminPage";

import '../../baseStyles.scss';
import styles from './app.module.scss';

function App() {
  const dispatch = useDispatch();
  const selectedItem = useSelector(state => state.modalWin.selectedItem);

  return (
    <div className={styles.App}>
      <img className={styles.burger} src={`${process.env.PUBLIC_URL}/burger/openBurger.svg`} onClick={() => dispatch(menuBarStatus(true))} alt="burgerIcon" />
      <Router>
        <MenuBar />
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/bicycles" element={<CatalogPage type="bicycles" />} />
            <Route path="/bicycle-parts" element={<CatalogPage type="bicycleParts" />} />
            <Route path="/bicycle-accs" element={<CatalogPage type="bicycleAccs" />} />
            <Route path="/bicycle-service" element={<ServicePage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </Router>
      <ModalWindow>
        {selectedItem !== null ? <SelectedItemInfo /> : null}
      </ModalWindow>
    </div>
  );
}

export default App;