import React, { Component } from "react";
import ReactDOM from "react-dom";
import style from "./index.css";

class PageOne extends Component {
	constructor(props) {
		super(props);
		this.state =
		{}
	}

	clickHandler() {
		window.location.href = './page2.html';
	}

	render() {
		return (
			<div className={style.pageCont}>
				<div className={style.title}>react multi page</div>
				<div className={style.subtitle}>click the button below to go to page two</div>

				<button 
					className={style.button}
					onClick={()=>this.clickHandler()}>
					GOTO PAGE TWO
				</button>
			</div>
		)
	}
}

ReactDOM.render(<PageOne/>, document.getElementById('pageOne'));