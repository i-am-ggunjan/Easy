export const fetchCourseData = async (url) => {
    const response = await fetch('https://www.api.easyhaionline.com/api/super-admin/progams/get-programs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "streamBased": true }),
    })
    const result = await response.json()
    return result
}