import { initializeApp } from 'firebase-admin'

initializeApp({
	storageBucket: 'byte-build.appspot.com'
})

export * from './User/functions'
export * from './Hackathon/functions'
export * from './Prize/functions'
export * from './Bit/functions'
