const yup = require("./settings");

const schemaSignUp = yup.object().shape({
	name: yup.string(),
	email: yup.string().email(),
	password: yup.string().min(5),
});

module.exports = schemaSignUp;
