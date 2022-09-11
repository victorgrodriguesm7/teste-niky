const { StudentClassRepository } = require('../database/repositories');

class StudentClassModel {
    constructor({
        id,
        student_id,
        class_id
    }){
        this.id = id;
        this.student_id = student_id;
        this.class_id = class_id;
    }

    async delete(){
        const studentClass = await StudentClassRepository.findByPk(this.id);

        if (studentClass){
            await studentClass.destroy();
        }
    }

    async save(){
        await StudentClassModel.saveStudentClass(this, { id: this.id });
    }

    toJson(){
        return {
            id: this.id,
            student_id: this.student_id,
            class_id: this.class_id
        };
    }

    static async saveStudentClass(studentClass, { id }) {
        if (id){
            const studentClassRes = this.getStudentClass(id);

            if (studentClassRes){
                return await studentClassRes.update(
                    studentClass.toJson()
                );
            }
        }

        await StudentClassRepository.create(
            studentClass.toJson()
        );
    };

    static async getStudentClass(id) {
        const student = await StudentClassRepository.findByPk(id);

        if (!student) return null;

        return new StudentClassModel({
            id: studentClass.id,
            title: studentClass.student_id,
            class_id: studentClass.class_id
        })
    };

    static async getStudentClasses(criteria){
        const studentClasses = await StudentClassRepository.findAll(criteria ? {
            where: criteria
        } : undefined);

        return studentClasses.map((studentClass) => new StudentClassModel({
            id: studentClass.id,
            student_id: studentClass.student_id,
            class_id: studentClass.class_id
        }));
    }

    static async deleteStudentClass(id) {
        const title = await this.getStudentClass(id);

        if (title){
            await title.delete();
        }
    };
}

module.exports = StudentClassModel;