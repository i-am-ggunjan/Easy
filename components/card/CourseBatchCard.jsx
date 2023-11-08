import React from 'react';

const CourseBatchCard = ({ data, onBatchSelect }) => {
  return (
    <>
      <main
        key={data.id}
        className="border-[2px] border-[#0A405C] flex flex-col gap-7 rounded-lg px-8 py-10 sm:w-[30vw]"
      >
        <div className="text-center text-[#231F40] text-[22px] font-bold">
          {data.batchName}
        </div>
        <main className="flex justify-between flex-wrap gap-5">
          <main className="flex flex-col gap-4">
            <div className="font-bold text-[17px]">Start Time</div>
            <div className="text-[13px] font-bold text-[#231F40]">
              {data.startTime}
            </div>
          </main>
          <main className="flex flex-col gap-4">
            <div className="font-bold text-[17px]">End Time</div>
            <div className="text-[13px] font-bold text-[#231F40]">
              {data.endTime}
            </div>
          </main>
        </main>
        <div className="flex justify-center">
          <button
            onClick={() => {
              onBatchSelect(data);
            }}
            className="bg-[#0A405C] text-white text-center rounded-[5px] py-3 text-[13px] px-5"
          >
            Choose Your Batch
          </button>
        </div>
      </main>
    </>
  );
};

export default CourseBatchCard;
