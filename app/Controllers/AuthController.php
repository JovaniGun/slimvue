<?php

namespace Controllers;

use Slim\Http\Request;
use Slim\Http\Response;
use Models\UserModel;

class AuthController{
  public function login(Request $request, Response $response, $args){
    $post = $request->getParsedBody();
    $email = $post['email'];
    $password = $post['password'];
    $user = UserModel::where('email',$email)->get()->first();
    return $response->withJson($user, 201);
  }
}