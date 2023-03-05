import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({content, onDeleteComment}){
  const[likeCount, setLikeCount] = useState(0);

  function handleDeleteComment(){
    onDeleteComment(content);
  }
  function handleLikeComment(){
    setLikeCount((state) => {
      return likeCount + 1;
    });
  }
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

          <button onClick={handleDeleteComment} title="Deletar comentário">
            <Trash size={24}/>
          </button>
        </header>
        <p>{content}</p>
      </div>
      <footer>
        <button onClick={handleLikeComment}>
          <ThumbsUp/>
          Aplaudir <span>{likeCount}</span>
        </button>
      </footer>
      </div>
    </div>
  )
}