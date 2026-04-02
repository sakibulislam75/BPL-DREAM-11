
import { Suspense } from 'react';
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Available from './Components/Player/Available';
const Data=async()=>{
  const res=await fetch('/PlayerList.json');
  return res.json();
}
function App() {

const data=Data();
  return (
   <>
 <Navbar />
 <Banner />
 <Suspense fallback={<div className='flex justify-center items-center h-screen'>
<span className="loading loading-spinner loading-xl "></span>
 </div>}>
  <Available data={data}></Available>
 </Suspense>
   </>
  )
}

export default App
