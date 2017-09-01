let url = "rates.json";

fetch(url)
	.then(response => response.json())
	.then(rates => {
		let html = '';
		rates.forEach(rate => html += 
			`<tr>
				<td>${rate.name}</td>
				<td>${rate.years}</td>
				<td>${rate.rate}%</td>
			 </tr>`);
		let parent = document.createElement("table");
		parent.innerHTML = html;
		document.getElementById("rates").appendChild(parent);
	})
	.catch(e => console.log(e));

	import * as service from './rate-service-mock';

	service.findAll()
	.then(rates => {
		let html = '';
		rates.forEach(rate => html += 
			`<tr>
				<td>${rate.name}</td>
				<td>${rate.years}</td>
				<td>${rate.rate}%</td>
			 </tr>`);
		let parent = document.createElement("table");
		parent.innerHTML = html;
		document.getElementById("rates").appendChild(parent);
	})
	.catch(e => console.log(e));