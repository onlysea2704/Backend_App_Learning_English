import db from "../models/index.js";

export const getReport = async (req, res) => {
    try {
        const [revenue, metadata] = await db.sequelize.query(`
        SELECT SUM(c.price) AS total_revenue
        FROM my_courses mc
        JOIN courses c ON mc.id_course = c.id_course;
        `);
        const transactions = await db.MyCourse.count({
            where: {
                id_course: {
                    [db.Sequelize.Op.ne]: 21
                }
            }
        });

        const [revenueByDay] = await db.sequelize.query(`
        SELECT 
            DATE(mc.time_transaction) AS date,
            SUM(c.price) AS revenue
        FROM my_courses mc
        JOIN courses c ON mc.id_course = c.id_course
        WHERE mc.time_transaction >= CURDATE() - INTERVAL 5 DAY
        GROUP BY DATE(mc.time_transaction)
        ORDER BY date ASC;
        `);

        const [revenueByCourse] = await db.sequelize.query(`
        SELECT 
            c.id_course AS id_course,
            c.name_course AS name_course,
            COUNT(mc.id_course) AS total_purchases,
            SUM(c.price) AS total_revenue
        FROM 
            my_courses mc
        JOIN 
            courses c ON mc.id_course = c.id_course
        GROUP BY 
            c.id_course, c.name_course
        ORDER BY 
            total_revenue DESC
		limit 5
        `);
        console.log('--------------')
        console.log(revenueByCourse)

        const students = await db.Student.count();
        const lessons = await db.Lesson.count();
        const courses = await db.Course.count();
        return res.json({
            revenueByDay,
            cards: {
                revenue: revenue[0].total_revenue || 0,
                transactions,
                students,
                lessons,
                courses
            },
            revenueByCourse
        });
    } catch (error) {
        console.log('error: ', error.message);
        return res.json();
    }
}
