import * as functions from 'firebase-functions'

import HttpError from './http'

const sendError = (res: functions.Response<string>, error: unknown) => {
	res
		.status(error instanceof HttpError ? error.status : 500)
		.send(error instanceof Error ? error.message : 'An unknown error occurred')
}

export default sendError
