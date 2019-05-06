<?php

namespace Models;

use Illuminate\Database\Eloquent\Model;
class UserModel extends Model
{
  protected $table = 'user';
    protected $fillable = ['id','name','email','password','token'];
}