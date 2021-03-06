<!-- Nom Field -->
<div class="form-group col-sm-6">
    {!! Form::label('nom', 'Nom:') !!}
    {!! Form::text('nom', null, ['class' => 'form-control','maxlength' => 255]) !!}
</div>

<!-- Habitants Field -->
<div class="form-group col-sm-6">
    {!! Form::label('habitants', 'Habitants:') !!}
    {!! Form::number('habitants', null, ['class' => 'form-control']) !!}
</div>

<!-- Submit Field -->
<div class="form-group col-sm-12">
    {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
    <a href="{{ route('villes.index') }}" class="btn btn-default">Cancel</a>
</div>
