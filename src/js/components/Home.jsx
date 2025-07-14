import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {

	const [todos, setTodos] = useState([]);
	const [textoInput, setTextoInput] = useState("");
	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			e.preventDefault()
			const texto = textoInput
			if (!texto) return
			setTodos(prev => [...prev, { id: Date.now(), texto }]);
			setTextoInput("");
		};
	};

	const handleDelete = (id) => {
		setTodos(previo => previo.filter(todo => todo.id !== id))
	}



	return (
		<><div style={{
				width: '80%',
				height: '200px',
				backgroundImage: 'url("https://luismarin.eu/wp-content/uploads/2024/11/Encabezado-FEDER_Hacienda_POS.jpg")',
				backgroundSize: 'cover',
				backgroundPosition: 'center'
			}} aria-label="Encabezado Hacienda - FEDER">
			</div>
			<p className="d-flex flex-column align-items-center gap-2">“En contestación al documento con referencia [indicar referencia], pongo a disposición factura(s) y justificante(s) de pago correspondientes, a fin de cumplir con los requerimientos de la Agencia Tributaria.”</p>
			<div className="vh-100 d-flex flex-column align-items-center gap-2">
				<form className="d-flex flex-column align-items-center gap-2  w-50" role="search">
					<input className="w-50"
						 type="text"
						placeholder="Nueva tarea"
						value={textoInput}
                        onChange={e => setTextoInput(e.target.value)}
                        onKeyDown={handleKeyPress}
					/>
					{todos.length === 0 ? (<p className="text-center">No hay contestacion, añadir constentacion y pulsar Enter.</p>) :
						(<ul className="list-group">
							{todos.map(todo => (
								<li key={todo.id}>{todo.texto}
									<button
										className="delete-btn"
										onClick={() => handleDelete(todo.id)}>❌</button>
								</li>
							))}
						</ul>)}
				</form>
			</div>

		</>
	);
};

export default Home;