import { useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import MenuBar from "../menuBar/MenuBar";
import MainHeader from "../mainHeader/MainHeader";
import BicycleCatalog from "../bicycleCatalog/BicycleCatalog";
import BicyclePartsCatalog from "../bicyclePartsCatalog/BicyclePartsCatallog";
import BicycleAccsCatalog from "../bicycleAccsCatalog/BicycleAccsCatalog";
import ModalWindow from "../modalWindow/ModalWindow";
import CharacteristicsTable from '../characteristicsTable/CharacteristicsTable';

import '../../baseStyles.scss';
import styles from './App.module.scss';

function App() {

  const [modalActive, setModalActive] = useState(false);

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
      <ModalWindow active={modalActive} setActive={setModalActive}>
        <div className={styles.bicycleModalWindow}>
          <img src={`${process.env.PUBLIC_URL}/bicycle.png`} />
          <div className={styles.info}>
            {/*<p className={styles.name}>Велосипед Giant Talon 2 - 2022 (phantom green)</p>
            <p className={styles.brand}>Giant</p>
             <p className={styles.price}>79 995 сом</p>
            <p className={styles.description}>Построенный на легкой алюминиевой раме ALUXX с классической конструкцией хардтейла и сбалансированными ходовыми качествами колес большего диаметра 27,5 дюймов, Talon является отличным выбором для кросс-кантри и трейловой езды. Геометрия рамы специально разработана для адаптации к соответствующему размеру колес и амортизационной вилке 80 мм или 100 мм (в зависимости от размера рамы). Это вариант, идеально подходящий для амбициозных райдеров, которые хотят поднять свои внедорожные навыки на новый уровень.</p>
            <button className={styles.buyButton}>Купить</button>
            <button className={styles.charcsButton}>Характеристики →</button> */}
            <CharacteristicsTable />
          </div>
        </div>
      </ModalWindow>
    </div >
  );
}

export default App;
