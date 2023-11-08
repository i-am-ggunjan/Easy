import BuyingCard from '@/components/card/BuyingCard';
import HeadingCard from '@/components/card/HeadingCard';
import useAlert from '@/components/hooks/useAlert';
import { useLoader } from '@/components/hooks/useLoader';
import { BooksAndPhysicalItems } from '@/utils/db';
import { PercentSVG } from '@/utils/icons/icons';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

function removeStartingDigits(input) {
  // Use regex to match the starting two digits and replace them with an empty string
  return input.replace(/^\d{2}/, '');
}

const getEncRequest = (orderInformation) => {
  // Make an API call to retrieve the encrypted request
  return fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URI}/pay/api/super-admin/cc-avenue/getEnc`,
    {
      method: 'POST',
      body: JSON.stringify(orderInformation),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const Summary = ({ course }) => {
  // console.log("Summary Page :: ", course)
  const [openLoader, closeLoader, Loader] = useLoader();
  const [openAlert, AlertWrapper] = useAlert();
  const { user, token } = useSelector((state) => state.appState);
  const [buyingItems, setBuyingItems] = useState([]);
  const router = useRouter();
  const formRef = useRef(null);
  // console.log("Buying Item :: ", buyingItems)
  console.log("User from Summary :: ", user)
  const [CCavenueRequest, setCCavenueRequest] = useState({
    encRequest: '',
    accessCode: '',
  });

  const makePaymentHandle = async (amount, currProgram, buyingListItems, paymentGateway) => {
    if (!user) {
      openAlert("Please LoggedIn First")
    }
    else {
      if (!amount || !currProgram) {
        console.log('no data found!');
        return;
      }
      openLoader('Making Your Wallet Process...')

      // const billingAddress = {
      //   billing_name: user?.name?.firstName || '',
      //   billing_address: user?.address?.address || '',
      //   billing_city: user?.address?.city || '',
      //   billing_state: user?.address?.state || '',
      //   billing_zip: user?.address?.zip || '',
      //   billing_country: user?.address?.country || '',
      //   billing_tel: user?.address?.mobile || '',
      //   billing_email: user?.email || '',
      // };

      const billingAddress = {
        billing_name: user?.name?.firstName + " " + user?.name?.lastName,
        billing_address: user?.address?.line1,
        billing_city: user?.address?.city,
        billing_state: user?.address?.state,
        billing_zip: user?.address?.pinCode,
        billing_country: user?.address?.country,
        billing_tel: user?.phoneNumber,
        billing_email: user?.email,
      }

      const studentData = {
        _id: user?._id,
        name: user?.name?.firstName + " " + user?.name?.lastName,
        phoneNumber: user?.phoneNumber,
        email: user?.email
      }

      if (paymentGateway === 'PhonePe') {
        const orderInfo = {
          totalAmount: amount,
          payment_for: "main-courses",
          purchasedCourse: currProgram,
          additionalProducts: buyingListItems,
          paymentGateway,
          studentData,
          address: billingAddress,
        }
        console.log("PhonePe Order Info :: ", orderInfo)
        try {
          const data = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/api/v1/modules/phonepe`, {
            method: 'POST',
            body: JSON.stringify(orderInfo),
            headers: {
              'Content-Type': 'application/json',
              "eh-auth-token": token
            },
          })
          const response = await data.json()
          console.log("PhonePe Response ::: ", response)

          router.replace(response?.data?.redirectInfo?.url)
        } catch (error) {
          console.log("Error in hitting API ::: ", error)
        }
      } else if (paymentGateway === 'JODO') {
        const orderInfo = {
          totalAmount: amount,
          payment_for: "main-courses",
          purchasedCourse: currProgram,
          additionalProducts: buyingListItems,
          paymentGateway,
          studentData,
          address: billingAddress,
        }
        console.log("JODO Order Info :: ", orderInfo)
        try {
          const data = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/api/v1/modules/jodopay/create`, {
            method: 'POST',
            body: JSON.stringify(orderInfo),
            headers: {
              'Content-Type': 'application/json',
              "eh-auth-token": token
            },
          })
          console.log("JODO Response before JSON", data)
          const response = await data.json()
          console.log("JODO Response", response)
          router.replace(response?.data?.redirectInfo)
        } catch (error) {
          console.log("Error in hitting API ::: ", error)
        }
      } else if (paymentGateway === 'CCAvenue') {
        const orderInfo = {
          amount: amount,
          currProgram,
          buyingListItems,
          paymentGateway,
          studentData: {
            _id: user?._id,
            name: user?.name?.firstName,
            phoneno: user?.phoneno,
            email: user?.email,
          },
          address: {
            ...billingAddress,
            delivery_name: user?.name?.firstName,
            delivery_address: user?.address?.address,
            delivery_city: user?.address?.city,
            delivery_state: user?.address?.state,
            delivery_zip: user?.address?.zip,
            delivery_country: user?.address?.country,
            delivery_tel: user?.address?.mobile,
          },
        };

        try {
          const encryptedRequest = await getEncRequest(orderInfo);
          if (encryptedRequest) {
            setCCavenueRequest({
              encRequest: encryptedRequest?.encryptedOrderData,
              accessCode: encryptedRequest?.access_code,
            });
            setTimeout(() => {
              formRef.current.submit();
            });
          }
        } catch (error) {
          console.log('error * : ', error);
        }
      } else if (paymentGateway === 'Wallet') {
        const orderInfo = {
          amount,
          currProgram,
          buyingListItems,
          paymentGateway,
          studentData: {
            _id: user._id,
            name: user.name?.firstName,
            phoneno: user.phoneno,
            email: user.email,
          },
          address: billingAddress,
        };

        try {
          const _res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URI}/api/super-admin/payments/wallet/buy-course`,
            {
              method: 'POST',
              body: JSON.stringify(orderInfo),
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
          const res = await _res.json();
          if (!res?.success) {
            openAlert(res?.message || 'Internet Issue.', 'error');
          } else {
            console.log('Else');
            // send messsage for successful buy
            // send messgage for deliver of goods
            openAlert(res?.message || 'Internet Issue.', 'success');
            router.push('/dashboard');
          }
        } catch (error) {
          console.log('error ::: ', error);
        }
      }
      closeLoader();
    }


  };
  return (
    <>
      <AlertWrapper />
      <Loader />
      <HeadingCard heading={'Order Summary'} />

      <section className="lg:px-44 md:px-30 sm:px-10 px-4 py-5">
        <article>
          <main className="flex justify-between gap-8 sm:gap-4 flex-wrap">
            <main className="md:basis-[55%] basis-[100%] flex flex-col gap-10">
              <div className="rounded-lg border-[3px] p-4">
                <div className="py-3 font-bold text-[22px] text-[#231F40] ">
                  Items in Cart
                </div>
                <main className="max-sm:p-3 flex justify-center sm:justify-between max-sm:gap-6 flex-wrap items-center border-[3px] rounded-l-lg rounded-r-lg shadow-lg">
                  <div className="md:basis-[25%] basis-[100%] items-center justify-center flex">
                    <img
                      src={course.bannerURI}
                      alt=""
                      width={'85%'}
                      className="h-32 object-cover max-sm:rounded-lg rounded-l-lg"
                    />
                  </div>
                  <main className="flex flex-col gap-2 sm:basis-[70%]">
                    <div className="flex flex-col gap-5">
                      <div className="text-[#231F40] sm:text-[18px] font-bold uppercase">
                        {course?.programName}
                      </div>
                      <div className="text-[14px] text-[#6F6B80] flex gap-5">
                        <div className="line-through">
                          ₹  {course?.actualPrice}
                        </div>
                        <div>₹ {course?.discountPrice}</div>
                      </div>
                    </div>
                  </main>
                </main>
              </div>

              <div className="border-[3px] rounded-lg p-4">
                <div className="mb-4">
                  <div className="font-bold text-[22px] text-[#231F40] ">
                    Add more Items
                  </div>
                  <div className="text-[16px] text-[#6F6B80] flex gap-5">
                    Recommended for you
                  </div>
                </div>
                <main className="flex justify-between gap-6 flex-wrap items-center rounded-l-lg">
                  {BooksAndPhysicalItems?.map((value) => {
                    let isAleardy = buyingItems?.find(
                      (curr) => curr?.id === value?.id
                    );
                    return (
                      <div
                        key={value?.id}
                        className="flex sm:flex-col gap-6 items-center sm:gap-4 p-4 px-6 border-[3px] max-sm:basis-[100%]  rounded-lg"
                      >
                        <div className="flex justify-center items-center">
                          <img
                            src={value?.product?.img}
                            alt=""
                            className="h-24 w-24 object-cover"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="flex flex-col sm:items-center">
                            <div className="text-[#231F40] text-[13px] font-bold uppercase">
                              {value?.product?.title}
                            </div>
                            <div className="text-[14px] text-[#6F6B80]">
                              {value?.product.price}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {isAleardy ? (
                              <div
                                onClick={() =>
                                  setBuyingItems((curr) =>
                                    curr?.filter((e) => e !== value)
                                  )
                                }
                                className="flex items-center gap-2"
                              >
                                <div className="p-[7px] bg-[#0A405C]"></div>
                                <div className="text-[14px] text-[#6F6B80}">
                                  Remove Item
                                </div>
                              </div>
                            ) : (
                              <div
                                onClick={() =>
                                  setBuyingItems((curr) => [...curr, value])
                                }
                                className="flex items-center gap-2"
                              >
                                <div className="p-[6px] border-[3px] border-[#0A405C]"></div>
                                <div className="text-[14px] text-[#6F6B80}">
                                  Add to cart
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </main>
              </div>
            </main>

            <main className="md:basis-[40%] basis-[100%] flex flex-col gap-10">
              <PaymentSummmary
                course={course}
                buyingItems={buyingItems}
                makePaymentHandler={makePaymentHandle}
              />

              <div className="border-[3px] rounded-lg p-4">
                <div className="font-bold text-[17px] text-[#231F40] mb-4">
                  You are buing {buyingItems?.length + 1} items
                </div>
                <div className="flex gap-2 justify-between flex-wrap">
                  {course && (
                    <BuyingCard
                      image={course?.bannerURI}
                      title={course?.programName}
                      price={course?.discountPrice}
                    />
                  )}

                  {buyingItems?.length > 0 &&
                    buyingItems?.map((value) => {
                      return (
                        <BuyingCard
                          key={value?.id}
                          image={value?.product?.img}
                          title={value?.product?.title}
                          price={value?.product?.price}
                        />
                      );
                    })}
                </div>
              </div>
            </main>
          </main>
        </article>
      </section>

      {/* CC avenue Payment Gateway */}
      <form
        ref={formRef}
        method="post"
        action="https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction"
      >
        <input
          type="hidden"
          name="encRequest"
          value={CCavenueRequest.encRequest}
        />
        <input
          type="hidden"
          name="access_code"
          value={CCavenueRequest.accessCode}
        />
      </form>
    </>
  );
};

export default Summary;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const response = await fetch(
    `https://www.api.easyhaionline.com/api/super-admin/progams/get-program?id=${id}`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }
  );
  const result = await response.json();
  return { props: { course: result, pathId: id } };
}

export const PaymentSummmary = ({
  course,
  buyingItems,
  makePaymentHandler,
}) => {
  const [finalAmount, setFinalAmount] = useState(0);
  const [errors, setErrors] = useState({});
  const [coupon, setCoupon] = useState({ textInput: '' });
  const [extraBuyingPrice, setExtraBuyingPrice] = useState(0);
  const [openLoader, closeLoader, Loader] = useLoader();
  useEffect(() => {
    const totalSum = buyingItems.reduce((acc, item) => {
      const price = parseInt(item.product.price);
      return acc + price;
    }, 0);

    setFinalAmount(() => {
      const programPrice = course?.discountPrice;
      return parseFloat(totalSum) + parseFloat(programPrice);
    });
    setExtraBuyingPrice(totalSum);
  }, [course, buyingItems]);

  const couponUpdateHandler = async () => {
    openLoader('Checking your token...');
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URI}/wallet/api/super-admin/appy-token`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token: coupon?.textInput }),
        }
      );
      const data = await response.json();
      if (data?.success) {
        setCoupon((_) => ({ ..._, ...data?.data }));
        setErrors((_) => ({ ..._, coupon: 'Coupon Applied!' }));
      } else {
        setErrors((_) => ({ ..._, coupon: 'Coupon Not Working!' }));
        setTimeout(() => {
          setCoupon((_) => ({ textInput: '' }));
        }, 1000);
      }
      closeLoader();
    } catch (error) {
      closeLoader();
    }
  };

  const payNowHandler = (paymentGateway) => {
    const __currProgram = {
      id: course?._id,
      accessibleStreams: course?.accessibleStreams,
      parentStreams: course?.parentStreams,
      programName: course?.programName,
      validity: course?.validity,
      coupon: coupon?.amount ? coupon : null,
      programPrice: parseFloat(finalAmount) - parseFloat(extraBuyingPrice),
    };

    if (coupon?.tokenMode === 'reduct_amount') {
      makePaymentHandler(
        parseFloat(finalAmount) - parseFloat(coupon?.amount),
        __currProgram,
        buyingItems,
        paymentGateway
      );
    } else if (coupon?.tokenMode === 'exact_amount') {
      makePaymentHandler(
        parseFloat(coupon?.amount) + parseFloat(extraBuyingPrice),
        __currProgram,
        buyingItems,
        paymentGateway
      );
    } else {
      makePaymentHandler(
        parseFloat(finalAmount),
        __currProgram,
        buyingItems,
        paymentGateway
      );
    }
  };

  return (
    <>
      <Loader />
      <div className="border-[3px] rounded-lg p-4 flex flex-col gap-3">
        {errors?.coupon && (
          <p className="text-red-400 font-bold">{errors?.coupon}</p>
        )}
        <div className="bg-[#0A405C] flex items-center p-2 justify-between rounded-[4px]">
          <div className="flex gap-3 items-center">
            <div className="text-white">
              <PercentSVG />
            </div>
            <input
              type="text"
              placeholder="Enter Coupon Code Here"
              className="outline-none rounded-sm text-[#0A405C] py-1 px-2 w-[75%] sm:w-[100%]"
              value={coupon?.textInput}
              onChange={(_) => {
                setCoupon((e) => ({ ...e, textInput: _.target.value }));
              }}
            />
          </div>
          <button
            onClick={couponUpdateHandler}
            className="text-[#fff] sm:px-4 sm:pr-6 pr-3  font-bold text-center"
          >
            Coupon
          </button>
        </div>

        <main className="flex flex-col gap-2">
          <div className="text-[22px] font-[500] border-t-[3px]">
            Payment Summary
          </div>
          <main className="flex justify-between items-center font-[600]">
            <div>Program Price</div>
            <div>₹ {course?.actualPrice}</div>
          </main>
          <main className="flex justify-between items-center font-[600] text-green-700">
            <div>Discount</div>
            <div>
              - ₹
              {(coupon?.tokenMode === 'reduct_amount'
                ? parseFloat(course?.actualPrice) -
                parseFloat(course?.discountPrice) +
                parseFloat(coupon?.amount)
                : coupon?.tokenMode === 'exact_amount'
                  ? parseFloat(course?.actualPrice) - parseFloat(coupon?.amount)
                  : parseFloat(course?.actualPrice) -
                  parseFloat(course?.discountPrice)
              ).toFixed(2)}
            </div>
          </main>
          <main className="flex justify-between items-center font-[600]">
            <div>Delivery Charges</div>
            <div>₹ 0</div>
          </main>
          <main className="flex justify-between items-center font-[600] my-1 py-1 border-y-[3px]">
            <div className="text-[18px]">Total Amount</div>
            <div>
              ₹
              {(coupon?.tokenMode === 'reduct_amount'
                ? parseFloat(finalAmount) - parseFloat(coupon?.amount)
                : coupon?.tokenMode === 'exact_amount'
                  ? parseFloat(coupon?.amount) + parseFloat(extraBuyingPrice)
                  : parseFloat(finalAmount)
              ).toFixed(2)}
            </div>
          </main>
        </main>

        <main className=" flex  flex-col gap-2">
          <button
            onClick={() => { payNowHandler('CCAvenue') }}
            className="text-[#231F40] border-[2px] border-[#0A405C] bg-[#0A406C33] py-[10px] font-bold rounded-lg text-center w-full"
          >
            Pay with CCAvenue
          </button>
          <button
            onClick={() => { payNowHandler('JODO') }}
            className="text-[#231F40] border-[2px] border-[#0A405C] bg-[#0A406C33] py-[10px] font-bold rounded-lg text-center w-full"
          >
            Pay with JODO
          </button>
          <button
            onClick={() => { payNowHandler('Wallet') }}
            className="text-[#231F40] border-[2px] border-[#0A405C] bg-[#0A406C33] py-[10px] font-bold rounded-lg text-center w-full"
          >
            Pay with Wallet
          </button>
          <button
            onClick={() => { payNowHandler('PhonePe') }}
            className="text-[#fff] border-[2px] border-[#0A405C] bg-[#0A405C] py-[10px] font-bold rounded-lg text-center w-full"
          >
            Pay with PhonePe
          </button>
        </main>
      </div>
    </>
  );
};
