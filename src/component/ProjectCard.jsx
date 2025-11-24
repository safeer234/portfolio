import React from 'react'

function ProjectCard(prop) {
  return (
    <>
    <div>
        <div className='flex  items-center justify-center duration-300 ease-in hover:translate-y-1.5 hover:scale-x-140 hover:scale-y-140  '>
            <img className='w-60 h-30 border-2 border-[white] hover:border-[#34d399] rounded-xl' src={prop.project.image} alt="" />

        </div>
 
   <div className='text-center'>
     <h2 className='mt-2 text-[white]'>{prop.project.title}</h2>

   </div>
       
        <div className=' flex justify-center ml-4 text-[16px] mt-1 text-[white]'>
            <p>{prop.project.info}</p>

        </div>
      
      <a className='flex text-center justify-center' href={prop.project.link} target="_blank" rel="noopener noreferrer">
  <button className='flex mt-5 items-center justify-center border-2 border-[white] text-[white] rounded-3xl text-[20px] p-2 w-20 h-10 duration-300 ease-out hover:border-0 hover:bg-[#34d399] hover:text-[black]'>
    View
  </button>
</a>


     </div>
      
    </>
  )
}

export default ProjectCard
