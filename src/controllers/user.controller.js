import db from "../models";

// export const login = async (req, res) => {
//     const user = db.User.findOne({where: {firebase_user_id: }})
// }

export const register = async (req, res) => {
    const user = db.User.create({
        firebase_user_id: req.firebase_user_id,
        role: "user"
    })
    const student = db.Student.create({
        name: req.name,
        age: req.age,
        gender: req.gender,
        phone: req.phone,
        email: req.email,
        link_image: req.link_image,
        id_user: req.id_user
    })
}