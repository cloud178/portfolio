import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Works} from "./layout/sections/works/Works";
import {Blog} from "./layout/sections/blog/Blog";
import { Contacts } from './layout/sections/contacts/Contacts';
import {Footer} from "./layout/footer/Footer";
import {Particle} from "./layout/components/particle/Particle";

function App() {
    return (
        <div className="App">
            <Particle/>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Blog/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
