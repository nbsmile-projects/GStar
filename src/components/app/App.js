import MenuBar from "../menuBar/MenuBar";
import MainHeader from "../mainHeader/MainHeader";
import BicycleCatalog from "../bicycleCatalog/BicycleCatalog";

import '../../baseStyles.scss';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <MenuBar />
      {/* <MainHeader /> */}
      <BicycleCatalog />
    </div>
  );
}

export default App;
