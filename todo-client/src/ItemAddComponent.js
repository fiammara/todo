import React, { Component } from 'react';
import axios from 'axios';

class ItemAddComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [{
				name: '',

			}],
		}
	}

	handleChangeFor = (property) => (event) => {
		this.setState({ [property]: event.target.value });
	}

	addItem = event => {
		event.preventDefault();

		const newItem = {
			name: this.state.name,

		}

		axios.post("http://localhost:8080/api/todos/addTodo", newItem).then(window.location.replace('/todos'))
	}

	render() {
		return (

			<div>
				<br />
				<br />
				<br />
				<br />

				<div className="container col-6 formBody">
					<div className="panel panel-default formPanel">
						<div className="panel-body formPanelBody">
							<form>
								<div className="form-group">

									<input
										type="text"
										className="form-control"
										name="holderName"
										value={this.name}
										onChange={this.handleChangeFor("name")}
									/>

								</div>

								<div className="btn-group align-self-center d-flex justify-content-center formButtons">
									<button onClick={this.props.onCloseModal} className="btn btn-danger">Cancel</button>
									<button onClick={this.addItem} className="btn btn-success">OK</button>
								</div>
							</form>
						</div>
					</div>
				</div>

				<br />
				<br />
			</div>
		)
	}
}


export default ItemAddComponent;