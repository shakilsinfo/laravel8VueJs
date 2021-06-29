<template>
	<div>    
        <div class="page-breadcrumb border-bottom">
            <div class="row">
                <div class="col-lg-3 col-md-4 col-xs-12 justify-content-start d-flex align-items-center">
                    <h5 class="font-medium text-uppercase mb-0">Category Create</h5>
                </div>
                <div class="col-lg-9 col-md-8 col-xs-12 d-flex justify-content-start justify-content-md-end align-self-center">
                    <nav aria-label="breadcrumb" class="mt-2">
                        <ol class="breadcrumb mb-0 p-0">
                            <li class="breadcrumb-item"><router-link to="/dashboard">Home</router-link></li>
                            <li class="breadcrumb-item active" aria-current="page">Category</li>
                        </ol>
                    </nav>
                    <router-link to='/category' class="btn btn-info btn-sm text-white d-none d-md-block">Category List</router-link>
                </div>
            </div>
        </div>
        
        <div class="page-content container-fluid">
            <div class="row justify-content-center">
                <div class="col-6">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Add category from here</h4>
                            </h6>
                        </div>
                        <hr>
                        <form class="form-horizontal" @submit.prevent="addCategory">
                            <div class="card-body">
                                <div class="form-group row">
                                    <label for="fname" class="col-sm-3 text-right control-label col-form-label">Category Name</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" v-model="category.name" placeholder="category name">
                                    </div>
                                </div>
                                
                            </div>
                            <hr>
                            
                            <div class="card-body">
                                <div class="form-group mb-0 text-right">
                                    <button type="submit" class="btn btn-info waves-effect waves-light">Save</button>
                                </div>
                            </div>
                        </form>
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
                category: {}
            }
        },
        methods: {
            addCategory() {
                this.axios
                    .post('http://127.0.0.1:8000/api/category', this.category)
                    .then(response => (
                        this.$router.back()
                    ))
                    .catch(err => console.log(err))
                    .finally(() => this.loading = false)
            }
        }
    }
</script>

<style></style>