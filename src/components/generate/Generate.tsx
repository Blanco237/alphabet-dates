import React, { useEffect, useState } from 'react'

import styles from './generate.module.css';

import chocolates from '../../assets/chocolates.png';
import cupid from '../../assets/cupid.png';
import faces from '../../assets/faces.png';
import vases from '../../assets/vases.png';

import dates from './dates.json';

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const Generate = () => {

    const [letter, setLetter] = useState(letters[0]);
    const [count, setCount] = useState(30);
    const [animate, setAnimate] = useState(false);
    const [showList, setShowList] = useState(false);
    const [t, setT] = useState<number | undefined>()

    const generateLetter = () => {
        setCount(30);
        setAnimate(false)
        const _t = setInterval(() => {
            let index = Math.floor(Math.random() * letters.length);
            setLetter(letters[index]);
        }, 100)
        setT(_t);
    }

    useEffect(() => {
        setCount((c) => c - 1);
        if(count < 0){
            clearInterval(t)
            setAnimate(true)
            setTimeout(() => setShowList(true), 800)
        }
    }, [letter])

  return (
    <>
    <section className={styles.body}>
        <img className={`${styles.image} ${styles.chocolates}`} src={chocolates} />
        <img className={`${styles.image} ${styles.cupid}`} src={cupid} />
        <img className={`${styles.image} ${styles.faces}`} src={faces} />
        <img className={`${styles.image} ${styles.vases}`} src={vases} />
        <h1 className={`${styles.letter} ${animate? styles.animate : ''}`}>{letter}</h1>
        <button className={styles.button} onClick={generateLetter}>Generate</button>
    </section>
    <section className={`${styles.list} ${showList? styles.show : ''} list`}>
        <h4>Date Ideas for <span>{letter}</span></h4>
        <ol>
            {
                // @ts-ignore
                dates[letter].map((item, i) => {
                    return <li key={`${i}-${item}`}>{item}</li>
                } )
            }
        </ol>
    </section>
    </>
  )
}

export default Generate