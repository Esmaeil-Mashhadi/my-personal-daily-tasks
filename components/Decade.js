'use client'
import styles from './Decade.module.css'
import DecadeRange from './modules/DecadeRange';
import MonthRange from './modules/MonthRange';

const Decade = ({firstDec , secondDec , thirdDec , monthInfo}) => {

     const today = new Date().toLocaleDateString().split("/")[1] 
     const monthName = new Date().toLocaleString('default' , {month:"long"})

      const total = firstDec + secondDec + thirdDec


    return (       
        <div  className ={styles.container}>
        
            <div className={styles.monthInfoContainer}> 
              {monthInfo.map((info , index) => (
                <MonthRange key={index} info= {info.monthes} /> 
                 ))}
            </div>

           <div className={styles.decadeContainer}>
                 <label>{monthName} </label>
                <div className={styles.rangeContainer}>
                    <DecadeRange hours = {firstDec} today ={today} part = "10" time = "1th - 10th"/>
                    <DecadeRange hours = {secondDec} today = {today} part = "20" time ="10th-20th"/>
                    <DecadeRange hours = {thirdDec} today = {today} part = "30" time = "20th-30th"/>   
                </div>
                 <p>total : {total}H </p>
            </div>
        
        </div>
    );
};

export default Decade;