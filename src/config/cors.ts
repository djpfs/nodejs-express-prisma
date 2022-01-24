import httpStatus from 'http-status'
import cors from 'cors'

const options = {
  origin: (origin: any, callback: any) => {
    const whiteList = ['localhost', 'chrome-extension']
    const index = whiteList.findIndex((aWhiteListedOrigin) =>
      origin.includes(aWhiteListedOrigin)
    )
    if (!origin || index !== -1) {
      callback(null, true)
    } else {
      callback(
        {
          message: `⚠️ '${origin}' is not allowed`,
          status: httpStatus.FORBIDDEN,
        },
        false
      )
    }
  },
  credentials: false,
}

export default () => cors(options)
