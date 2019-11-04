import React, { useState } from 'react'

import './DropDown.scss'

export const DropDownItem = ({ children }) => (
	<div className='dropdown-item'>
		{children}
	</div>
)

const style = {
	Root: {
		position: 'relative',
		display: 'inline-block'
	},
	Button: {
		display: 'block',
		boxSizing: 'border-box'
	},
	List: {
		position: 'absolute',
		left: 0,
		top: '100%',
		minWidth: '100%',
		boxSizing: 'border-box'
	}
}

export const ClickDropDown = ({ children, title }) => {

	const [open, setOpen] = useState(false)

	const toggleDropDown = () => {
		setOpen(!open)
	}

	return (
		<div
			className={`dropdown ${open ? 'active' : ''}`}
			style={style.Root}
			onClick={e => { e.stopPropagation() }}
		>

			<span className='dropdown-button' style={style.Button} onClick={toggleDropDown}>
				{title}
			</span>

			<div className='dropdown-list' style={style.List}>
				{children}
			</div>
		</div>
	)
}

export const DropDown = ({ children, title }) => (

	<div className='dropdown hoverable' style={style.Root}>

		<span className='dropdown-button' style={style.Button}>
			{title}
		</span>

		<div className='dropdown-list' style={style.List}>
			{children}
		</div>
	</div>
)


{/* <span className={`field dropdown overabledropdown`} style={style.DropDown}
>
	<span>

		dropdown
		{' '}
		<i className="fas fa-caret-down" />
	</span>

	<div className="list" style={style.List}>
		{children}
	</div>
</span> */}