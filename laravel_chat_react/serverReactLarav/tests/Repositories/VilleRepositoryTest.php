<?php namespace Tests\Repositories;

use App\Models\Ville;
use App\Repositories\VilleRepository;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Tests\ApiTestTrait;

class VilleRepositoryTest extends TestCase
{
    use ApiTestTrait, DatabaseTransactions;

    /**
     * @var VilleRepository
     */
    protected $villeRepo;

    public function setUp() : void
    {
        parent::setUp();
        $this->villeRepo = \App::make(VilleRepository::class);
    }

    /**
     * @test create
     */
    public function test_create_ville()
    {
        $ville = factory(Ville::class)->make()->toArray();

        $createdVille = $this->villeRepo->create($ville);

        $createdVille = $createdVille->toArray();
        $this->assertArrayHasKey('id', $createdVille);
        $this->assertNotNull($createdVille['id'], 'Created Ville must have id specified');
        $this->assertNotNull(Ville::find($createdVille['id']), 'Ville with given id must be in DB');
        $this->assertModelData($ville, $createdVille);
    }

    /**
     * @test read
     */
    public function test_read_ville()
    {
        $ville = factory(Ville::class)->create();

        $dbVille = $this->villeRepo->find($ville->id);

        $dbVille = $dbVille->toArray();
        $this->assertModelData($ville->toArray(), $dbVille);
    }

    /**
     * @test update
     */
    public function test_update_ville()
    {
        $ville = factory(Ville::class)->create();
        $fakeVille = factory(Ville::class)->make()->toArray();

        $updatedVille = $this->villeRepo->update($fakeVille, $ville->id);

        $this->assertModelData($fakeVille, $updatedVille->toArray());
        $dbVille = $this->villeRepo->find($ville->id);
        $this->assertModelData($fakeVille, $dbVille->toArray());
    }

    /**
     * @test delete
     */
    public function test_delete_ville()
    {
        $ville = factory(Ville::class)->create();

        $resp = $this->villeRepo->delete($ville->id);

        $this->assertTrue($resp);
        $this->assertNull(Ville::find($ville->id), 'Ville should not exist in DB');
    }
}
