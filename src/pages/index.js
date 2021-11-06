import { motion, AnimatePresence } from "framer-motion";
import style from "../styles/pages/index/index.css";
import Directions from "../components/directions";
import TopNav from "../components/topNav";
import Graphics from "../components/graphics";
import React, { Component } from "react";
import ReactDOM from "react-dom";

class PageOne extends Component {
	constructor(props) {
		super(props);
		this.state =
		{
			title: "Welcome!",
			isLoading: false,
			direction: "Choose one of the following options below. "
		}
	}

	clickHandler() {
		window.location.href = './question.html';
	}

	render() {
		return (
		<div className={style.pageCont}>
			<div className={style.top}>
				<TopNav
					text = {this.state.title}
					// icon = "back"
				/>
			</div>

			<div className={style.bottom}>
				<Directions
					text = {this.state.direction}
				/>

				{/* Graphic */}
				<Graphics
				
				/>
				{/* Create New Button */}
				{/* Join*/}
			</div>



				{/* <div className={style.title}>
					{this.state.title}
				</div>
				<div className={style.subtitle}>click the button below to go to page two</div>

				<button 
					className={style.button}
					onClick={()=>this.clickHandler()}>
					GOTO PAGE TWO
				</button> */}
		</div>
		)
	}
}

ReactDOM.render(<PageOne/>, document.getElementById('pageOne'));