/** @format */

import logo from './logo.svg';
import './App.css';
import { SearchInput } from '@lucifer/components';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <SearchInput placeholder='hasnaa' handleChange={() => {}} />
      </header>
    </div>
  );
}

export default App;
