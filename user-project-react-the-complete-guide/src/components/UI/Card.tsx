import CardStyled from './styles/CardStyled';

interface Props {
    styles?: string;
}

const Card: React.FC<Props> = ({ children, styles }) => {
    return <CardStyled className={`${styles}` || ''}>{children}</CardStyled>;
};

export default Card;
