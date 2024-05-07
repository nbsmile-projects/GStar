import MenuBar from "../menuBar/MenuBar";
import MainHeader from "../mainHeader/MainHeader";

import '../../baseStyles.scss';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <MenuBar />
      <MainHeader />
    </div>
  );
}

export default App;
