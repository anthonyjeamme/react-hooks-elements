import React, { useState } from 'react'

export const useProgress = (defaultValue = 0) => {

	const [value, setValue] = useState(defaultValue)

	return {
		value, setValue
	}
}

const style = {
	Root: {
		position: 'relative',
		overflow: 'hidden'
	},
	Value: {
		height: '100%'
	}
}

export const ProgressBar = ({ value }) => {
	return (
		<div className="progress-bar" style={style.Root}>
			<div className="progress-bar-value" style={{
				...style.Value,
				width: `${Math.round(value * 100)}%`
			}} />
		</div>
	)
}
