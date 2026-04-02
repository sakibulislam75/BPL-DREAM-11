
import { Suspense, useState } from 'react';
 import { ToastContainer, toast } from 'react-toastify';
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
const [coin,setCoin]=useState(50000);
  return (
   <>
 <Navbar coin={coin} />
 <Banner />
 <Suspense fallback={<div className='flex justify-center items-center h-screen'>
<span className="loading loading-spinner loading-xl "></span>
 </div>}>
  <Available data={data} coin={coin} setCoin={setCoin}></Available>
 </Suspense>
  <ToastContainer />
   </>
  )
}

export default App
