import React from 'react'
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from "phosphor-react";


const Comment = () => {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/hugosmoreira.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Hugo Moreira</strong>
              <time dateTime="11 de Maio às 08:00h">Cerca de 1h atrás</time>
            </div>
            <button  title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Content</p>
        </div>
        <footer>
          <button >
            <ThumbsUp size={20}/>
             <span>Like</span>
          </button>
        </footer>
      </div>
    </div>
  )
}

export default Comment