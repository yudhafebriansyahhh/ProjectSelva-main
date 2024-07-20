<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
    public function index()
    {
        return inertia('Landing/index');
    }

    public function detail_product(){
        return inertia('Landing/ProductDetail');
    }
}