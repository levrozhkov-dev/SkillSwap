import {Content, Illustration, H2, P, ButtonsWrapper, ErrorButton} from './Error500Content.styled';
import illustration from '../../shared/img/illustrations/error-500.svg';
import { useNavigate } from 'react-router-dom';


export const Error500Content = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    const handleReportError = () => {
        console.log('Пользователь сообщил об ошибке');
    };

    return (
        <Content>
            <Illustration src={illustration} alt="Ошибка 505" />
            <H2>На сервере произошла ошибка</H2>
            <P>Попробуйте позже или вернитесь на главную страницу</P>
            <ButtonsWrapper>
                <ErrorButton onClick={handleReportError} variant='white'>Сообщить об ошибке</ErrorButton>
                <ErrorButton onClick={handleGoHome} variant='green'>На главную</ErrorButton>
            </ButtonsWrapper>
        </Content>
    );
};