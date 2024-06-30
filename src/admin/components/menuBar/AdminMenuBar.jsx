import { NavLink } from 'react-router-dom';

import styles from "./adminMenuBar.module.scss";

const AdminMenuBar = () => {
    const isActiveLink = ({ isActive }) => {
        if (isActive) {
            return {
                color: "#ffffff",
                fontSize: "29px",
                transform: "translateX(10px)"
            }
        } else {
            return {
                color: "#a9acae",
                fontSize: "26px",
                transition: "0.3s"
            }
        }
    };

    return (
        <div className={styles.menuBar}>
            {/* <div className={styles.logo}>
                <img width={70} src={`${process.env.PUBLIC_URL} /logos/Logo2light.svg`} alt="logo" />
            </div> */}
            <div className={styles.menu}>
                <ul>
                    <li><NavLink style={isActiveLink} to=""></NavLink ></li>
                    <li><NavLink style={isActiveLink} to=""></NavLink></li>
                    <li><NavLink style={isActiveLink} to=""></NavLink></li>
                    <li><NavLink style={isActiveLink} to=""></NavLink></li>
                    <li></li>
                    <li></li>
                    <li><NavLink style={isActiveLink} to=""></NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default AdminMenuBar;