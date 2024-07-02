import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { MainPage, CatalogPage, ServicePage, ErrorPage } from "../pages";

import { menuBarStatus } from "../menuBar/menuBarSlice";

import MenuBar from "../menuBar/MenuBar";
import ModalWindow from "../modalWindow/ModalWindow";
import SelectedItemInfo from "../selectedItemInfo/SelectedItemInfo";

import LoginPage from "../../admin/pages/loginPage/LoginPage";
import Admin from "../../admin/components/admin/Admin";

import '../../baseStyles.scss';
import styles from './app.module.scss';
import burgerIcon from "../../assets/burger/openBurger.svg";

function App() {
  const dispatch = useDispatch();
  const selectedItem = useSelector(state => state.modalWin.selectedItem);
  const location = useLocation();

  const burger = location.pathname !== "/login" && location.pathname !== "/admin" ? <img className={styles.burger} src={burgerIcon} onClick={() => dispatch(menuBarStatus(true))} alt="burgerIcon" /> : null;
  return (
    <div className={styles.App}>
      {burger}
      <MenuBar />
      <div className={styles.content}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/bicycles" element={<CatalogPage type="bicycles" />} />
          <Route path="/bicycle-parts" element={<CatalogPage type="bicycleParts" />} />
          <Route path="/bicycle-accs" element={<CatalogPage type="bicycleAccs" />} />
          <Route path="/bicycle-service" element={<ServicePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <ModalWindow>
        {selectedItem !== null ? <SelectedItemInfo /> : null}
      </ModalWindow>
    </div >
  );
}

export default App;