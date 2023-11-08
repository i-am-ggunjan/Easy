import { MentorIcon, Reviewicon, Timer } from "@/utils/icons/icons";

function SwitchTab2({ activeTab, data }) {

    switch (activeTab) {
        case 0:
            return <>
                <>
                    <div className="">
                        <div>
                            <h1 className="text-[22px] font-semibold mb-2">Ankit shukla Tiwari</h1>
                            <p className="font-[Urbanist] text-[#6F6B80] text-justify">
                                Lorem ipsum dolor sit amet consectetur. Quis tristique at id elit adipiscing. In sed viverra purus aliquam. In non cursus tempus morbi. Nunc sem sodales rutrum vestibulum. Mus donec commodo dictum gravida quisque. Pulvinar consequat eget rhoncus nunc pellentesque ornare morbi. Tortor mauris netus sem aliquam. Massa lobortis dui tempus enim eget facilisi nulla magnis tortor  risus. Nibh enim lorem ultricies ultrices.
                            </p>
                        </div>
                        <div className="flex justify-between pt-3">
                            <div>
                                <h2 className="text-[18px] font-semibold mb-2 mt-2">Educator Level</h2>
                                <div className="flex gap-5">
                                    <div className="bg-[#0B405D] rounded-full w-6 h-6 pl-[2px]">

                                        <MentorIcon  />
                                    </div>
                                    <div>
                                        Advance Level in CA/CS/CMS
                                    </div>
                                </div>
                            </div>

                            <div >
                                <h2 className="text-[19px] font-semibold mb-2 mt-2">Join Easyhaionline on</h2>
                                <div className="flex gap-5 text-[#6F6B80]">
                                    <div className="bg-[#0B405D] rounded-full w-6 h-6 pl-[2px]">
                                        <MentorIcon />

                                    </div>
                                    <div>
                                        2 November 2022
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" pt-3">
                            <h2 className="text-[22px] font-semibold mb-2 mt-2 ">Work</h2>
                            <h2 className="text-[18px] font-semibold mb-2 mt-2 pt-3">2018-2020</h2>

                            <li className="text-[#6F6B80] text-justify "> Lorem ipsum dolor sit amet consectetur. Pellentesque risus rhoncus odio ullamcorper lacinia non sit et.
                                Adipiscing in cras mauris id ipsum nunc.</li>
                            <h2 className="text-[18px] font-semibold mb-2 mt-2">2020-Prsent</h2>
                            <li className="text-[#6F6B80] text-justify "> Lorem ipsum dolor sit amet consectetur. Pellentesque risus rhoncus odio ullamcorper lacinia non sit et.
                                Adipiscing in cras mauris id ipsum nunc.</li>
                            <h2 className="text-[18px] font-semibold mb-2 mt-2">Language</h2>
                            <p className="text-[#6F6B80]">Hindi, English, Jerman, French</p>
                        </div>
                    </div>

                </>
            </>
            break;

        case 1:
            return <>
                <div>
                    <div className=" flex gap-[20px] p-7">
                        <div className="bg-[#FBFBFF] w-[258px] h-[240px] shadow-lg">
                            <div className="text-center">
                                <h1 className="text-[96px] font-bold"> 3.0</h1>
                                <div className="flex gap-1 justify-center ">
                                    <Reviewicon /> <Reviewicon /> <Reviewicon /> <Reviewicon /><Reviewicon />
                                </div>
                                <p className="pt-5">1 Rating</p>
                            </div>
                        </div>
                        <div className="w-[470px] p-4 ">
                            <div className="flex ">
                                <div className="text-[24px]"> <p className="p-1">5</p></div>
                                <div className="p-1 pt-3"> <Reviewicon /></div>
                                <div className="border-2 py-1 bg-[#F5F5F5] border-none m-4 w-full "></div>
                                <div className="text-[24px]"> <p className="p-1">0</p></div>

                            </div>
                            <div className="flex">
                                <div className="text-[24px]"> <p className="p-1">4</p></div>
                                <div className="p-1 pt-3"> <Reviewicon /></div>
                                <div className="border-2 py-1 bg-[#F5F5F5] border-none m-4 w-full "></div>
                                <div className="text-[24px]"> <p className="p-1">0</p></div>

                            </div>
                            <div className="flex">
                                <div className="text-[24px]"> <p className="p-1">3</p></div>
                                <div className="p-1 pt-3"> <Reviewicon /></div>
                                <div className="border-2 py-1 bg-yellow-400 border-none m-4 w-full "></div>
                                <div className="text-[24px]"> <p className="p-1">1</p></div>

                            </div>
                            <div className="flex">
                                <div className="text-[24px]"> <p className="p-1">2</p></div>
                                <div className="p-1 pt-3"> <Reviewicon /></div>
                                <div className="border-2 py-1 bg-yellow-400 border-none m-4 w-full "></div>
                                <div className="text-[24px]"> <p className="p-1">1</p></div>

                            </div>
                            <div className="flex">
                                <div className="text-[24px]"> <p className="p-1">1</p></div>
                                <div className="p-1 pt-3"> <Reviewicon /></div>
                                <div className="border-2 py-1 bg-yellow-400 border-none m-4 w-full "></div>
                                <div className="text-[24px]"> <p className="p-1">1</p></div>
                            </div>




                        </div>
                    </div>
                    <div className="mt-5">
                        <div>
                            <h1 className="text-[#231F40] text-[22px] font-semibold">Reviews</h1>
                        </div>
                        <div className="flex gap-[41px] mt-5">
                            <div>
                                <img className="rounded-full h-[120px] w-[330px] object-cover" src="https://images.unsplash.com/photo-1600600423621-70c9f4416ae9?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmxzfGVufDB8fDB8fHww" />
                            </div>
                            <div >
                                <div className="flex gap-4">
                                    <div >
                                        <h1 className="text-[#231F40] text-[20px] font-semibold" >Simran Rawat</h1>
                                    </div>
                                    <div className="flex gap-2 p-2">
                                        <Reviewicon /><Reviewicon /><Reviewicon /><Reviewicon /><Reviewicon />
                                    </div>
                                </div>
                                <p className="text-[#6F6B80] text-justify">“ I had an amazing experience at Easyhai.The instructors were knowledgeable and passionate, and the coursework was challenging and relevant to my future career. "“ The online courses at Easyhai were the to work full-time while pursuing my degree,perfect”
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </>
            break;

        case 2:
            return <>
            <div >
                <li className="p-2 text-[#6F6B80]">Best Teaching Award of the year 2020 in maths</li>
                <li className="p-2 text-[#6F6B80]">Best Teaching Award of the year 2020 in maths</li>
                <li className="p-2 text-[#6F6B80]">Best Teaching Award of the year 2020 in maths</li>
                <li className="p-2 text-[#6F6B80]">Best Teaching Award of the year 2020 in maths</li>
                <li className="p-2 text-[#6F6B80]">Best Teaching Award of the year 2020 in maths</li>
                <li className="p-2 text-[#6F6B80]">Best Teaching Award of the year 2020 in maths</li>
                <li className="p-2 text-[#6F6B80]">Best Teaching Award of the year 2020 in maths</li>
                <li className="p-2 text-[#6F6B80]">Best Teaching Award of the year 2020 in maths</li>
                <li className="p-2 text-[#6F6B80]">Best Teaching Award of the year 2020 in maths</li>

            </div>
            </>
            break;

        default:
            return <>Default</>
            break;
    }
}

export default SwitchTab2