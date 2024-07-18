
import styles from "./errorMessage.module.scss";

const ErrorMessage = ({ errors }) => {
    const emptyFields = Object.keys(errors).length >= 2 ? "Заполните пустые поля" : null;
    const noThumbnail = errors?.thumbnail?.message;
    const valdidateName = errors?.name?.message;
    const validateFileName = errors?.file?.message;

    return (
        <p className={styles.addItemError}>
            {emptyFields || noThumbnail || valdidateName || validateFileName}
        </p>
    );
}

export default ErrorMessage;