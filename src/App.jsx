import { useState } from 'react'
//import viteLogo from '/vite.svg'
//import './App.css'
import {puppyList} from './data.js'

const [puppies, setPuppies] = useState(puppyList);

console.log(puppies);


  //return (
    //<>
      <div>{
        puppies.map((puppy) => {
          return <p>{puppy.name}</p>
        })
        }
      </div>
      
   // </>
  //)

