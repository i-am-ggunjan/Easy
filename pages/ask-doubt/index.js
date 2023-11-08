import HeadingCard from '@/components/card/HeadingCard'
import { studentAuthKey } from '@/utils/consts';
import axios from 'axios';
import React, { useState } from 'react'
function Askdoubts() {
    const [data, setData] = useState({});

    const doubturl = `${process.env.NEXT_PUBLIC_SERVER_URI}/api/v1/modules/doubt`;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const _storageToken = localStorage.getItem(studentAuthKey);

        try {
            const response = await axios.post(doubturl, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'eh-auth-token': _storageToken,
                },
            });
            console.log(response);
        } catch (error) {
            console.error('Error submitting doubts:', error);
        }

    };


    return (
        <>
            <div>
                <HeadingCard heading={'Ask Doubt'} subHeading={'The Ask Doubt Page is your go-to destination for finding answers to your questions and seeking clarification on a wide range of topics.'} />
            </div>
            <div className='flex flex-wrap flex-col md:flex-row mb-12' >
                <div className='basis-1/2 bg-[#FFF]  ' >
                    <div className='w-[ 500px] p-5' >
                        <img

                            src="https://s3-alpha-sig.figma.com/img/d5e9/2bbf/96ad80ddc8f4330a2eaa13a063207438?Expires=1698624000&Signature=A2-5BnrXR5BwkK53tuQG2tUvUVpUgULQ8n4LQkKn3QP9nzJTc6vZtRkoIIvY-Z3BjdnQti3Dc5JoWJh~X5GFwYovx05g2QmrpZ34sRfQ~1vPaOmyew8qbeSOIB8XrlN5VsoTps4b4Se0mfJB9udRFmjkeXBk~bilBufbNk7dzNvwvecf2uJDLIM4GBVI6tRcnuBoEFuHzxt0V3kERKmOzi4I1EpcNa251wA780VDQRKicyQrTe1UPWgr0dxSGJOclFngg1ezZmrJEsqQwPE9JIFNF~6CPYh0ORlcKlp4Q7eEYgcIIeEHxDlso3Tk0FWY-r8fvBbyDdU0NG35OrEY7A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        />
                        <div className='justify-normal   text-center'>
                            <p >The Ask Doubt Page is your go-to destination for finding answers to your questions and seeking clarification on a wide range of topics. </p>
                        </div>
                    </div>

                </div>
                <div className='basis-1/2 '>
                    <div className='bg-[#FFF] md:m-[50px]'>

                        <div className="w-full max-w-xs m-auto md:m-0 mt-5">
                            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                                <div className="flex flex-col md:flex-row mb-6 md:mb-0 gap-10">
                                    <div className="md:w-[220px] ">
                                        <select id="countries" onChange={(e) => setData({ ...data, courseName: e.target.value })} className="cursor-pointer w-full md:w-[220px] bg-[#F5F5F5]  text-gray-900 text-sm rounded-lg block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#0A405C] dark:focus:border-blue-500">
                                            <option selected className='text-[#757575]' required>Course Name*</option>
                                            <option>1 year chemistery 12 th class</option>
                                            <option>1 year Maths 12 th class</option>
                                            <option>1 year Economics 12 th class</option>
                                            <option>1 year Economics 12 th class</option>
                                            <option>1 year Science 12th class</option>
                                            <option>1 year Maths 11 th class</option>
                                            <option>1 year  CA/CM/CMS 12th class</option>
                                            <option>1 year  CA/CM/CMS  foundation</option>
                                            <option>1 year  IIT-JEE  12 th Class</option>
                                            <option>E1 year  IIT- JEE Foundation</option>
                                            <option>1 year  IIT- JEE  Dropper</option>
                                            <option>1 year  Physics  12 th class</option>
                                        </select>
                                    </div>

                                    <div className="md:w-[220px]">
                                        <select onChange={(e) => setData({ ...data, className: e.target.value })} id="countries" className="cursor-pointer w-full md:w-[220px] bg-[#F5F5F5]  text-gray-900 text-sm rounded-lg block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option selected
                                            >Class Name*</option>
                                            <option >Second Class</option>
                                            <option >First Class</option>
                                            <option >Third Class</option>
                                            <option >Fourth Class</option>
                                            <option >Six Class</option>
                                            <option >Seven Class</option>
                                            <option >Eight Class</option>
                                            <option >Nine Class</option>
                                            <option >Ten Class</option>
                                            <option >Eleven Class</option>
                                            <option >Twelve Class</option>
                                        </select>
                                    </div>

                                </div><br />
                                <div className="flex flex-col md:flex-row mb-6 md:mb-0 gap-10 text-uppercase">
                                    <div className="md:w-[220px]">
                                        <select onChange={(e) => setData({ ...data, subject: e.target.value })} id="countries" className="cursor-pointer w-full md:w-[220px] bg-[#F5F5F5]  text-gray-900 text-sm rounded-lg block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option selected

                                            >Subject*</option>
                                            <option>MATHS</option>
                                            <option>CHEMISTRY</option>
                                            <option>SOCIAL SCIENCE</option>
                                            <option>ECONOMICS</option>
                                            <option>SCIENCE</option>
                                            <option>MATHS</option>
                                            <option>ACCOUNTANT</option>
                                            <option>COMPANY LAW</option>
                                            <option>CORPORATE LAW</option>
                                            <option>AUDIT AND TAXATION</option>
                                            <option>BUSINESS STUDIES</option>
                                            <option>PHYSICS</option>
                                        </select>
                                    </div>

                                    <div className="w-full md:mb-0 ">
                                        <input
                                            onChange={(e) => setData({ ...data, chapter: e.target.value })} className="w-full md:w-[220px]  appearance-none block bg-[#F5F5F5] text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" type="text" placeholder="Chapter Name*" />
                                    </div>

                                </div>
                                <div className="flex flex-col md:mt-2">
                                    <input
                                        onChange={(e) => setData({ ...data, topic: e.target.value })} className="w-full md:w-[480px] appearance-none block bg-[#F5F5F5] text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none" type="text" placeholder="Topic*" />
                                </div>

                                <div className="w-full mb-6 md:mt-2">
                                    <textarea
                                        onChange={(e) => setData({ ...data, description: e.target.value })} className="w-full md:w-[480px] appearance-none block bg-[#F5F5F5] text-gray-700  border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none" type="text" placeholder="Description*"></textarea>
                                </div>

                                <div className="flex flex-col md:flex-row gap-10">
                                    <div className="md:w-[220px]">
                                        <select onChange={(e) => setData({ ...data, doubtImage: e.target.value })} id="countries" className="cursor-pointer w-full md:w-[220px] bg-[#F5F5F5]  text-gray-900 text-sm rounded-lg block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option selected
                                            >Select File*</option>
                                            <option >Png</option>
                                            <option >Jpg/Jpeg</option>
                                            <option >Mp4</option>
                                            <option >Pdf</option>
                                        </select>
                                    </div>

                                    <div className="md:w-[220px]">
                                        <select onChange={(e) => setData({ ...data, solutionType: e.target.value })} id="countries" className="cursor-pointer w-full md:w-[220px] bg-[#F5F5F5]  text-gray-900 text-sm rounded-lg block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option selected>Preference Solution type*</option>
                                            <option >Text</option>
                                            <option >Image</option>
                                            <option >Video</option>
                                        </select>
                                    </div>

                                </div>

                                <button type="submit" className="shadow mt-6 bg-[rgb(13,80,115)] hover:bg-[rgb(255,193,0)] hover:text-black focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"  >
                                    Submit
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Askdoubts
