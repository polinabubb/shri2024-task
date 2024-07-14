import {Header} from './components/header';
import {Main} from './components/main';
import Footer from "./components/footer";

export function App(): JSX.Element {
//<html lang="ru">  <div id="app"></div>
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
            <script src="../vendors/babel.min.js"></script>
            <script type="text/babel"></script>
        </>
    );
}

export default App;