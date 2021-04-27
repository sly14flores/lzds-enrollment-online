const prodUrl = "https://api.lzds.edu.ph"
const localUrl = "http://lzds.local/api"

const NODE_ENV = process.env.NODE_ENV || 'development'
const apiUrl = (NODE_ENV==='development')?localUrl:prodUrl

console.log(`API url: ${apiUrl}`)

export { apiUrl }