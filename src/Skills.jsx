import AOS from 'aos';
import 'aos/dist/aos.css';
import ShinyText from './Components/ShinyText';

AOS.init({duration:1200 })

const Skills = () => {
    const frontend=["ReactJS", "Tailwind CSS", "HTML", "CSS", "JavaScript"]
    const backend=["ExpressJS", "FastAPI", "NodeJS"];
    const languages=["Java", "C", "Python", "C++"];
    const DB=["OracleSQL", "MongoDB"];
    return (
        <div className="flex flex-col justify-center mx-auto mt-30">
            <div className="jura mx-auto text-gray-500 font-bold text-4xl">
                Skills

            </div>
            <div className=" flex flex-rowtext-justify mx-auto mt-10">
                <div className="flex flex-col md:flex-row gap-10 flex-wrap m-4 justify-center overflow-hidden mt-10">
                    <table data-aos="fade-up" className="border border-[#8426e3]/40 backdrop-blur-xl bg-white/5 text-white overflow-hidden shadow-xl shadow-[#8426e3]/40 hover:shadow-md hover:shadow-[#8426e3]">

                        <thead>
                            <tr className="bg-linear-to-r from-[#8426e3]/70 to-purple-900/30">
                                <th className="px-10 py-4 text-2xl font-space text-gray-300 tracking-wide">
                                    Frontend
                                </th>
                            </tr>
                        </thead>

                        <tbody className="text-center">
                            {frontend.map((item, i) => (
                                <tr
                                    key={i}
                                    className="transition-all duration-300 hover:bg-[#8426e3]/50 text-gray-400 hover:text-gray-100"
                                >
                                    <td className="px-10 py-3 border-t border-white/10 tracking-wide">
                                        {item}
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>

                    <table data-aos="fade-down" className="border border-[#8426e3]/40 backdrop-blur-xl bg-white/5 text-white overflow-hidden shadow-xl shadow-[#8426e3]/40">

                        <thead>
                            <tr className="bg-linear-to-r from-[#8426e3]/70 to-purple-900/30">
                                <th className="px-10 py-4 text-2xl font-space tracking-wide text-gray-300">
                                    Backend
                                </th>
                            </tr>
                        </thead>

                        <tbody className="text-center">
                            {backend.map((item, i) => (
                                <tr
                                    key={i}
                                    className="transition-all duration-300 hover:bg-[#8426e3]/50 text-gray-400 hover:text-gray-100"
                                >
                                    <td className="px-10 py-3 border-t border-white/10 tracking-wide">
                                        {item}
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>

                    <table data-aos="fade-up" className="border border-[#8426e3]/40 backdrop-blur-xl bg-white/5 text-white overflow-hidden shadow-xl shadow-[#8426e3]/40">

                        <thead>
                            <tr className="bg-linear-to-r from-[#8426e3]/70 to-purple-900/70">
                                <th className="px-10 py-4 text-2xl font-space tracking-wide text-gray-300">
                                    Languages
                                </th>
                            </tr>
                        </thead>

                        <tbody className="text-center">
                            {languages.map((item, i) => (
                                <tr
                                    key={i}
                                    className="transition-all duration-300 hover:bg-[#8426e3]/50 text-gray-400 hover:text-gray-100"
                                >
                                    <td className="px-10 py-3 border-t border-white/10 tracking-wide">
                                        {item}
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>

                    <table data-aos="fade-down" className="border border-[#8426e3]/40 backdrop-blur-xl bg-white/5 text-white overflow-hidden shadow-xl shadow-[#8426e3]/40">

                        <thead>
                            <tr className="bg-linear-to-r from-[#8426e3]/70 to-purple-900/30">
                                <th className="px-10 py-4 text-2xl font-space tracking-wide text-gray-300">
                                    DB
                                </th>
                            </tr>
                        </thead>

                        <tbody className="text-center">
                            {DB.map((item, i) => (
                                <tr
                                    key={i}
                                    className="transition-all duration-300 hover:bg-[#8426e3]/50 text-gray-400 hover:text-gray-100"
                                >
                                    <td className="px-10 py-3 border-t border-white/10 tracking-wide ">
                                        {item}
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>

            </div>
            <h1 className='bg-black w-100 mx-auto text-gray-200 text-justify p-1 border-2 border-gray-500 m-2'>


                <ShinyText
                text="Behind every efficient solution is a thousand failed attempts."
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
                </h1>
                

        </div>

    )

}

export default Skills