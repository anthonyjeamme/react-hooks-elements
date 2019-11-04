import React, { useState } from 'react'
import { handleInput } from './Input'

export const useForm = (data) => {

	const [values, setValues] = useState(valuesFromData(data))

	function valuesFromData(data) {

		const values = {}

		Object.keys(data).forEach(dataKey => {

			values[dataKey] = data[dataKey].defaultValue ? data[dataKey].defaultValue : ''
		})

		return values
	}

	const fields = Object.keys(values).map(valueKey => {

		const value = values[valueKey]

		const setValue = value => {
			setValues({
				...values,
				[valueKey]: value
			})
		}

		const isValid = false
		const setIsValid = e => { }

		return handleInput({
			value, setValue,
			isValid, setIsValid
		})
	})

	const getField = name => {

		if (!(name in values)) {

			console.error(`Can't find ${name} field`)
			return {
				style: { backgroundColor: 'red', defaultValue: `Can't find ${name} field` }
			}
		}
		const value = values[name]


		const setValue = value => {
			setValues({
				...values,
				[name]: value
			})
		}

		const isValid = false
		const setIsValid = () => { }

		return handleInput({
			value, setValue,
			isValid, setIsValid
		})

	}

	const handleSubmit = e => {

		e.preventDefault()
		console.log('ici')
	}

	return {
		fields, values,
		getField,
		handleSubmit
	}
}

export const Form = ({ children, handleSubmit }) => (
	<form onSubmit={handleSubmit}>
		{children}
	</form>
)

export const FormLine = ({ children, style = {}, className = '', fullWidth = false }) => (
	<div
		className={`form-line ${className} ${fullWidth ? 'fullwidth' : ''}`}
		style={style}
	>
		{children}
	</div>
)

export const Label = ({ children }) => (
	<label className={`field label`}>
		{children}
	</label>
)
