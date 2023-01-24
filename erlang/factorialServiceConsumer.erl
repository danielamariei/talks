-module(factorialServiceConsumer).

-export([factorial/1, startFactorialRequests/2]).

    
factorial(N) ->
    factorialService ! {self(), N},
    
    receive
        {From, Result} -> 
            io:format("Received response from ~w: factorial(~w)= ~w~n", [From, N, Result])
    end.                 
    
startFactorialRequests(1, N) -> spawn(factorialServiceConsumer, factorial, [N]), ok;
startFactorialRequests(M, N) when M > 1 -> spawn(factorialServiceConsumer, factorial, [N]), startFactorialRequests(M-1, N). 
    