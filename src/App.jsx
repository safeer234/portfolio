
import './App.css'
import ProjectCard from './component/ProjectCard'
import SkillCard from './component/SkillCard'
import profileimg1 from './images/WhatsApp Image 2025-09-06 at 20.58.52_74b47452.jpg'
import projectimg1 from './images/Screenshot 2025-10-13 191417.png'
import projectimg2 from './images/Screenshot 2025-11-16 222312.png'
import projectimg3 from './images/Screenshot 2025-11-24 225354.png'
import { Menu, X } from 'lucide-react';
import { useState } from 'react'
function App() {
  const [isOpen, setIsOpen] = useState(false)
  const skills = [
  {name: 'Html'},
  {name: 'Css'},
  { name: 'JavaScript' },
  { name: 'React Js' },
  { name: 'Tailwind CSS' },
  { name: 'GitHub' },
  { name: 'Redux' },
  { name: 'Bootstrap' },
  { name: 'Netlify' },
  { name: 'Vite' },
  { name: 'Material UI' },
  { name: 'Figma' },

  
  ]
  const projects = [
     {
      image: projectimg3,
      title: 'Food order Website',
      info: 'Food Ordering website created using Html, CSS and JavaScript and react',
      link: 'https://food-order-website-opal.vercel.app/'
    },
    {
      image: projectimg1,
      title: 'Black Jack Game',
      info: 'This interactive game recognizes winning conditions and provides instant feedback.',
      link:" https://safeer234.github.io/Blackjack-game/ "

    },
       {
      image: projectimg2,
      title: 'Simple Calculator',
      info: 'Simple working calculator which is created using Html, CSS and JavaScript',
      link: 'https://poetic-custard-c30868.netlify.app/'
    },
   
  ]

  return (
    <>
     <header>
      <nav className='flex fixed  gap-30 lg:gap-180 py-5 px-10 lg:px-14 text-xl font-semibold text-[white]'>
        <div>
          <a href="#home">Safeer.</a>
          </div>
        <div className='hidden md:hidden lg:flex gap-15'>
         <a href="#home">Home</a>
         <a href="#about">About</a>
         <a href="#skills">Skills</a>
         <a href="#projects">Projects</a>
         <a href="#contact">Contact</a>


        </div>
        
         {/* hamburger button */}
         <button className='lg:hidden' onClick={()=>setIsOpen(!isOpen)}>
          {isOpen ? <X  size={28} /> : <Menu size={28} />}

         </button>
      
      </nav>

      {/* mobile menu */}
      {isOpen && (
        <ul className="lg:hidden  flex flex-col gap-3 mt-2 bg-white p-3 rounded shadow-md absolute w-76 z-50">

          
              <a href='#home'  onClick={() => setIsOpen(false)} className="text-[#57534e] hover:text-[#ef4444]">Home</a>
              <a href='#about' onClick={() => setIsOpen(false)} className="text-[#57534e] hover:text-[#ef4444]">About</a>
              <a href='#skills'  onClick={() => setIsOpen(false)} className="text-[#57534e] hover:text-[#ef4444]">Skills</a>
              <a href='#projects' onClick={() => setIsOpen(false)} className="text-[#57534e] hover:text-[#ef4444]">Projects</a>
              <a href='#contact'  onClick={() => setIsOpen(false)} className="text-[#57534e] hover:text-[#ef4444]">Contact</a>



        </ul>
    
      )}
     </header>
     <main>
      {/* sections-home */}
     <section id='home'>
      <div className='block lg:flex'>
        <div className='text-[white] px-10 py-25 lg:py-0 lg:px-0  lg:mt-42 lg:ml-50 lg:text-7xl'>
          <h1><span className=' text-md lg:text-[30px]'>Hello i'm</span><br /><span className='text-[#34d399] text-2xl lg:text-7xl'>Safeer <br /> Mohammed K </span> </h1>
          <p className='lg:text-[30px] lg:mt-2'>And <span className='animate-ping'>i'm a Front-End Developer</span></p>
          

        </div>

        <div className='  lg:mt-40  lg:ml-262 absolute z-1  '>
          
            <img className=' w-36 h-36 mt-1 lg:mt-0 ml-15 lg:ml-0 lg:w-64 lg:h-65 border  rounded-[410px]' src={profileimg1} alt="" />

          
          

        </div>

        <div className='z-5 w-38 h-38 ml-14   lg:w-65 lg:h-65 lg:mt-40 rounded-[410px] lg:ml-99
         border-5  border-l-[#34d399] animate-spin'>

        </div>
        




      </div>
      <p className=' lg:ml-50  px-10 lg:px-0 py-23 lg:py-5 lg:mt-2 text-sm w-71  lg:w-200 lg:text-[18px] text-[white]'>Aspiring Frontend Developer skilled in creating responsive and user-friendly web interfaces <br />using React.js, JavaScript, HTML5, CSS3, and Tailwind CSS.</p>
      <div className='flex gap-4 px-10 lg:px-0 lg:ml-50 '>
        <a href='https://github.com/safeer234' className='border-2 w-10 h-10 hover:translate-y-[-5px] duration-300 ease-in rounded-[30px] overflow-hidden'>
          <svg className='bg-[#34d399] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M237.9 461.4C237.9 463.4 235.6 465 232.7 465C229.4 465.3 227.1 463.7 227.1 461.4C227.1 459.4 229.4 457.8 232.3 457.8C235.3 457.5 237.9 459.1 237.9 461.4zM206.8 456.9C206.1 458.9 208.1 461.2 211.1 461.8C213.7 462.8 216.7 461.8 217.3 459.8C217.9 457.8 216 455.5 213 454.6C210.4 453.9 207.5 454.9 206.8 456.9zM251 455.2C248.1 455.9 246.1 457.8 246.4 460.1C246.7 462.1 249.3 463.4 252.3 462.7C255.2 462 257.2 460.1 256.9 458.1C256.6 456.2 253.9 454.9 251 455.2zM316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72zM169.2 416.9C167.9 417.9 168.2 420.2 169.9 422.1C171.5 423.7 173.8 424.4 175.1 423.1C176.4 422.1 176.1 419.8 174.4 417.9C172.8 416.3 170.5 415.6 169.2 416.9zM158.4 408.8C157.7 410.1 158.7 411.7 160.7 412.7C162.3 413.7 164.3 413.4 165 412C165.7 410.7 164.7 409.1 162.7 408.1C160.7 407.5 159.1 407.8 158.4 408.8zM190.8 444.4C189.2 445.7 189.8 448.7 192.1 450.6C194.4 452.9 197.3 453.2 198.6 451.6C199.9 450.3 199.3 447.3 197.3 445.4C195.1 443.1 192.1 442.8 190.8 444.4zM179.4 429.7C177.8 430.7 177.8 433.3 179.4 435.6C181 437.9 183.7 438.9 185 437.9C186.6 436.6 186.6 434 185 431.7C183.6 429.4 181 428.4 179.4 429.7z"/></svg>


        </a>

        <a href='https://www.linkedin.com/in/safeermohammedk' className='border-2 duration-300 ease-in  w-10 h-10 hover:translate-y-[-5px] hover:scale-1.2 shadow-[0 0 25px]    overflow-hidden  rounded-[30px]'>
          <svg className='bg-[#34d399] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM165 266.2L231.5 266.2L231.5 480L165 480L165 266.2zM236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160C219.5 160 236.7 177.2 236.7 198.5zM413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480L413.9 480z"/></svg>

        </a>

        <a href='' className='border-2  w-10 hover:translate-y-[-5px]  duration-300 ease-in h-10 overflow-hidden  rounded-[30px]'>
          <svg className='bg-[#34d399]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"/></svg>

        </a>

        <a href='' className='border-2  w-10 h-10 hover:translate-y-[-5px] duration-300 ease-in  overflow-hidden  rounded-[30px]'>
          <svg className='bg-[#34d399]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM447.3 263.3C447.3 350 381.3 449.9 260.7 449.9C223.5 449.9 189 439.1 160 420.5C165.3 421.1 170.4 421.3 175.8 421.3C206.5 421.3 234.7 410.9 257.2 393.3C228.4 392.7 204.2 373.8 195.9 347.8C206 349.3 215.1 349.3 225.5 346.6C195.5 340.5 173 314.1 173 282.2L173 281.4C181.7 286.3 191.9 289.3 202.6 289.7C193.6 283.7 186.2 275.6 181.1 266.1C176 256.6 173.3 245.9 173.4 235.1C173.4 222.9 176.6 211.7 182.3 202C214.6 241.8 263.1 267.8 317.5 270.6C308.2 226.1 341.5 190 381.5 190C400.4 190 417.4 197.9 429.4 210.7C444.2 207.9 458.4 202.4 471 194.9C466.1 210.1 455.8 222.9 442.2 231C455.4 229.6 468.2 225.9 480 220.8C471.1 233.9 459.9 245.5 447.1 254.8C447.3 257.6 447.3 260.5 447.3 263.3z"/></svg>

        </a>
        
        

      </div>
      <div className=' flex px-5 lg:px lg:ml-50 mt-10 gap-3'>
        <button  className=' border-2 border-[#34d399] duration-300 ease-out font-semibold text-[#34d399] hover:bg-[#34d399]  hover:text-[black] rounded-3xl w-30 h-10 text-center justify-center items-center'>Download CV</button>
        <button  className='bg-[#34d399] duration-300 ease-in font-semibold text-[black] hover:bg-[#09090b] border-2 border-[#34d399] hover:text-[#34d399] rounded-3xl w-30 h-10 text-center justify-center items-center'>Contact Me</button>


      </div>
      
     </section><br />
     {/* sections-home */}

     {/* sections-about */}

     <section id='about'>
      

         <div className='lg:flex lg:items-center py-5 lg:py-0 lg:mt-20'>
         

        <div className=' lg:ml-65 px-10 lg:px-0 z-1 lg:z-0 absolute lg:relative lg:py-0  '>
          <div className=' flex w-52 h-52 lg:w-76 lg:h-76 bg-[#ecfdf5] z-1 mt-30 rounded-[410px] overflow-hidden items-center justify-center duration-300 ease-in hover:bg-[#34d399]   hover:translate-y-1.5 hover:scale-x-110 hover:scale-y-110   '>
             <img className=' w-50 h-50 lg:w-74 lg:h-74 mb-0 rounded-[410px]'src= {profileimg1} alt="" />
          </div>
          
          
         
          

        </div>
        


        <div className=' text-center mr-30'>
          <div className='mt-2 text-center'>
             <h1 className='text-[#34d399]  lg:ml-50 text-2xl lg:text-6xl  '>About Me</h1>
             <div className=' underline ml-28 lg:ml-136 mt-2 border-2 border-[#34d399] w-8 lg:w-12 '></div>

          </div>
          
           <br />
            

          
          
<div className='lg:flex lg:justify-center lg:items-center lg:text-center'>
 <p className='lg:ml-50 w-70 lg:w-170 px-10  py-80 lg:px-0 lg:py-0 lg:mt-2 text-sm lg:text-[18px] text-[white]'>Motivated Frontend Developer skilled in creating responsive and user-friendly web interfaces using React.js, JavaScript, HTML5, CSS3, and Tailwind CSS. Passionate about crafting engaging digital experiences, integrating APIs, and following clean coding practices. Eager to contribute to innovative web projects in a collaborative, growth-focused environment.</p>
</div>
           
            
          
          

        </div>

      </div>


     

     </section><br />
     {/* sections-about */}

     {/* sections-skills */}
     <section id='skills'>
      <div className='lg:text-center lg:mt-100'>
        
           <p className='text-[#34d399] px-30 lg:px-0 text-2xl lg:text-6xl'>Skills</p>
           <div className=' underline mt-2 ml-34 lg:ml-183 border-2 border-[#34d399]  w-6 lg:w-12 '></div>

       
       
        
            
      </div>

      <div className='flex items-center justify-center'>
        <div className=' mt-10 mr-20 lg:mr-0 lg:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 lg:gap-6 p-6 '>

        {skills.map((skill, index) => {
          return(
            <div className='lg:w-45 w-40 mb-4 lg:mb-0 flex lg:h-20 text-center duration-300 ease-in items-center justify-center p-3 px-2 hover:translate-y-1.5 hover:scale-x-110 hover:scale-y-110  text-2xl text-[#34d399] font-medium rounded-2xl   bg-[#09090b] border-2 hover:border-2 border-[#34d399] hover:bg-[#34d399] hover:text-[black] '>
              <SkillCard skill={skill}  key={index} />

            </div>
          )
        })}



      </div>


      </div>
      
     </section>

     {/* sections-skills */}


     {/* sections-projects */}
     <section id='projects'>
     <div className='lg:text-center mt-85'>
        <p className='text-[#34d399] px-25 lg:px-0 text-2xl lg:text-6xl'>Projects</p>
        
            <div className=' underline ml-32 mt-2 lg:mt-3  lg:ml-183 border-2 border-[#34d399] w-8 lg:w-12 '></div>
      </div>

      <div className='flex justify-center gap-4'>
        <div className=' mt-10 mr-15 lg:mr-0  lg:grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-10 p-6 '>

        {projects.map((project, index) => {
          return(
            <div className=' mb-10 lg:mb-0 flex lg:w-70 w-50 h- lg:h-80   justify-center p-3 px-2   text-2xl text-[#34d399] font-medium rounded-2xl border-[white]  border-3 bg-[#09090b]   duration-300 ease-in hover:border-3 hover:border-[#34d399] '>
              <ProjectCard project={project}  key={index} />

            </div>
          )
        })}



      </div>


      </div>
     </section>
     {/* sections-projects */}

     {/* sections-contact */}
     <section id='contact'>
     

     </section>
     {/* sections-contact */}

     </main>
     
    </>
  )
}

export default App
