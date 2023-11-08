import React from 'react'
import HeadingCard from '@/components/card/HeadingCard'
import Link from 'next/link'

const FreeEvaluationData = [
    {
        standard: "IIT-JEE (Mains + Advanced)",
        noOfQuestions: 10,
        durations: "30 Mins",
        maxMarks: 40,
        link: "https://docs.google.com/forms/d/e/1FAIpQLScrxLLRS796akN3tYcnm3AdmSQDpn7eYOo4bzLIPr4uOrgKdA/viewform?vc=0&c=0&w=1&flr=0",
    },
    {
        standard: "NEET 11+12",
        noOfQuestions: 10,
        durations: "30 Mins",
        maxMarks: 40,
        link: "https://docs.google.com/forms/d/e/1FAIpQLSeAO_FDtArGjnP-KoQ0xtOVMTUiBQsrqi41sdTzZqXd7xx1Lw/viewform?vc=0&c=0&w=1&flr=0",
    },
    {
        standard: "12 (P.C.B.)",
        noOfQuestions: 10,
        durations: "30 Mins",
        maxMarks: 40,
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfQdZHrWigyC83LSPHVb-i6finsOPL7qdQ_nM2A2s8Bir_23w/viewform?vc=0&c=0&w=1&flr=0",
    },
    {
        standard: "12 (P.C.M.)",
        noOfQuestions: 10,
        durations: "30 Mins",
        maxMarks: 40,
        link: "https://docs.google.com/forms/d/e/1FAIpQLSewu6qf40gYadC0AmWrFtgCCcrZ1TVSsrCVc9mNTFpDgvKF3A/viewform?vc=0&c=0&w=1&flr=0",
    },
    {
        standard: "12 (Comm.)",
        noOfQuestions: 10,
        durations: "30 Mins",
        maxMarks: 40,
        link: "https://docs.google.com/forms/d/1ToSpPaMYVSSOXD4P7Jq7UcgH27h7jZQ_-5w3hijrAWs/edit",
    },
    {
        standard: "11 (P.C.B.)",
        noOfQuestions: 10,
        durations: "30 Mins",
        maxMarks: 40,
        link: "https://docs.google.com/forms/d/1TPoaXx1fIUi3IluMo2jwXU3p95qs5Zd-8SIZ6ILKiTg/edit",
    },
    {
        standard: "11 (P.C.M.)",
        noOfQuestions: 10,
        durations: "30 Mins",
        maxMarks: 40,
        link: "https://docs.google.com/forms/d/1UIRXBgaKHfUX4u0PcW1a_eJly36SPqfqfliucGAPM_Q/edit",
    },
    {
        standard: "11 (Comm.)",
        noOfQuestions: 10,
        durations: "30 Mins",
        maxMarks: 40,
        link: "https://docs.google.com/forms/d/1Kv-IiUK24gQbgqwlPTfAmoRFdDawhHe7HDnjv0BXftY/edit",
    },
    {
        standard: "Class 10 Mathematics",
        noOfQuestions: 10,
        durations: "30 Mins",
        maxMarks: 40,
        link: "https://docs.google.com/forms/d/e/1FAIpQLScdRR4Kw8p0Hy0kw5AePu0fM7Np7I9lCRcd2oqpdyN2yCgyNw/viewform?vc=0&amp;c=0&amp;w=1&amp;flr=0&amp;usp=mail_form_link",
    },
    {
        standard: "Class 10 Science",
        noOfQuestions: 10,
        durations: "30 Mins",
        maxMarks: 40,
        link: "https://docs.google.com/forms/d/e/1FAIpQLSeynzLMQY9fxf0M4D88JI3sdKQIsg-HtVtUmzGYs6jocx_fNA/viewform?vc=0&c=0&w=1&flr=0",
    },
    {
        standard: "Class 9 Science",
        noOfQuestions: 10,
        durations: "30 Mins",
        maxMarks: 40,
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfy2OnyjaGWH4unw4_jUL1MLCCHoSGz3XfPtstWaE4hSPCnqw/viewform?vc=0&c=0&w=1&flr=0",
    },
    {
        standard: "Class 8",
        noOfQuestions: 10,
        durations: "30 Mins",
        maxMarks: 40,
        link: "https://docs.google.com/forms/d/e/1FAIpQLSe3FUJ7J4KUw3O5xd2Mjy73tgk7CaG6uZMftWoxm9PZgY0J5A/viewform?vc=0&c=0&w=1&flr=0",
    },
];

const FreeEvaluation = () => {
    return (
        <>
            <HeadingCard heading={'Free Evaluation'}  />
            <section className="lg:px-44 md:px-30 sm:px-10 px-4 py-10 pb-24">

                <div className="text-[14px] sm:text-[16px] text-[#6F6B80] text-justify mb-16">
                Easyhai Online provides free tests like quizzes, puzzles, mock tests and true or false questions, through which students can be evaluated and acknowledged about their knowledge and performances without paying any fee and it will help them to choosing the right institute for their bright future.

                </div>


                <main className='max-sm:w-[90vw] flex flex-col gap-3 p-4 rounded-lg border-2 border-[#00000030] overflow-scroll'>
                    <div className='text-[#231F40] text-[18px] font-bold flex justify-between gap-4 py-1'>
                        <div className='basis-[30%] sm:basis-[15%]'>Standard</div>
                        <div className='sm:basis-[22%] text-center'>No. of Question</div>
                        <div className='sm:basis-[15%] text-center'>Duration</div>
                        <div className='sm:basis-[17%] text-center'>Max Marks</div>
                        <div className='sm:basis-[15%] text-end'>Start</div>
                    </div>

                    {
                        FreeEvaluationData?.map(value => (
                            <div key={value?.id} className='text-[#6F6B80] text-[16px] font-[600] flex justify-between gap-4 py-1'>
                                <div className='basis-[30%] sm:basis-[15%]'>{value?.standard}</div>
                                <div className='sm:basis-[22%] text-center'>{value?.noOfQuestions} Question</div>
                                <div className='sm:basis-[15%] text-center'>{value?.durations}</div>
                                <div className='sm:basis-[17%] text-center'>{value?.maxMarks}</div>
                                <div className='sm:basis-[15%] text-end'>
                                    <Link href={value?.link} className='text-[15px] bg-[#0A405C] text-white px-4 py-1 rounded-md'>Start</Link>
                                </div>
                            </div>
                        ))
                    }
                </main>

            </section>
        </>
    )
}

export default FreeEvaluation