
import AllProduct from './components/AllProduct.vue';
import CreateProduct from './components/CreateProduct.vue';
import EditProduct from './components/EditProduct.vue';
import Dashboard from './components/backend/dashboard.vue';
import Category from './components/backend/category/index.vue';
import CreateCategory from './components/backend/category/create.vue';
import EditCategory from './components/backend/category/editcategory.vue';

export const routes = [
    
    {
        
        path: '/dashboard',
        component: Dashboard
    },
    {
        path: '/category',
        component: Category
    },
    {   
        name: 'addCategory',
        path: '/category/create',
        component : CreateCategory
    },
    {   name: 'editCategory',
        path: '/category/edit/:id',
        component : EditCategory
    }
    
];