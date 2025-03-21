import React from 'react'
import { Codepen, Italic, ItalicIcon } from 'lucide-react';
import { Bot } from 'lucide-react';
import { X } from 'lucide-react';



export default function Top4() {
  return (
    <div>
      <div className='items-center mx-auto w-2/12 pt-40'>
        <p className='text-5xl font-bold'> Our Brands</p>
      </div>

      <div className='flex w-8/12 items-center justify-between mx-auto pt-20 pb-20'>
      <p className="text-gray-500 text-4xl font-bold flex items-center"> <span><X size={60}/></span>xspeedstudio</p>
      
        <p className='text-4xl text-red-500 font-bold flex items-center'><span><Codepen size={60}/></span> wpmet</p>
        <p className='text-4xl font-bold flex items-center'><span> <Bot size={60} /> </span>GetGenie</p>
        
      </div>
      


      
    </div>
  )
}
