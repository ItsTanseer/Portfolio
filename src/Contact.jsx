import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from 'react';
import ShinyText from './Components/ShinyText';


const Contact = () => {
    AOS.init({ duration: 1000 });
    const [hover, sethover] = useState(false)
    return (
        <div>
            <div className="mt-14 flex flex-col ">
                <h1 className="text-gray-500 mx-auto text-4xl  jura font-bold ">Contact me</h1>
                <div>

                    <div className='text-gray-300 w-100 group
                mx-auto mt-2 p-2 text-xl text-center border border-gray-500 rounded-md shadow-white/20 shadow-xl'>


                        <p className='jura'>
                            <ShinyText
                                text=" I'm looking forward to being a part of your team! Let me help you develop your ideas into an internet reality."
                                speed={2}
                                delay={0}
                                color="#b5b5b5"
                                shineColor="#ffffff"
                                spread={120}
                                direction="left"
                                yoyo={false}
                                pauseOnHover={false}
                                disabled={false}
                            />

                        </p>
                        <div className='w-[70%] mx-auto  mt-2 rounded-md h-1 group-hover:bg-[#7c20d8] bg-[#7823cd]/60
                        group-hover:w-[90%] ease-in-out duration-300'></div>
                    </div>

                </div>
                <div data-aos="fade-up" className="flex flex-col border-2 w-100 mx-auto rounded-2xl p-2  mt-10 border-[#5A189A]">

                    <a className="flex flex-row group  border-b hover:border-[#a363e2] border-[#7c20d8]" href="https://www.instagram.com/_tanseer_ahmad_">


                        <img className="w-10 h-auto p-2 group-hover:scale-110 duration-150 ease-in-out" src="instagram.png"></img>
                        <p className="text-gray-400 jura p-2 group-hover:text-[#7c20d8]" >Follow me</p>
                    </a>




                    <a href="https://www.linkedin.com/in/tanseer-ahmad-a5a01831b/" className="flex flex-row group  border-b border-[#7c20d8]  hover:border-[#a363e2]">
                        <img className="w-10 h-auto p-2 group-hover:scale-110 duration-150 ease-in-out" src="linkedin.png"></img>
                        <p className="text-gray-400 jura p-2 group-hover:text-[#7c20d8]" >Connect with me</p>

                    </a>

                    <a className="flex flex-row group border-b border-[#7c20d8]  hover:border-[#a363e2]" href="mailto:tanseer.ahmad.2007@gmail.com">


                        <img className="w-10 h-auto p-2 group-hover:scale-110 duration-150 ease-in-out " src="gmail.png"></img>
                        <p className="text-gray-400 jura p-2 group-hover:text-[#7c20d8]" >tanseer.ahmad.2007</p>
                    </a>


                </div>
                <a
                    href='https://github.com/ItsTanseer/'
                    onMouseEnter={() => sethover(true)}
                    onMouseLeave={() => sethover(false)}
                    className={`
                    bg-gray-400 mt-10 mx-auto flex flex-row items-center border 
                    duration-400 ease-in-out overflow-hidden
                    hover:underline underline-offset-2 hover:cursor-pointer 
                    hover:shadow-md hover:shadow-[#7c20d8] border-[#7c20d8]
                    ${hover ? 'max-w-xs px-4' : 'max-w-40 justify-center'}
                `}
                >
                    <img className='w-10 h-10 p-1' src='github.png' alt="icon" />
                    <p className='p-2 orbitron font-bold whitespace-nowrap'>
                        {hover ? "Check me on github" : "GITHUB"}
                    </p>
                </a>
            </div>
        </div>
    )

}

export default Contact