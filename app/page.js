import styles from './page.module.css'
import TaskSquare from './components/TaskSquare';
import Decade from './components/Decade';
import decadeInfo from '@/utils/getDecadeInfo';
import { getMonthInfo } from '@/utils/getMontInfo';
import { handleMonth } from '@/utils/handleMonth';


const MainPage = async() => {
  const {firstDec ,secondDec , thirdDec } =  await decadeInfo()
  const monthInfo = await getMonthInfo()
  const plain = JSON.parse(JSON.stringify(monthInfo))
  await handleMonth(firstDec + secondDec + thirdDec)
  return (
    <div className ={styles.container}>
    <img style={{pointerEvents:"none"}} src='background.jpg'/>
      <Decade monthInfo ={plain} firstDec={firstDec} secondDec={secondDec} thirdDec={thirdDec} />
      <TaskSquare />
    </div>
  );
};

export default MainPage;
