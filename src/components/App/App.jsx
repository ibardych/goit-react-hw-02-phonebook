import Canvas from 'components/Canvas/Canvas';
import Copyright from 'components/Copyright/Copyright';
import draw from 'constants/background';
import PhoneBook from '../PhoneBook/PhoneBook';
import { MainContainer } from './App.styled';

const App = () => {
  return (
    <>
      <Canvas draw={draw} height={1000} width={1000} />
      <MainContainer>
        <PhoneBook />
        <Copyright message="©2023 Made by Iurii Bardych" />
      </MainContainer>
    </>
  );
};

export default App;
