import mongoose from "mongoose";
import { Entity } from "../interfaces/Entity";

export class BaseRepository<T extends Entity>{

    private _model: mongoose.Model<T>;

    constructor(schemaModel: mongoose.Model<T>) {
        this._model = schemaModel
    }

    async create(item: T) {
        await this._model.create(item);
    }

    async update( item: T) {
        await this._model.updateOne({ _id:item.id }, item);
    }

    async getOne(id: number) {
        return await this._model.findById(id);
    }

    async getAll() {
        return await this._model.find();
    }

    async delete(id: number) {
        this._model.deleteOne({ _id: id });
    }

}

