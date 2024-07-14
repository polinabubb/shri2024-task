import {Header} from './components/header';
import {Main} from './components/main';
import Footer from "./components/footer";
import React from 'react';

export function App(){
//<html lang="ru">  <div id="app"></div>
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    );
}

export default App;