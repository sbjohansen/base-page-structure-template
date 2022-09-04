import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './styles/bootstrap.scss';
import './styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route exact path="/" component={Homepage} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
