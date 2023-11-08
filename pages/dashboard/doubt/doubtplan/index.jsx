import Doubtheader from '@/components/card/Doubtheader';
import DoubtPlanCard from '@/components/card/DoubtPlanCard';
import React from 'react'

function Index({ doubtPlan }) {
    console.log("Dobut Plan ::: ", doubtPlan)

    return (
        <>
            <Doubtheader />
            <div className='flex max-sm:justify-center gap-x-12 gap-y-5 flex-wrap p-1'>
                {doubtPlan?.availablePlan.map((value, index) => (
                    <DoubtPlanCard key={index} data={value} />
                ))}
            </div>
        </>
    )
}

export default Index

Index.getLayout = function PageLayout(page) {
    return (<>{page}</>)
}

export async function getStaticProps() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/api/v1/modules/doubt/availableplan`)

        const result = await response.json()
        return { props: { doubtPlan: result.data } }

    } catch (error) {
        console.log("Error ::: ", error)
        return { props: { doubtPlan: null } }
    }
}