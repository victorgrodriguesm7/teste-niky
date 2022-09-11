const { PhoneRepository } = require('../database/repositories');

class PhoneModel {
    constructor({
        id,
        phone,
        instructor_id
    }){
        this.id = id;
        this.phone = phone;
        this.instructor_id = instructor_id
    }

    async getInstructor() {};

    async delete(){
        const phone = await PhoneRepository.findByPk(this.id);

        if (phone){
            await phone.destroy();
        }
    }

    async save(){
        await PhoneModel.savePhone(this, { id: this.id });
    }

    toJson(){
        return {
            id: this.id,
            phone: this.phone,
            instructor_id: this.instructor_id
        };
    }

    static async savePhone(phone,{ id }) {
        if (id){
            const phoneRes = this.getPhone(id);

            if (phoneRes){
                return await phoneRes.update(
                    phone.toJson()
                );
            }
        }

        await PhoneRepository.create(
            phone.toJson()
        );
    };

    static async getPhones(criteria){
        const phones = await PhoneRepository.findAll({
            where: criteria
        });

        return phones.map((phone) => new PhoneModel({
            id: phone.id,
            phone: phone.phone,
            instructor_id: phone.instructor_id
        }));
    }

    static async getPhone(id) {
        const phone = await PhoneRepository.findByPk(id);

        if (!phone) return null;

        return new PhoneModel(
            phone.id,
            phone.phone,
            phone.instructor_id
        );
    };

    static async deletePhone(id) {
        const phone = await this.getPhone(id);

        if (phone){
            await phone.delete();
        }
    };
}

module.exports = PhoneModel;