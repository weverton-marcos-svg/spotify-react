import './App.css';
import Header from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';
import SideBar from './componentes/SideBar/Sidebar';
import Main from './componentes/Main/Main';

function App() {
  return (
    <div>
        <SideBar/>
        <Header/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
