import './App.scss'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import gsap, {Expo} from 'gsap'
import { useEffect, useRef } from 'react'

function App() {
  //variable declaration
  let wrapper = useRef(null);
  let loader = useRef(null);
  let app = useRef(null);

  // when the page loads
  useEffect(() => {
    //wrapper
    gsap.to(
      wrapper.current,
      {
        duration: 2,
        top: "-100vh",
        ease: Expo.easeInOut,
        delay: 3.6,
      }
    )
    //loader
    let tl = gsap.timeline()

    tl.from(
      loader.current, 
      {
        duration: 1.6,
        scaleY: 0,
        y: 80,
        ease: Expo.easeInOut,
        delay: 1,
        transformOrigin:"50% 100%"
      }
    )

    tl.to(
      loader.current, 
      {
        duration: 1.6,
        height: "20vh",
        scaleY: 0,
        ease: Expo.easeInOut,
        transformOrigin:"0% -100%"
      }
    )

    //App
    gsap.to(
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
    <>
      {/**Loader*/}
      <div ref={wrapper} className="wrapper fixed w-full h-screen z-30">
        <div ref={loader} className="loader fixed inset-2/4 transform -translate-x-1/2 -translate-y-1/2 z-30"/>
      </div>
    
      {/**Main content*/}
      <div ref={app} className="app w-screen h-screen">
        <div id="bg" className="h-full w-full absolute"></div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
