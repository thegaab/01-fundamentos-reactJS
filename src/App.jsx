import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Siderbar';

import'./global.css'

import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post
        author="Tiago Gabriel"
        content="lorem"
        />
        <Post
          author="Gabriel Tiago"
          content="lorem ipsum"
        />
        </main>
      </div>
    </div>
    
  )
}
