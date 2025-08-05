import React, { useContext } from 'react'
import { AppContent } from '../context/appContext'
import TypingEffect from '../components/TypingEffect';


function Home() {
  const { isLoggedin } = useContext(AppContent);
  const { userData } = useContext(AppContent);

  return (
    <>
    
      <div className='flex justify-between pt-10 m-auto items-center w-[80%] shadow'>
        
        {/* <div className="absolute inset-0 bg-cover bg-center blur-sm brightness-50 img"></div> */}

        <div className='w-[50%]'>
          {/* <h1 className='my-soul-regular p-3 text-center md:text-3xl font-bold'>Welcome to Claripath</h1> */}
          <h1 className='text-5xl font-bold text-gray-800 p-3 my-soul-regular mx-5'>
            Still thinking: Science, Commerce, or Arts?
          </h1>
          <p className='p-3 allura-regular text-left font-bold mx-5 text-xl'>Hello {userData ? userData.name : 'User'}!</p>
          {/* <p className='tm-5 shadows-into-light-regular'>Here is Your One Step solution where You can test Your IQ, and Based on your IQ and previous boards marks you will get Best Suited Stream for you Also.</p> */}
          <TypingEffect text="Here is Your One Step solution where You can test Your IQ, and Based on your IQ and previous boards marks you will get Best Suited Stream for you Also." />
          <p className='font-bold p-3 flex gap-5'>Scroll for More details
            <img width={15} src="/public/downArrow.svg" alt="" />
          </p>
        </div>
       <div><img width={500} src="/public/SEO-pana.png" alt="" /></div>
          
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