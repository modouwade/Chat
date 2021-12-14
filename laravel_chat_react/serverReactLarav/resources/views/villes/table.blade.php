<div class="table-responsive">
    <table class="table" id="villes-table">
        <thead>
            <tr>
                <th>Nom</th>
        <th>Habitants</th>
                <th colspan="3">Action</th>
            </tr>
        </thead>
        <tbody>
        @foreach($villes as $ville)
            <tr>
                <td>{{ $ville->nom }}</td>
            <td>{{ $ville->habitants }}</td>
                <td>
                    {!! Form::open(['route' => ['villes.destroy', $ville->id], 'method' => 'delete']) !!}
                    <div class='btn-group'>
                        <a href="{{ route('villes.show', [$ville->id]) }}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-eye-open"></i></a>
                        <a href="{{ route('villes.edit', [$ville->id]) }}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-edit"></i></a>
                        {!! Form::button('<i class="glyphicon glyphicon-trash"></i>', ['type' => 'submit', 'class' => 'btn btn-danger btn-xs', 'onclick' => "return confirm('Are you sure?')"]) !!}
                    </div>
                    {!! Form::close() !!}
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
</div>
