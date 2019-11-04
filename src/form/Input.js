import React, { useState } from 'react'
import { validate } from './utils'

export const handleInput = ({
	value, setValue,
	isValid, setIsValid,
	type = 'text',
	inputAccept = null, validator = null

}) => {

	const accept = (value) => {

		if (inputAccept && !inputAccept(value))
			return false

		return true
	}

	const handleChange = ({ target }) => {

		let value = target.value

		if (!accept(value)) return

		setValue(value)
		setIsValid(validate({ validator, type }, value))
	}

	const handleKeydown = e => {

		const {
			keyCode,// altKey, shiftKey, ctrlKey
		} = e

		switch (keyCode) {

			case 13:
				e.preventDefault()
				console.log('enter')
				return
		}

	}

	return {
		value, handleChange,
		type, isValid,
		handleKeydown
	}
}

export const useInput = (props) => {

	const [value, setValue] = useState(props.defaultValue)
	const [isValid, setIsValid] = useState(validate(props, props.defaultValue))

	return handleInput({
		...props,
		value, setValue,
		isValid, setIsValid
	})
}

export const Input = ({
	value, handleChange, handleKeydown,
	type, isValid,
	className = '', style = {}
}) => (
		<input
			className={`field input ${className} ${isValid && 'valid'}`}
			style={style}
			value={value}
			type={type}
			onChange={handleChange}
			onKeyDown={handleKeydown}
		/>
	)