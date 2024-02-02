'use client'
import styles from './DecadeRange.module.css'

const DecadeRange = ({hours , time , today , part}) => {

    const precent = Math.floor((hours/90)*100)
    const style = {
        '--progress' : `${precent}%`
    }

    const colorStyle = {
        '--color' : precent>0 && precent<30 ? "orange" : precent >=30 && precent <= 50 ? "yellow"
        : precent > 50 && precent <= 70 ? "lightGreen" : precent >70 ? "darkGreen" : null 
    }

    
    const pastStyle ={
        '--opacity' : today > Number(part) && '.5'
    }

    const allStyles = {
        ...style , ...colorStyle , ...pastStyle
    }
    return (
        <div style={allStyles} className={styles.container}>
        <div   className={styles.rangeContainer}>
                <label>{time} : </label>
                <input  type='range' disabled  value={hours} max={90}/>
                <label> {hours}H /90H </label>
            </div>
        </div>
    );
};

export default DecadeRange;