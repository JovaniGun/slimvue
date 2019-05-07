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
  public function create(Request $request, Response $response, $args){
    
    try{
      $values = $request->getParsedBody();
      $preview = mb_substr($values["content"],0,232);
      $post = new PostModel();
      $post->title = $values["title"];
      $post->preview = $preview."...";
      $post->content = $values["content"];
      $post->save();
      return $response->withJson($values,  201);
    }
    catch(\Exception $err)
    {
      return $response->withJson(["error"=>$err],  500);
    }
  }
  public function get(Request $request, Response $response, $args){
    $id = $args['id'];
    $post = PostModel::find($id);
    return $response->withJson($post, 201);
  }
  public function delete(Request $request, Response $response, $args){
    $id = $args['id'];
    $post = PostModel::find($id);
    $post->delete();
    $posts = PostModel::all();
    return $response->withJson($posts, 201);
  }
}