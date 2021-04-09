import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { TweenMax } from 'gsap';
import { useEffect, useRef } from 'react';

function App() {
  //variable declaration
  let app = useRef(null);

  // when dom loads
  useEffect(() => {
    //App
    TweenMax.to(
      app.current,
      {
        duration: .5,
        css: {
          visibility: 'visible'
        }
      }
    )
  }, [])

  return (
    <div ref={app} className="app w-screen h-screen">
      <div id="bg" className="h-full w-full absolute"></div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
