import * as functions from 'firebase-functions'

type UnknownError = Record<string, unknown> | null | undefined
type ValidError = { message: string }

const { HttpsError } = functions.https

const getMessage = (error: unknown) =>
	typeof (error as UnknownError)?.message === 'string'
		? (error as ValidError).message
		: 'An unknown error occurred'

const toHttpsError = (error: unknown) =>
	error instanceof HttpsError
		? error
		: new HttpsError('unknown', getMessage(error))

export default toHttpsError
