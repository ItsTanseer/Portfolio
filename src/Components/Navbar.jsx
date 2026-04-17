import { Link } from "react-router-dom"

const Navbar = ()=>{
return (
    <div>
        <div className="bg-black w-screen">
            <div className="flex justify-center  ">
                <ul className="flex flex-row md:text-xl text-s gap-2 orbitron backdrop-blur-md mt-3  text-gray-100">

                <Link className="hover:-translate-y-1 group hover:text-[#ad5bff] duration-175 ease-in-out" to={'/'}><span className=" text-[#8a34e0] group-hover:text-[#ad5bff]">#</span><span className="group-hover:text-[#ad5bff]">Home</span></Link>

                <Link className="hover:-translate-y-1 group hover:text-[#ad5bff] duration-175 ease-in-out" to={'/skills'}><span className=" text-[#8a34e0] group-hover:text-[#ad5bff]">#</span><span className="group-hover:text-[#ad5bff]">Skills</span></Link>

                <Link className="hover:-translate-y-1 group hover:text-[#ad5bff] duration-175 ease-in-out" to={'/projects'}><span className="text-[#8a34e0] group-hover:text-[#ad5bff]">#</span><span className="group-hover:text-[#ad5bff]">Projects</span></Link>
              
                <Link className="hover:-translate-y-1 group hover:text-[#ad5bff] duration-175 ease-in-out" to={'/contact'}><span className="text-[#8a34e0] group-hover:text-[#ad5bff]">#</span><span className="group-hover:text-[#ad5bff]">Contact</span></Link>
                </ul>
                </div>
                
        </div>
    </div>
)

}
export default Navbar