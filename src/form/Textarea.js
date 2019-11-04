import React from 'react'

export const Textarea = ({
	value, handleChange,
	type, isValid,
	className = '', style = {}
}) => (
		<textarea
			className={`field textarea ${className} ${isValid && 'valid'}`}
			style={style}
			value={value}
			type={type}
			onChange={handleChange}
		/>
	)
