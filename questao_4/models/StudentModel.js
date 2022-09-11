const { StudentRepository } = require('../database/repositories');

class StudentModel {
    constructor({
        enrollment,
        enrollment_date,
        name,
        address,
        phone,
        birthdate,
        height,
        weight
    }){
        this.enrollment = enrollment;
        this.enrollment_date = enrollment_date;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.birthdate = birthdate;
        this.height = height;
        this.weight = weight;
    }

    async save(){
        await StudentModel.saveStudent(this, { id: this.id });
    }

    async delete(){
        await StudentModel.deleteStudent(this.id);
    }

    toJson(){
        return {
            enrollment: this.enrollment,
            enrollment_date: this.enrollment_date,
            name: this.name,
            address: this.address,
            phone: this.phone,
            birthdate: this.birthdate,
            height: this.height,
            weight: this.weight
        }
    }

    static async saveStudent(student, { id }){
        if (id){
            const studentRes = this.getStudent(id);

            if (studentRes){
                return await studentRes.update(
                    student.toJson()
                );
            }
        }

        await StudentRepository.create(
            student.toJson()
        );
    }

    static async getStudent(id){
        const student = await StudentRepository.findByPk(id);

        if (!student) return null;

        return new StudentModel({
            enrollment: student.enrollment,
            enrollment_date: student.enrollment_date,
            name: student.name,
            address: student.address,
            phone: student.phone,
            birthdate: student.birthdate,
            height: student.height,
            weight: student.weight
        });
    }

    static async getStudents(criteria){
        const students = await StudentRepository.findAll({
            where: criteria
        });

        return students.map((student) => new StudentModel({
            enrollment: student.enrollment,
            enrollment_date: student.enrollment_date,
            name: student.name,
            address: student.address,
            phone: student.phone,
            birthdate: student.birthdate,
            height: student.height,
            weight: student.weight
        }));
    }

    static async deleteStudent(id){
        const student = await this.getStudent(id);

        if (student){
            await student.delete();
        }
    }
}

module.exports = StudentModel;