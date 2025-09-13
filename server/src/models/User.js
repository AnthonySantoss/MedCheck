//
const user = mongoose.model('user', {
    id: Number,
    name: String,
    email: String,
    senha: String
})