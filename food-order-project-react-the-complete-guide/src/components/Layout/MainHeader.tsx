import { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
import { Header, MainImage } from './LayoutStyles';

interface Props {
    onShowCart: () => void;
}

const MainHeader: React.FC<Props> = ({ onShowCart }) => {
    return (
        <Fragment>
            <Header>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={onShowCart} />
            </Header>
            <MainImage>
                <img src={mealsImage} alt='Table full of food!' />
            </MainImage>
        </Fragment>
    );
};

export default MainHeader;
