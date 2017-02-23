
<div class="col-md-3 col-md-offset-1">
    <div class="panel panel-default">
        <div class="panel-heading">
            Użytkownik
            
            @if ($user->id === Auth::id())
                <a href="{{ url('/users/' . $user->id . '/edit') }}" class="pull-right"><small>Edytuj</small></a>
            @endif
        </div>

        <div class="panel-body text-center">

            <img src="{{ url('user-avatar/'. $user->id . '/250') }}" alt="" class="thumbnail img-responsive">
            <h2><a href="{{ url('/users/' . $user->id) }}">{{ $user->name }}</a></h2>
            <p>
            @if ($user->sex == 'm')
                Mężczyzna
            @else
                Kobieta
            @endif
            </p>
            <p>{{ $user->email }}</p>

            @if (Auth::check() && $user->id !== Auth::id())
                
                @if ( ! friendship($user->id)->exists && ! friendship($user->id)->accepted)

                    <form method="POST" action="{{ url('/friends/' . $user->id ) }}">
                        {{ csrf_field() }}
                        <button class="btn btn-success">Zaproś do znajomych</button>
                    </form>
                
                @elseif (friendship($user->id)->exists && ! friendship($user->id)->accepted)

                    <button class="btn btn-success disabled">Zaprosznie wysłane</button>

                @endif


            @endif

        </div>
    </div>
</div>
