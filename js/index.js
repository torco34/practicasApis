const API_URL = "http://jsonplaceholder.typicode.com";
const xhr = new XMLHttpRequest();

function onRequestHandler() {
	if (this.readyState === 4 && this.status === 200) {
		// 0 = UNSET,no se ha llamado al metodo open
		// 1 = OPENED, se ha llamado al metodo open
		// 2 = HEADERS_RECEIVED, se esta llamando al metodo send()
		// 3 = LOADING, esta cargando, es decir, esta recibiendo la respuesta
		// 4 = DONE, se ha completado la operacion
		const data = JSON.parse(this.response);
		const HTML = document.querySelector("#app");
	}
}
xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${API_URL}/ users`);
xhr.send();
