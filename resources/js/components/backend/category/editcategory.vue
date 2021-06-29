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
                            <h4 class="card-title">Update Category</h4>
                            </h6>
                        </div>
                        <hr>
                        <form class="form-horizontal" @submit.prevent="updateCategory">
                            <div class="card-body">
                                <div class="form-group row">
                                    <label for="fname" class="col-sm-3 text-right control-label col-form-label">Category Name</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" v-model="form.name" placeholder="category name" name="name">
                                        <div v-if="form.errors.has('name')" v-html="form.errors.get('name')" />
                                    </div>
                                </div>
                                
                            </div>
                            <hr>
                            
                            <div class="card-body">
                                <div class="form-group mb-0 text-right">
                                    <button type="submit" class="btn btn-info btn-sm waves-effect waves-light" :disabled="form.busy">Save</button>

                                    <button @click='backToUrl' class="btn btn-danger btn-sm waves-effect waves-light" :disabled="form.busy">Backs</button>

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
        mounted(){
                axios.get(`api/category/${this.$route.params.id}`)
                .then((res) => {
                    this.form.fill(res.data);
                });
            },
        data(){
            return {

                form: new Form({
                  name: ''
                })
            }
          },

      methods: {
        async updateCategory () {
          const response = await this.form.put(`/api/category/${this.$route.params.id}`)
                .then((response)=>{
                    this.$router.push('/category');
                    Toast.fire({
                      icon: 'success',
                      title: 'Category Updated successfully'
                    })
                }).catch(err => console.log(err))
                    .finally(() => this.loading = false)
          // ...
        },
        backToUrl(){
            this.$router.push('/category');
        }
      }
    }
</script>

<style></style>