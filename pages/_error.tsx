import StoreLayout from 'components/store/storeLayout/layouts';
import variants from 'components/store/lib/variants';
import color from 'components/store/lib/ui.colors';
import {
  Container,
  Wrapper,
  Content,
} from 'components/store/storeLayout/common';
import Head from 'next/head';
import styled from 'styled-components';

const Error = ({ statusCode }) => {
  return (
    <>
      <Head>
        <title>Ошибка Сервиса | voodoolab 500</title>
      </Head>
      <Container
        variants={variants.fadInOut}
        key="profile-page"
        initial="start"
        animate="middle"
        exit="end"
        flex_direction="column"
        justify_content="center"
        align_items="center"
        padding="20px 0"
        bg_color={color.textPrimary}
      >
        <Wrapper>
          <Content
            flex_direction="column"
            justify_content="flex-start"
            align_items="center"
            gap="20px"
            style={{ userSelect: 'none' }}
          >
            <ErrorWrapper className="error">500 ОШИБКА</ErrorWrapper>
            <ContentWrapper>
              <h2>Упс..Кажется, что-то сломалось или же это Ошибка Сервиса</h2>
              <h4>
                Мы знаем о проблеме и уже работаем над ней. Попробуйте зайти
                позже. Спасибо за Ваш выбор. С Уважением, Ваш NBHOZ
              </h4>
            </ContentWrapper>
            <span>
              <p>
                {statusCode
                  ? `An error ${statusCode} occurred on server`
                  : 'An error occurred on client'}
              </p>
            </span>
          </Content>
        </Wrapper>
      </Container>
    </>
  );
};
const ErrorWrapper = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-family: ricordi;
  font-weight: 600;
  background: linear-gradient(
    90deg,
    #cda172 -6.8%,
    #fef5ca 34.14%,
    #fff8d7 50.87%,
    #fdf3c8 66.52%,
    #cda172 107.04%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 2;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  z-index: 2;
  h2,
  h4 {
    font-size: 1.5rem;
    font-family: ricordi;
    font-weight: 300;
    color: #fff;
  }
`;

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

// export default Error;
Error.PageLayout = StoreLayout;
export default Error;
