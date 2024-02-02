'use client'
import  { useEffect, useState } from 'react';
import styles from './range.module.css'

const InputContainer = ({time , max , refresh , setRefresh , total}) => {
    const [value , setValue] = useState(0)
  
    const changeHandler = (e)=>{
      if(e.target.value> max){
       e.target.value = max
      }
      setValue(e.target.value)
    }

    const setHandler =()=>{
       localStorage.setItem(time , value)
       setRefresh(!refresh)
    }

    useEffect(()=>{
     const timeString = localStorage.getItem(time)
     setValue(JSON.parse(timeString) || 0)
     
    },[total])

    const progress = (100/max)*value
    const rangeStyleObject = {
      '--progress' : `${progress}%`,
      '--color' : (progress > 0 && progress <= 25) ? "orange" : (progress > 25 && progress <=50)
       ? "yellow" : (progress>50 && progress<75)
        ? "chartreuse" : (progress>=75 && progress<=100)
        ? "darkGreen":null
    }

    const timeBackground = {
        '--timeColor': time == "Morning" ? 'rgb(0, 255, 187)' 
        : time == "Noon" ? 'rgba(209, 201, 119, 0.863)': time == "Night" ? ' rgba(120, 29, 120, 0.644)' : null
    }

    return (
        <div style={timeBackground} className={styles.container}>
        <label>{time}</label>
              <div className={styles.rangeContainer}>
                  <input style={rangeStyleObject} onChange={changeHandler} onTouchEnd={setHandler}  onMouseUp={setHandler} value={value} step={.5} min={0} max={max} type='range' />
                  <input type='number'  onChange={changeHandler} step={.5}  value={value} min={0} max={max}/>
              </div>
      </div>
    );
};

export default InputContainer;