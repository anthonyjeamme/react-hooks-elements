import React from 'react'

const Container = ({ children, className = '', style = {} }) => {
	return (
		<div className={`container ${className}`} style={style}>
			{children}
		</div>
	)
}
export default Container