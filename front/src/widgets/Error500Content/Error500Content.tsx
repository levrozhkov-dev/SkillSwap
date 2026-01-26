import * as Styled from './Error500Content.styled';
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
        <Styled.Content>
            <Styled.Illustration src={illustration} alt="Ошибка 505" />
            <Styled.H2>На сервере произошла ошибка</Styled.H2>
            <Styled.P>Попробуйте позже или вернитесь на главную страницу</Styled.P>
            <Styled.ButtonsWrapper>
                <Styled.ErrorButton onClick={handleReportError} variant='white'>Сообщить об ошибке</Styled.ErrorButton>
                <Styled.ErrorButton onClick={handleGoHome} variant='green'>На главную</Styled.ErrorButton>
            </Styled.ButtonsWrapper>
        </Styled.Content>
    );
};