const { bcrypt } = require("../../")

exports.hashedValue = async (text_to_be_hashed) => {
    let saltRounds = 10
    return await bcrypt.hash(text_to_be_hashed, saltRounds)
}