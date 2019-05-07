<?php

namespace Models;

use Illuminate\Database\Eloquent\Model;
class PostModel extends Model
{
  protected $table = 'posts';
  protected $fillable = ['id','title','preview','content'];
}