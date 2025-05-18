import db from "../models/index.js";

const main = async() => {

    const newUser = await db.User.create({
        firebase_user_id: 'Phạm Duy Hải',
        role: 'admin',
    });

}

main().then()