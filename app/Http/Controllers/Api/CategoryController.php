<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categoryList = Category::all();
        return response()->json(['categoryList'=>$categoryList],200);      
    }

    public function store(Request $request)
    {   
        $this->catFormValidate($request);

        
        $category = new Category();
        $category->name = $request->name;
        $category->save();

        return ['status' => 'success'];
    }

    public function show($id)
    {
        $category = Category::find($id);
        return response()->json($category);
    }
    
    public function update($id, Request $request)
    {
        
        $category = Category::find($id);
        $category->update($request->all());

        return response()->json('Category updated!');
    }

    public function destroy($id)
    {
        $category = Category::find($id);
        $category->delete();

        return response()->json('Category deleted!');
    }

    public function catFormValidate($request){
        $this->validate($request,[
            'name' => 'required'
        ]);
    }
}
