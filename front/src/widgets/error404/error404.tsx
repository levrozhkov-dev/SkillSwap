import { useNavigate } from 'react-router-dom';
import logo from '../../shared/img/icon/Error404.svg';
import { ButtonContainer, Container, Description, ErrorButton, IconImage, Title } from './error404.styled';


export const Error404 = () => {
    const nav = useNavigate();
    const handleHome = () => {
        nav('/');
    };
    const handleErrorReport = () => {
        console.log('Информация об ошибке')
    }
    return (
        <Container>
            <IconImage src={logo} alt="Check icon"/>
            <Title>Страница не найдена</Title>
            <Description>К сожалению, эта страница недоступна. Вернитесь <br />
                на главную страницу или попробуйте позже</Description>
            <ButtonContainer>
                <ErrorButton onClick={handleErrorReport} variant='white'>Сообщить об ошибке</ErrorButton>
                <ErrorButton onClick={handleHome} variant='green'>На главную</ErrorButton>
            </ButtonContainer>
        </Container>
    );
};