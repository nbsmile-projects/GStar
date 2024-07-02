import { useDispatch, useSelector } from "react-redux";

import { modalWinStatus } from "../modalWindow/modalWinSlice";

import DetailsPart from "../modalWindow/detailsPart/DetailsPart";
import CharacsPart from "../modalWindow/characsPart/CharacsPart";

import styles from "./selectedItemInfo.module.scss";

const SelectedItemInfo = () => {
    const dispatch = useDispatch();
    const selectedItem = useSelector(state => state.modalWin.selectedItem);

    const { thumbnail = '' } = selectedItem.item;

    return (
        <div className={styles.itemModalWindow} >
            <img src={thumbnail} alt={"modalWinThumbnail"} />
            <div className={styles.info}>
                <DetailsPart />
                <CharacsPart />
            </div>
            <button className={styles.closeModalWinBtn} onClick={() => dispatch(modalWinStatus(false))}>x</button>
        </div>
    )
}

export default SelectedItemInfo;