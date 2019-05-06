<?php

namespace Controllers;

use Slim\Http\Request;
use Slim\Http\Response;
use Models\PostModel;

class PostController{

  public function index(Request $request, Response $response, $args){
    $posts = PostModel::all();
    return $response->withJson($posts, 201);
  }
  public function delete(Request $request, Response $response, $args){
    $id = $args['id'];
    $post = PostModel::find($id);
    $post->delete();
    $posts = PostModel::all();
    return $response->withJson($posts, 201);
  }
}