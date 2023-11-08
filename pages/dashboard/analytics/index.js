import React from 'react'

const Analytics = () => {
    return (
        <div>Analytics</div>
    )
}

export default Analytics

Analytics.getLayout = function PageLayout(page) {
    return (<>{page}</>)
}