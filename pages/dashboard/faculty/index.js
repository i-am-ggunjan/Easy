import Link from 'next/link'
import React from 'react'
const Array = [
    {
        Name: "Ajay singh Tiwari",
        Proffesion: "Proficient in Physics",
        Experience: 2,
    },
    {
        Name: "Ajay singh Tiwari",
        Proffesion: "Proficient in Physics",
        Experience: 5,
    },
    {
        Name: "Ajay singh Tiwari",
        Proffesion: "Proficient in Physics",
        Experience: 27,
    },

    {
        Name: "Ajay singh Tiwari",
        Proffesion: "Proficient in Physics",
        Experience: 27,
    },
    {
        Name: "Ajay singh Tiwari",
        Proffesion: "Proficient in Physics",
        Experience: 27,
    },

    {
        Name: "Ajay singh Tiwari",
        Proffesion: "Proficient in Physics",
        Experience: 27,
    },

]
const Faculty = () => {
    return (
        <div>
            <div className='flex justify-center flex-wrap gap-[80px] '>

                {
                    Array?.map(value => (
                        <div className="bg-[#FFF]  text-black w-64 max-h-66 rounded-[24px]   shadow-md">
                            <div className="relative h-[180px] flex justify-center ">
                                <img src="/benifit/CONCEPT.jpg" alt="" />
                            </div>
                            <div className="p-5 text-center ">
                                <h2 className='text-[22px] font-bold'>{value.Name}</h2>
                                <p className="mt-1">
                                    {value.Proffesion}
                                </p>
                              <Link href="/dashboard/faculty/facultydetail">
                              <button className='bg-[#0A405C] p-1.5 rounded-[167px] mt-2 w-[150px] text-[#FFF] hover:bg-[rgb(255,200,29)] hover:text-black'>{value.Experience}+ years exp</button>
                              
                              </Link>
                            </div>
                        </div>
                    ))

                }



            </div>
        </div>
    )
}

export default Faculty

Faculty.getLayout = function PageLayout(page) {
    return (<>{page}</>)
}