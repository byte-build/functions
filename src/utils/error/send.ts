import * as functions from 'firebase-functions'

type UnknownError = Record<string, unknown> | null | undefined

type ValidErrorStatus = { status: number }
type ValidErrorMessage = { message: string }

const sendError = (res: functions.Response<string>, error: unknown) => {
	res
		.status(
			typeof (error as UnknownError)?.status === 'number'
				? (error as ValidErrorStatus).status
				: 500
		)
		.send(
			typeof (error as UnknownError)?.message === 'string'
				? (error as ValidErrorMessage).message
				: 'An unknown error occurred'
		)
}

export default sendError
