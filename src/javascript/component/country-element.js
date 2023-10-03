class countryElement extends HTMLElement {
	set country(data) {
		this._country = data;
		this.render();
	}

	render() {
		const date = new Date();
		const options = {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
		};
		const formattedDate = date.toLocaleDateString("id-ID", options);

		this.innerHTML = `
            <div class="wrapper-country flex-row-cst">
					<img src="https://disease.sh/assets/img/flags/${this._country[1].toLowerCase()}.png" alt="" class="country-img" />
					<p class="country-name">${this._country[0]} | ${formattedDate}</p>
			</div>
        `;
	}
}

customElements.define("country-element", countryElement);
