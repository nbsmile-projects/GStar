import styles from './characteristicsTable.module.scss';

const CharacteristicsTable = ({ modalWinEl, setModalWinEl }) => {

    const isWinActive = modalWinEl === 'Win2' ? styles.active : "";

    const unSetModalEl = () => {
        setModalWinEl('Win1');
    }

    return (
        <div className={`${styles.characteristics} ${isWinActive}`}>
            <table>
                <thead>
                    <tr>
                        <th>Часть</th>
                        <th>Модель</th>
                        <th>Часть</th>
                        <th>Модель</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Рама</td>
                        <td>ALUXX-Grade Aluminum</td>
                        <td>Вилка</td>
                        <td>SR Suntour XCM30, QR, steel steerer</td>
                    </tr>
                    <tr>
                        <td>Амортизатор</td>
                        <td>N/A</td>
                        <td>Вилка</td>
                        <td>SR Suntour XCM30, QR, steel steerer</td>
                    </tr>
                    <tr>
                        <td>Руль</td>
                        <td>Giant Connect Trail, 31.8mm</td>
                        <td>Grips</td>
                        <td>Giant Sole-O</td>
                    </tr>
                    <tr>
                        <td>Вынос</td>
                        <td>Giant Sport, 7-degree</td>
                        <td>Подседельный штырь</td>
                        <td>Giant Sport, 30.9</td>
                    </tr>
                    <tr>
                        <td>Седло</td>
                        <td>Giant custom</td>
                        <td>Педали</td>
                        <td>MTB caged</td>
                    </tr>
                    <tr>
                        <td>Манетки</td>
                        <td>microSHIFT SL-M9295, 1x9</td>
                        <td>Передний переключатель</td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <td>Задний переключатель</td>
                        <td>microSHIFT Advent M6195M</td>
                        <td>Тормоза</td>
                        <td>Tektro HDC M275, hydraulic, Tektro rotors [F]180mm, [R]160mm</td>
                    </tr>
                    <tr>
                        <td>Тормозные ручки</td>
                        <td>Tektro HDC M275</td>
                        <td>Кассета</td>
                        <td>microSHIFT CS-H093, 11x46</td>
                    </tr>
                    <tr>
                        <td>Цепь</td>
                        <td>KMC Х 9</td>
                        <td>Система</td>
                        <td>ProWheel Charm, 30t (27.5) or 32t (29)</td>
                    </tr>
                    <tr>
                        <td>Каретка</td>
                        <td>cartridge</td>
                        <td>Обода</td>
                        <td>Giant GX03V 29 or 27.5, alloy, double wall, 21mm inner width</td>
                    </tr>
                    <tr>
                        <td>Втулки</td>
                        <td>alloy, sealed bearing</td>
                        <td>Спицы</td>
                        <td>stainless, 14g</td>
                    </tr>
                    <tr>
                        <td>Покрышки</td>
                        <td>Kenda Booster 27.5 or 29x2.4", wire bead</td>
                    </tr>
                </tbody>
            </table>
            <button className={styles.backButton} onClick={unSetModalEl}>Назад ←</button>
        </div>
    );
}

export default CharacteristicsTable;