<?php

namespace App\Repositories;

use App\Models\Ville;
use InfyOm\Generator\Common\BaseRepository;

/**
 * Class VilleRepository
 * @package App\Repositories
 * @version April 23, 2020, 11:50 pm UTC
 *
 * @method Ville findWithoutFail($id, $columns = ['*'])
 * @method Ville find($id, $columns = ['*'])
 * @method Ville first($columns = ['*'])
*/
class VilleRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'nom',
        'habitants'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Ville::class;
    }
}
