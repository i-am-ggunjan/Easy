import { useState } from "react"
import { Dot, RightArrow } from "@/utils/icons/icons"


let courseDetail = [
    {
        id: 1,
        icon: <Dot />,
        head: "Complete 12th board and CA/CS/CMA Syllabus will be covered",
    },
    {
        id: 2,
        icon: <Dot />,
        head: "We will provided PDF Notes after classes",
    },
    {
        id: 3,
        icon: <Dot />,
        head: "Scheduled tests will be held according to the planner ",
    },
    {
        id: 4,
        icon: <Dot />,
        head: "covered Business Studies, Economics and Accounts ",
    },
]

let FAQDetail = [
    {
        id: 1,
        heading: "Can I Choose class timings as per my covenience ?",
        icon1: <RightArrow />,
        content: "entity’s products through cost calculation. Additionally, their expertise and knowledge about cost centers are used in preparing all the budgets like cash budget, purchase budget, sales budget, etc. for an entity. Hence, in a way they contribute to strategic decisions through th"
    },
    {
        id: 2,
        heading: "Should I Choose class timings as per my covenience ?",
        icon1: <RightArrow />,
        content: "entity’s products through cost calculation. Additionally, their expertise and knowledge about cost centers are used in preparing all the budgets like cash budget, purchase budget, sales budget, etc. for an entity. Hence, in a way they contribute to strategic decisions through th"
    },
    {
        id: 3,
        heading: "Could I Choose class timings as per my covenience ?",
        icon1: <RightArrow />,
        content: "entity’s products through cost calculation. Additionally, their expertise and knowledge about cost centers are used in preparing all the budgets like cash budget, purchase budget, sales budget, etc. for an entity. Hence, in a way they contribute to strategic decisions through th"
    },
    {
        id: 4,
        heading: "Foood I Choose class timings as per my covenience ?",
        icon1: <RightArrow />,
        content: "entity’s products through cost calculation. Additionally, their expertise and knowledge about cost centers are used in preparing all the budgets like cash budget, purchase budget, sales budget, etc. for an entity. Hence, in a way they contribute to strategic decisions through th"
    },
]

function CustomSwtichTab({ activeTab, data }) {
    const [dropDownTab, setDropDownTab] = useState(0)

    switch (activeTab) {
        case 0:
            return <>
                <main className='flex flex-col gap-12'>
                    <main className='flex flex-col gap-5'>
                        <div className='text-[#231F40] text-[21px] sm:text-[24px] font-bold'>Course Decription</div>
                        <div className='text-[14px] sm:text-[15px] text-[#6F6B80] text-justify flex flex-col gap-4'>
                            <p>{data?.batchDetails[0]}</p>
                            <p>{data?.batchDetails[1]}</p>
                        </div>
                    </main>


                    <main className='flex flex-col gap-5'>
                        <div className='text-[#231F40] text-[21px] sm:text-[24px] font-bold'>What will Learn On course</div>
                        <div className='text-[15px] text-[#6F6B80] text-justify flex flex-col gap-4'>
                            {
                                data?.programFeatures.map((value, index) => (
                                    <main key={index} className='flex items-center gap-3'>
                                        <div className='text-[#FFC81D]'><Dot /></div>
                                        <div className="text-[14px] sm:text-[16px]">{value}</div>
                                    </main>
                                ))
                            }
                        </div>
                    </main>

                    <main className='flex flex-col gap-5'>
                        <div className='text-[#231F40] text-[21px] sm:text-[24px] font-bold'>Frequently asked question</div>
                        <main className='sm:px-3 flex flex-col gap-8'>
                            {data?.questionList.map((value, index) => (
                                <div key={index} className='transition'>
                                    <main onClick={() => {
                                        if (index + 1 === dropDownTab) {
                                            setDropDownTab(-1);
                                        } else {
                                            setDropDownTab(index + 1);
                                        }
                                    }}
                                        className='flex justify-between border-[3px] py-2'>
                                        <div className='text-[#231F40] sm:text-[17px] font-bold px-1'>{value.question}</div>
                                        <div><RightArrow /></div>
                                    </main>
                                    <div className={`${dropDownTab !== (index + 1) ? 'hidden' : 'block'} px-2 py-2`}>{value.answer}</div>
                                </div>
                            ))}
                        </main>
                    </main>
                </main>
            </>
            break;

        case 1:
            return <>
                <main className='flex justify-between gap-6 flex-wrap items-center'>
                    <div className='md:basis-[35%]'>
                        <img src="/ProfilePic.png" alt="" width={"100%"} />
                    </div>
                    <main className='flex flex-col gap-3 sm:basis-[60%]'>
                        <div>
                            <div className='text-[#231F40] text-[20px] font-extrabold'>Lokesh Rawat</div>
                            <div className='text-[#FFC81D] text-[13px] font-bold'>CHOOSE ONE BATCH</div>
                        </div>
                        <div className='text-[15px] text-[#6F6B80] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, accusamus. Eligendi aperiam veritatis dolor et  ipsum dolor sit amet consectetur adipisicing elit. Architecto, accusamus. Eligendi aperiam veritatis dolor et quia Nihil eaque fugit tempore.</div>
                    </main>
                </main>

            </>
            break;

        case 2:
            return <>Reviews</>
            break;

        default:
            return <>Default</>
            break;
    }
}

export default CustomSwtichTab