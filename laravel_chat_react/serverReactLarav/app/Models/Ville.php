<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Ville
 * @package App\Models
 * @version April 23, 2020, 11:50 pm UTC
 *
 * @property string nom
 * @property integer habitants
 */
class Ville extends Model
{
    use SoftDeletes;

    public $table = 'villes';
    

    protected $dates = ['deleted_at'];



    public $fillable = [
        'nom',
        'habitants'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'nom' => 'string',
        'habitants' => 'integer'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'nom' => 'required|max:255',
        'habitants' => 'required|numeric'
    ];

    
}
