'use client'
import { useEffect, useState } from 'react';
import styles from './page.module.css'
import InputContainer from './components/Range';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const MainPage = () => {
  const [total , setTotal] = useState(0)
  const [refresh , setRefresh] = useState(false)
  useEffect(()=>{
    const Morning = JSON.parse(localStorage.getItem("Morning"))
    const Noon = JSON.parse(localStorage.getItem("Noon"))
    const Night = JSON.parse(localStorage.getItem("Night"))
    setTotal(Morning + Noon + Night)
  },[refresh])

  
  const date = new Date().toLocaleDateString() 
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
      toast.success(data.message)
    }
  }

  return (
    <div className ={styles.container}>
    <img  src='background.jpg'/>
      <div className={styles.buttonsContainer}>
        <div className={styles.date}>{date}</div>
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
      </div>
      <Toaster />
   
    </div>
  );
};

export default MainPage;
