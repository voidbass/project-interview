import axios from 'axios'

export async function getBlogsList(params: any) {
	try {
		const response = axios.get("https://5f55a98f39221c00167fb11a.mockapi.io/blogs", { params })
		return response
	} catch (error) {
		console.log('error :>> ', error);
	}
}

export async function getBlogDetail(id: string | number) {
	try {
		const response = axios.get(`https://5f55a98f39221c00167fb11a.mockapi.io/blogs/${id}`)
		return response
	} catch (error) {
		console.log('error :>> ', error);
	}
}
