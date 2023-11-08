import Link from 'next/link'
import React, { useState } from 'react'

function index() {
    const [fullname,setFullname] = useState('');
    const [email,setEmail] = useState('');
    const [phoneno,setPhoneno] = useState('');
    const [password,setPassword] = useState('');

    return (
        <>
            <div className=''>

                <img className='w-[600px]  m-auto' src='https://s3-alpha-sig.figma.com/img/d3da/3e5c/75f1118a3f081f7aefa253a3c99ceb36?Expires=1698019200&Signature=XH0Pg5C-FlTilahDJ6xp2mCp8CM-c4c7VZJTxg0Mpm1Wq0EL1kDpYqI7gzuYVl8CiOAmSK7ZNCskHiaa37ReXKFsOWOu1m35GKoopVQwGZpWAyHXZaAGPxA2lanYSfiurR6xlAgw5DCAiaiK5QyARnwsSL1KOgo3siaM~9hLvEVdYksdMBCtH-X4w~QKB5UEPTpiXJU0ikIGKQyHItjLz3GoTBY~dBPowL30rWz97xfiwz64SiNC8-QX5KV41Gt6h99~ey~EePUfJJiEcYscGw88aFVOy-g5xzgpFnClHoB7b2Ovwg79X4i-M4tjk~17axWHnGWYaOPLeEpV0Hs0Jw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
                <div className='text-center mt-5'>
                    <h1 className='text-[40px] font-bold'>Successfull</h1>
                    <p className='md:w-[500px] m-auto '>Your Password has been updated, please change Your Password
                        Regularly to avoid this happening </p>
                    <Link href="/auth/login"><p className='font-bold mb-10 underline text-xl text-blue-600'>Login</p></Link>
                </div>
            </div>
        </>
    )
}

export default index