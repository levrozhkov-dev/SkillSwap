import { useNavigate } from 'react-router-dom';
import logo from '../../shared/img/icon/Error404.svg';
import * as Styled from './error404.styled';


export const Error404 = () => {
    const nav = useNavigate();
    const handleHome = () => {
        nav('/');
    };
    const handleErrorReport = () => {
        console.log('Информация об ошибке');
    };
    return (
        <Styled.Container>
            <Styled.IconImage src={logo} alt="Check icon"/>
            <Styled.Title>Страница не найдена</Styled.Title>
            <Styled.Description>К сожалению, эта страница недоступна. Вернитесь <br />
                на главную страницу или попробуйте позже</Styled.Description>
            <Styled.ButtonContainer>
                <Styled.ErrorButton onClick={handleErrorReport} variant='white'>Сообщить об ошибке</Styled.ErrorButton>
                <Styled.ErrorButton onClick={handleHome} variant='green'>На главную</Styled.ErrorButton>
            </Styled.ButtonContainer>
        </Styled.Container>
    );
};