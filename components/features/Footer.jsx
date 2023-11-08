import React from "react";
import Link from "next/link";
import { FacebookIcon, WhatsappIcon, LocationIcon, InstagramIcon, TwitterIcon, LinkdInIcon, LocationFillIcon, EmailIcon, CallIconFooter } from "@/utils/icons/icons";

const Footer = () => {

    return (
        <>
            <section className={`bg-gradient-to-t from-ngc1 to-ngc2 text-white lg:px-44 md:px-30 sm:px-10 px-4 py-16`}>
                <article>
                    <main className="flex justify-between gap-10 max-sm:flex-col">
                        <main className="sm:basis-1/2 text-[14px] max-sm:text-[13px] flex flex-col gap-9">
                            <div>
                                <img
                                    className="max-sm:w-[120px] max-sm:h-10 h-14 w-[200px]"
                                    src="https://www.easyhaionline.com/assets/images/logo.svg"
                                    alt=""
                                />
                            </div>
                            <div className="">
                                EasyhaiOnline Is An Edu-Tech Company And A Part Of Harshly Group Which Was Established Collectively By The Dint of Enthusiastic And Highly Skilled Engineers, Management Professionals And Skillfully Competentt Educators.
                            </div>
                            <main className="flex flex-col gap-9 max-sm:hidden">
                                <main className="flex gap-3">
                                    <div className=""><LocationFillIcon /></div>
                                    <div>C-56/21, II Floor, Sector-62, Noida-201309</div>
                                </main>
                                <main className="flex gap-3">
                                    <div className=""><CallIconFooter /></div>
                                    <div>+91 9289911131</div>
                                </main>
                                <main className="flex gap-3">
                                    <div className=""><EmailIcon /></div>
                                    <div>Info@Easyhaionline.com</div>
                                </main>
                                <main className="">
                                    <div className="text-yellow-500 font-bold">Payment</div>
                                    <p>Easyhaionline offers you multiple payment methods. Payment gateway partners use secure encryption technology to keep your transaction details confidential at all times.</p>
                                </main>
                                <div>
                                    <img
                                        className="h-5"
                                        src="/FooterImage.png"
                                        alt=""
                                    />
                                </div>
                            </main>
                        </main>


                        <main className="sm:basis-1/2 text-[14px] max-sm:text-[13px] flex flex-col gap-14">
                            <main className="flex gap-3 justify-end items-center max-sm:justify-start">
                                <div className="hover:scale-[1.2] hover:bg-[#86EC56]">
                                    <a target="blank" href="https://api.whatsapp.com/send?phone=9289911131"><WhatsappIcon h={28} w={28} /></a>
                                </div>
                                <div className="hover:scale-[1.2] hover:bg-[#] hover:bg-gradient-to-t from-[#F8A581] to-[#6AC63F]">
                                    <a target="blank" href="https://www.google.com/maps/place/Easyhai+Online/@28.5811917,77.3157143,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce59ba9ba9201:0x8fbfce511e8ad3ce!8m2!3d28.5811917!4d77.3182892!16s%2Fg%2F11rnnjm3_6?entry=ttu"><LocationIcon h={28} w={28} /></a>
                                </div>
                                <div className="hover:scale-[1.2] hover:bg-[#3B5998]">
                                    <a target="blank" href="https://www.facebook.com/p/Easyhai-Online-100083709052651/"><FacebookIcon h={28} w={28} /></a>
                                </div>
                                <div className="hover:scale-[1.2] hover:bg-gradient-to-t from-[#B64680] to-[#E8A047]">
                                    <a target="blank" href="https://www.instagram.com/easyhai_online/"> <InstagramIcon h={28} w={28} /></a>
                                </div>
                                <div className="hover:scale-[1.2] hover:bg-[#1DA1F2]">
                                    <a target="blank" href="https://twitter.com/easyhaionline"><TwitterIcon h={28} w={28} /></a>
                                </div>
                                <div className="hover:scale-[1.2] hover:bg-[#0077B5]">
                                    <a target="blank" href="https://in.linkedin.com/company/easy-hai-online"><LinkdInIcon h={28} w={28} /></a>
                                </div>
                            </main>

                            <main className="flex justify-end max-sm:justify-between max-sm:flex-wrap items-start gap-14">
                                <div>
                                    <div className="flex justify-start">
                                        <div className="border-b-[1px] mb-5 text-[15px] max-sm:text-[13px]">QUICK LINKS</div>
                                    </div>
                                    <main className="flex flex-col gap-3 items-start">
                                        <div className="hover:border-b-[1px]">
                                            <Link href="/about-us" className="hover:text-[#FFC81D]">About us</Link>
                                        </div>
                                        <div className="hover:border-b-[1px]">
                                            <Link href="/contact" className="hover:text-[#FFC81D]">Contact us</Link>
                                        </div>
                                        <div className="hover:border-b-[1px]">
                                            <Link href="/term-condition" className="hover:text-[#FFC81D]">Terms & Conditions</Link>
                                        </div>
                                        <div className="hover:border-b-[1px]">
                                            <Link href="/privacy-policy" className="hover:text-[#FFC81D]">Privay Policy</Link>
                                        </div>
                                        <div className="hover:border-b-[1px]">
                                            <Link href="/refund-policy" className="hover:text-[#FFC81D]">Refund Policy</Link>
                                        </div>
                                        <div className="hover:border-b-[1px]">
                                            <Link href="/disclaimer" className="hover:text-[#FFC81D]">Disclaimer</Link>
                                        </div>
                                        <div className="hover:border-b-[1px]">
                                            <Link href="https://www.easyhaionline.com/admin" type="blank" className="hover:text-[#FFC81D]">Admin</Link>
                                        </div>
                                        <div className="hover:border-b-[1px]">
                                            <Link href="https://super-admin-kappa.vercel.app/" type="blank" className="hover:text-[#FFC81D]">Internship</Link>
                                        </div>
                                        <div className="hover:border-b-[1px]">
                                            <Link href="https://internship.easyhaionline.com/" type="blank" className="hover:text-[#FFC81D]">Educators</Link>
                                        </div>
                                        <div className="hover:border-b-[1px]">
                                            <Link href="https://www.easyhaionline.com/sales/lead" type="blank" className="hover:text-[#FFC81D]">Sales Lead</Link>
                                        </div>
                                    </main>
                                </div>

                                <div className="sm:border-l-[1px] sm:pl-4">
                                    <div className="flex justify-start">
                                        <div className="border-b-[1px] mb-5 text-[15px] max-sm:text-[13px]">INFORMATION</div>
                                    </div>
                                    <main className="flex flex-col gap-3 items-start">
                                        <div className="hover:border-b-[1px]">
                                            <Link href="/" className="hover:text-[#FFC81D]">Home</Link>
                                        </div>
                                        <div className="hover:border-b-[1px]">
                                            <Link href="/courses" className="hover:text-[#FFC81D]">Courses</Link>
                                        </div>
                                        <div className="hover:border-b-[1px]">
                                            <Link href="/dashboard/material" className="hover:text-[#FFC81D]">Study Material</Link>
                                        </div>
                                        <div className="hover:border-b-[1px]">
                                            <Link href="/blogs" className="hover:text-[#FFC81D]">Blogs</Link>
                                        </div>
                                        <div className="hover:border-b-[1px]">
                                            <Link href="/dashboard/lectures" className="hover:text-[#FFC81D]">Live Lecture</Link>
                                        </div>
                                        <div className="hover:border-b-[1px]">
                                            <Link href="/" className="hover:text-[#FFC81D]">Interactive Lecture</Link>
                                        </div>
                                        <div className="hover:border-b-[1px]">
                                            <Link href="/ask-doubt" className="hover:text-[#FFC81D]">Ask Doubt</Link>
                                        </div>
                                        <div className="hover:border-b-[1px]">
                                            <Link href="/expert-teacher" className="hover:text-[#FFC81D]">Expert Teachers</Link>
                                        </div>
                                        <div className="hover:border-b-[1px]">
                                            <Link href="/free-evaluation" className="hover:text-[#FFC81D]">Free Evaluation</Link>
                                        </div>
                                    </main>
                                </div>

                                <div className="sm:border-l-[1px] sm:pl-4">
                                    <div className="flex justify-start">
                                        <div className="border-b-[1px] mb-5 text-[15px] max-sm:text-[13px]">MY ACCOUNT</div>
                                    </div>
                                    <main className="flex flex-col gap-3 items-start">
                                        <div className="hover:border-b-[1px]">
                                            <Link href="/" className="hover:text-[#FFC81D] ">My Account</Link>
                                        </div>
                                        <div className="hover:border-b-[1px]">
                                            <Link href="/" className="hover:text-[#FFC81D]">Order History</Link>
                                        </div>
                                        <div className="hover:border-b-[1px]">
                                            <Link href="/" className="hover:text-[#FFC81D]">Wish List</Link>
                                        </div>
                                        <div className="hover:border-b-[1px]">
                                            <Link href="/" className="hover:text-[#FFC81D]">News Letter</Link>
                                        </div>
                                        <div className="hover:border-b-[1px]">
                                            <Link href="/" className="hover:text-[#FFC81D]">Cetificates</Link>
                                        </div>
                                        <div className="hover:border-b-[1px]">
                                            <Link href="/" className="hover:text-[#FFC81D]">Affiliate</Link>
                                        </div>
                                    </main>
                                </div>
                            </main>
                        </main>

                        <main className="max-sm:flex flex-col gap-9 hidden text-[12px]">
                            <main className="flex gap-3 items-center  sm:hidden">
                                <div className="hover:text-[#FFC81D]   "><LocationFillIcon /></div>
                                <div>C-56/21, II Floor, Sector-62, Noida-201309</div>
                            </main>
                            <main className="flex gap-3 items-center  sm:hidden">
                                <div className="hover:text-[#FFC81D]   "><CallIconFooter /></div>
                                <div>+91 9289911131</div>
                            </main>
                            <main className="flex gap-3 items-center  sm:hidden">
                                <div className="hover:text-[#FFC81D]   "><EmailIcon /></div>
                                <div>Info@Easyhaionline.Com</div>
                            </main>


                            <div className="">
                                <img
                                    className="h-5  sm:hidden"
                                    src="/FooterImage.png"
                                    alt=""
                                />
                            </div>
                        </main>
                    </main>

                    <div className="text-[14px] sm:text-start text-center mt-10 font-medium">Copyright © <span className="text-[#856C1C]">Easyhai Online,</span> All Rights Reserved</div>
                </article>
            </section  >
        </>
    );
};

export default Footer;
