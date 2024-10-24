import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './Components/Header';

export const App = () => {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
};
