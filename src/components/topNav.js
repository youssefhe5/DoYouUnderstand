import { fixedIcons, validateProp } from "../validators/dataValidator";
import style from "../styles/components/topNav/topNav.css";
import { motion, AnimatePresence } from "framer-motion";
import React, { Component } from 'react';

export default class TopNav extends Component {
	constructor(props) {
		super(props);
		this.state = 
		{}
	}

	render () {
		return (
			<motion.div 
				transition={{ duration: .25, ease: "easeInOut" }}
				animate={{ opacity: 1 , scale: 1}}
				initial={{ opacity: 0, scale: 1}}
				exit={{ opacity: 0, scale: 0}}
				className={style.topNavCont}
			>
					{/* ICON */}
					<AnimatePresence>{validateProp(this.props.icon) && (
					<div className={style.iconCont}>
						{fixedIcons(this.props.icon, "icon", style)}
					</div>
					)}</AnimatePresence>

					{/* TEXT */}
					<AnimatePresence>{validateProp(this.props.text) && (
					<div className={style.title}>
						{this.props.text}
					</div>
					)}</AnimatePresence>

			</motion.div>
		)
	}		
}