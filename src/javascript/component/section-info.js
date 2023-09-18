class sectionInfo extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({ mode: "open" });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowDOM.innerHTML = `
		<style>
			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
			}

			h2 {
				font-size: 2.25rem; /* 36px */
				line-height: 3rem; /* 40px */
				font-weight: 700;
				color: #454F6B;
			}

			p {
				font-weight: 500;
				color: #454F6B;
			}

			.flex-row-cst {
				display: flex;
				flex-direction: row;
			}

			.flex-col-cst {
				display: flex;
				flex-direction: column;
			}

			.padding-x {
				padding-left: 8%;
				padding-right: 8%;
			}

			.padding-top-section {
				padding-top: 5rem;
			}

			.section-info {
				justify-content: space-between;
			}

			.section-info--content {
				width: 45%;
				justify-content: center;
			}

			.section-info-img__mobile {
				width: 45%;
				display: none;
			}

			.section-info-img__mobile img {
				width: 100%;
			}

			.section-info-img {
				align-items: center;
				width: 45%;
			}

			.section-info-img img {
				width: 100%;
			}

			.section-info-title {
				margin-bottom: 1rem;
			}

			.section-info-paragraf {
				line-height: 1.725rem;
			}

			@media only screen and (max-width: 1025px) {
				h2 {
					font-size: 1.602rem;
				}

				.section-info--content {
					width: 50%;
				}
			}

			@media only screen and (max-width: 767px) {
				.section-info {
					padding-top: 3rem;
				}

				.section-info--content {
					width: 100%;
				}

				.section-info-img__mobile {
					display: block;
					margin-bottom: 1.2rem;
					width: 100%;
				}

				.section-info-img {
					display: none;
				}
			}
		</style>

		<section class="section-info padding-x flex-row-cst padding-top-section">
			<div class="section-info-img flex-row-cst">
				<img src="./images/covid-dunia.svg" alt="covid-dunia" />
			</div>
			<div class="section-info--content flex-col-cst">
				<h2 class="section-info-title">Dari Wuhan ke Pandemi Global</h2>
				<div class="section-info-img__mobile">
					<img src="./images/covid-dunia.svg" alt="covid-dunia" />
				</div>
				<p class="section-info-paragraf">
					COVID-19 adalah penyakit menular yang disebabkan oleh jenis
					coronavirus yang baru ditemukan. Virus baru dan penyakit yang
					disebabkannya ini tidak dikenal sebelum mulainya wabah di Wuhan,
					Tiongkok, bulan Desember 2019. COVID-19 ini sekarang menjadi sebuah
					pandemi yang terjadi di banyak negara di seluruh dunia.
				</p>
			</div>
		</section>
		`;
	}
}

customElements.define("section-info", sectionInfo);
