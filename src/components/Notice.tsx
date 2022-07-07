import React from "react";

export default (props: { date: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; tittle: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; notice: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
     return (
          <div className="max-w-3xl space-y-2 bg-white p-4 drop-shadow-lg rounded-lg mb-10">
               <div className="flex justify-between items-center">
                    <span className="text-xs">{props.date}</span>
                    <a href="#">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 stroke-[#574AE8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                         </svg>
                    </a>
               </div>
               <h1 className='text-2xl font-bold'>{props.tittle}</h1>
               <p className='text-[#717171] text-justify'>{props.notice}</p>
          </div>
     )
}