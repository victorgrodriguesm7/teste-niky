const { InstructorRepository } = require('../database/repositories');

class InstructorModel {
    constructor({
        id,
        rg,
        name,
        birthdate,
        title_id
    }){
        this.id = id
        this.rg = rg
        this.name = name
        this.birthdate = birthdate
        this.title_id = title_id
    }

    getPhones(){
        
    }

    toJson(){
        return {
            id: this.id,
            rg: this.rg,
            name: this.name,
            birthdate: this.birthdate,
            title_id: this.title_id
        };
    }

    async delete(){
        const instructor = await InstructorRepository.findByPk(this.id);

        if (instructor){
            await instructor.destroy();
        }
    }

    async save(){
        await InstructorModel.saveInstructor(this, { id: this.id });
    }

    static async saveInstructor(instructor,{ id }) {
        if (id){
            const instructorRes = this.getInstructor(id);

            if (instructorRes){
                return await instructorRes.update(
                    instructor.toJson()
                );
            }
        }

        await InstructorRepository.create(
            instructor.toJson()
        );
    };

    static async getInstructor(id) {
        const instructor = await InstructorRepository.findByPk(id);
        
        if (!instructor) return null;

        return new InstructorModel({
            id: instructor.id,
            rg: instructor.rg,
            name: instructor.name,
            birthdate: instructor.birthdate,
            title_id: instructor.title_id
        });
    };

    static async getInstructors(criteria){
        const instructors = await InstructorRepository.findAll(criteria ? {
            where: criteria
        } : undefined);

        return instructors.map((instructor) => new InstructorModel({
            id: instructor.id,
            rg: instructor.rg,
            name: instructor.name,
            birthdate: instructor.birthdate,
            title_id: instructor.title_id
        }));
    }

    static async deleteInstructor(id) {
        const instructor = await this.getInstructor(id);

        if (instructor){
            await instructor.delete();
        }
    };
}

module.exports = InstructorModel;