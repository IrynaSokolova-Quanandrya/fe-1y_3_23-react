import { Component } from "react";

// let counter = 0

// button.addEventListener('click', (e) => {
// 	counter +=1
// })

export class Counter extends Component {

	state = {
		counter: 0
	}

	 handleClick = (e) => {
		 // this.state.counter += 1 - !!! ПОГАНО
		 
		 //коли потрібно просто перезаписати стейт
		 //  this.setState({counter: 1}) 

		 //коли потрібно змінити стейт від попереднього значення
		 this.setState(prevState=>({counter: prevState.counter+=1}))
	}

	render() {
		return (
			<div className='position-absolute top-50 start-50 translate-middle'>
				<div
					className='card bg-dark text-white '
					style={{ width: '600px' }}
				>
					<div className='card-body'>
						<h5 className='card-title text-center fs-1'>Counter</h5>
						<p
							className='card-text  text-center'
							style={{ fontSize: '80px' }}
						>
							{this.state.counter}
						</p>
						<div className='d-flex justify-content-center px-5'>
							<button onClick={this.handleClick}
								className='btn btn-outline-success me-5'
							>
								<i className='bi bi-plus-circle fs-1'></i>
							</button>
							<button
								className='btn  btn-outline-danger ms-5'
							>
								<i className='bi bi-dash-circle fs-1'></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}