import { FilterIcon, PassbookIcon } from '@/utils/icons/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function Doubtheader() {
    const [activeTab, setActiveTab] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const currentPath = router.asPath;
        if (currentPath.includes('/unsolved')) {
            setActiveTab('unsolved');
        } else if (currentPath.includes('/solve')) {
            setActiveTab('solve');
        } else if (currentPath.includes('/summary')) {
            setActiveTab('summary');
        } else if (currentPath.includes('/doubtplan')) {
            setActiveTab('doubtplan');
        } else if (currentPath.includes('/askDoubt')) {
            setActiveTab('askDoubt');
        } else if (currentPath.includes('/filter')) {
            setActiveTab('filter');
        }
    }, [router.asPath]);

    return (
        <div className='flex justify-between flex-wrap gap-y-5 p-2 font-semibold'>
            <div className='flex flex-wrap justify-between gap-2 sm:gap-6 items-center max-sm:text-[14px]'>
                <Link href="/dashboard/doubt/unsolved">
                    <button className={`border-2 border-[#6F6B80] text-black p-2 rounded-[8px] ${activeTab === 'unsolved' && 'active'}`}>Unsolved Doubt- 4</button>
                </Link>
                <Link href="/dashboard/doubt/solve">
                    <button className={`border-2 border-[#6F6B80] text-black p-2 rounded-[8px] ${activeTab === 'solve' && 'active'}`}>Solved Doubt - 6</button>
                </Link>
                <Link href="/dashboard/doubt/summary">
                    <button className={`border-2 p-2  border-[#6F6B80] rounded-[8px] ${activeTab === 'summary' && 'active'}`}>Summary</button>
                </Link>
                <Link href="/dashboard/doubt/doubtplan">
                    <button className={`border-2 p-2  border-[#6F6B80] rounded-[8px] ${activeTab === 'doubtplan' && 'active'}`}>Doubt Plan</button>
                </Link>
            </div>
            <div className='flex gap-2 sm:gap-6 justify-between max-sm:text-[14px]'>
                <Link href="/ask-doubt">
                    <button className={`border-2 p-2 border-[#6F6B80] rounded-[8px] ${activeTab === 'askDoubt' && 'active'}`}>Ask Doubt</button>
                </Link>
                <Link href="/dashboard/doubt/filter">
                    <button className={`border-2 p-2 border-[#6F6B80] flex rounded-[8px] ${activeTab === 'filter' && 'active'} flex gap-2`}>  <FilterIcon /> Filter</button>
                </Link>
            </div>
        </div>
    );
}

export default Doubtheader;
