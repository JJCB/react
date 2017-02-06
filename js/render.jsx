var Saludo = React.createClass({
	getInitialState() {
		return {
			
			txtEtiqueta : this.props.txtEtiqueta,
			txtSaludo : this.props.txtSaludo,
			placeHolderNombre : this.props.placeHolderNombre
		};

	},
	render:function(){
		return (
			<div className="form-group">
				<label htmlFor="exampleInputEmail">{this.props.txtEtiqueta}</label>
				<input type="text" className="form-control" name="txtNombre" placeholder= {this.props.placeHolderNombre}></input>
				<div ref="salidaSaludo">{this.props.txtSaludo}</div>
			</div>)
	}
});
ReactDOM.render(<Saludo/>,document.getElementById("ejemplo")) 
