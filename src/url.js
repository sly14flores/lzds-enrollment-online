const prodUrl = "https://api.lzds.edu.ph"
const devUrl = "https://api-test.lzds.edu.ph"

const NODE_ENV = process.env.NODE_ENV || 'development'
const apiUrl = (NODE_ENV==='development')?devUrl:prodUrl

console.log(`API url: ${apiUrl}`)

export { apiUrl }