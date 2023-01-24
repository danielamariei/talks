-module(factorialServiceProvider).

-export([startFactorialService/0, factorialService/0]).

startFactorialService() ->
    Pid = spawn(factorialServiceProvider, factorialService, []),
    register(factorialService, Pid).

    
factorialService() ->
    receive
        {From, N} -> From ! {self(), fac(N)},
                     io:format("Received request from process: ~w~n", [From]),
                     factorialService()
    end.                 
    
    
fac(0) -> 1;
fac(N) when N > 0 -> N * fac(N-1).