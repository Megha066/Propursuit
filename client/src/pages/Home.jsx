import React, { useContext } from 'react'
import { AppContent } from '../context/appContext'

function Home() {
  const { isLoggedin } = useContext(AppContent);
  const { userData } = useContext(AppContent)

  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 bg-cover bg-center blur-sm brightness-50 img"></div>
        
        <div className='relative z-10 flex justify-center items-center min-h-screen'>
          <div className='bg-white bg-opacity-80 rounded-lg  p-6 md:p-10 shadow-lg wt'>
            <div>
              <p className='libertinus-mono-regular text-center md:text-xl font-bold'>Hello {userData ? userData.name : 'User'}</p>
              <h1 className='libertinus-mono-regular p-3 text-center md:text-3xl font-bold'>Welcome to Claripath</h1>
              <p className='text-center text-lg text-green-700 font-semibold'>
                {isLoggedin ? "You're logged in!" : ""}
              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium magni quibusdam totam similique reprehenderit dolorum perspiciatis, obcaecati est aspernatur porro?</p>
            </div>
          </div>
        </div>
      </div>
     
        <div className='flex justify-center md:gap-10 gap-5 items-center m-10 p-2 w-[90%]'>
          <div className='w-[500px] box hide-scrollbar'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo similique at atque non magni ipsa expedita. Doloribus debitis soluta, consequuntur libero cum unde mollitia eligendi ipsam, qui eius possimus cumque dolores quae. Suscipit soluta itaque, ducimus odio expedita voluptatem quibusdam eaque recusandae sequi molestias neque doloribus nisi dignissimos tempore, incidunt numquam iusto enim nemo error labore exercitationem laborum amet eveniet cum? Illum saepe iste porro, in odio, doloremque possimus exercitationem soluta necessitatibus pariatur sed, sunt vero dolorum adipisci? Illo reprehenderit eum repellendus, quae, ut suscipit est, magnam incidunt ullam repudiandae quas. Vel, modi ipsam. Consectetur illum aperiam deserunt repellendus reiciendis?
          </div>
          <div>
            <img className='md:w-[300px] w-[200px]' src="./images/books.jpg" alt="books" />
          </div>
        </div>


    </>
  )
}

export default Home