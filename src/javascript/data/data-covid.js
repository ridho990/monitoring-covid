class dataCovid {
	static searchDataCovid(keyword) {
		return fetch(`https://corona.lmao.ninja/v2/countries/${keyword}`)
			.then((response) => {
				return response.json();
			})
			.then((responseJson) => {
				if (responseJson.country) {
					return Promise.resolve(responseJson);
				} else {
					return Promise.reject(`${responseJson.message}`);
				}
			});
	}
}

export default dataCovid;
