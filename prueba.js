const res =await fetch("https://api.spacexdata.com/v5/launches/query",{
	method:"POST",
	headers:{
		"Content-type":"application/json",
	},
	body:JSON.stringify({
		query: {},
		options:{
			sort:{
				date_unix:'asc'
			},
			 limit:12,
		}
	})
});
const data = JSON.stringify(await res.json());
console.log(data);