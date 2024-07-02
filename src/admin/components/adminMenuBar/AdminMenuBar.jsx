import { useDispatch } from "react-redux";

import { setActiveSection, setLoading } from "../admin/adminSlice";

import styles from "./adminMenuBar.module.scss";

const AdminMenuBar = () => {
    const dispatch = useDispatch();

    return (
        <div className={styles.menuBar}>
            <div className={styles.menu}>
                <ul>
                    <li onClick={() => {
                        dispatch(setLoading(true));
                        dispatch(setActiveSection("add-item"));
                    }}>
                        <svg className={styles.icon} width="256px" height="256px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M3.75 4.5L4.5 3.75H10.5L11.25 4.5V10.5L10.5 11.25H4.5L3.75 10.5V4.5ZM5.25 5.25V9.75H9.75V5.25H5.25ZM13.5 3.75L12.75 4.5V10.5L13.5 11.25H19.5L20.25 10.5V4.5L19.5 3.75H13.5ZM14.25 9.75V5.25H18.75V9.75H14.25ZM17.25 20.25H15.75V17.25H12.75V15.75H15.75V12.75H17.25V15.75H20.25V17.25H17.25V20.25ZM4.5 12.75L3.75 13.5V19.5L4.5 20.25H10.5L11.25 19.5V13.5L10.5 12.75H4.5ZM5.25 18.75V14.25H9.75V18.75H5.25Z" fill="#fff"></path> </g></svg>
                    </li>
                    <li onClick={() => {
                        dispatch(setLoading(true));
                        dispatch(setActiveSection("remove-item"));
                    }}>
                        <svg className={styles.icon} fill="#ffffff" width="256px" height="256px" viewBox="-441.6 -441.6 2803.20 2803.20" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 1920h1242.353V677.647H0V1920ZM1581.176 338.824v1242.352h-225.882V564.706H338.824V338.824h1242.352ZM903.53 1242.353v112.941H338.824v-112.941h564.705ZM1920.034-.011v1242.353h-225.882V225.872H677.68V-.012h1242.353Z" fillRule="evenodd"></path> </g></svg>
                    </li>
                    <li onClick={() => {
                        dispatch(setLoading(true));
                        dispatch(setActiveSection("edit-item"));
                    }}>
                        <svg className={styles.icon} width="256px" height="256px" viewBox="-3.84 -3.84 31.68 31.68" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="edit"> <g> <path d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> <polygon fill="none" points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon> </g> </g> </g> </g></svg>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AdminMenuBar;