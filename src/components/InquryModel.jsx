import React from 'react'
import { RxCross1 } from "react-icons/rx";


export default function InquryModel({inquryformKeys}) {
    let {InquiryForm,SetInqquiryForm}=inquryformKeys
 
     return (
         <div className={`container formContainer max-w-[500px] duration-75 shadow-sm bg-[#fff] mx-auto p-4 fixed left-[50%]  top-[${InquiryForm===1 ? "50%" : "-1000px"}] translate-x-[-50%] translate-y-[${InquiryForm===1 ? "-50%" : "-1000px"}] z-[99999] `}>
             <form className='flex flex-col'>
                 <div className="formHeader  border-[#c1c1c1] py-3 relative"><h1 className='text-[24px] text-center font-bold border-b-1'>Inqury Now</h1><span onClick={()=>SetInqquiryForm(0)} className='absolute cursor-pointer right-0 top-0'><RxCross1 />
                 </span></div>
                 <p className='text-center text-[16px] py-3'>Feel free to contact us if you need any assistance, any help or another question.</p>
 
                 <div className='flex flex-col mb-3'>
 
                     <input name="name" className='border-1 border-[#c1c1c1] p-2' placeholder='Name' required />
                 </div>
 
 
                 <div className='flex flex-col mb-3'>
                     <input name="email" type="email" className='border-1 border-[#c1c1c1] p-2' placeholder='Email' required />
                 </div>
 
 
                 <div className='flex flex-col mb-3'>
                     <input name="phone" className='border-1 border-[#c1c1c1] p-2' placeholder='Phone' type="tel" />
                 </div>
 
 
                 <div className='flex flex-col mb-3'>
                     <textarea name="message" className='border-1 border-[#c1c1c1] p-2' placeholder='Message' rows={4} />
                 </div>
 
                 <button type="submit" className='[background:var(--button-color-primary)] py-3 text-white rounded-[50px]'>Submit</button>
             </form>
         </div>
     )
}
