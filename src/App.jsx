import './App.css'
import Header from './Components/Header';
import Main from './Components/Main';
import Counter from './Components/Counter';
import Gallery from './Components/Gallery';
import Footer from './Components/Footer';


function App() {

  return (
    <div className="container">
      <Header/>
      <Main/>
      <Counter/>
      <Gallery/>
      <Footer/>
    </div>
  )
}

export default App
