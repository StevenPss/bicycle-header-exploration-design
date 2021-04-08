import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="app w-screen h-screen">
      <div id="bg" className="h-full w-full absolute"></div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
