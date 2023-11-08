import React, { useEffect, useState } from 'react'
import HeadingCard from '@/components/card/HeadingCard'
import TopicCard from '@/components/card/TopicCard'
import TopicSelectedCard from '@/components/card/TopicSelectedCard'
import { useRouter } from 'next/router';

const StreamTopic = ({ playlist, listOfTopics }) => {
    const [selectedTopic, setSelectedTopic] = useState(null)
    const [activeTab, setActiveTab] = useState(null);
    const router = useRouter()
    console.log("Playlist ::: ", playlist)


    return (
        <>
            <HeadingCard heading={router?.query?.name} />
            <section className='lg:px-48 md:px-30 sm:px-10 px-4 my-6 mb-14 sm:my-16'>
                {selectedTopic && <TopicSelectedCard data={selectedTopic} />}
            </section>

            <section className='lg:px-48 md:px-30 sm:px-10 px-4 my-8 sm:my-16 sm:py-10'>
                {/* <main className="flex justify-between gap-2 mb-10 text-[#231F40] text-center font-extrabold sm:text-[22px] overflow-custom-style2 overflow-x-scroll">
                    {listOfTopics?.map((value, index) => (
                        <div key={index} onClick={() => setActiveTab(value)} className={`${activeTab == value ? `border-b-[3px] border-[#231F40] ` : ``} px-2`}>{value}</div>
                    ))}
                </main> */}

                <main className='flex flex-wrap justify-center sm:justify-between gap-y-10'>
                    {playlist?.list?.data?.map(inner_value => <TopicCard key={inner_value?._id} data={inner_value} setSelectedTopic={setSelectedTopic} />)}
                </main>
            </section>
        </>
    )
}

export default StreamTopic


export async function getStaticProps(context) {
    const { params } = context;

    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_LIVE_SERVER_URI}/api/super-admin/micro-courses/get-list`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    streamId: params.stream,
                }),
            }
        );
        const result = await response.json();

        const listOfTopics = ['One Topics', 'Two Topics', 'Three Topics']
        const playlist = {
            list: result,
            // name: router?.query?.param,
            stream: params.stream
        }

        return { props: { listOfTopics, playlist } };

    } catch (error) {
        console.error('Error fetching data:', error);
        return { props: { listOfTopics: null, playlist: null } }
    }
}

export const getStaticPaths = ({ props }) => {
    return {
        paths: [
            {
                params: { stream: "1-3-1-7-2" },
                params: { stream: "1-3-1-5-1" },
                params: { stream: "1-3-1-4-2" },
            }],
        fallback: true,
    };
};



// useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const { data } = await axios.post(
//                 `${process.env.NEXT_PUBLIC_LIVE_SERVER_URI}/api/super-admin/micro-courses/get-list`,
//                 {
//                     streamId: router?.query?.stream
//                 }
//             );
//             console.log("One  ::: ", data)

//             const response = await fetch(
//                 `${process.env.NEXT_PUBLIC_LIVE_SERVER_URI}/api/super-admin/micro-courses/get-list`,
//                 {
//                     method: 'POST',
//                     headers: { 'Content-Type': 'application/json' },
//                     body: JSON.stringify({
//                         streamId: router?.query?.stream
//                     }),
//                 }
//             );
//             const result = await response.json();
//             console.log("Two :::", result)

//             setPlaylist({
//                 list: data,
//                 name: router?.query?.name,
//                 stream: router?.query?.stream
//             })

//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     }

//     fetchData()
// }, [router])



// const listOfTopics = ['One Topics', 'Two Topics', 'Three Topics']
// const playlist = [
//     { id: '1', image: '', title: 'Photosynthesis', duration: '1 hour', price: 'Rs. 11' },
//     { id: '2', image: '', title: 'Electricity', duration: '1 hour', price: 'Rs. 11' },
//     { id: '3', image: '', title: 'Sound', duration: '1 hour', price: 'Rs. 11' }
// ]

