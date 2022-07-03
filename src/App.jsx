
import Post from '../components/Post'
import Header from '../components/Header'
import styles from './App.module.css'
import Sidebar from '../components/Sidebar'


function App() {
  

  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Post author="Hugo" content="Alo voce da rede globo um dois 3" />
        </main>
      </div>
    </div>
  )
}

export default App
