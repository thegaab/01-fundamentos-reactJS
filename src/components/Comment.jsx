import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({content}){
  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://cdn.dribbble.com/users/515705/screenshots/15102691/comp_2.png?compress=1&resize=400x300" alt="" />

      <div className={styles.commentBox}>
      <div className={styles.commentContent}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>Tiago Gabriel</strong>
            <time title="11 de Maior às 08:13" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
          </div>

          <button title="Deletar comentário">
            <Trash size={24}/>
          </button>
        </header>
        <p>{content}</p>
      </div>
      <footer>
        <button>
          <ThumbsUp/>
          Aplaudir <span>20</span>
        </button>
      </footer>
      </div>
    </div>
  )
}