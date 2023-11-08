import BookSeatCard from '@/components/card/BookSeatCard'
import HeadingCard from '@/components/card/HeadingCard'
import TopicCard from '@/components/card/TopicCard'
import CustomDropdown from '@/components/features/CustomDropDown'
import { kebabCase } from '@/components/features/KebabCase'
import { ArrowIcon } from '@/utils/icons/icons'
import Link from 'next/link'
import React, { useState } from 'react'
import TopicSelectedCard from '@/components/card/TopicSelectedCard'

const option = [
    {
        id: 1, class: 10,
        child: [{ id: 1, subject: "Science" }, { id: 2, subject: "Maths" }, { id: 3, subject: "Social Science" }]
    },
    {
        id: 2, class: 11,
        child: [{ id: 1, subject: "Physics" }, { id: 2, subject: "Chemistry" }, { id: 3, subject: "Bio" }]
    },
    {
        id: 3, class: 12,
        child: [{ id: 1, subject: "Politics" }, { id: 2, subject: "Geography" }]
    }
]

const streamsToRender = [
    {
        id: 123,
        name: 'CBSE Board XII - Economics',
        stream: '1-3-1-7-2',
    },
    {
        id: 124,
        name: 'CBSE Board XII - Physics',
        stream: '1-3-1-5-1',
    },
    {
        id: 125,
        name: 'CBSE Board XI - Chemistry',
        stream: '1-3-1-4-2',
    },
];

const MicroCourses = ({ playlist }) => {
    const [selectedTopic, setSelectedTopic] = useState(null)
    // console.log("Playlist ::: ", playlist)
    // console.log("Selected ::: ", selectedTopic)
    const [gradeSelect, setGradeSelect] = useState(null)
    const [subjectSelect, setSubjectSelect] = useState(null)

    return (
        <>
            <HeadingCard heading={'Science Topics'} subHeading={'Science Topics'} />

            <section className='lg:px-44 md:px-30 sm:px-10 px-4 my-6 mb-14 sm:my-16'>
                {selectedTopic && <TopicSelectedCard data={selectedTopic} />}
            </section>

            <section className='lg:px-44 md:px-30 sm:px-10 px-4 my-8 sm:my-20'>
                <main className='flex flex-wrap justify-between items-center gap-y-5'>
                    <h5 className="basis-[100%] sm:basis-[35%] text-[20px] md:text-[30px] text-[#231F40] font-bold">Expert in any topic just Rs 11</h5>

                    <div className='flex gap-10 font-[600]'>
                        <CustomDropdown title={'All Grade'} options={option} onSelect={setGradeSelect} />
                        <CustomDropdown title={'All Subject'} options={option} onSelect={setSubjectSelect} />
                    </div>
                </main>
            </section>

            <section className='lg:px-44 md:px-30 sm:px-10 px-4 my-12'>
                <main className='flex flex-col gap-y-10'>
                    {
                        playlist?.map(value => (
                            <main key={value?.stream} className='flex flex-col gap-4'>
                                <h5 className='text-[#231F40] font-bold text-[19px] sm:text-[24px] capitalize'>{value?.name}</h5>
                                <main className='flex justify-center overflow-x-scroll sm:justify-between  gap-8'>
                                    {value?.list?.data?.map(inner_value => <TopicCard key={inner_value?._id} data={inner_value} setSelectedTopic={setSelectedTopic} />)}
                                </main>

                                <Link href={`/micro-courses/${value?.stream}?name=${kebabCase(value?.name)}`} className="relative group/under overflow-hidden self-end">
                                    <main className="flex items-center gap-2">
                                        <div className="text-[20px] font-bold text-[#F86F03]" >Explore</div>
                                        <ArrowIcon w={16} h={18} color='#F86F03' />
                                    </main>
                                    <div className="w-full h-1 bg-[#F86F03] transform translate-y-1/2 -translate-x-[150px] group-hover/under:translate-x-0 duration-700 transition-transform origin-center"></div>
                                </Link>
                            </main>
                        ))
                    }
                </main>
            </section>
        </>
    )
}

export default MicroCourses

export async function getStaticProps() {
    try {
        const fetchPromises = streamsToRender.map(async (str) => {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_LIVE_SERVER_URI}/api/super-admin/micro-courses/get-list`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        streamId: str.stream,
                    }),
                }
            );
            const result = await response.json()

            return {
                list: result,
                name: str.name,
                stream: str.stream
            };
        });

        // console.log("Line 128", fetchPromises)
        const fetchedData = await Promise.all(fetchPromises);

        // console.log("Fetch Data Line ---- 131", fetchedData)

        return { props: { playlist: fetchedData } };

    } catch (error) {
        console.error('Error fetching data:', error);
        return { props: { playlist: null } }
    }
}






// useEffect(() => {
//     async function fetchAllListStream(toRenderList, setRenderList) {
//         try {
//             const fetchPromises = toRenderList.map(async (str) => {
//                 const { data } = await axios.post(
//                     `${process.env.NEXT_PUBLIC_LIVE_SERVER_URI}/api/super-admin/micro-courses/get-list`,
//                     {
//                         streamId: str.stream,
//                     }
//                 );
//                 return {
//                     list: data,
//                     name: str.name,
//                     stream: str.stream
//                 };
//             });

//             const fetchedData = await Promise.all(fetchPromises);

//             setRenderList(fetchedData);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     }

//     fetchAllListStream(streamsToRender, setSelectedStreamToShow);
// }, [])



// const playlist = [{
//     id: 1, title: 'science topics', stream: 'stream_one', videoList: [
//         { id: '1', image: '', title: 'Photosynthesis', duration: '1 hour', price: 'Rs. 11' },
//         { id: '2', image: '', title: 'Electricity', duration: '1 hour', price: 'Rs. 11' },
//         { id: '3', image: '', title: 'Sound', duration: '1 hour', price: 'Rs. 11' }
//     ]
// },
// {
//     id: 2, title: 'Maths topics', stream: 'stream_two', videoList: [
//         { id: '1', image: '', title: 'Integration', duration: '1 hour', price: 'Rs. 11' },
//         { id: '2', image: '', title: 'Differentiation', duration: '1 hour', price: 'Rs. 11' },
//         { id: '3', image: '', title: 'Probablity', duration: '1 hour', price: 'Rs. 11' }
//     ]
// },
// {
//     id: 3, title: 'Commerce topics', stream: 'stream_three', videoList: [
//         { id: '1', image: '', title: 'Account', duration: '1 hour', price: 'Rs. 11' },
//         { id: '2', image: '', title: 'Maths', duration: '1 hour', price: 'Rs. 11' },
//         { id: '3', image: '', title: 'Service', duration: '1 hour', price: 'Rs. 11' }
//     ]
// }
// ]