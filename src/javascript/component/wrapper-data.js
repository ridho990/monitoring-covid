class wrapperData extends HTMLElement {
	percentage(numerator, denominator) {
		const newNumerator = Number(numerator.replaceAll(".", ""));
		const newDenominator = Number(denominator.replaceAll(".", ""));
		return ((newNumerator / newDenominator) * 100).toFixed(2);
	}

	set data(data) {
		this._data = data;
		this.render();
	}

	set message(message) {
		this._message = message;
		this.renderMessage();
	}

	render() {
		const cases = this._data.cases.toLocaleString("id-ID");
		const todayCases = this._data.todayCases.toLocaleString("id-ID");
		const deaths = this._data.deaths.toLocaleString("id-ID");
		const todayDaath = this._data.todayDeaths.toLocaleString("id-ID");
		const recovered = this._data.recovered.toLocaleString("id-ID");
		const todayRecovered = this._data.todayRecovered.toLocaleString("id-ID");
		const active = this._data.active.toLocaleString("id-ID");
		const critical = this._data.critical.toLocaleString("id-ID");
		this.innerHTML = `
				<div class="wrapper-list-data flex-row-cst">
					<div class="covid-data">
						<p class="covid-data--title">Total Kasus</p>
						<h4 class="covid-data--total">${cases}</h4>
						<p class="covid-data--conclusion">+${todayCases}</p>
					</div>
					<div class="covid-data">
						<p class="covid-data--title">Kasus Hari Ini</p>
						<h4 class="covid-data--total">${todayCases}</h4>
						<p class="covid-data--conclusion">Bertambah ${todayCases}</p>
					</div>
					<div class="covid-data">
						<p class="covid-data--title">Kematian</p>
						<h4 class="covid-data--total red-color">${deaths}</h4>
						<p class="covid-data--conclusion">${this.percentage(
							deaths,
							cases
						)}% Dari Total Kasus</p>
					</div>
					<div class="covid-data">
						<p class="covid-data--title">Kematian Hari Ini</p>
						<h4 class="covid-data--total red-color">${todayDaath}</h4>
						<p class="covid-data--conclusion">Bertambah ${todayDaath}</p>
					</div>
					<div class="covid-data">
						<p class="covid-data--title">Sudah Pulih</p>
						<h4 class="covid-data--total green-color">${recovered}</h4>
						<p class="covid-data--conclusion">${this.percentage(
							recovered,
							cases
						)}% Dari Total Kasus</p>
					</div>
					<div class="covid-data">
						<p class="covid-data--title">Pulih Hari Ini</p>
						<h4 class="covid-data--total green-color">${todayRecovered}</h4>
						<p class="covid-data--conclusion">${this.percentage(
							todayRecovered,
							active
						)}% Dari Kasus Aktif</p>
					</div>
					<div class="covid-data">
						<p class="covid-data--title">Kasus Aktif</p>
						<h4 class="covid-data--total">${active}</h4>
						<p class="covid-data--conclusion">${this.percentage(
							active,
							cases
						)}% Dari Total Kasus</p>
					</div>
					<div class="covid-data">
						<p class="covid-data--title">Kasus Kritis</p>
						<h4 class="covid-data--total red-color">${critical}</h4>
						<p class="covid-data--conclusion">${this.percentage(
							critical,
							active
						)}% Dari Kasus Aktif</p>
					</div>
				</div>
        `;
	}

	renderMessage() {
		this.innerHTML = `<p class="error-message">${this._message} or search in English</p>`;
	}
}

customElements.define("wrapper-data", wrapperData);
