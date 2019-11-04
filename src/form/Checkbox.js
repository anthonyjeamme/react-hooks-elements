import React, { useState } from 'react'

export const useCheckbox = ({ defaultValue = false }) => {
	const [value, setValue] = useState(defaultValue)

	const handleToggle = () => {
		setValue(!value)
	}

	return {
		value, handleToggle
	}
}

export const Checkbox = ({ value, handleToggle }) => (
	<input type='checkbox' className="checkbox" checked={value} onChange={handleToggle} />
)
