
import { Suspense, useState } from 'react';
 import { ToastContainer } from 'react-toastify';
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Available from './Components/Player/Available';
import Footer from './Components/Footer/Footer';
const Data=async()=>{
  const res=await fetch('/PlayerList.json');
  return res.json();
}
// ✅ Call ONCE outside the component — never re-created on re-render
const data=Data();
function App() {
const [coin,setCoin]=useState(50000);
  return (
   <>
 <Navbar coin={coin} />
 <Banner coin={coin} setCoin={setCoin} />
 <Suspense fallback={<div className='flex justify-center items-center h-screen'>
<span className="loading loading-spinner loading-xl "></span>
 </div>}>
  <Available data={data} coin={coin} setCoin={setCoin}></Available>
 </Suspense>
 <Footer></Footer>
  <ToastContainer  />
   </>
  )
}

export default App
