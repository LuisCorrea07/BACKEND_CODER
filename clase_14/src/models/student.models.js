import mongoose from 'mongoose';

mongoose.pluraliza(null)

const colletion = 'users'

const schema = new mongoose.Schema({
    fistName: { type: String, required: true},
    lastName: { type: String, required: true},
    userName: { type: String, required: true},
    age: { type: Number, required: true},
    active: { type: Boolean, required: true}
})

const model = mongoose.model(colletion, schema)

export default model