import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import useModal from "@/components/hooks/useModal";

function findObjectById(id, streams) {
  for (const stream of streams) {
    if (stream.id === id) {
      return stream;
    }
    if (stream.children) {
      const result = findObjectById(id, stream.children);
      if (result) {
        return result;
      }
    }
  }
  return null;
}

function updateShowingList(id, newItem, setShowingList) {
  setShowingList((prevList) => {
    const updatedList = [];
    let foundId = false;

    for (const item of prevList) {
      if (item.id === id) {
        foundId = true;
        break;
      }
      updatedList.push(item);
    }

    return foundId ? [...updatedList, newItem] : [...prevList, newItem];
  });
}

const imgObj = {
  "mile-stones":
    "https://easyhaionline.nyc3.digitaloceanspaces.com/images/frontend-required/mile-stone.avif",
  lectures:
    "https://easyhaionline.nyc3.digitaloceanspaces.com/images/frontend-required/lectures.svg",
  "pdfs-books":
    "https://easyhaionline.nyc3.digitaloceanspaces.com/images/frontend-required/pdfs-books.jpg",
};

const Material = ({ categoryMap }) => {
  const { user } = useSelector((state) => state.appState);
  console.log("Redux User ::: ", user)
  console.log("Fetch Data :: ", categoryMap)

  return (
    <div>
      {user?.purchasedCourse && categoryMap && (
        <div>
          {user?.purchasedCourse?.map((value, index) => (
            <div key={index} style={{ marginBottom: 21 }}>
              <div className="stu-panel-course-1">
                <h1>{value?.parentStreams[0]}</h1>
                <h3>Program : {value.programName}</h3>
              </div>
              <div className="flex flex-wrap gap-6">
                {value?.accessibleStreams?.map((value, index) => {
                  return (
                    <ShowSubjects
                      key={index}
                      index={index + 1}
                      stream={value}
                      categoryMap={categoryMap}
                    />
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Material;

const ShowSubjects = ({ index, stream, categoryMap }) => {
  const [showingList, setShowingList] = useState([]);
  // console.log("Showing List", showingList)
  const [modalProps, setModalProps] = useState({ title: "" });
  // console.log("ModalProps :::", modalProps)
  const [streamArray, setStreamArray] = useState([]);
  // console.log("Stream Array :::", streamArray)
  console.log("=========================")

  const [openModal, closeModal, ModalWrapper] = useModal();
  useEffect(() => {
    fetchFirst();
  }, []);

  const fetchFirst = async () => {
    const __stream = findObjectById(stream.id, categoryMap);
    if (__stream.children) {
      setStreamArray((_) => __stream.children);
    }
  }

  return (
    <>
      <div onClick={() => { openModal(), setModalProps((_) => ({ ..._, title: stream?.showStreams })) }} className="flex items-center gap-5 py-3 px-6 bg-[#0A405C] text-white rounded-md whitespace-no-wrap" >
        <div className="">{index}. {stream?.showStreams}  <span className="ml-4">{stream?.name}</span></div>
      </div>

      <ModalWrapper width={'w-screen'} height={'min-h-[90vh]'}>
        <div className="stu-study-material-header flex justify-between items-center pt-4 pb-8">
          <div className="text-[#0A405C] font-bold text-[18px]">{modalProps?.title}</div>
          <button className="bg-[#0A405C] text-white px-3 py-1 rounded-md" onClick={() => { closeModal(), setShowingList([]), setModalProps((_) => ({ ..._ })) }}>Close</button>
        </div>
        <div className="student-dash flex flex-col" style={{}}>
          <div className="flex gap-5">
            {[...streamArray, "last"].map((stream, idx) => {
              if (stream !== "last") {
                return (
                  <p className={`${showingList.find((_) => _?.id == stream.id) ? "bg-[#0A405C] text-white" : "text-[#0A405C]"} border-2 border-[#0A405C] px-3 py-1 rounded-md text-[14px]`}
                    onClick={() => {
                      const foundObject = findObjectById(stream.id, streamArray)
                      if (foundObject) { setShowingList((_) => [foundObject]) }
                    }}
                  >
                    {stream.name}
                  </p> // Header Title List
                );
              }
              return <></>
            })}
          </div>

          <div className="border my-2 border-[#0A405C]"></div>

          <div className="student-dash-stream-multi flex gap-5  overflow-x-scroll">
            {showingList?.map((list) => {
              const showingListCurrent = list?.children

              // If not have Children then map on children 
              if (!showingListCurrent) {
                return (<ShowContentDetails showingList={showingList} stream={list} />)
              }
              // If have Children then map on children 
              return (
                <div className="flex flex-col gap-5 p-3 border-2 min-h-[100%]">
                  {[...showingListCurrent, "last"]?.map((stream, idx) => {
                    if (stream === "last") {
                      return <></>
                    }

                    return (
                      <p className={`whitespace-nowrap font-bold text-[#6F6B80]  odd:text-[#0A405C] text-[13px] ${showingList.find((_) => _?.id == stream.id) ? "border border-black" : "border border-transparent"} `}
                        onClick={() => {
                          const foundObject = findObjectById(stream.id, showingListCurrent)
                          console.log("Found Object ::: ", foundObject)
                          // Code need to be understand
                          if (foundObject) {
                            const current_level = foundObject.id.split("-").length;
                            console.log("Current level ::: ", current_level)
                            const isSameLevel = showingList.find((_) => {
                              console.log("Find", _)
                              if (current_level === _?.id.split("-").length) {
                                console.log("Current Level :::::: ", current_level, "Same Level ::::: ", _?.id.split("-").length)
                                return true
                              }
                              else { return false }
                            })
                            console.log("Same Level Boolean", isSameLevel)
                            if (isSameLevel) {
                              if (isSameLevel.id === stream?.id) {
                                // remove all elements from this specific element
                                console.log("remove all from this specific")
                              } else {
                                updateShowingList(isSameLevel.id, stream, setShowingList);
                              }
                            } else {
                              setShowingList((_) => [..._, foundObject,]);
                            }
                          }
                          // setShowingList((_) => [..._, foundObject,]);
                        }}
                      >
                        {idx + 1}. {stream.name}
                      </p>
                    )
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </ModalWrapper>
    </>
  )
}

const ShowContentDetails = ({ stream, showingList }) => {
  console.log("stream ::: ", { stream, showingList })
  return (
    <>
      <div className="border-2 p-4 text-[13px] font-bold text-[#3e7bc5] flex flex-col gap-y-20 whitespace-nowrap">
        {/* <div>{JSON.stringify(stream)}</div> */}
        <div className="text-[22px] whitespace-nowrap">Topic :  {stream?.name}</div>

        <div className="shadow-md rounded-md flex items-center justify-center gap-6">
          <img src={imgObj["mile-stones"]} alt="mile stones" className="w-24" />
          <div>
            <div>Continue Your Journey....</div>
            <Link href={`/dashboard/material/${stream?.nodeID}?ref=${stream?.id}`}>
              <p>Continue To Milestones</p>
            </Link>
          </div>
        </div>

        <div className="flex gap-10">
          <div className="shadow-md rounded-md flex flex-col items-center">
            <div>
              <img src={imgObj["lectures"]} alt="lectures" className="h-48 w-96" />
            </div>
            <p>Navigate To All Lectures</p>
          </div>
          <div className="shadow-md rounded-md flex flex-col items-center">
            <div>
              <img src={imgObj["pdfs-books"]} alt="pdfs-books" className="h-48 w-96" />
            </div>
            <p>Navigate To Doc(s)/PDF(s)</p>
          </div>
        </div>
      </div>
    </>
  );
}


Material.getLayout = function PageLayout(page) {
  return (<>{page}</>)
}


export async function getStaticProps() {
  try {
    const data = await fetchCourseData();
    return { props: { fetchData: data, categoryMap: data?.map } }
  } catch (error) {
    console.log(error)
    return { props: { fetchData: null, categoryMap: null } }
  }
}

export const fetchCourseData = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_LIVE_SERVER_URI}/api/super-admin/progams/get-map`)
  const result = await response.json()
  return result
}