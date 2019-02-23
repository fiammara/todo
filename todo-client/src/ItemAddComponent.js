import React from 'react';

const ItemAddComponent = (props) => {
    return(
        <div>
            <div className="container col-6 formBody">
				<div className="panel panel-default formPanel">
					<div className="panel-body formPanelBody">
						<form onSubmit={() => props.add}>
							<input type="hidden" name="Id"/>

							<div className="form-group">
								<input type="text" className="form-control" name="name"/>

								
							</div>

							<div className="btn-group align-self-center d-flex justify-content-center formButtons">
								<button onClick={props.cancel} className="btn btn-danger">Return</button>
								<button type="submit" className="btn btn-success">Submit</button>
							</div>
						</form>
					</div>
				</div>
			</div>
        </div>
    )
}

export default ItemAddComponent;