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
                        <router-link class="btn btn-success btn-sm text-white ml-3 d-none d-md-block" to='category/create'>Add Category</router-link>
                    </div>
                </div>
            </div>
            
            <div class="page-content container-fluid">
                
                <div class="row justify-content-center">
                    <div class="col-7">
                        <div class="card">
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
                                        
                                            <tr v-for="category in categoryList" :key="category.id">
                                                <th scope="row">{{category.id}}</th>
                                                <td>{{category.name}}</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                                <td>
                                                	<div class="btn-group" role="group">
								                        <router-link :to="{name: 'editCategory', params: { id: category.id }}" class="btn btn-sm btn-success"><i class="fas fa-pencil-alt"></i></router-link>
								                        <button class="btn btn-sm btn-danger" @click="deleteCategory(category.id)"><i class="fa fa-trash"></i></button>
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
        data() {
            return {
                categoryList: []
            }
        },
        created() {
            this.axios
                .get('http://127.0.0.1:8000/api/category')
                .then(response => {
                    this.categoryList = response.data;
                });
        },
        methods: {
            deleteCategory(id) { 
                this.axios
                    .delete(`http://127.0.0.1:8000/api/category/${id}`)
                    .then(response => {
                        let dC = this.category.map(data => data.id).indexOf(id);
                        this.category.splice(dC, 1);
                        this.$router.push('/category');
                        Toast.fire({
                          icon: 'danger',
                          title: 'Data Delete Successfully'
                        });
                    });
            }
        }
    }
</script>

<style></style>