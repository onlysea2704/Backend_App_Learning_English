import db from "../models/index.js";

const results = [
    { id_student: 49, id_quiz: 1, score: 85 },
    { id_student: 49, id_quiz: 2, score: 90 },
    { id_student: 49, id_quiz: 3, score: 75 },
    { id_student: 49, id_quiz: 4, score: 88 },
    { id_student: 49, id_quiz: 5, score: 92 },
    { id_student: 49, id_quiz: 6, score: 80 },
    { id_student: 49, id_quiz: 7, score: 70 },
    { id_student: 49, id_quiz: 8, score: 95 },
    { id_student: 49, id_quiz: 9, score: 60 },
    { id_student: 49, id_quiz: 10, score: 77 }
]

export const seedResult = async () => {
    try {
        await db.Result.bulkCreate(results);
        console.log("✅ Seed Result successfully");
    } catch (error) {
        console.error("Error seeding Result: ", error);
    }

}

seedResult().then()