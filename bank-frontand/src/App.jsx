import { useState } from 'react'

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div className="div">
     
     <div className="div">

    <h1 className='text-3xl'> Benvenuto nella mia Banca React App</h1><br />

    <div class="columns-3 ...">
  <img class="aspect-square" src="/img/image1.jpg" />
  <img class="aspect-square" src="/img/image2.jpg" />
  <img class="aspect-square" src="/img/image3.jpg" />
  
  </div>

     </div>


    </div>
     
    </>
  )
}


export default App
