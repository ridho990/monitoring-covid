class countryElement extends HTMLElement {
	set country(data) {
		this._country = data;
		this.render();
	}

	render() {
		this.innerHTML = `
            <div class="wrapper-country flex-row-cst">
					<img src="https://corona.lmao.ninja/assets/img/flags/${this._country[1].toLowerCase()}.png" alt="" class="country-img" />
					<p class="country-name">${this._country[0]}</p>
			</div>
        `;
	}
}

customElements.define("country-element", countryElement);
