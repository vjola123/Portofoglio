import React from 'react'
import Heading from '../Helpercomp/Heading'
import { MdMail } from 'react-icons/md'
import { FcCellPhone } from 'react-icons/fc'
import { TbWorldSearch } from 'react-icons/tb'

import { BsGithub } from 'react-icons/bs'

const Contacs = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
         <Heading
        title="My Contacts & Links"
           />
    <div className="flex items-center space-x-2 mb-0">
        <MdMail fontSize={30}/>
        <span className="pl-2 mb-0 shadow hover:text-primary bold" >bvjola20@gmail.com</span>
    </div>
  
  <div className="flex items-center space-x-2 mb-0">
        <FcCellPhone fontSize={30}/>
        <span className="pl-2 mb-0 shadow hover:text-primary bold mt-4" > 0697209599 </span>
    </div>

    <div className="flex items-center space-x-2 mb-0">
        <TbWorldSearch fontSize={30} className='mt-2'/>
        <span className="pl-2 mb-0 shadow hover:text-primary bold mt-4" > https://sos24prontointervento.it/  </span>
    </div>
     
    <div className="flex items-center space-x-2 mb-0">
        <BsGithub fontSize={30} className='mt-2'/>
        <span className="pl-2 mb-0 shadow hover:text-primary bold mt-4" > https://github.com/vjola123 </span>
    </div>

<div>
    <img 
    alt='contacts'
    width={270}
    height={150}
    src="https://www.milestoneswealth.org/wp-content/uploads/2018/07/contact-icon-png-0-1024x1024.png">
    
    </img>
</div>
    </div>
  )
}

export default Contacs
