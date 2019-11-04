import React, { useState, useEffect } from 'react'
import { Button, FormLine } from '../form'

export const useModal = (params) => {

	const [open, setOpen] = useState(false)

	const _params = {
		lockScrollBar: false,
		...params
	}

	const toggleOpen = () => {
		setOpen(!open)
	}

	const openModal = () => {
		setOpen(true)
	}

	const closeModal = () => {
		setOpen(false)
	}

	return {
		open, toggleOpen, setOpen,
		openModal, closeModal, canClose: true,
		..._params
	}
}

export const useConfirmationModal = (onConfirm = () => { }, params) => {

	const modal = useModal()
	const _params = {
		canClose: true,
		yesText: 'yes',
		noText: 'no',
		...params
	}

	const confirm = () => {

		modal.setOpen(false)
		onConfirm(true)
	}

	const deny = () => {

		modal.setOpen(false)
		onConfirm(false)
	}

	return {
		...modal,
		confirm, deny,
		canClose: _params.canClose,
		..._params
	}
}

const modalStyle = {
	root: open => ({
		display: open ? 'flex' : 'none',
		position: 'fixed',
		left: 0, top: 0, right: 0, bottom: 0,
		flexDirection: 'column', justifyContent: 'center',
		alignItems: 'center',
		zIndex: 10000,
	}),
	overlay: {
		position: 'fixed',
		left: 0, top: 0, right: 0, bottom: 0,
	},
	body: {
		zIndex: 10001
	}
}

export const Modal = ({
	open, toggleOpen, setOpen,
	openModal, closeModal,
	children, canClose,
	lockScrollBar
}) => {

	useEffect(() => {

		if (lockScrollBar) {

			document.body.style.overflow = open ? 'hidden' : 'auto'
		}
	}, [open])

	return (
		<div className={`modal`} style={modalStyle.root(open)}>
			<div
				className='modal-overlay'
				style={modalStyle.overlay}
				onClick={canClose ? closeModal : null}
				onContextMenu={e => { e.preventDefault(); if (canClose) closeModal() }}
			/>
			<div className='modal-body' style={modalStyle.body}>
				{children}
			</div>
		</div>
	)
}


export const ConfirmationModal = (props) => (
	<Modal {...props}>

		<div className='confirmation-modal-details'>
			{props.children}
		</div>

		<FormLine>

			<Button
				style={{ flex: 1 }}
				handleClick={props.confirm}
			>
				{props.yesText}
			</Button>
			<Button
				style={{ flex: 1 }}
				handleClick={props.deny}
			>
				{props.noText}
			</Button>

		</FormLine>
	</Modal>
)