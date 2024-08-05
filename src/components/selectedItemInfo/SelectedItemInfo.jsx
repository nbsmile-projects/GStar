import { useSelector } from "react-redux";

import DetailsPart from "../modalWindow/detailsPart/DetailsPart";
import CharacsPart from "../modalWindow/characsPart/CharacsPart";

import styles from "./selectedItemInfo.module.scss";

const SelectedItemInfo = () => {
    const selectedItem = useSelector(state => state.modalWin.selectedItem);

    const { thumbnail = '' } = selectedItem.item;

    return (
        <div className={styles.itemModalWindow} >
            <img src={thumbnail.url} alt={"modalWinThumbnail"} />
            <div className={styles.info}>
                <DetailsPart />
                <CharacsPart />
            </div>
        </div>
    )
}

export default SelectedItemInfo;