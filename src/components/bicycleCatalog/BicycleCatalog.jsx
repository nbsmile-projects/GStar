
import styles from "./bicycleCatalog.module.scss";

function BicycleCatalog() {

    return (
        <div className={styles.bicycles}>
            <div className={styles.bicylceFilter}>
                <svg className={styles.searchIcon} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                    <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                </svg>
                <input className={styles.search} type="text" placeholder="Поиск" />
                <select className={styles.filter} name="select">
                    <option>Все</option>
                    <option>Цена: от высокой к низкой</option>
                    <option>Цена: от низкой к высокой</option>
                </select>
            </div>
            <div className={styles.bicycleList}>
                <li className={styles.item} >
                    <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}/bicycle.png`} />
                    <p className={styles.itemName}>Велосипед Giant Talon 2 - 2022 (phantom green)</p>
                    <p className={styles.itemPrice}>79 995 сом</p>
                    <button className={styles.itemButton}>Купить</button>
                </li>
                <li className={styles.item} >
                    <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}/bicycle.png`} />
                    <p className={styles.itemName}>Велосипед Giant Talon 2 - 2022 (phantom green)</p>
                    <p className={styles.itemPrice}>79 995 сом</p>
                    <button className={styles.itemButton}>Купить</button>
                </li>
                <li className={styles.item} >
                    <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}/bicycle.png`} />
                    <p className={styles.itemName}>Велосипед Giant Talon 2 - 2022 (phantom green)</p>
                    <p className={styles.itemPrice}>79 995 сом</p>
                    <button className={styles.itemButton}>Купить</button>
                </li>
                <li className={styles.item} >
                    <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}/bicycle.png`} />
                    <p className={styles.itemName}>Велосипед Giant Talon 2 - 2022 (phantom green)</p>
                    <p className={styles.itemPrice}>79 995 сом</p>
                    <button className={styles.itemButton}>Купить</button>
                </li>
                <li className={styles.item} >
                    <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}/bicycle.png`} />
                    <p className={styles.itemName}>Велосипед Giant Talon 2 - 2022 (phantom green)</p>
                    <p className={styles.itemPrice}>79 995 сом</p>
                    <button className={styles.itemButton}>Купить</button>
                </li>
                <li className={styles.item} >
                    <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}/bicycle.png`} />
                    <p className={styles.itemName}>Велосипед Giant Talon 2 - 2022 (phantom green)</p>
                    <p className={styles.itemPrice}>79 995 сом</p>
                    <button className={styles.itemButton}>Купить</button>
                </li>
                <li className={styles.item} >
                    <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}/bicycle.png`} />
                    <p className={styles.itemName}>Велосипед Giant Talon 2 - 2022 (phantom green)</p>
                    <p className={styles.itemPrice}>79 995 сом</p>
                    <button className={styles.itemButton}>Купить</button>
                </li>
                <li className={styles.item} >
                    <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}/bicycle.png`} />
                    <p className={styles.itemName}>Велосипед Giant Talon 2 - 2022 (phantom green)</p>
                    <p className={styles.itemPrice}>79 995 сом</p>
                    <button className={styles.itemButton}>Купить</button>
                </li>
                <li className={styles.item} >
                    <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}/bicycle.png`} />
                    <p className={styles.itemName}>Велосипед Giant Talon 2 - 2022 (phantom green)</p>
                    <p className={styles.itemPrice}>79 995 сом</p>
                    <button className={styles.itemButton}>Купить</button>
                </li>
            </div>
        </ div >
    );
}

export default BicycleCatalog;