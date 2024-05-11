import MenuBar from "../menuBar/MenuBar";
import MainHeader from "../mainHeader/MainHeader";
import BicycleCatalog from "../bicycleCatalog/BicycleCatalog";

import '../../baseStyles.scss';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <MenuBar />
      <div className="content">
        {/* <MainHeader /> */}
        <BicycleCatalog />
      </div>
    </div>
  );
}

export default App;
