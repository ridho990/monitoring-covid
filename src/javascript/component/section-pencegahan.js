class sectionPencegahan extends HTMLElement {
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

            h5 {
                font-size: 1.125rem;
                line-height: 2rem;
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

            .wrapper-titlenparagraf {
                text-align: center;
                margin-bottom: 3rem;
            }

            .title-section {
                margin-bottom: 0.5rem;
            }

			.padding-top-section {
				padding-top: 5rem;
			}

			.wrapper-card--pencegahan {
                gap: 2rem;
            }

            .card-pencegahan {
                flex: 1;
                padding: 2rem 1.2rem;
                text-align: center;
                box-shadow: 0px 0px 44px -5px rgba(102, 102, 102, 0.1);
                border-radius: 0.7rem;
                -webkit-border-radius: 0.7rem;
                -moz-border-radius: 0.7rem;
                -ms-border-radius: 0.7rem;
                -o-border-radius: 0.7rem;
            }

            .card-pencegahan--img img {
                height: 14rem;
                margin: 0 auto;
            }

            .card-pencegahan--title {
                margin: 1.2rem 0 0.6rem;
            }

			@media only screen and (max-width: 1025px) {
				h2 {
					font-size: 1.602rem;
				}

                h5 {
                        font-size: 1.125rem;
                }

                .wrapper-card--pencegahan {
                    flex-wrap: wrap;
                }

                .card-pencegahan {
                    flex-basis: 40%;
                }
			}

			@media only screen and (max-width: 640px) {
                .card-pencegahan {
                    flex-basis: 100%;
                }
			}
		</style>

        <section class="section-pencegahan padding-x padding-top-section">
			<div class="wrapper-titlenparagraf">
				<h2 class="title-section">Pencegahan Covid-19</h2>
				<p class="paragraf-section">
					Covid-19 bisa dicegah, dengan menerapkan protokol kesehatan berikut!
				</p>
			</div>
			<div class="wrapper-card--pencegahan flex-row-cst">
				<div class="card-pencegahan">
					<div class="card-pencegahan--img">
						<img src="./images/wear-mask.svg" alt="Gunakan Masker" />
					</div>
					<div class="card-pencegahan--content">
						<h5 class="card-pencegahan--title">Gunakan Masker</h5>
						<p class="card-pencegahan--paragraf">
							Mencegah penyebaran virus dari orang yang mengenakannya kepada
							orang lain.
						</p>
					</div>
				</div>
				<div class="card-pencegahan">
					<div class="card-pencegahan--img">
						<img src="./images/wash-hand.svg" alt="Cuci Tangan" />
					</div>
					<div class="card-pencegahan--content">
						<h5 class="card-pencegahan--title">Cuci Tangan</h5>
						<p class="card-pencegahan--paragraf">
							Cuci tangan Anda dengan sabun dan air, atau hand sanitizer
							berbasis alkohol.
						</p>
					</div>
				</div>
				<div class="card-pencegahan">
					<div class="card-pencegahan--img">
						<img src="./images/physical-distancing.svg" alt="Jaga Jarak Aman" />
					</div>
					<div class="card-pencegahan--content">
						<h5 class="card-pencegahan--title">Physical Distancing</h5>
						<p class="card-pencegahan--paragraf">
							Jaga jarak aman, terutama dari seseorang yang sedang batuk atau
							bersin.
						</p>
					</div>
				</div>
			</div>
		</section>
		`;
	}
}

customElements.define("section-pencegahan", sectionPencegahan);
