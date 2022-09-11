const { TitleRepository } = require('../database/repositories');
const InstructorModel = require('./InstructorModel');

class TitleModel {
    constructor({
        id,
        title
    }){
        this.id = id;
        this.title = title;
    }

    async getInstructors() {
        return await InstructorModel.getInstructors({
            title_id: this.id
        });
    };

    async delete(){
        const title = await TitleRepository.findByPk(this.id);

        if (title){
            await title.destroy();
        }
    }

    async save(){
        await TitleModel.saveTitle(this, { id: this.id });
    }

    toJson(){
        return {
            id: this.id,
            title: this.title
        };
    }

    static async saveTitle(title, { id }) {
        if (id){
            const titleRes = this.getTitle(id);

            if (titleRes){
                return await titleRes.update(
                    title.toJson()
                );
            }
        }

        await TitleRepository.create(
            title.toJson()
        );
    };

    static async getTitle(id) {
        const title = await TitleRepository.findByPk(id);

        if (!title) return null;

        return new TitleModel({
            id: title.id,
            title: title.title
        });
    };

    static async getTitles(criteria){
        const titles = await TitleRepository.findAll(criteria ? {
            where: criteria
        } : undefined);

        return titles.map((title) => new TitleModel({
            id: title.id,
            title: title.title
        }));
    }

    static async deleteTitle(id) {
        const title = await this.getTitle(id);

        if (title){
            await title.delete();
        }
    };
}

module.exports = TitleModel;