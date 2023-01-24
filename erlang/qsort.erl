-module(qsort).

-export([qsort/1]).

qsort([]) -> [];
qsort([Pivot|Rest]) ->
    qsort([Smaller || Smaller <- Rest, Smaller < Pivot])
    ++ [Pivot] ++
    qsort([GreaterOrEqual || GreaterOrEqual <- Rest, GreaterOrEqual >= Pivot]).