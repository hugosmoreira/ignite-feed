import React from 'react'
import styles from './Sidebar.module.css'
import { PencilSimpleLine } from 'phosphor-react'
import Avatar from './Avatar'

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
        <img className={styles.cover} src='https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50' alt="" />
        <div className={styles.profile}>
            <Avatar src="https://github.com/hugosmoreira.png" />
            <strong>Junior Malaquias</strong>
            <span>Web Developer</span>
        </div>
        <footer>
            <a href="#">
                <PencilSimpleLine size={20} />
                Editar perfil
            </a>
        </footer>
    </aside>
  )
}

export default Sidebar