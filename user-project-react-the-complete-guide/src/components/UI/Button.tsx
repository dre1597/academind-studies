import ButtonStyled from './styles/ButtonStyled';

interface Props {
    type?: 'button' | 'submit' | 'reset' | undefined;
    onClick?: () => void;
}

const Button: React.FC<Props> = ({ children, type, onClick }) => {
    return (
        <ButtonStyled type={type || 'button'} onClick={onClick}>
            {children}
        </ButtonStyled>
    );
};

export default Button;
