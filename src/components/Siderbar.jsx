import {PencilLine} from 'phosphor-react'

import styles from './Sidebar.module.css';

export function Sidebar(){
  return(
    <aside className={styles.sidebar}>

      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1630138125033-9b3190e832d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/92121533?v=4"/>

        <strong>Tiago Gabriel</strong>
        <span>Full Stack Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}