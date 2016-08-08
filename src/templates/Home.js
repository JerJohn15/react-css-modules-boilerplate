import React from 'react'
import CoolButton from '../components/Button/Button'
import styles from '../components/Button/styles.css';

export default class Home extends React.Component {
  render() {
    return (
        <div>
            <h1>Home page</h1>
            <p className = {styles.textChange}>This is a home page</p>
            <CoolButton text='A super cool button'/>
        </div>
    )
  }
}
