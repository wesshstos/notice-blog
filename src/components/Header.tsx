import React from 'react'

export default function Header() {
     return (
          <div className="bg-gradient-to-r from-[#574AE8] to-[#3EA1DB] p-4 flex flex-col items-center justify-center">
               <div className="w-full flex items-center justify-around p-4 text-lg tracking-wide text-white font-bold font-['Inter']">
                    <span>Codelândia</span>
                    <span>Blog</span>
               </div>
               <div className='flex w-7/12 justify-center items-center relative'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 relative left-[30px] fill-white" viewBox="0 0 20 20" fill="currentColor">
                         <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                    <input className='w-full px-10 py-4 bg-white/50  rounded-md placeholder-slate-100' placeholder="Pesquise no Blog" type="text" />
               </div>
          </div>
     )
}
