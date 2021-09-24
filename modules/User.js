const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    age: String,
    pass: {
        type: String,
        select: false
    }
}, {
    timestamps: true
});

userSchema.pre("save", function() {
    this.name = this.name.toUpperCase();
});

userSchema.methods.getName = function() {
    return this.name;
}

module.exports = mongoose.model("user", userSchema);