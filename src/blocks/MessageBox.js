import React, { useState } from 'react'

export const useMessageBox = () => {

	const [open, setOpen] = useState(true)

	return [
		open, setOpen
	]
}

export const FreeMessageBox = ({ children, color = 'gray' }) => {

	const [open, setOpen] = useState(true)

	const closeMessageBox = () => {
		setOpen(false)
	}

	if (!open) return null

	return (
		<div className={`message-box background-${color}`}>

			<span className='closeButton' onClick={closeMessageBox}>
				<i className="fas fa-times" />
			</span>

			{children}
		</div>
	)
}

export const MessageBox = ({ children, color = 'gray', open, setOpen }) => {

	const closeMessageBox = () => {
		setOpen(false)
	}

	if (!open) return null

	return (
		<div className={`message-box background-${color}`}>

			<span className='closeButton' onClick={closeMessageBox}>
				<i className="fas fa-times" />
			</span>

			{children}
		</div>
	)
}