import './App.css';
import { Route, Routes } from 'react-router-dom';
import AppToolBar from './Components/AppToolBar/AppToolBar.tsx';
import { Grid2 } from '@mui/material';
import HomeContainer from './Containers/HomeContainer.tsx';
import RegisterPage from './Features/Users/RegisterPage.tsx';
import LoginPage from './Features/Users/LoginPage.tsx';
import AddItems from './Features/Items/AddItems.tsx';

const App = () => {
  return (
    <>
      <AppToolBar />
      <Grid2 container>
        <Routes>
          <Route path="/" element={<HomeContainer />}></Route>
          <Route path="/:category_id" element={<HomeContainer />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/addItems" element={<AddItems />}></Route>
        </Routes>
      </Grid2>
    </>
  );
};

export default App;
