import type { NextPage } from 'next'
import { toJpeg } from 'html-to-image';
import styles from '../styles/Home.module.css'
import { useState } from 'react';

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

  const download = () => {
    var node = document.getElementById('lista') as any;

    toJpeg(node)
      .then(function (dataUrl) {
        console.log(dataUrl);
        console.log(typeof dataUrl);
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  }

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={() => download()}>Gerar</button>
      <div>
        <table>
          <tbody>
            {notes.map(note => {
              return (
                <tr key={note.id}>
                  <td contentEditable>{note.name}</td>
                  <td>teste</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home
