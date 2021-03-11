import * as functions from 'firebase-functions'

const { HttpsError } = functions.https

const getMessage = (error: unknown) =>
	error instanceof Error ? error.message : 'An unknown error occurred'

const toHttpsError = (error: unknown) =>
	error instanceof HttpsError
		? error
		: new HttpsError('unknown', getMessage(error))

export default toHttpsError
