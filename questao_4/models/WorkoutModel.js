const { WorkoutRepository } = require('../database/repositories');

class WorkoutModel {
    constructor({
        id,
        type
    }){
        this.id = id;
        this.type = type;
    }

    async delete(){
        await WorkoutModel.deleteWorkout(this.id);
    }

    async save(){
        await WorkoutModel.saveWorkout(this, { id: this.id });
    }

    toJson(){
        return {
            id: this.id,
            type: this.type
        };
    }

    static async saveWorkout(workout, { id }) {
        if (id){
            const workoutRes = this.getWorkout(id);

            if (workoutRes){
                return await workoutRes.update(
                    workout.toJson()
                );
            }
        }

        await WorkoutRepository.create(
            workout.toJson()
        );
    };

    static async getWorkout(id) {
        const workout = await WorkoutRepository.findByPk(id);

        if (!workout) return null;

        return new WorkoutModel({
            id: workout.id,
            type: workout.type
        });
    };

    static async getWorkouts(criteria){
        const workout = await WorkoutRepository.findAll(criteria ? {
            where: criteria
        } : undefined);

        return workout.map((workout) => new WorkoutModel({
            id: workout.id,
            type: workout.type
        }));
    }

    static async deleteWorkout(id) {
        const workout = await this.getWorkout(id);

        if (workout){
            await workout.delete();
        }
    };
}

module.exports = WorkoutModel;