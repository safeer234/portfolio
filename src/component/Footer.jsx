import React from 'react'

function Footer() {
  return (
    <div>
      <footer class="bg-[hsl(229,5%,3%)] b ">
  <div class="mx-auto max-w-7xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
    <div class="grid grid-cols-1 gap-13 lg:grid-cols-3">
      <div>
        <div class="text-[#34d399] dark:text-teal-300">
          <p className='text-4xl'>Safeer Mohammed K</p>
        </div>

        <p class="mt-4 max-w-xs text-xl  ">
          Front-End Developer
        </p>

        <ul class="mt-8 flex gap-6">
          

          <li>
            <a href="#" rel="noreferrer" target="_blank" class=" transition hover:opacity-75 dark:text-gray-200">
              <span class="sr-only">Instagram</span>

              <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
              </svg>
            </a>
          </li>

          <li>
            <a href="#" rel="noreferrer" target="_blank" class=" transition hover:opacity-75 dark:text-gray-200">
              <span class="sr-only">Twitter</span>

              <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
          </li>

          <li>
            <a href="https://github.com/safeer234" rel="noreferrer" target="_blank" class=" transition hover:opacity-75 dark:text-gray-200">
              <span class="sr-only">GitHub</span>

              <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
              </svg>
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/safeermohammedk" rel="noreferrer" target="_blank" class=" transition hover:opacity-75 dark:text-gray-200">
              <span class="sr-only">Dribbble</span>

              <svg class="size-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640" aria-hidden="true">
                <path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM165 266.2L231.5 266.2L231.5 480L165 480L165 266.2zM236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160C219.5 160 236.7 177.2 236.7 198.5zM413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480L413.9 480z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
       

        

        <div>
          <p class="font-medium  dark:text-white">Links</p>

          <ul class="mt-6 space-y-4 text-sm">
            <li>
              <a href="#home" class=" transition hover:opacity-75 dark:text-gray-200">
                Home
              </a>
            </li>

            <li>
              <a href="#about" class=" transition hover:opacity-75 dark:text-gray-200">
                About
              </a>
            </li>

            <li>
              <a href="#skills" class=" transition hover:opacity-75 dark:text-gray-200">
                Skills
              </a>
            </li>

             <li>
              <a href="#projects" class=" transition hover:opacity-75 dark:text-gray-200">
                Projects
              </a>
            </li>

             <li>
              <a href="#contact" class=" transition hover:opacity-75 dark:text-gray-200">
                Contact
              </a>
            </li>
          </ul>
        </div>

         

        <div>
          <p class="font-medium  dark:text-white">Contact Me</p>

          <ul class="mt-6 space-y-4 text-sm">
            <li>
              <a  className=" flex items-center gap-2 transition hover:opacity-75 dark:text-gray-200">
                <i class='bx   bx-location'></i>
                <p>Pattambi,Kerala,India</p> 
              </a>
            </li>

            <li>
              <a class=" flex items-center gap-2 transition hover:opacity-75 dark:text-gray-200">
                <i class='bx  bx-phone'></i>
                <p>+91 8714939897</p> 
              </a>
            </li>

            <li>
              <a href='mailto:' class=" flex items-center gap-2 transition hover:opacity-75 dark:text-gray-200">
                <i class='bx  bx-envelope' ></i>
                <p >sfrsmk268@gmail.com</p> 
              </a>
            </li>

          
          </ul>
        </div>

        <div>
          <p class="font-medium  dark:text-white">Services</p>

          <ul class="mt-6 space-y-4 text-sm">
            <li>
              <a  class=" transition hover:opacity-75 dark:text-gray-200">
                Front-End Development
              </a>
            </li>

          </ul>
        </div>






      </div>
    </div>

    <p class="text-xs  dark:text-gray-400">
      © 2025. Safeer Mohammed k . All rights reserved.
    </p>
  </div>
</footer>
    </div>
  )
}

export default Footer
