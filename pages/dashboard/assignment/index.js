import React from 'react'

const Assignment = () => {
    return (
        <div>Assignment</div>
    )
}

export default Assignment

Assignment.getLayout = function PageLayout(page) {
    return (<>{page}</>)
}