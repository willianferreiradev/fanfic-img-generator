import type { NextPage } from 'next'
import { toJpeg } from 'html-to-image';
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import Image from 'next/image';

const download = (base64: string) => {
  const link = document.createElement('a');
  link.download = 'fanfic.jpeg';
  link.href = base64;
  link.click()
}

const Home: NextPage = () => {
  const [notes, setNotes] = useState([
    { id: 1, name: 'Teste 1', checked: false },
    { id: 2, name: 'Teste 2', checked: false },
    { id: 3, name: 'Teste 3', checked: false },
    { id: 4, name: 'Teste 4', checked: true },
    { id: 5, name: 'Teste 5', checked: false },
    { id: 6, name: 'Teste 6', checked: false },
    { id: 7, name: 'Teste 7', checked: false },
    { id: 8, name: 'Teste 8', checked: false },
    { id: 9, name: 'Teste 9', checked: false },
    { id: 10, name: 'Teste 10', checked: false },
  ])

  const changeIcon = (key: number) => {
    setNotes(
      notes.map(n => n.id === key ? ({ ...n, checked: !n.checked }) : n)
    )
  }

  const handleClick = () => {
    toJpeg(document.getElementById('fanfic') as HTMLElement, { quality: 0.95 })
      .then(function (dataUrl) {
        const link = document.createElement('a');
        link.download = 'fanfic.jpeg';
        link.href = dataUrl;
        link.click();
      });
  }

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={() => handleClick()}>Gerar</button>
      <div className={styles.tableWrapper} id="fanfic">
        {notes.map(note => {
          return (
            <div key={note.id}>
              <div className={styles.editable} contentEditable suppressContentEditableWarning={true}>{note.name}</div>
              <div className={styles.icon} onClick={() => changeIcon(note.id)}>
                {note.checked && <Image src="/check.svg" alt="check icon" layout="fixed" height="30" width="30" />}
                {!note.checked && <Image src="/x.jpg" alt="check icon" layout="fixed" height="30" width="30" />}
              </div>
            </div>
          )
        })}
        <div className={styles.note}>Nota final {notes.reduce((prev, next) => (next.checked ? prev + 1 : prev), 0)}/10</div>
      </div>
    </div>
  )
}




export default Home
