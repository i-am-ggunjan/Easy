export const fetchBlogData = async (url) => {
    const response = await fetch('https://www.api.easyhaionline.com/api/super-admin/content/blog-list?page=1&count=4')
    const result = await response.json()
    const serializedData = result?.data || [];
    return serializedData
}