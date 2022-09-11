const { ClassRepository } = require('../database/repositories');

class ClassModel {
    constructor({
        id,
        max_students,
        schedule,
        duration,
        start_time,
        end_time,
        workout_id,
        instructor_id,
        tutoring_id
    }){
        this.id = id;
        this.max_students = max_students;
        this.schedule = schedule;
        this.duration = duration;
        this.start_time = start_time;
        this.end_time = end_time;
        this.workout_id = workout_id;
        this.instructor_id = instructor_id;
        this.tutoring_id = tutoring_id;
    }

    async save(){
        await ClassModel.saveClass(this, { id: this.id });
    }

    async delete(){
        await ClassModel.deleteClass(this.id);
    }

    toJson(){
        return {
            id: this.id,
            max_students: this.max_students,
            schedule: this.schedule,
            duration: this.duration,
            start_time: this.start_time,
            end_time: this.end_time,
            workout_id: this.workout_id,
            instructor_id: this.instructor_id,
            tutoring_id: this.tutoring_id
        }
    }

    static async saveClass(classe, { id }){
        if (id){
            const classeRes = this.getClass(id);

            if (classeRes){
                return await classeRes.update(
                    classe.toJson()
                );
            }
        }

        await ClassRepository.create(
            classe.toJson()
        );
    }

    static async getClass(id){
        const classe = await ClassRepository.findByPk(id);

        if (!classe) return null;

        return new ClassModel({
            id: classe.id,
            max_students: classe.max_students,
            schedule: classe.schedule,
            duration: classe.duration,
            start_time: classe.start_time,
            end_time: classe.end_time,
            workout_id: classe.workout_id,
            instructor_id: classe.instructor_id,
            tutoring_id: classe.tutoring_id
        });
    }

    static async getClasses(criteria){
        const classes = await ClassRepository.findAll({
            where: criteria
        });

        return classes.map((classe) => new ClassModel({
            id: classe.id,
            max_students: classe.max_students,
            schedule: classe.schedule,
            duration: classe.duration,
            start_time: classe.start_time,
            end_time: classe.end_time,
            workout_id: classe.workout_id,
            instructor_id: classe.instructor_id,
            tutoring_id: classe.tutoring_id
        }));
    }

    static async deleteClass(id){
        const classe = await this.getClass(id);

        if (classe){
            await classe.delete();
        }
    }
}

module.exports = ClassModel;