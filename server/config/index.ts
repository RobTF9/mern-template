import dotenv from 'dotenv'
dotenv.config()

const config = {
  db: process.env.MONGO_DB || '',
  secret: process.env.SESSION_SECRET || '',
  ngrok: process.env.NGROK,
  cloudinary: {
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
    cloud_name: process.env.CLOUD_NAME,
  },
}

export default config
