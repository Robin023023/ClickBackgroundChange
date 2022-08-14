import React,{useEffect, useState} from 'react'
import './style.css'

export default function DarkToLight() {
    const[theme,setTheme]=useState(false);
    const[color,setColor]=useState(false);
    const handleClick=()=>{
        setTheme(!theme)
        setColor(!color)
    }
    useEffect(()=>{
        if(theme==true){
            document.body.classList.add("dark")
        }
        else{
           document.body.classList.remove('dark');
        }
        
    })

    useEffect(()=>{
      if(color==true){
        document.body.classList.add("text")
      }
      else{
        document.body.classList.remove("text")
      }
    })

  return (
    <div>
      <button onClick={handleClick}>{theme?'Light':'Dark'}</button>
      <h1>My name is Robin</h1>
    </div>
  )
}
