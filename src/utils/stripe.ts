import * as functions from 'firebase-functions'
import Stripe from 'stripe'

const { api_key } = functions.config().stripe
const stripe = new Stripe(api_key, { apiVersion: null as never })

export default stripe
