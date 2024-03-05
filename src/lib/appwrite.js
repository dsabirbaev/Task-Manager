

import { Account, Client, Databases, ID } from 'appwrite'

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65e60f961a91269aec09');




const account = new Account(client)
const database = new Databases(client)
const unique_id = ID.unique()


const DB_ID = "65e610dd053a76b7303d"
const COLLECTION_TASK_ID = "65e611bd5657aa940592"


export { account, database, unique_id, DB_ID, COLLECTION_TASK_ID}



