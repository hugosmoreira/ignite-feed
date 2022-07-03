import React from 'react'
import styles from './Post.module.css'

const Post = () => {
  return (
    <article className={styles.post} >
        <header>
            <div className={styles.author}>
                <img className={styles.avatar} src="https://github.com/hugosmoreira.png" alt="" />
                <div className={styles.authorInfo}>
                    <strong>Hugo Moreira</strong>
                    <span>Web Developer</span>
                </div>
            </div>

            <time dateTime='2022-07-02'>Publicado 1h hora</time>
        </header>

        <div className={styles.content}>
                <p>Fala Pessoal</p>
                <p>Acabei de subir mais um projeto no meu portifolio. Eh um projeto bacana legal e sucesse nao esqueca de checar</p>
                <p><a href="">#WebDev #WebDevelop #React #JavaScript</a></p>
        </div>

        <form className={styles.commentForm}>
            <strong>Deixe seu Feedback</strong>
            <textarea placeholder='deixe um comentario'></textarea>
            <button type='submit'>Comentario</button>
        </form>

    </article>
  )
}

export default Post