import db from "../models/index.js";
import { qstash } from "../config/qstash.js";
const main = async() => {

    // const newUser = await db.User.create({
    //     firebase_user_id: 'Phạm Duy Hải',
    //     role: 'admin',
    // });

    const result = await qstash.messages.delete('msg_7YoJxFpwkEy5zBp1z9h5hKVhMt2FZWeVTMDmWPTx5epUovxjCU5wz')
    console.log(result)
}

main().then()