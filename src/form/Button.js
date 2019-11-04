import React from 'react'
import PropTypes from 'prop-types'

export const useButton = () => {

}

export const Button = ({
	children,
	className = '', style = {},
	handleClick = () => { }
}) => (
		<button
			onClick={e => {
				e.preventDefault()
				handleClick(e)
			}}
			className={`field button ${className}`}
			style={style}
		>
			{children}
		</button>
	)

Button.propTypes = {
	children: PropTypes.any.isRequired,
	className: PropTypes.string,
	style: PropTypes.object,
	handleClick: PropTypes.func
}