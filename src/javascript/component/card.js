class cardElement extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
            <div class="p-4 mx-auto shadow-lg w-[30%] rounded-lg mt-10">
                <img
                    src="./images/foto_profil.jpg"
                    alt="Foto Profil"
                    class="w-full aspect-square object-cover object-top rounded-md mb-3"
                />
                <h1 class="font-sans font-semibold text-2xl">Ridho Ahmad Fauzi</h1>
                <p text-pink-500>Hallo Saya adalah manusia</p>
            </div>`;
	}
}

customElements.define("card-element", cardElement);
