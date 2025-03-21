/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { FaLinkedin } from "react-icons/fa";


export default function OutFoundersBox({img,name,title,link}) {
  return (
    <div className="card-box z-20 flex lg:flex-col justify-center items-center">
      
      <div className="image w-[160px] h-[160px] ">
        <img src={img} alt={`${name} ${title} image`} className="w-100 h-100 object-cover rounded-full" />
      </div>

      <div className="data lg:mt-4 lg:pl-0 mt-0 pl-4">
      <h5 className='text-2xl flex items-center justify-center'>{name}
        <span className='mx-2 text-2xl'>|</span>
        <a href={link} target="_blank"  className='pt-2'>
        <FaLinkedin />
        </a>
      </h5>
      <p className='text-lg text-center'>{title}</p>
      </div>


    </div>
  )
}
