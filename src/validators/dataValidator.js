import { getIcon, getViewBox } from '../assets/icons';
import React, { Component } from 'react';


export const validateProp = (prop) => {
	if(prop != undefined) return true
	else return false	
}

export const fixedIcons = (i, cStyle, style) => {
	return (
		<svg className={style[cStyle]} viewBox={getViewBox(i)} xmlns="http://www.w3.org/2000/svg">
		{getIcon(i)}
		</svg>
	)	
}

export const clickHandler = (e, props) => {
	try {
		props.click(e)
	} catch (error) {
		console.log(error)
	}
}

export const clickValidator = (props, route) => {
	try {
		props[route]()
	} catch (error) {
		console.log(error)		
	}
}