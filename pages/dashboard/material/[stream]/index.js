import Axios from "axios";
import React, { useState, useEffect } from "react";
import PdfViewer from "@/components/features/PdfViewer";
// import ReactHLSPlayerCMP from "@/components/features/HLSPlayer";
import { useRouter } from "next/router";
import index from "@/pages/auth/change-password";
import Player from "@/components/features/Player";

const findMatchingStream = (purchasedCourse, refId) => {
    for (const item of purchasedCourse || []) {
        const _stream = item?.accessibleStreams.find((_) =>
            String(refId).startsWith(_.id)
        );
        if (_stream) return _stream;
    }
    return null;
}

const fetchPDFsAndVideos = async (refId, setStudyMaterial, setStreamDeatails) => {
    console.log("Enter the fetchPDFsAndVideos :::: Line 24")
    const { data } = await Axios.post(`${process.env.NEXT_PUBLIC_LIVE_SERVER_URI}/api/super-admin/progams/get-study-materials`, { refId })
    console.log("L.No ---- 26", data)

    if (data?.success) {
        setStreamDeatails((_) => ({ ..._, titleList: data?.map }));
        setStudyMaterial((_) => ({
            pdfs: data?.pdfs,
            lectures: data?.lectures,
        }))
    } else {
        setStudyMaterial({});
    }
}

const fetchFirst = async (router, setStudent, refId, setStreamDeatails, setStudyMaterial) => {
    // const auth = localStorage.getItem("auth");
    const auth = "64cdf684be39b288b17e37e7"
    console.log("L.No ---- 42", auth)
    if (!auth) {
        router.push("/auth/login");
        return;
    }
    console.log("L.No ---- 47")

    const { data: { studentdetails } } = await Axios.get(`${process.env.NEXT_PUBLIC_LIVE_SERVER_URI}/api/student/get-student/${auth}`)
    console.log("L.No ---- 50", studentdetails)

    setStudent(studentdetails);
    if (!studentdetails?.purchasedCourse) {
        router.push("/dashboard");
        return;
    }
    console.log("L.No ---- 57")

    // validate and fetch videos and pdfs
    const check_rslt = findMatchingStream(studentdetails?.purchasedCourse, refId);
    console.log("L.No ---- 61", check_rslt)

    if (!check_rslt) {
        router.push("/dashboard");
        return;
    }
    console.log("L.No ---- 67")

    fetchPDFsAndVideos(refId, setStudyMaterial, setStreamDeatails);
    setStreamDeatails((_) => ({ ..._, parentStream: check_rslt }));
};

export default function StreamShow() {
    // const { str } = useParams();
    // const [searchParams] = useSearchParams();
    // const navigate = useNavigate();
    const router = useRouter();
    console.log("Router ::: 78 ", router.query)
    const [student, setStudent] = useState(null)
    console.log("Student ::: ", student)
    const [streamDetails, setStreamDeatails] = useState(null);
    console.log("Stream Detail ::: ", streamDetails)
    const [studyMaterial, setStudyMaterial] = useState({ pdfs: [], lectures: [] })
    console.log("Study Material ::: ", studyMaterial)
    const [currentPlay, setCurrentPlay] = useState({ type: "", data: "" })

    useEffect(() => {
        // const refId = searchParams.get("ref");
        const refId = router.query.ref
        console.log("Ref Id ::: 90 ", refId)
        if (!refId) {
            // navigate(-1)
            router.back()
            return
        }
        fetchFirst(router, setStudent, refId, setStreamDeatails, setStudyMaterial)
    }, [router.query.stream])
    // str

    return (
        <div className="stream-page flex flex-wrap gap-5 whitespace-nowrap min-h-screen">
            <LeftPartToShow
                router={router}
                setCurrentPlay={setCurrentPlay}
                studyMaterial={studyMaterial}
            />
            <RightPartToShow
                streamDetails={streamDetails}
                currentPlay={currentPlay}
            />
        </div>
    );
}

const LeftPartToShow = ({ router, studyMaterial, setCurrentPlay }) => {
    return (
        <>
            <div className="stream-page-left p-4 border-2">
                <h3 className="str-page-title-1">Course Outline</h3>
                <div className="stream-page-left-12">
                    <h3>Lecture(s)</h3>
                    <div className="stream-page-left-13">
                        {studyMaterial?.lectures && studyMaterial.lectures.length ?
                            studyMaterial?.lectures[0]?.playlist?.map((video, index) => (
                                <div key={index} onClick={() => { setCurrentPlay({ type: "video", data: video }) }}>
                                    {/* <aside><BiSolidVideos color="orange" /></aside> */}
                                    <p>
                                        <span>{index + 1}.</span>
                                        {video.name}
                                    </p>
                                </div>
                            ))
                            : <div>No Lectures Found!</div>
                        }
                    </div>
                </div>
                <div className="stream-page-left-12">
                    <h3>Notes(s)</h3>
                    <div className="stream-page-left-13">
                        {studyMaterial?.pdfs && studyMaterial?.pdfs?.length ?
                            studyMaterial?.pdfs?.map((pdf, idx) => (
                                <div key={idx} onClick={() => { setCurrentPlay({ type: "pdf", data: pdf, }) }}>
                                    {/* <aside><BsFileEarmarkPdfFill color="red" /></aside> */}
                                    <p>
                                        <span>{idx + 1} .</span>
                                        {pdf.title}
                                    </p>
                                </div>
                            ))
                            : <div>No Notes Found!</div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
};

const RightPartToShow = ({ streamDetails, currentPlay }) => {
    return (
        <div className="stream-page-right border-2 flex-1">
            <div className="stream-page-right-11 bg-[#0A405C] p-4 text-white">
                <div className="font-bold text-[25px]">{streamDetails?.parentStream?.showStreams}</div>
                <div className="flex">
                    {streamDetails &&
                        streamDetails?.titleList?.map((item, idx) =>
                            (<p key={idx} className="">{idx !== 0 ? "/ " : ""}  {item}</p>)
                        )}
                </div>
            </div>

            <div className="stream-page-right-pdf-video p-4">
                {currentPlay?.type === "video" && currentPlay?.data && (
                    <>
                        {/* <ReactHLSPlayerCMP currUrl={currentPlay?.data?.url} /> */}
                        <Player url={currentPlay?.data?.url} playable={true} />
                    </>
                )}
                {currentPlay?.type === "pdf" && currentPlay?.data && (
                    <PdfViewer url={currentPlay?.data?.accessUrl}
                    />
                )}
            </div>
        </div>
    );
};

// StreamShow.getInitialProps = async () => {
//     return { isStudentDashboard: true };
// };

StreamShow.getLayout = function PageLayout(page) {
    return (<>{page}</>)
}