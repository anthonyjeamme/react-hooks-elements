import React from 'react'
import PropTypes from 'prop-types'

export const Icon = ({ category = 's', name = 'question', style = {}, className = '' }) => (
	<i className={`icon fa${category} fa-${name} ${className}`} style={style} />
)

Icon.propTypes = {
	name: PropTypes.string.isRequired
}
