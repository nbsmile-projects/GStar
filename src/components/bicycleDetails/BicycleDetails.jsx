import { useEffect } from "react";

import styles from "./bicycleDetails.module.scss";

const BicycleDetails = ({ modalWinEl, setModalWinEl }) => {

    useEffect(() => {
        setModalEl();
    }, [])

    const setModalEl = () => {
        setModalWinEl('Win1');
    }

    const unSetModalEl = () => {
        setModalWinEl('Win2');
    }

    const isWinActive = modalWinEl === 'Win1' ? styles.active : "";

    return (
        <div className={`${styles.details} ${isWinActive}`}>
            <p className={styles.name}>Велосипед Giant Talon 2 - 2022 (phantom green)</p>
            <p className={styles.brand}>Giant</p>
            <p className={styles.price}>79 995 сом</p>
            <p className={styles.description}>Построенный на легкой алюминиевой раме ALUXX c классической конструкцией хардтейла и сбалансированными ходовыми качествами колес большего диаметра 27,5 дюймов, Talon является отличным выбором для кросс-кантри и трейловой езды. Геометрия рамы специально разработана для адаптации к соответствующему размеру колес и амортизационной вилке 80 мм или 100 мм (в зависимости от размера рамы). Это вариант, идеально подходящий для амбициозных райдеров, которые хотят поднять свои внедорожные навыки на новый уровень.</p>
            <button className={styles.buyButton}>Купить</button>
            <button className={styles.charcsButton} onClick={unSetModalEl}>Характеристики →</button>
        </div>
    )
}

export default BicycleDetails;