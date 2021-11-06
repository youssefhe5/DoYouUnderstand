import { getGFX } from "../assets/graphics";
import { validateProp } from "../validators/dataValidator";
import style from "../styles/components/graphics/graphics.css";
import { motion, AnimatePresence } from "framer-motion";
import React, { Component } from 'react';

export default class Graphics extends Component {
	constructor(props) {
		super(props);
		this.state = 
		{

		}
	}

	render () {
		return (
			<motion.div 
				transition={{ duration: .25, ease: "easeInOut" }}
				animate={{ opacity: 1 , scale: 1}}
				initial={{ opacity: 0, scale: 1}}
				exit={{ opacity: 0, scale: 0}}
				className={style.comp}
			>	
				<img src = {getGFX(this.props.image)} className={style.pinkbooks}></img>
				
				
			</motion.div>
		)
	}		
}