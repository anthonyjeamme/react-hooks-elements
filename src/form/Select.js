import React, { useState } from 'react'
import { handleInput } from './Input'
import { validate } from './utils'

export const useSelect = (props) => {

	const [value, setValue] = useState(props.defaultValue)
	const [isValid, setIsValid] = useState(validate(props, props.defaultValue))

	return {
		...handleInput({
			...props,
			value, setValue,
			isValid, setIsValid
		}),
		options: props.options
	}
}

export const Select = ({ value, handleChange, options, className = '', style = {} }) => (
	<select
		className={`field select ${className}`}
		style={style}
		value={value}
		onChange={handleChange}
	>
		{
			options.map(option => (
				<option key={option.value} value={option.value}>{option.name}</option>
			))
		}
	</select>
)