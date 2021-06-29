<template>
	<div>
	
            
            <div class="page-breadcrumb border-bottom">
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-xs-12 justify-content-start d-flex align-items-center">
                        <h5 class="font-medium text-uppercase mb-0">Category List</h5>
                    </div>
                    <div class="col-lg-9 col-md-8 col-xs-12 d-flex justify-content-start justify-content-md-end align-self-center">
                        <nav aria-label="breadcrumb" class="mt-2">
                            <ol class="breadcrumb mb-0 p-0">
                                <li class="breadcrumb-item"><router-link to="/dashboard">Home</router-link></li>
                                <li class="breadcrumb-item active" aria-current="page">Category List</li>
                            </ol>
                        </nav>
                        
                    </div>
                </div>
            </div>
            
            <div class="page-content container-fluid">
                
                <div class="row justify-content-center">
                    <div class="col-7">
                        <div class="card">
                            <div class="card-header">
                                <div class="col-6">
                                    <h4 clas="card-title">Category List</h4>
                                </div>
                                <div class="col-6 pull-right">
                                    <div class="text-right">
                                        <router-link class="btn btn-success btn-sm text-white ml-3 d-none d-md-block btn-right" to='category/create'>Add Category</router-link>
                                    </div>
                                </div>
                                
                                
                                
                            </div>
                            
                            <div class="card-body">
                                
                                <table class="tablesaw  table-hover table no-wrap">
                                        <thead>
                                            <tr>
                                                <th scope="col">Id</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Icon</th>
                                                <th scope="col">Banner</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        
                                            <tr v-for="(categoryList,index) in getCategoryList" :key="categoryList.id">
                                                <th scope="row">{{index+1}}</th>
                                                <td>{{categoryList.name}}</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                                <td>
                                                	<div class="btn-group" role="group">
								                        <router-link :to="{name: 'editCategory', params: { id: categoryList.id }}" class="btn btn-sm btn-success"><i class="fas fa-pencil-alt"></i></router-link>
								                        <button class="btn btn-sm btn-danger" @click="deleteCategory(categoryList.id)"><i class="fa fa-trash"></i></button>
								                    </div>
                                                </td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
      
	
	</div>
</template>
<script>
    export default {
      
        mounted(){
            this.$store.dispatch('getCategoryList')
        },
        computed:{
            getCategoryList(){
               return this.$store.getters.categoryList
            }
        },
     

      methods: {
       deleteCategory(id){
        axios.delete(`api/category/${id}`).then((response)=>{
            this.$store.dispatch('getCategoryList')
            Toast.fire({
              icon: 'success',
              title: 'Category Deleted successfully'
            })
        })
       } 
      }
    }
</script>

<style></style>