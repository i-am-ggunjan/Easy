import React from 'react'

function index() {
    return (
        <>
            <div className='w-full p-5 '>
                <div className="p-4">
                    <span className='text-[25px]  text-[#231F40] font-semibold'>Your EMI List</span>
                </div>

                <div className=' border-2 m-4 rounded-[12px] '>
                    <div className='flex gap-10 flex-col md:flex-row   m-4 p-3'>
                        <div className='basis-1/2 '>
                            <div className='basis-1/2  border-2   rounded-[12px] bg-[#FBFBFF]'>
                                <div className='flex'>
                                    <div className='basis-1/2'>

                                    </div>
                                    <div className=' basis-1/2 bg-[rgb(107,205,93)] h-10 ' style={{ borderRadius: "0px 15px 0px 100px" }}>
                                        <p className='p-2 text-center font-bold'>Successfull</p>
                                    </div>
                                </div>
                                <div className='flex gap-2 p-3 ml-2'>

                                    <h4 className='text-[] font-bold'>Programme Name :</h4>

                                    <h4>2 Year CA/CS/CMS Foundation</h4>
                                </div>
                                <div className='flex gap-2 p-3 ml-2'>
                                    <h4 className='text-[] font-bold'>Purchase Date :</h4>
                                    <div> <h4>Mon , 3/May//2023 </h4></div>
                                </div>
                                <div className='flex gap-2 p-3 ml-2'>
                                    <h4 className='text-[] font-bold'>Programme Price :</h4>
                                    <h4>Rs 12,000 </h4>
                                </div>
                                <div className='flex gap-2 p-3 ml-2'>
                                    <h4 className='text-[] font-bold'>Offered Price:</h4>
                                    <h4>Rs 10,000 </h4>
                                </div>
                            </div>
                            <div className='basis-1/2 mt-10  border-2   rounded-[12px] bg-[#FBFBFF]'>
                                <div className='flex'>
                                    <div className='basis-1/2'>
                                    </div>
                                    <div className=' basis-1/2 bg-[rgb(252,236,188)] h-10' style={{ borderRadius: "0px 15px 0px 100px" }}>
                                        <p className='p-2 text-center font-bold'>Rs 1000 Monthly Payment</p>

                                    </div>
                                </div>
                                <div className='flex gap-2 p-3 ml-2'>
                                    <h4 className='text-[] font-bold '>Down Payment:</h4>
                                    <h4 className='justify-end'>Rs 4,000 </h4>
                                </div>
                                <div className='flex gap-2 p-3 ml-2'>
                                    <h4 className='text-[] font-bold'>Pending amount:</h4>
                                    <h4 className='justify-end'>Rs 6,000  </h4>
                                </div>
                                <div className='flex gap-2 p-3 ml-2'>
                                    <h4 className='text-[] font-bold'>No. Of Installments:</h4>
                                    <h4 className='justify-end'>6</h4>
                                </div>
                                <div className='flex gap-2 p-3 ml-2'>
                                    <h4 className='text-[] font-bold'>EMI Number:</h4>
                                    <h4 className='justify-end'>EHO-3/05-97461792124  </h4>
                                </div>
                            </div>

                        </div>

                        <div className='basis-1/2  border-2 bg-[#FBFBFF] rounded-[12px]'>
                            <div className='flex justify-between  p-8'>
                                <button className='border-2 bg-[rgb(252,236,188)]  p-2 rounded-md font-bold '>EMI DATE</button>
                                <button className='border-2 bg-[rgb(252,236,188)] p-2 rounded-md font-bold  '>EMI AMOUNT</button>
                            </div>
                            <div className='flex justify-between px-9'>
                                <div className='text-center'>
                                    <p className='py-2'>3 June, 2023</p>
                                    <p className='py-2'>3 June, 2023</p>
                                    <p className='py-2'>3 June, 2023</p>
                                    <p className='py-2'>3 June, 2023</p>
                                    <p className='py-2'>3 June, 2023</p>
                                    <p className='py-2'>3 June, 2023</p>
                                    <p className='py-2'>3 June, 2023</p>
                                    <p className='py-2'>3 June, 2023</p>
                                    <p className='py-2'>3 June, 2023</p>
                                    <p className='py-2'>3 June, 2023</p>


                                </div>
                                <div className=''>
                                    <p className='py-2'>Rs 1000.00</p>
                                    <p className='py-2'>Rs 1000.00</p>
                                    <p className='py-2'>Rs 1000.00</p>
                                    <p className='py-2'>Rs 1000.00</p>
                                    <p className='py-2'>Rs 1000.00</p>
                                    <p className='py-2'>Rs 1000.00</p>
                                    <p className='py-2'>Rs 1000.00</p>
                                    <p className='py-2'>Rs 1000.00</p>
                                    <p className='py-2'>Rs 1000.00</p>
                                    <p className='py-2'>Rs 1000.00</p>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index