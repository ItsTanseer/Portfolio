const ProjectDesc = ({ project, setdescOpen }) => {
    return (
        <div className="w-[50%] mx-auto align-middle self-center  h-[90vh] bg-black border-2 border-white fixed inset-0 overflow-y-auto">
            <div className="relative">
                <button onClick={() => {
                    setdescOpen(false)
                }} className="text-white right-0 p-0 m-3 hover:text-2xl text-xl hover:shadow-red-200 ease-in-out duration-75 absolute shadow-md rounded-full shadow-red-600 ">
                    {/* <img className="h-10 w-10 rounded-full" src = "closebtn.png"/> */}
                    ⭕
                </button>

                <div className="flex flex-col  justify-center mx-auto">
                    <h1 className="text-2xl mx-auto font-bold text-white">
                        {project.title}
                    </h1>
                    <img className="w-100 shadow-[#791cd087] shadow-2xl h-auto mx-auto" src={project.img} />
                    <h2 className="text-xl font-bold jura text-gray-400 mx-auto ">Description</h2>
                    <p className="text-white space-med mx-auto w-[90%] m-2">
                        {project.desc}
                    </p>
                    <h2 className="text-xl text-gray-400 mx-auto font-bold">Tech stack</h2>
                    <p className=" text-gray-200 mx-auto ">{project.techstack}</p>
                    <a className="text-white mx-auto border-b-2 hover:bg-[#791cd0] border-l-2 border-[#5b04ac] rounded-sm hover:border-r-2  hover:border-t-2 hover:text-black hover:font-bold hover:border-[#5A189A] hover:shadow-md hover:shadow-[#ffffff74] bg-[#130222b1] p-1 my-2" href={project.link}>View project</a>

                </div>
            </div>



        </div>
    )

}
export default ProjectDesc