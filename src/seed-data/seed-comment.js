import db from "../models/index.js";

const seedComments = async (req, res) => {
    try {
        await db.Comment.bulkCreate([
            {
                id_student: 1,
                id_course: 1,
                comment: "Khóa học rất bổ ích, giảng viên giảng dễ hiểu.",
                time_comment: new Date('2025-05-01T10:15:00')
            },
            {
                id_student: 2,
                id_course: 1,
                comment: "Mình thích phần bài tập thực hành, rất thực tế.",
                time_comment: new Date('2025-05-02T14:30:00')
            },
            {
                id_student: 1,
                id_course: 2,
                comment: "Nội dung hơi nhanh, mong giảng viên nói chậm hơn.",
                time_comment: new Date('2025-05-03T09:00:00')
            },
            {
                id_student: 3,
                id_course: 1,
                comment: "Giảng viên nhiệt tình, phản hồi nhanh.",
                time_comment: new Date('2025-05-04T11:45:00')
            },
            {
                id_student: 2,
                id_course: 3,
                comment: "Khóa học này nên có thêm tài liệu PDF.",
                time_comment: new Date('2025-05-05T08:20:00')
            },
            {
                id_student: 4,
                id_course: 3,
                comment: "Bài giảng rõ ràng, nhiều ví dụ minh họa.",
                time_comment: new Date('2025-05-05T13:10:00')
            }
        ]);
        console.log("Đã seed data Comment")
    } catch (error) {
        console.log("Đã có lỗi khi seed data Comment: ", error)
    }
    
}
seedComments().then()