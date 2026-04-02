
import { Suspense } from 'react';
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Card from './Components/CardSection/Card';
import { DiVim } from 'react-icons/di';
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
  <Card data={data}  ></Card>
 </Suspense>
   </>
  )
}

export default App
