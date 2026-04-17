    import AOS from 'aos';
    import 'aos/dist/aos.css';
    import Navbar from "./Components/Navbar"
    import SoftAurora from "./Components/SoftAurora";
import { Link } from 'react-router-dom';


    
    AOS.init({duration:1000 })

    const Home = () => {

        const skillList = [
            { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgTQv7iOtxY0gRAIW41MqtgVSDgwxiv8_3Fg&s", alt: "img1" },
            { src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png", alt: "img2" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/500px-C_Programming_Language.svg.png", alt: "img3" },
            { src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png", alt: "img4" },
            { src: "https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png", alt: "img5" },
            { src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/cpp/cpp.png", alt: "img6" },
            { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaSLBLpJp5eOR0zaf3mgYXoxZzzDqE8UtGMA&s", alt: "img7" },
            { src: "https://ddxof.com/wp-content/uploads/2017/12/react.png  ", alt: "img8" },
            { src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png", alt: "img9" },
            { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8vQdKlVJj_w-eb2WdzfM4lAlVz08kolf4Og&s", alt: "img10" },
            { src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png", alt: "img11" }
        ];

        const doubledSkills = [...skillList, ...skillList];
        return (
            <>

                <div className='flex flex-col  justify-center m-10'>
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
                    <div className='flex justify-center  my-[10%] h-fit'>

                        <div className='flex gap-4 w-[80%] md:w-[50%] md:flex-row flex-col-reverse content-center mx-auto justify-center'>
                            <div className='flex flex-col  '>
                                <h1 className='text-gray-500 space-med
                                 italic text-4xl  my-2 '>I'm <span className="text-[#8426e3]">Tanseer</span></h1>
                                <p style={{fontFamily: 'Space Grotesk'}} className='text-justify font-space text-gray-200 '>
                                    Hey! I’m a second-year IT student with a passion for expanding my skillset and exploring new domains. I’m currently diving deep into Data Structures and Algorithms using Java, while taking on Web Development as my creative side quest. Along the way, I’ve also picked up a solid foundation in Machine Learning — somewhere between basic and intermediate, and always leveling up.
                                    
                                </p>

                            </div>

                            <img src='tanseerpfp.jpeg' className='w-40 h-40 rounded-full border-2 hover:border-2 hover:border-[#8426e3b1] hover:shadow-xl mx-auto align-middle my-auto  hover:shadow-[#8426e3b1] hover:scale-115 ease-in-out duration-300' />


                        </div>

                    </div>
                    {/*skills*/}
                    <div className='mx-auto flex justify-center flex-col my-20 w-[90%]'>
                        <h1 className='text-gray-500 font-bold text-4xl mx-auto mb-10 jura'>
                            Skills
                        </h1>

                        <div className="relative w-full overflow-hidden">
                            
                            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll w-max group">
                                    {doubledSkills.map((skill, index) => (
                                        <li key={index}>
                                            <img
                                                src={skill.src}
                                                alt={skill.alt}
                                                className="h-16 w-auto object-contain transition-all duration-300 hover:scale-110"
                                            
                                            />
                                            
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>

                    {/*projects*/}
                    <div className='flex flex-col justify-center mx-auto'>
                        <h1 className='text-gray-500 font-bold text-4xl mx-auto jura'>Projects</h1>
                        <div className='flex justify-center-safe md:justify-end-safe   align-middle group '>
                            <Link to={'/projects'} className='text-gray-400 group-hover:underline group-hover:text-[#8a34e0]'>View all</Link>
                            <img src='right-arrow.png' className='w-5 h-5 my-auto mx-1 opacity-85'/>
                        </div>

                        {/*project cards*/}
                        <div className='flex flex-row m-3 p-3 gap-3 flex-wrap mx-auto justify-center'>

                            <div data-aos="fade-up"  className='w-80 h-80 hover:shadow-2xl group hover:shadow-[#8426e3b1] ease-in-out duration-275  rounded-xl bg-[#11041f59]'>
                                <div className='flex flex-row h-full '>
                                    <div className='w-3 h-70 my-2.5 mx-2 bg-gray-400 rounded-md group-hover:bg-[#8426e3b1] backdrop-blur-md'></div>
                                    <div className='mx-auto h-full my-auto flex flex-col'>
                                        <h1 className='mx-auto  top-0 text-[#8a34e0] font-bold text-2xl mb-2'>Sabkuchbecho</h1>
                                        <img src='sabkuchbecho.png' className='w-40 h-40 mx-auto' />
                                        <p className='space-light tracking-tight text-justify  text-gray-300 mt-1'>A full-stack ML price prediction system using a stacked regressor (Linear, KNN, Random Forest)
                                            deployed via FastAPI and integrated with a React frontend.</p>

                                    </div>

                                </div>


                            </div>
                            <div data-aos="fade-up" data-aos-delay="200"  className='w-80 h-80   hover:shadow-2xl group hover:shadow-[#8426e3b1] ease-in-out duration-275 bg-[#11041f59] rounded-xl'>
                                <div className='flex flex-row h-full'>
                                    <div className='w-1 h-70 my-2.5 mx-2 bg-gray-400 rounded-md group-hover:bg-[#8426e3b1] '></div>
                                    <div className='flex flex-col mx-auto h-full my-auto  '>
                                        <h1 className='mx-auto  top-0 text-[#8a34e0] font-bold text-2xl mb-2'>To-do List App</h1>
                                        <img src='todolist.png' className='w-40 h-40 mx-auto' />
                                        <p className=' text-justify text-gray-300 mt-1 space-light tracking-tight'>React-based task manager with JSON server backend.</p>
                                    </div>
                                </div>
                            </div>

                            <div data-aos="fade-up" data-aos-delay="400"  className='w-80 h-80   hover:shadow-2xl group hover:shadow-[#8426e3b1] ease-in-out duration-275  bg-[#11041f59] rounded-xl'>
                                <div className='flex flex-row h-full '>
                                    <div className='w-1 h-70 my-2.5 mx-2 bg-gray-400 rounded-md group-hover:bg-[#8426e3b1] '></div>
                                    <div className='mx-auto h-full my-auto flex flex-col'>
                                        <h1 className='mx-auto  top-0 text-[#8a34e0] font-bold text-2xl mb-2'>Aurora Alert</h1>
                                        <img src='auroraalert.jpeg' className='w-40 h-40 mx-auto' />
                                        <p className=' text-gray-300 mt-1 py-2 w-70 space-light tracking-tight'>A real-time solar weather prediction system using
                                        ML models. Predicts solar storm probability and trigger automated email alerts.</p>
                                    </div>
                                </div>
                            </div>








                        </div>
                    </div>
                   

                </div>


            </>
        )

    }
    export default Home