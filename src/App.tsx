import React from "react";
import Header from "./components/Header";
import Notice from "./components/Notice";

export default function App(){
  return(
    <div className="w-full h-auto bg-[#F3F5F7]">
      <Header />
      <div className="flex flex-col py-10 px-5 items-center">
        <Notice 
        date='30 de fevereiro de 2023'
        tittle='Agora é oficial: Windows 12 está chegando!'
        notice='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.'
        />

        <Notice 
        date='30 de fevereiro de 2023'
        tittle='Tim Berners-Lee vai leiloar código-fonte da web'
        notice='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.'
        />
        
        <Notice
        date='30 de fevereiro de 2023'
        tittle='Tem Firefox novo no pedaço e você vai querer migrar'
        notice='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus.'
        />
        
        <Notice
        date='30 de fevereiro de 2023'
        tittle='John McAfee, criador do antivírus McAfee, morre'
        notice='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.'
        />

      </div>
    </div>
  )
}