
import Post from '../components/Post'
import Header from '../components/Header'
import styles from './App.module.css'
import Sidebar from '../components/Sidebar'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/hugosmoreira.png",
      name: "Hugo Moreira",
      role: "Fullstack Developer | ReactJS - Laravel"
    },
    content:[
    { type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    { type: 'paragraph', content: 'Acabei de subir mais um projeto no github, não deixe de conferir. Foi utilizado ReactJS no frontend e Ruby on Rails no backend.'},
    { type: 'link', content:     'github.com/hugosmoreira'}
    ],
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
  },
];


function App() {
  

  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
        {
            posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}

export default App
