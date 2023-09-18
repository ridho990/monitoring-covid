import "../component/wrapper-data.js";
import dataCovid from "../data/data-covid.js";

const main = () => {
	const searchElement = document.querySelector("search-bar");
	const countryElement = document.querySelector("country-element");

	const getDataCovid = async () => {
		try {
			let keySearch = searchElement.value;
			if (searchElement.value == "") {
				keySearch = "indonesia";
			}
			const result = await dataCovid.searchDataCovid(keySearch);
			console.log(result.countryInfo._id);
			renderCountry([result.country, result.countryInfo.iso2]);
		} catch (message) {
			// alert(message);
			console.log(message);
		}
	};

	const renderCountry = (data) => {
		countryElement.country = data;
	};

	// document.addEventListener("DOMContentLoaded", getDataCovid);
	getDataCovid();
	searchElement.clickEvent = getDataCovid;
};
export default main;
