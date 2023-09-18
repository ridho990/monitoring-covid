class searchBar extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	set clickEvent(event) {
		this._clickEvent = event;
		this.render();
	}

	get value() {
		const inputValue = this.querySelector("#search").value.replace(/\s+/g, "-");
		return inputValue.toLowerCase();
	}

	render() {
		this.innerHTML = `
	        <div class="wrapper-search flex-row-cst">
					<input
						type="search"
						name="search"
						id="search"
						placeholder="Nama negara (En)"
					/>
					<button type="submit" id="btn-search">
						<i class="fa-solid fa-magnifying-glass"></i>
					</button>
			</div>
        `;

		this.querySelector("#btn-search").addEventListener(
			"click",
			this._clickEvent
		);
	}
}

customElements.define("search-bar", searchBar);
