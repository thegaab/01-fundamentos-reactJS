import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Siderbar';

import'./global.css'

import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-4506461-3738664.png',
      name: 'Tiago Gabriel',
      rule:  'Full Stack Developer @ Movida'
    },
    content: [
      {type: 'paragraph', content:      'A paragraph is a unit of writing that consists of one or more sentences that focus on a specific topic or idea.',},
      
      {type: 'paragraph', content:'It serves as a building block for organizing written communication, allowing writers to break down their thoughts into smaller'},

      {type: 'link', content: 'more manageable parts. A well-constructed paragraph contains a clear topic sentence'} 
    ], publishedAt: new Date('2023-03-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/trendy-person-avatar-6299537-5187869.png',
      name: 'Well Gomes',
      rule:  'Full Stack Developer @ ORACLE'
    },
    content: [
      {type: 'paragraph', content:      'A paragraph is a unit of writing that consists of one or more sentences that focus on a specific topic or idea.',},
      
      {type: 'paragraph', content:'It serves as a building block for organizing written communication, allowing writers to break down their thoughts into smaller'},

      {type: 'link', content: 'more manageable parts. A well-constructed paragraph contains a clear topic sentence'} 
    ], publishedAt: new Date('2023-03-04 19:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        {posts.map(post=>{
          return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
        })}
        </main>
      </div>
    </div>
    
  )
}
