import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(){
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-4506461-3738664.png"/>
          <div className={styles.authorInfo}>
            <strong>Tiago Gabriel</strong>
            <span>Full Stack Developer</span>
          </div>
        </div>

      <time title="14 de fevereiro ás 18:38"dateTime="2023-02-14 18:38">Publicado há 1h</time>
      </header>
      
      <div className={styles.content}>
        <p>
        <p>A paragraph is a unit of writing that consists of one or more sentences that focus on a specific topic or idea.</p> 
        
        <p> <a href=""> It serves as a building block for organizing written communication, allowing writers to break down their thoughts into smaller,</a></p>
        
        <p> <a href="">more manageable parts. A well-constructed paragraph contains a clear topic sentence.</a></p> 
        
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe seu comentario"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}