import axios from 'axios'

export const getBlogsList = async (params: any) => {
	try {
		const response = axios.get("https://5f55a98f39221c00167fb11a.mockapi.io/blogs", { params })
		return response
	} catch (error) {
		console.log('error :>> ', error);
	}
}
