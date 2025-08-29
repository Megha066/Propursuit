import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContent } from '../context/appContext'
import TypingEffect from '../components/TypingEffect';
import Card from '../components/Card.jsx';
import test1 from "../assets/test1.png";
import test2 from "../assets/test2.png";
import chatbot1 from "../assets/chatbot1.png";
import man from "../assets/man.jpg";
import ai from "../assets/ai.jpg";
import path3 from "../assets/path3.jpg";
import DetailsSection from "../components/DetailsSection.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";


function Home() {
  const { isLoggedin } = useContext(AppContent);
  const { userData } = useContext(AppContent);
  const navigate = useNavigate();

  const cards = [
    {
      title: "Accurate IQ Evaluation",
      description: "Our IQ test goes beyond scoring—it uncovers your strengths to build a reliable base for stream and career choices.",
      color: "text-blue-500"
    },
    {
      title: "Stream & Path Clarity",
      description: "We don't just suggest Science, Commerce, or Arts—we also map out the right career path within your chosen stream.",
      color: "text-orange-500"
    },
    {
      title: "Interactive Career RouteTree",
      description: "Our visual route tree makes it easy to understand where each stream can take you, removing confusion and guesswork.",
      color: "text-purple-500"
    },
    {
      title: "Future-Ready Career Mapping",
      description: "Our AI links your stream and path to real-world opportunities, ensuring you prepare for careers that are in demand.",
      color: "text-pink-500"
    },
    {
      title: "Clear & Actionable Reports",
      description: "Get easy-to-read reports that explain not only what to choose, but also why it suits your skills and interests.",
      color: "text-green-500"
    },
    {
      title: "Continuous Guidance",
      description: "With regular tests and progress tracking, we guide you as your stream, path, and career journey evolve.",
      color: "text-yellow-500"
    }
  ];
  return (
    <>
      {/* Main block */}
      <div className='flex justify-between pt-10 m-auto items-center w-[80%] shadow'>

        {/* <div className="absolute inset-0 bg-cover bg-center blur-sm brightness-50 img"></div> */}

        <div className='w-[50%]'>
          {/* <h1 className='my-soul-regular p-3 text-center md:text-3xl font-bold'>Welcome to Claripath</h1> */}
          <h1 className='text-5xl font-bold text-gray-800 p-3 my-soul-regular mx-5'>
            Still Confused!<br />which path to choose?
          </h1>
          <p className='p-3 allura-regular font-bold mx-5 text-xl text-center'>Hello {userData ? userData.name : 'User'}!</p>
          <p className='p-3 allura-regular text-left font-bold mx-5 text-xl'>Welcome To Claripath</p>
          <TypingEffect text="Where You Will Get Personalized Career Suggestions Based on Youe IQ and Academic Performance." />
          <div>
            <button className='p-3 m-5 bg-blue-600 border rounded-full text-white hover:bg-blue-800 hover:scale-105' onClick={() => navigate("/Assessment")}>Take IQ Test</button>

          </div>
        </div>

        <div><img width={500} src="/SEO-pana.png" alt="" /></div>

      </div>


      {/* How App Works */}
      <div className='p-5 mx-8'>
        <div>
          <h1 className='text-4xl font-bold p-3 text-center m-5 hover:bg-gray-50 cursor-pointer'>How <b className="text-blue-700 edu-nsw-act-cursive-Roman">Claripath</b> Works ?</h1>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">

            {/* CARD 1 */}
            <Card
              bgColor="rgba(245, 40, 145, 0.1)"
              title="IQ Test"
              description="Start your journey with an interactive IQ test designed to measure logical, analytical, and problem-solving skills."
              image={test2}
              bgColor2="bg-pink-200"
              onClick={() => navigate("/Assessment")}
              targetId="predictionSection"   
            />

            {/* CARD 2 */}
            <Card
              bgColor="rgba(126, 215, 253, 0.4)"
              title="Stream & Path Prediction"
              description="Our AI first identifies the best academic stream for you—Science, Commerce, or Arts—and then suggests the right career path within it."
              image={test1}
              bgColor2="bg-blue-300"
              targetId="streamsSection"  
            />

            {/* CARD 3 */}
            <Card
              bgColor="rgba(180, 225, 159, 0.59)"
              title="AI Career Suggestions"
              description="Get detailed career recommendations connected to your chosen stream and path, so you can move forward with confidence."
              image={chatbot1}
              bgColor2="bg-green-200"
              targetId="detailsSection"
            />

          </div>
        </div>
        
        <div>
          <WhyChooseUs cards={cards} />
        </div>

        <DetailsSection
          id="predictionSection"
          title="Know Your Potential, Unlock Your Future"
          content="Our IQ Test is designed to help students gain a deeper understanding of their cognitive abilities, logical reasoning, and problem-solving skills. By measuring these core strengths, the test provides valuable insights that form the foundation for making informed academic and career decisions. Rather than just being a score, the results act as a roadmap—showing students their natural potential and guiding them toward fields where they can excel with confidence."
          image={man}
        />
        <DetailsSection
          id="streamsSection"
          title="Choose the Right Path with Confidence"
          content="Selecting the right academic stream is one of the most crucial decisions in a student’s journey. Our intelligent prediction system analyzes your academic performance, interests, and skills to suggest the most suitable stream—Science, Commerce, or Arts. Beyond stream selection, we also provide detailed career path guidance after Science, Commerce, and Arts, helping students clearly understand the opportunities that open up after each stream. This ensures that every learner moves forward with clarity, confidence, and a well-defined direction."
          image={path3}
          reverse
        />
        <DetailsSection
          id="detailsSection"
          title="Your Personalized Career Compass"
          content="With the power of Artificial Intelligence, our platform goes beyond traditional counseling by recommending career options tailored to each student’s profile. It considers IQ, academic background, skills, and future industry demands to provide accurate, data-driven career suggestions. This ensures students are guided not only toward what they can do today but also toward careers that will thrive tomorrow, making them future-ready."
          image={ai}
        />

      </div>
    </>
  )
}

export default Home