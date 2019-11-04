import React, { useState, createContext, useContext, useEffect, useRef } from 'react'

var uniqid = require('uniqid')

const NotificationContext = createContext({ push: () => { } })

const Notification = ({ notification }) => {

	const ref = useRef(null)

	useEffect(() => {

		setTimeout(() => {
			ref.current.classList.add('fadeOut')
		}, 4500)


	}, [])

	return (
		<div className='notification' ref={ref}>
			{notification.text}
		</div>
	)
}

export const NotificationSystem = ({
	children, params
}) => {

	const [notifications, setNotifications] = useState([])

	const push = (_) => {

		const notification = {
			id: uniqid(),
			..._
		}

		setNotifications([
			notification,
			...notifications
		])

		setTimeout(() => {
			setNotifications(
				notifications =>
					notifications.filter(({ id }) => id !== notification.id)
			)
		}, 5000)
	}

	return (
		<NotificationContext.Provider value={{ push }}>

			<div className='notifications'>
				{
					notifications.map(notification => (
						<Notification notification={notification} key={notification.id} />
					))
				}
			</div>

			{children}
		</NotificationContext.Provider>)
}

export const withNotificationSystem = (Component, params = null) => () => (
	<NotificationSystem params={params}>
		<Component />
	</NotificationSystem>
)

export const useNotification = () => {
	const context = useContext(NotificationContext)

	const push = () => {
		context.push({
			text: uniqid()
		})
	}

	return {
		push
	}
}