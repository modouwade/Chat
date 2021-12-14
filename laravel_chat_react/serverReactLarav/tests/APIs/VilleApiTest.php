<?php namespace Tests\APIs;

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Tests\ApiTestTrait;
use App\Models\Ville;

class VilleApiTest extends TestCase
{
    use ApiTestTrait, WithoutMiddleware, DatabaseTransactions;

    /**
     * @test
     */
    public function test_create_ville()
    {
        $ville = factory(Ville::class)->make()->toArray();

        $this->response = $this->json(
            'POST',
            '/api/villes', $ville
        );

        $this->assertApiResponse($ville);
    }

    /**
     * @test
     */
    public function test_read_ville()
    {
        $ville = factory(Ville::class)->create();

        $this->response = $this->json(
            'GET',
            '/api/villes/'.$ville->id
        );

        $this->assertApiResponse($ville->toArray());
    }

    /**
     * @test
     */
    public function test_update_ville()
    {
        $ville = factory(Ville::class)->create();
        $editedVille = factory(Ville::class)->make()->toArray();

        $this->response = $this->json(
            'PUT',
            '/api/villes/'.$ville->id,
            $editedVille
        );

        $this->assertApiResponse($editedVille);
    }

    /**
     * @test
     */
    public function test_delete_ville()
    {
        $ville = factory(Ville::class)->create();

        $this->response = $this->json(
            'DELETE',
             '/api/villes/'.$ville->id
         );

        $this->assertApiSuccess();
        $this->response = $this->json(
            'GET',
            '/api/villes/'.$ville->id
        );

        $this->response->assertStatus(404);
    }
}
