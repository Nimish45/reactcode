import logo from './logo.svg';
import './App.css';
import Main from "./Components/Main/Main";
import Parse from 'parse';

Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
    'dwvtwP0Aeacp2N5H0z7nGc8jjFtHbvHpLKXMtp7l', // This is your Application ID
    'bX9mpJOou0Gh6XLpGYKw9t6KDyOzCiD9yEmGIHLk' // This is your Javascript key
);

function App() {
    return <Main / > ;

}

export default App;