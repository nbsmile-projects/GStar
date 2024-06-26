import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setContentType } from "../../itemsList/itemsListSlice";

import CatalogFilters from "../../catalogFilters/CatalogFilters";
import ItemsList from "../../itemsList/ItemsList";

import styles from "./catalogPage.module.scss";

function CatalogPage({ type }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setContentType(type));
        // eslint-disable-next-line
    }, [type])

    return (
        <div className={styles.catalog}>
            <CatalogFilters />
            <ItemsList />
        </ div >
    );
}

export default CatalogPage;