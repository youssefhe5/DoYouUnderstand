import { validateProp } from "../validators/dataValidator";
import style from "../styles/components/Button/Button.css";
import { motion, AnimatePresence } from "framer-motion";
import React, { Component } from 'react';

export default class Button extends Component {
	constructor(props) {
		super(props);
		this.state = 
		{}
	}

getColor(Color){
    switch (Color) {
        case "Blue": //Blue color
            return "BlueButton"
        break;
        
        case "Red": //Red Color
			return "RedButton"
        break; 
    
        default:
            break;
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

			<div className={style[this.getColor(this.props.Color)]}>
            {this.props.Button} 
			</div>

          {/* {this.props.Color} */}
			{this.props.Join}

			</motion.div>
		)
	}		
}