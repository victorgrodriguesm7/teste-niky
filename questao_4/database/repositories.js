const Sequelize = require('sequelize');
const database = require('./index');

const TitleRepository = database.define('title', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

const InstructorRepository = database.define('instructor', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    rg: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    birthdate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    },
    title_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: TitleRepository,
            key: 'id'
        }
    }
});


const PhoneRepository = database.define('phone', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    instructor_id: {
        type: Sequelize.INTEGER,
        references: {
            model: InstructorRepository,
            key: 'id'
        }
    }
});

const WorkoutRepository = database.define('workout', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const StudentRepository = database.define('student', {
    enrollment: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    enrollment_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    birthdate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    },
    height: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    weight: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
});

const ClassRepository = database.define('class', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    max_students: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    schedule: {
        type: Sequelize.TIME,
        allowNull: false
    },
    duration: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    start_time: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    end_time: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    workout_id: {
        type: Sequelize.INTEGER,
        references: {
            model: WorkoutRepository,
            key: 'id'
        }
    },
    instructor_id: {
        type: Sequelize.INTEGER,
        references: {
            model: InstructorRepository,
            key: 'id'
        }
    },
    tutoring_id: {
        type: Sequelize.STRING,
        references: {
            model: StudentRepository,
            key: 'enrollment'
        }
    }
});

const StudentClassRepository = database.define('student_class', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    student_id: {
        type: Sequelize.STRING,
        references: {
            model: StudentRepository,
            key: 'enrollment'
        }
    },
    class_id: {
        type: Sequelize.STRING,
        references: {
            model: ClassRepository,
            key: 'id'
        }
    }
});

module.exports = {
    InstructorRepository,
    PhoneRepository,
    TitleRepository,
    WorkoutRepository,
    ClassRepository,
    StudentRepository,
    StudentClassRepository
}