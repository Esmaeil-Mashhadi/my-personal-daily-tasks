'use client'
import styles from './taskSquare.module.css'
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import InputContainer from './modules/Range';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from 'next/navigation';



const TaskSquare = () => {

    const [total , setTotal] = useState(0)
    const [refresh , setRefresh] = useState(false)
    const [date , setDate] = useState(new Date())
    const [customDate , setCustomDate] = useState(false)
    useEffect(()=>{
      const Morning = JSON.parse(localStorage.getItem("Morning"))
      const Noon = JSON.parse(localStorage.getItem("Noon"))
      const Night = JSON.parse(localStorage.getItem("Night"))
      setTotal(Morning + Noon + Night)
    },[refresh])

    const router = useRouter()
  


    useEffect(()=>{
      window.addEventListener('click' , (e)=>{
        if(!e.target.closest( `.${styles.date}`)){
          setCustomDate(false)
        }
      })
    },[])
    

    const DateHandler = ()=>{
      setCustomDate(true)
    }
    const submitHandler = async()=>{  
      const res = await fetch("api/task" , {
        method:"POST" , body:JSON.stringify({total , date}) , headers :{"Content-Type" :"application/json"}
      })
      const data = await res.json()
      if(data.status == 201){
        localStorage.removeItem('Morning')
        localStorage.removeItem('Noon')
        localStorage.removeItem('Night')
        setRefresh(!refresh)
        router.refresh()
        toast.success(data.message)
      }
    }

    return (
        <div className={styles.buttonsContainer}>
            <div onClick={DateHandler} className={styles.date}>
              {customDate ? <DatePicker  selected={date} onChange={(date)=> setDate(date) } /> : date.toLocaleDateString()
            }
            </div>
            <InputContainer total = {total} refresh = {refresh}  setRefresh ={setRefresh} time = {"Morning"}  max = {4}/>
            <InputContainer total = {total}  refresh = {refresh}  setRefresh ={setRefresh} time = {"Noon"} max = {3}/>
            <InputContainer total = {total} refresh = {refresh}  setRefresh ={setRefresh} time = {"Night"} max = {2} />

        <div className={styles.todayContainer}>
            <div>
             <label>Total hour :</label>
             <input disabled={true} value={total + "h"}  type='text'/>
            </div>

            <button onClick={submitHandler}>Submit</button>

    </div>
    <Toaster />

  </div>
    );
};

export default TaskSquare;

