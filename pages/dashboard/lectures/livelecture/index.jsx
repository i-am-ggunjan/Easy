import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLoader } from '@/components/hooks/useLoader';
import { DateIconBlogDetailPage, Men, Timer, Topic } from "@/utils/icons/icons";
import { studentAuthKey } from '@/utils/consts';
import Link from "next/link";

// const ServerURI = "192.168.29.254:8080"; //Local server
const ServerURI = "https://www.api.easyhaionline.com";
const WebexApiKey = "Y2JjYjNkNjEtMjEzZi00ZDI5LTgzODAtZTUxNGM0NTI3M2UwNWRiYTg4ZjYtZDky_P0A1_63808cdd-7608-4991-8f79-b2df9bee232a";
function getTimeComponents(timeString) {
    const dateObj = new Date(timeString);

    const time = dateObj.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    });
    const day = dateObj.toLocaleDateString("en-US", { weekday: "short" });
    const date = dateObj.toLocaleDateString("en-US", {
        month: "numeric",
        day: "numeric",
        year: "numeric",
    });

    return `${time}, ${day}, ${date}`;
}
const Studentlive = () => {
    const [data, setData] = useState(null);
    const [openLoader, closeLoader, Loader] = useLoader();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showJoinButton, setShowJoinButton] = useState(true);


    const handleJoinClick = (item) => {
        setLoading(true);
        let data = {
            ishost: false,
            studentEmail: user?.email,
            meetingNumber: item.meetingNumber,
            studentName: user?.full_name,
            apiKey: WebexApiKey,
        };
        console.log("meet : ", data);
        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: `${ServerURI}/api/v1/modules/webex/join`,
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios
            .request(config)
            .then(({ data }) => {
                window.open(data.data.link, "_blank");
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    };


    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            // const studentAuthKey = localStorage.getItem(studentAuthKey);
            // console.log("l-87 authkey0---------->", _storageToken)
            // const finalurl = `${ServerURI}/api/student/get-student/${studentAuthKey}`;
            // const { data: userData } = await axios.get(finalurl);
            // setUser(userData.studentdetails);
            const response = await axios.post(
                `${ServerURI}/api/v1/modules/webex/avail`,
                { user: "admin" }
            );
            setData(response.data);
            console.log("l-98--------->data", data)

        } catch (error) {
            console.log("Error fetching data:", error);
        }
    };


    return (
        <>
            <Loader active={loading} />
            {data?.data?.details ? (
                <div className="p-5">
                    {/* <div className='border-solid border-2 border-[#66F6B80] rounded-[12px]  mb-12'> */}
                    <div className="flex flex-wrap justify-center gap-5">
                        {data.data.details.map((item) => (
                            <div key={item.id} className="p-1">
                                <div className="rounded-md shadow-md bg-white">
                                    <div className="p-3">
                                        <div className="text-[#6F6B80] text-[13px] text-justify flex flex-col gap-2">
                                            <div className="text-[#231F40] font-bold text-[16px] sm:text-[18px]">
                                                <h1>{item.courseName?.programName || ""}</h1>
                                                {/* <h5>{item.title}</h5> */}
                                            </div>
                                            <div className="flex gap-1 items-center">
                                                <Topic />
                                                <p>{item.agenda}</p>
                                            </div>
                                            <div>
                                                <div className="flex gap-2">
                                                    <Timer w={16} />
                                                    <p><span className="font-bold">Start Timing :</span> {getTimeComponents(item.start)}</p>

                                                </div>
                                                <div className="flex gap-2">
                                                    <Timer w={16} />
                                                    <p><span className="font-bold">End Timing :</span> {getTimeComponents(item.end)}</p>

                                                </div>
                                            </div>
                                            <div className="flex gap-3 items-center">
                                                <Men w={16} />
                                                <p>{item.hostUserName}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' p-2'  >
                                        <div className='border border-[#66F6B80] basis-[42%]'></div>
                                    </div>
                                    <div className="p-2 flex justify-between">
                                        <div>
                                            <h1 className="text-[#EB5E32]">Basis Class</h1>
                                        </div>
                                        <div>
                                            {/* {showJoinButton && (
                                                    <button onClick={() => {
                                                        handleJoinClick(item);
                                                    }} className=" w-full shadow  bg-[#0B405D] hover:bg-[rgb(255,200,29)] hover:text-black focus:shadow-outline focus:outline-none text-white  py-1 px-2 rounded" type="submit">
                                                        Join Now
                                                    </button>
                                                )} */}
                                            <Link href="https://meet.easyhaionline.com/" target="blank">   <button className=" w-full shadow  bg-[#0B405D] hover:bg-[rgb(255,200,29)] hover:text-black focus:shadow-outline focus:outline-none text-white  py-1 px-2 rounded" type="submit">
                                                Join Now
                                            </button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* </div> */}
                </div>
            ) : (
                <p>Loading...</p>
            )}


        </>
    );
};

export default Studentlive;
