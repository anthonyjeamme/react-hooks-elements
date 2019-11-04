import React from 'react'

export const Fullscreen = ({ children }) => (
	<div
		style={{
			minHeight: '100vh',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
		}}
		className={`fullscreen`}
	>
		{children}
	</div>
)

export const FullscreenBody = ({ children, style = {}, className = '' }) => (
	<div
		className={className}
		style={{ margin: 'auto', ...style }}
	>
		{children}
	</div>
)
