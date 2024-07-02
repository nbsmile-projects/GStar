import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import styles from './servicePage.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import instruction from "../../../assets/service/instruction.png";
import repairPrice from "../../../assets/service/repairPrice.jpg";
import repairPrice2 from "../../../assets/service/repairPrice2.jpg";

const ServicePage = () => {

    return (
        <div className={styles.bicycleService}>
            <div className={styles.content}>
                <h2 className={styles.serviceTitle}>Сервисное обслуживание</h2>
                <Swiper
                    cssMode={true}
                    pagination={{
                        clickable: true
                    }}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Pagination, Mousewheel, Keyboard]}
                >

                    <SwiperSlide>
                        <div className={styles.serviceWin2}>
                            <div className={styles.servicePriceWrapper}>
                                <img className={styles.servicePrice} src={repairPrice} alt="repairPrice" />
                                <img className={styles.servicePrice} src={repairPrice2} alt="repairPrice2" />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={styles.serviceWin1}>
                            <h3 className={styles.serviceSubtitle}>Уникальный QR-tech</h3>
                            {/* <div className={styles.searchPanel}>
                                <input className={styles.search} type="text" placeholder="Поиск" />
                                <svg className={styles.searchIcon} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                                    <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                                </svg>
                            </div> */}
                            {/* <div className={styles.serviceInfo}>
                                <img className={styles.serviceInfoImg} src={`${process.env.PUBLIC_URL}/bicycleService/serviceBicycle.jpg`} alt="bicycle" />
                                <div className={styles.serviceInfoContent}>
                                    <p className={styles.serviceCounterInscr}>Количество сервисных работ:</p>
                                    <p className={styles.serviceCounter}>3 / 5</p>
                                    <img className={styles.serviceIcon} src={`${process.env.PUBLIC_URL}/bicycleService/serviceIconConsumed.png`} alt="serviceIconConsumed" />
                                    <img className={styles.serviceIcon} src={`${process.env.PUBLIC_URL}/bicycleService/serviceIconConsumed.png`} alt="serviceIconConsumed" />
                                    <img className={styles.serviceIcon} src={`${process.env.PUBLIC_URL}/bicycleService/serviceIcon.png`} alt="serviceIcon" />
                                    <img className={styles.serviceIcon} src={`${process.env.PUBLIC_URL}/bicycleService/serviceIcon.png`} alt="serviceIcon" />
                                    <img className={styles.serviceIcon} src={`${process.env.PUBLIC_URL}/bicycleService/serviceIcon.png`} alt="serviceIcon" />
                                </div>
                            </div> */}
                            <img width={700} src={instruction} alt="QRInstruction" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div >
        </div >
    )
}

export default ServicePage;