import Button from './Button';
import Card from './Card';
import Backdrop from './styles/Backdrop';
import classes from './styles/ErrorModal.module.css';

interface Props {
    title: string;
    message: string;
    onConfirm: () => void;
}

const ErrorModal: React.FC<Props> = ({ title, message, onConfirm }) => {
    return (
        <>
            <Backdrop onClick={onConfirm} />
            <Card styles={classes.modal}>
                <header className={classes.header}>
                    <h2>{title}</h2>
                </header>
                <main className={classes.content}>
                    <p>{message}</p>
                </main>
                <footer className={classes.actions}>
                    <Button onClick={onConfirm}>Okay</Button>
                </footer>
            </Card>
        </>
    );
};
export default ErrorModal;
