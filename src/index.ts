import { initializeApp } from 'firebase-admin'

initializeApp({
	storageBucket: 'byte-build.appspot.com'
})

export * from './User/functions'
