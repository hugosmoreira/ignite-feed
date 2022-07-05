import { format, formatDistanceToNow } from 'date-fns'
import React, { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import ptBR from 'date-fns/locale/pt-BR';
import styles from './Post.module.css'
import Comment from './Comment'
import Avatar from './Avatar'





const Post = ({id, author, avatarUrl, name, role, content, publishedAt}) => {


    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    });
    
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
      })



  return (
    <article className={styles.post} >
        <header>
            <div className={styles.author}>
                <Avatar src={author.avatarUrl} />
                <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
            </div>

            <time title="11 de maio às 08h00" dateTime={publishedAt.toISOString()}>
                {publishedDateRelativeToNow}
            </time>
        </header>

        <div className={styles.content}>
                <p>Fala Pessoal</p>
                <p>Acabei de subir mais um projeto no meu portifolio. Eh um projeto bacana legal e sucesse nao esqueca de checar</p>
                <p><a href="">#WebDev #WebDevelop #React #JavaScript</a></p>
        </div>

        <form className={styles.commentForm}>
            <strong>Deixe seu Feedback</strong>
            <textarea placeholder='deixe um comentario'></textarea>
            <footer>
                    <button
                        type="submit"
                        disabled
                    >
                        Publicar
                    </button>
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

export default Post