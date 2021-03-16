import { initializeApp } from 'firebase-admin'

import { STORAGE_BUCKET } from './utils/constants'

initializeApp({ storageBucket: STORAGE_BUCKET })

export * from './User/functions'
export * from './Hackathon/functions'
export * from './Prize/functions'
export * from './Bit/functions'
