const { Router } = require('express');
const TitleModel = require('./models/TitleModel');
const InstructorModel = require('./models/InstructorModel');
const PhoneModel = require('./models/PhoneModel');
const StudentModel = require('./models/StudentModel');
const WorkoutModel = require('./models/WorkoutModel');
const ClassModel = require('./models/ClassModel');
const StudentClassModel = require('./models/StudentClassModel');

const routes = Router();

routes.get('/', (_, res) => {
    return res.status(200).send("Hello World");
})

routes.post('/title/:name', async (req, res) => {
    if (req.params.name){
        const title = new TitleModel({
            title: req.params.name
        });

        await title.save();

        return res.status(200).json(title.toJson());
    }

    return res.status(200).send();
});

routes.get('/title', async (req, res) => {
    const titles = await TitleModel.getTitles();

    return res.status(200).json(titles.map((title) => title.toJson()));
});

routes.get('/title/:id', async (req, res) => {
    const { id } = req.params;

    if (id){
        const title = await TitleModel.getTitle(id);

        if (title){
            return res.status(200).json(title.toJson());
        }

        return res.status(404).json({
            error: "Title not found"
        })
    }

    return res.status(400).json({
        error: "ID is required"
    });
});

routes.get('/instructor', async (req, res) => {
    const instructors = await InstructorModel.getInstructors();

    return res.status(200).json(instructors.map((instructor) => instructor.toJson()));
});

routes.get('/instructor/:id', async (req, res) => {
    const { id } = req.params;

    if (id){
        const instructor = await InstructorModel.getInstructor(id);

        if (instructor){
            return res.status(200).json(instructor.toJson());
        }

        return res.status(404).json({
            error: "Instructor not found"
        })
    }

    return res.status(400).json({
        error: "ID is required"
    });
});

routes.post('/instructor', async (req, res) => {
    const {
        rg,
        name,
        birthdate,
        title_id
    } = req.body;

    const instructor = new InstructorModel({
        rg,
        name,
        birthdate,
        title_id
    });

    await instructor.save();

    return res.status(200).json(instructor.toJson());
});

routes.get('/phone', async (req, res) => {
    const phones = await PhoneModel.getPhones();

    return res.status(200).json(phones.map((phone) => phone.toJson()));
});

routes.get('/phone/:id', async (req, res) => {
    const { id } = req.params;

    if (id){
        const phone = await PhoneModel.getPhone(id);

        if (phone){
            return res.status(200).json(phone.toJson());
        }

        return res.status(404).json({
            error: "Phone not found"
        })
    }

    return res.status(400).json({
        error: "ID is required"
    });
});

routes.post('/phone', async (req, res) => {
    const {
        phone,
        instructor_id
    } = req.body;

    const phoneModel = new PhoneModel({
        phone,
        instructor_id
    })

    await phoneModel.save();

    return res.status(200).json(phoneModel.toJson());
});


routes.get('/student/class', async (req, res) => {
    const studentClasses = await StudentClassModel.getStudentClasses();
    
    return res.status(200).json(studentClasses.map((studentClass) => studentClass.toJson()));
});

routes.get('/student/class/:id', async (req, res) => {
    const { id } = req.params;

    if (id){
        const studentClass = await StudentClassModel.getStudentClass(id);

        if (studentClass){
            return res.status(200).json(studentClass.toJson());
        }

        return res.status(404).json({
            error: "Student' Class not found"
        })
    }

    return res.status(400).json({
        error: "ID is required"
    });
});

routes.post('/student/class', async (req, res) => {
    const {
        student_id,
        class_id
    } = req.body;

    const studentClassModel = new StudentClassModel({
        student_id,
        class_id
    });

    await studentClassModel.save();

    return res.status(200).json(studentClassModel.toJson());
});

routes.get('/student', async (req, res) => {
    const students = await StudentModel.getStudents();

    return res.status(200).json(students.map((student) => student.toJson()));
});

routes.get('/student/:id', async (req, res) => {
    const { id } = req.params;

    if (id){
        const student = await StudentModel.getStudent(id);

        if (student){
            return res.status(200).json(student.toJson());
        }

        return res.status(404).json({
            error: "Student not found"
        })
    }

    return res.status(400).json({
        error: "ID is required"
    });
});

routes.post('/student', async (req, res) => {
    const {
        enrollment,
        enrollment_date,
        name,
        address,
        phone,
        birthdate,
        height,
        weight
    } = req.body;

    const studentModel = new StudentModel({
        enrollment,
        enrollment_date,
        name,
        address,
        phone,
        birthdate,
        height,
        weight
    });

    await studentModel.save();

    return res.status(200).json(studentModel.toJson());
});


routes.post('/workout/:name', async (req, res) => {
    if (req.params.name){
        const workout = new WorkoutModel({
            type: req.params.name
        });

        await workout.save();

        return res.status(200).json(workout.toJson());
    }

    return res.status(200).send();
});

routes.get('/workout', async (req, res) => {
    const workouts = await WorkoutModel.getWorkouts();

    return res.status(200).json(workouts.map((workout) => workout.toJson()));
});

routes.get('/workout/:id', async (req, res) => {
    const { id } = req.params;

    if (id){
        const workout = await WorkoutModel.getWorkout(id);

        if (workout){
            return res.status(200).json(workout.toJson());
        }

        return res.status(404).json({
            error: "Workout not found"
        })
    }

    return res.status(400).json({
        error: "ID is required"
    });
});

routes.get('/class', async (req, res) => {
    const classes = await ClassModel.getClasses();

    return res.status(200).json(classes.map((classe) => classe.toJson()));
});

routes.get('/class/:id', async (req, res) => {
    const { id } = req.params;

    if (id){
        const classe = await ClassModel.getClass(id);

        if (classe){
            return res.status(200).json(classe.toJson());
        }

        return res.status(404).json({
            error: "Class not found"
        })
    }

    return res.status(400).json({
        error: "ID is required"
    });
});

routes.post('/class', async (req, res) => {
    const {
        max_students,
        schedule,
        duration,
        start_time,
        end_time,
        workout_id,
        instructor_id,
        tutoring_id
    } = req.body;

    const classModel = new ClassModel({
        max_students,
        schedule,
        duration,
        start_time,
        end_time,
        workout_id,
        instructor_id,
        tutoring_id
    });

    await classModel.save();

    return res.status(200).json(classModel.toJson());
});

module.exports = routes;