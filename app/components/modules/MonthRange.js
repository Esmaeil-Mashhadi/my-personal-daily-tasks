import { months } from '@/utils/constants'
import styles from './MonthRange.module.css'

function MonthRange({ info}) {

   const{monthName , nthMonth , total} = info
   const perDayResult = total/30
   const max = 240
   const progress =  (total/240)*100
   const style = {
    '--progressColor' : progress >0  && progress <=30 ? 'red' 
    :progress >30 && progress <= 60 ? 'yellow' : progress >60  ? 'green' : null,

    '--progress': `${progress}%`
   }
  return (
    <div className={styles.container}>
            <h2>Monthes Result</h2>
                <div  className={styles.resultContainer} style={style}>
                    <label>{monthName} <span>{nthMonth}</span></label>
                      <input disabled = {true} type='range' value={total} min={0} max={max} />
                    <label>totalHours : {total}</label>
                </div> 
                <div className={styles.perDay}>
                    {perDayResult}H per day
                </div>
    </div>
  )
}

export default MonthRange