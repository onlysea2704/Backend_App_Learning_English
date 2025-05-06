import { admin } from "../config/firebase.js";

const seedUsers = async () => {

    // let allUserIds = [];
    // let nextPageToken;

    // do {
    //   const result = await admin.auth().listUsers(1000, nextPageToken);
    //   const currentBatchIds = result.users.map(user => user.uid);
    //   allUserIds.push(...currentBatchIds);
    //   nextPageToken = result.pageToken;
    // } while (nextPageToken);

    const results = await admin.auth().listUsers()
    const users = results.users
    const firebaseUserIds = users.map((user) => user.uid)
    console.log(firebaseUserIds)
}
seedUsers().then()