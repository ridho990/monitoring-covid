class wrapperData extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
				<div class="wrapper-list-data flex-row-cst">
					<div class="covid-data">
						<p class="covid-data--title">Total Kasus</p>
						<h4 class="covid-data--total">492.677</h4>
						<p class="covid-data--conclusion">+2584</p>
					</div>
					<div class="covid-data">
						<p class="covid-data--title">Kasus Hari Ini</p>
						<h4 class="covid-data--total">492.677</h4>
						<p class="covid-data--conclusion">Bertambah 2584</p>
					</div>
					<div class="covid-data">
						<p class="covid-data--title">Kematian</p>
						<h4 class="covid-data--total red-color">492.677</h4>
						<p class="covid-data--conclusion">20% Dari Total Kasus</p>
					</div>
					<div class="covid-data">
						<p class="covid-data--title">Kematian Hari Ini</p>
						<h4 class="covid-data--total red-color">492.677</h4>
						<p class="covid-data--conclusion">Bertambah 2584</p>
					</div>
					<div class="covid-data">
						<p class="covid-data--title">Sudah Pulih</p>
						<h4 class="covid-data--total green-color">492.677</h4>
						<p class="covid-data--conclusion">20% Dari Total Kasus</p>
					</div>
					<div class="covid-data">
						<p class="covid-data--title">Pulih Hari Ini</p>
						<h4 class="covid-data--total green-color">492.677</h4>
						<p class="covid-data--conclusion">Bertambah 20</p>
					</div>
					<div class="covid-data">
						<p class="covid-data--title">Kasus Aktif</p>
						<h4 class="covid-data--total">492.677</h4>
						<p class="covid-data--conclusion">20% Dari Total Kasus</p>
					</div>
					<div class="covid-data">
						<p class="covid-data--title">Kasus Kritis</p>
						<h4 class="covid-data--total red-color">492.677</h4>
						<p class="covid-data--conclusion">20% Dari Total Kasus</p>
					</div>
				</div>
        `;
	}
	// render() {
	// 	this.innerHTML = `
	//     <section class="section-covid--data padding-x padding-top-section">
	// 		<div class="wrapper-covid--data">
	// 			<div class="wrapper-titlenparagraf">
	// 				<h2 class="title-section">Data Covid-19 Dunia</h2>
	// 				<p class="paragraf-section">
	// 					Lihat data terbaru tentang jumlah kasus Covid-19 di dunia!
	// 				</p>
	// 			</div>
	// 			<div class="wrapper-search flex-row-cst">
	// 				<input
	// 					type="search"
	// 					name="search"
	// 					id="search"
	// 					placeholder="Nama negara"
	// 				/>
	// 				<button type="submit" id="btn-search">
	// 					<i class="fa-solid fa-magnifying-glass"></i>
	// 				</button>
	// 			</div>
	// 			<div class="wrapper-list-data flex-row-cst">
	// 				<div class="covid-data">
	// 					<p class="covid-data--title">Total Kasus</p>
	// 					<h4 class="covid-data--total">492.677</h4>
	// 					<p class="covid-data--conclusion">+2584</p>
	// 				</div>
	// 				<div class="covid-data">
	// 					<p class="covid-data--title">Kasus Hari Ini</p>
	// 					<h4 class="covid-data--total">492.677</h4>
	// 					<p class="covid-data--conclusion">Bertambah 2584</p>
	// 				</div>
	// 				<div class="covid-data">
	// 					<p class="covid-data--title">Kematian</p>
	// 					<h4 class="covid-data--total red-color">492.677</h4>
	// 					<p class="covid-data--conclusion">20% Dari Total Kasus</p>
	// 				</div>
	// 				<div class="covid-data">
	// 					<p class="covid-data--title">Kematian Hari Ini</p>
	// 					<h4 class="covid-data--total red-color">492.677</h4>
	// 					<p class="covid-data--conclusion">Bertambah 2584</p>
	// 				</div>
	// 				<div class="covid-data">
	// 					<p class="covid-data--title">Sudah Pulih</p>
	// 					<h4 class="covid-data--total green-color">492.677</h4>
	// 					<p class="covid-data--conclusion">20% Dari Total Kasus</p>
	// 				</div>
	// 				<div class="covid-data">
	// 					<p class="covid-data--title">Pulih Hari Ini</p>
	// 					<h4 class="covid-data--total green-color">492.677</h4>
	// 					<p class="covid-data--conclusion">Bertambah 20</p>
	// 				</div>
	// 				<div class="covid-data">
	// 					<p class="covid-data--title">Kasus Aktif</p>
	// 					<h4 class="covid-data--total">492.677</h4>
	// 					<p class="covid-data--conclusion">20% Dari Total Kasus</p>
	// 				</div>
	// 				<div class="covid-data">
	// 					<p class="covid-data--title">Kasus Kritis</p>
	// 					<h4 class="covid-data--total red-color">492.677</h4>
	// 					<p class="covid-data--conclusion">20% Dari Total Kasus</p>
	// 				</div>
	// 			</div>
	// 			<div class="wrapper-country flex-row-cst">
	// 				<img src="./images/id.png" alt="" class="country-img" />
	// 				<p class="country-name">Indonesia</p>
	// 			</div>
	// 		</div>
	// 	</section>
	//     `;
	// }
}

customElements.define("wrapper-data", wrapperData);
