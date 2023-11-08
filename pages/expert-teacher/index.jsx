import HeadingCard from '@/components/card/HeadingCard'
import React from 'react'

const Array = [
    {
        Name: "Ajay singh Tiwari",
        Proffesion: "Proficient in Physics",
        Experience: 2,
        link: "https://docs.google.com/forms/d/e/1FAIpQLScrxLLRS796akN3tYcnm3AdmSQDpn7eYOo4bzLIPr4uOrgKdA/viewform?vc=0&c=0&w=1&flr=0",
    },
    {
        Name: "Ajay singh Tiwari",
        Proffesion: "Proficient in Physics",
        Experience: 5,
        link: "https://docs.google.com/forms/d/e/1FAIpQLScrxLLRS796akN3tYcnm3AdmSQDpn7eYOo4bzLIPr4uOrgKdA/viewform?vc=0&c=0&w=1&flr=0",
    },
    {
        Name: "Ajay singh Tiwari",
        Proffesion: "Proficient in Physics",
        Experience: 27,
        link: "https://docs.google.com/forms/d/e/1FAIpQLScrxLLRS796akN3tYcnm3AdmSQDpn7eYOo4bzLIPr4uOrgKdA/viewform?vc=0&c=0&w=1&flr=0",
    },
    {
        Name: "Ajay singh Tiwari",
        Proffesion: "Proficient in Physics",
        Experience: 26,
        link: "https://docs.google.com/forms/d/e/1FAIpQLScrxLLRS796akN3tYcnm3AdmSQDpn7eYOo4bzLIPr4uOrgKdA/viewform?vc=0&c=0&w=1&flr=0",
    },
    {
        Name: "Ajay singh Tiwari",
        Proffesion: "Proficient in Physics",
        Experience: 27,
        link: "https://docs.google.com/forms/d/e/1FAIpQLScrxLLRS796akN3tYcnm3AdmSQDpn7eYOo4bzLIPr4uOrgKdA/viewform?vc=0&c=0&w=1&flr=0",
    }
    ,
    {
        Name: "Ajay singh Tiwari",
        Proffesion: "Proficient in Physics",
        Experience: 27,
        link: "https://docs.google.com/forms/d/e/1FAIpQLScrxLLRS796akN3tYcnm3AdmSQDpn7eYOo4bzLIPr4uOrgKdA/viewform?vc=0&c=0&w=1&flr=0",
    }
    ,
    {
        Name: "Ajay singh Tiwari",
        Proffesion: "Proficient in Physics",
        Experience: 27,
        link: "https://docs.google.com/forms/d/e/1FAIpQLScrxLLRS796akN3tYcnm3AdmSQDpn7eYOo4bzLIPr4uOrgKdA/viewform?vc=0&c=0&w=1&flr=0",
    }
    ,
    {
        Name: "Ajay singh Tiwari",
        Proffesion: "Proficient in Physics",
        Experience: 27,
        link: "https://docs.google.com/forms/d/e/1FAIpQLScrxLLRS796akN3tYcnm3AdmSQDpn7eYOo4bzLIPr4uOrgKdA/viewform?vc=0&c=0&w=1&flr=0",
    },
    {
        Name: "Ajay singh Tiwari",
        Proffesion: "Proficient in Physics",
        Experience: 27,
        link: "https://docs.google.com/forms/d/e/1FAIpQLScrxLLRS796akN3tYcnm3AdmSQDpn7eYOo4bzLIPr4uOrgKdA/viewform?vc=0&c=0&w=1&flr=0",
    }
]

function ExpertTeacher() {
    return (
        <>
            <div>
                <HeadingCard heading={'Expert Teachers'} />
            </div>
            <div className='flex flex-wrap mt-[100px] justify-center '>

                {
                    Array?.map(value => (
                        <div className="bg-[#FFF]  text-black w-64 max-h-66 rounded-[24px]  m-10 shadow-2xl">
                            <div className="relative h-[180px] flex justify-center ">
                                <img src="/benifit/CONCEPT.jpg" alt="" />
                            </div>
                            <div className="p-5 text-center ">
                                <h2 className='text-[22px] font-bold'>{value.Name}</h2>
                                <p className="mt-1">
                                    {value.Proffesion}
                                </p>
                                <button className='bg-[#0A405C] p-1.5 rounded-[167px] mt-2 w-[150px] text-[#FFF] hover:bg-[rgb(255,200,29)] hover:text-black'>{value.Experience}+ years exp</button>
                            </div>
                        </div>
                    ))

                }



            </div>
        </>

    )
}

export default ExpertTeacher