import './App.scss';
import { Outlet } from 'react-router-dom';
import { Header } from './Components/Header';

export const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
