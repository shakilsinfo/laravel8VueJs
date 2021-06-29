import Axios from 'axios';
export default{
	state:{
		categoryList: []
	},
	getters:{
		categoryList(state){
			return state.categoryList;
		}
	},
	actions:{
		getCategoryList(context){
			Axios.get('/api/category').then((response)=>{
				context.commit('categoryList',response.data.categoryList);
			})
		}
	},
	mutations:{
		categoryList(state,responseData){
			return state.categoryList = responseData;
		}
	}
	
}