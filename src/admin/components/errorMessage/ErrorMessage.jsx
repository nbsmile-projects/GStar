
import styles from "./errorMessage.module.scss";

const ErrorMessage = ({ errors }) => {
    const emptyFields = Object.keys(errors).length >= 2 ? "Заполните пустые поля" : null;
    const noThumbnail = errors?.thumbnail?.message;
    const valdidation = errors?.name?.message;

    return (
        <p className={styles.addItemError}>
            {emptyFields || noThumbnail || valdidation}
        </p>
    );
}

export default ErrorMessage;