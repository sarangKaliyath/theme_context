import './App.css';
import {ThemeContext} from './Context/ThemeContext';
import { useContext } from 'react';
import {MainPage} from './components/MainPage';

function App() {

  const { theme } = useContext(ThemeContext);


  return (
    <div className="MainPage">
        <MainPage />
    </div>
  );
}

export default App;
