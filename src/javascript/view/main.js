import "../component/wrapper-data.js";
import dataCovid from "../data/data-covid.js";

const main = () => {
	const searchElement = document.querySelector("search-bar");
	const countryElement = document.querySelector("country-element");
	const dataElement = document.querySelector("wrapper-data");

	const getDataCovid = async () => {
		try {
			let keySearch = searchElement.value;
			if (searchElement.value == "") {
				keySearch = "indonesia";
			}
			const result = await dataCovid.searchDataCovid(keySearch);
			renderData(result);
			renderCountry([result.country, result.countryInfo.iso2]);
		} catch (message) {
			renderMessage(message);
		}
	};

	const renderCountry = (data) => {
		countryElement.country = data;
	};

	const renderData = (data) => {
		dataElement.data = data;
	};

	const renderMessage = (message) => {
		dataElement.message = message;
	};

	// document.addEventListener("DOMContentLoaded", getDataCovid);
	getDataCovid();
	searchElement.clickEvent = getDataCovid;
};
export default main;
