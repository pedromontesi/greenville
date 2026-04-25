import styles from './App.module.scss'
import Header from './Components/Header.tsx';
import Main from './Components/Content.tsx';
import Counter from './Components/Counter.tsx';
import Footer from './Components/Footer.tsx';


function App() {

  return (
    <div className={styles.container}>
      <Header/>
      <Main/>
      <Counter/>
      <Footer/>
    </div>
  )
}

export default App
