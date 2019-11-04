import React, { useState } from 'react'
var uniqid = require('uniqid')

export const useRadio = (name = uniqid('')) => {

	const [value, setValue] = useState(null)

	const getField = (_value) => {

		return {
			name,
			checked: _value === value,
			handleChange: () => {
				console.log(_value, value)
				setValue(_value)
			}
		}
	}

	return {
		value, setValue,
		getField
	}
}

export const Radio = ({ name, checked, handleChange }) => (
	<input
		className={`radio`}
		type='radio'
		name={name}
		checked={checked}
		onChange={handleChange}
	/>
)
