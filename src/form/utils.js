export const emailValidator = (email) => {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

export const validate = ({ validator, type }, value) => {

	if (validator) {
		return validator(value)
	}

	switch (type) {
		case 'email':
			return emailValidator(value)
	}

	return false
}
