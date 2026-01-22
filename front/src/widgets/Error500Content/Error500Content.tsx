import {Content, Illustration, H2, P, ButtonsWrapper, ErrorButton} from './Error500Content.styled';
import illustration from '../../shared/img/illustrations/error-500.svg';


export const Error500Content = () => {
    return (
        <Content>
            <Illustration src={illustration} alt="Ошибка 505" />
            <H2>На сервере произошла ошибка</H2>
            <P>Попробуйте позже или вернитесь на главную страницу</P>
            <ButtonsWrapper>
                <ErrorButton variant='white' >Сообщить об ошибке</ErrorButton>
                <ErrorButton variant='green' >На главную</ErrorButton>
            </ButtonsWrapper>
        </Content>
    );
};