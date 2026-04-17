import { useState } from "react"
import ProjectDesc from "./Components/ProjectDesc"
import SoftAurora from "./Components/SoftAurora"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
    AOS.init();
    const projects = [
        {
            "title": "Sabkuchbecho",
            "desc": "Built a full-stack web platform that predicts selling prices for cars, laptops, houses, and mobile phones using machine learning Developed a stacked ensemble regression model combining Linear Regression, Weighted KNN, and Random Forest to improve prediction stability and accuracy. Designed and deployed the ML pipeline through a FastAPI backend, enabling real-time predictions via REST APIs. Integrated the ML model with a React frontend to deliver live prediction results based on user inputs. Implemented data preprocessing, feature handling, and model inference for smooth end-to-end prediction flow.",
            "img": "sabkuchbecho.png",
            "techstack": "React JS, FastAPI, TailwindCSS. Models: Ensemble of Linear Regression, Weighted KNN, Random Forest",
            "link": "https://price-predictor-2-w2uo.onrender.com/"
        },
        {
            "title": "To Do List App",
            "desc": "Built a CRUD application using React and Vite, leveraging hooks (useState, useEffect) for real-time state management. Integrated JSON-Server to simulate a RESTful backend, handling persistent data operations via the Fetch API. Developed asynchronous logic for GET, POST, PUT, and DELETE requests to sync the UI with a db.json data store.",
            "img": "todolist.png",
            "techstack": "ReactJS, CSS, JS, Json-server",
            "link": "https://github.com/ItsTanseer/To-Do-List"
        },
        {
            "title": "Tic Tac Toe",
            "desc": " Simple two-player Tic Tac Toe game built with HTML, CSS, and JS. Features turn-based gameplay and automatic win detection.",
            "img": "tictactoe.png",
            "techstack": "HTML, CSS, JS",
            "link": "https://itstanseer.github.io/TicTacToe/"
        },
        {
            "title": "Aurora Alert",
            "desc": "A tool that predicts solar storms in real time and shows live monitoring of solar X-ray flux, magnetic fields, and energetic particle flux.. Also sends e-mail alerts if the solar storm probability is high. Can be useful for satellite operators, aviation authorities, power grid managers, and science enthusiasts alike. Combining historical NOAA & DONKI data with real-time feeds for high accuracy.",
            "img": "auroraalert.jpeg",
            "techstack": "Frontend- Streamlit, CSS. Backend- Flask. ML Models- Logistic Regression + Random Forest + XGBoost",
            "link": "https://github.com/ItsTanseer/Solar_Storm_Predictor"
        },
        {
            "title": "Snake Game",
            "desc": "A classic Snake game built using React and Tailwind CSS. Smooth controls, growing snake mechanics, score tracking, and persistent high score — all running in the browser. 🚀 Features 🎮 Classic Snake gameplay (grid-based movement) 🐍 Snake grows when it eats food 🍎 Random food generation (never overlaps with snake) ⌨️ Keyboard controls with direction locking (no instant reverse) 💀 Wall collision & self-collision detection 🛑 Game Over screen with restart option 📈 Score tracking 🏆 Persistent High Score using localStorage 👀 Styled snake head (optional: eyes / direction styling) 🎨 Clean UI using Tailwind CSS",
            "img":"snakegame.png",
            "techstack":"React, Tailwind CSS",
            "link":"https://snake-game-taupe-phi.vercel.app/"
        }
    ]
    const [descOpen, setdescOpen] = useState(false)
    const [selectedProj, setselectedProj] = useState(null)

    const ViewHandler = (proj) => {
        setselectedProj(proj)
        if (!descOpen) setdescOpen(true)
    }



    return (

        <div className="flex flex-col justify-center mx-auto mt-30">
            <div className="fixed inset-0 -z-10 w-full h-full pointer-events-none">
                        <SoftAurora
                            speed={0.6}
                            scale={1.5}
                            brightness={0.8}
                            color1="#8426e3b1"
                            color2="#5A189A"
                            noiseFrequency={2.5}
                            noiseAmplitude={1}
                            bandHeight={0.5}
                            bandSpread={1}
                            octaveDecay={0.1}
                            layerOffset={0}
                            colorSpeed={1}
                            enableMouseInteraction
                            mouseInfluence={0.25}
                        />
                    </div>
            {descOpen && <ProjectDesc project={selectedProj} setdescOpen={setdescOpen} />}
            <h1 className="text-gray-300 text-4xl mx-auto">Projects</h1>
            <div className={`flex flex-col gap-6 ${descOpen && "blur-md -z-10"} md:flex-row md:flex-wrap  justify-between mx-auto p-4 m-4`}>


                <div data-aos="fade-up" className={`w-90 h-90 mx-auto   backdrop-blur-md bg-[#101011ae] group flex-col overflow-hidden justify-between relative ${!descOpen && "hover:brightness-120 hover:-translate-y-4 hover:border-b-2 hover:border-b-[#5A189A] hover:shadow-[#8426e3b1] duration-155 ease-in-out"}  shadow-2xl shadow-[#5A189A]/60  rounded-2xl   m-4`}>
                    <div   className=" group flex flex-row h-88 gap-1">
                        <div className={`w-2 h-80 mt-5 align-middle m-2 rounded-md ${!descOpen && "group-hover:bg-[#5A189A]"}  bg-gray-600`}> </div>
                        <div className="flex flex-col p-3    mx-auto h-full">
                            <h1 className='mx-auto text-gray-200 font-bold text-2xl group-hover:text-[#59189ae9]'>Sabkuchbecho</h1>
                            <img src='sabkuchbecho.png' className='w-40 h-40 mx-auto' />
                            <p className=' text-justify leading-tight text-gray-200'>A full-stack ML price prediction system using a stacked regressor (Linear, KNN, Random Forest)
                                deployed via FastAPI and integrated with a React frontend.</p>

                            <button className={`m-2 w-50 h-10 mt-auto align-bottom text-white border-b-4 rounded-md ${!descOpen && "hover:bg-[#371857]   duration-150 ease-in-out"}    border-l-4 border-[#2e0a4f] w-40 mx-auto`} onClick={() => { ViewHandler(projects[0]) }}>
                                <div className={`flex flex-row ${!descOpen && " hover:text-[#ffffff] hover:border-[#5A189A]"} text-[#9b54e1] justify-center gap-5 items-center group:`}>
                                    View
                                    <div className={`rounded-full  bg-[#5A189A] ${!descOpen && "group-hover:bg-[#8547c2]"}  w-3 h-3`}></div>
                                </div>
                            </button>
                        </div>

                    </div>
                    <div className="w-full h-2 bg-no-repeat bg-center transition-all duration-500 
                        bg-[radial-gradient(circle,_#5A189A_0%,_transparent_99%)] 
                        bg-[length:0%_100%] 
                        group-hover:bg-[length:100%_100%] 
                        group-hover:animate-glow-expand">
                    </div>               
                </div>

                <div data-aos="fade-up" className={`w-90 h-90 mx-auto backdrop-blur-md bg-[#101011ae] group flex-col overflow-hidden justify-between relative ${!descOpen && "hover:brightness-120 hover:-translate-y-4 hover:border-b-2 hover:border-b-[#5A189A] hover:shadow-[#8426e3b1] duration-155 ease-in-out"}  shadow-2xl shadow-[#5A189A]/60  rounded-2xl   m-4`}>
                    <div className=" group flex flex-row h-88 gap-0">
                        <div className={`w-1 h-80 mt-5 align-middle m-2 rounded-md ${!descOpen && "group-hover:bg-[#5A189A]"}  bg-gray-600`}> </div>
                        <div className="flex flex-col p-3   mx-auto h-full">
                            <h1 className='mx-auto text-gray-200 font-bold text-2xl group-hover:text-[#59189ae9]'>To Do List App</h1>
                            <img src='todolist.png' className='w-40 h-40 mx-auto' />
                            <p className=' text-justify leading-tight text-gray-200'>React-based task manager with JSON server backend.</p>

                            <button className={`m-2 w-50 h-10 mt-auto align-bottom text-white border-b-4 rounded-md ${!descOpen && "hover:bg-[#371857]   duration-125 ease-in-out"}    border-l-4 border-[#2e0a4f] w-40 mx-auto`} onClick={() => { ViewHandler(projects[1]) }}>
                                <div className={`flex flex-row ${!descOpen && " hover:text-[#ffffff] hover:border-[#5A189A]"} text-[#9b54e1] justify-center gap-5 items-center group:`}>
                                    View
                                    <div className={`rounded-full  bg-[#5A189A] ${!descOpen && "group-hover:bg-[#8547c2]"}  w-3 h-3`}></div>
                                </div>
                            </button>
                        </div>

                    </div>
                    <div className="w-full h-2 bg-no-repeat bg-center transition-all duration-500 
    bg-[radial-gradient(circle,_#5A189A_0%,_transparent_99%)] 
    bg-[length:0%_100%] 
    group-hover:bg-[length:100%_100%] 
    group-hover:animate-glow-expand">
                    </div>
                </div>

                <div data-aos="fade-up" className={`w-90 h-90 mx-auto backdrop-blur-md bg-[#101011ae] group flex-col overflow-hidden justify-between relative ${!descOpen && "hover:brightness-120 hover:-translate-y-4 hover:border-b-2 hover:border-b-[#5A189A] hover:shadow-[#8426e3b1] duration-155 ease-in-out"}  shadow-2xl shadow-[#5A189A]/60  rounded-2xl   m-4`}>
                    <div className=" group flex flex-row h-88 gap-0">
                        <div className={`w-1 h-80 mt-5 align-middle m-2 rounded-md ${!descOpen && "group-hover:bg-[#5A189A]"}  bg-gray-600`}> </div>
                        <div className="flex flex-col p-3   mx-auto h-full">
                            <h1 className='mx-auto text-gray-200 font-bold text-2xl group-hover:text-[#59189ae9]'>Tic Tac Toe</h1>
                            <img src='tictactoe.png' className='w-40 h-40 mx-auto' />
                            <p className=' text-justify leading-tight text-gray-200'>Interactive game using HTML, CSS, and JavaScript with dynamic winner detection</p>

                            <button className={`m-2 w-50 h-10 mt-auto align-bottom text-white border-b-4 rounded-md ${!descOpen && "hover:bg-[#371857]   duration-125 ease-in-out"}    border-l-4 border-[#2e0a4f] w-40 mx-auto`} onClick={() => { ViewHandler(projects[2]) }}>
                                <div className={`flex flex-row ${!descOpen && " hover:text-[#ffffff] hover:border-[#5A189A]"} text-[#9b54e1] justify-center gap-5 items-center group:`}>
                                    View
                                    <div className={`rounded-full  bg-[#5A189A] ${!descOpen && "group-hover:bg-[#8547c2]"}  w-3 h-3`}></div>
                                </div>
                            </button>
                        </div>

                    </div>
                    <div className="w-full h-2 bg-no-repeat bg-center transition-all duration-500 
                    bg-[radial-gradient(circle,_#5A189A_0%,_transparent_99%)] 
                    bg-[length:0%_100%] 
                    group-hover:bg-[length:100%_100%] 
                    group-hover:animate-glow-expand">
                    </div>                </div>








                <div data-aos="fade-up" className={`w-90 h-90 mx-auto  backdrop-blur-md bg-[#101011ae] group flex-col overflow-hidden justify-between relative ${!descOpen && "hover:brightness-120 hover:-translate-y-4 hover:border-b-2 hover:border-b-[#5A189A] hover:shadow-[#8426e3b1] duration-155 ease-in-out"}  shadow-2xl shadow-[#5A189A]/60  rounded-2xl   m-4`}>
                    <div className=" group flex flex-row h-88 gap-0">
                        <div className={`w-1 h-80 mt-5 align-middle m-2 rounded-md ${!descOpen && "group-hover:bg-[#5A189A]"}  bg-gray-600`}> </div>
                        <div className="flex flex-col p-3   mx-auto h-full">
                            <h1 className='mx-auto text-gray-200 font-bold text-2xl group-hover:text-[#59189ae9]'>Aurora Alert</h1>
                            <img src='auroraalert.jpeg' className='w-40 h-40 mx-auto' />
                            <p className=' text-justify leading-tight text-gray-200'>A real-time solar weather prediction system using
                                    ML models. Predicts solar storm probability and trigger automated email alerts.</p>

                            <button className={`m-2 w-50 h-10 mt-auto align-bottom text-white border-b-4 rounded-md ${!descOpen && "hover:bg-[#371857]   duration-125 ease-in-out"}    border-l-4 border-[#2e0a4f] w-40 mx-auto`} onClick={() => { ViewHandler(projects[3]) }}>
                                <div className={`flex flex-row ${!descOpen && " hover:text-[#ffffff] hover:border-[#5A189A]"} text-[#9b54e1] justify-center gap-5 items-center group:`}>
                                    View
                                    <div className={`rounded-full  bg-[#5A189A] ${!descOpen && "group-hover:bg-[#8547c2]"}  w-3 h-3`}></div>
                                </div>
                            </button>
                        </div>

                    </div>
                    <div className="w-full h-2 bg-no-repeat bg-center transition-all duration-500 
                                                bg-[radial-gradient(circle,_#5A189A_0%,_transparent_99%)] 
                                                bg-[length:0%_100%] 
                                                group-hover:bg-[length:100%_100%] 
                                                group-hover:animate-glow-expand">
                    </div>
                </div>

                <div data-aos="fade-up" className={`w-90 h-90 mx-auto  backdrop-blur-md bg-[#101011ae] group flex-col overflow-hidden justify-between relative ${!descOpen && "hover:brightness-120 hover:-translate-y-4 hover:border-b-2 hover:border-b-[#5A189A] hover:shadow-[#8426e3b1] duration-155 ease-in-out"}  shadow-2xl shadow-[#5A189A]/60  rounded-2xl   m-4`}>
                    <div className=" group flex flex-row h-88 gap-0">
                        <div className={`w-1 h-80 mt-5 align-middle m-2 rounded-md ${!descOpen && "group-hover:bg-[#5A189A]"}  bg-gray-600`}> </div>
                        <div className="flex flex-col p-3   mx-auto h-full">
                            <h1 className='mx-auto text-gray-200 font-bold text-2xl group-hover:text-[#59189ae9]'>Snake Game</h1>
                            <img src='snakegame.png' className='w-40 h-40 mx-auto' />
                            <p className=' text-justify leading-tight text-gray-200'>A classic Snake game built using React and Tailwind CSS.
Smooth controls, growing snake mechanics, score tracking, and persistent high score — all running in the browser.</p>

                            <button className={`m-2 w-50 h-10 mt-auto align-bottom text-white border-b-4 rounded-md ${!descOpen && "hover:bg-[#371857]   duration-125 ease-in-out"}    border-l-4 border-[#2e0a4f] w-40 mx-auto`} onClick={() => { ViewHandler(projects[4]) }}>
                                <div className={`flex flex-row ${!descOpen && " hover:text-[#ffffff] hover:border-[#5A189A]"} text-[#9b54e1] justify-center gap-5 items-center group:`}>
                                    View
                                    <div className={`rounded-full  bg-[#5A189A] ${!descOpen && "group-hover:bg-[#8547c2]"}  w-3 h-3`}></div>
                                </div>
                            </button>
                        </div>

                    </div>
                    <div className="w-full h-2 bg-no-repeat bg-center transition-all duration-500 
                                                bg-[radial-gradient(circle,_#5A189A_0%,_transparent_99%)] 
                                                bg-[length:0%_100%] 
                                                group-hover:bg-[length:100%_100%] 
                                                group-hover:animate-glow-expand">
                    </div>
                </div>
            

            </div>
        </div>
    )
}
export default Projects