Cppcheck Your Code
===

### Introduction
The purpose of this talk is to offer a concise view of program analysis, especially static program analysis, using Cppcheck as a tool. In order to accomplish this goal, we have structured the presentation as follows: section 2 describes the levels at which a program analysis can be performed; section 3  further details program analysis and possible approaches in performing it; section 4 presents Cppcheck, both from an architectural and practical standpoints, while in section 5 we conclude.

### Presentation
* [Detailed presentation is available here](https://docs.google.com/document/d/1jp3S_OWK9ShcKTnZFw57tMaT4-I5ZZAUeNsCyADN-4g/edit)
* [Slides are available here](https://docs.google.com/presentation/d/1XSpmvrk9W-sevYUNxFEf9g6Ps3Ta7DUJYNs1isw8_4k/edit)


### Code
* Tests
  * `test1.cpp`: The purpose of this file is to provide an example of a simple out of bounds * * error. Array A has a size of ten elements, but the indexing starts at zero. So, in the for loop, when we try to index the array in the last iteration (i.e., with ten), the checker will determine that an out of bounds error happens.
  * `test2.cpp`:  The purpose of this file is to provide an example of a simple uninitialized variable error. Variables a and b are not initialized by default before passing them as argument to the printSum function. As such, the checker will determine and uninitialized variable error for both a and b.
  * `test3.cpp`:  This example build on the previous one in order to provide an example of a unused function and variable errors. Here, variable x is declared but never used. The same situation is true for the function compouteDouble.
  * `test4.cpp`:  This is an example where the checkers do not detect that a buffer overflow is possible. Moreover, we would like the checker do detect that the from buffer is uninitialized.
  * `test5.cpp`: We augment the previous example with a configuration file that will restrict us to using initialized memory. Moreover. we will not be able to use NULL parameters as arguments to copyMemory.
  * `test6.cpp`:  In this example, the checkers alert us that we mus free the buffer after we are done using it. When we have user defined functions we have situations were we would like to specify the valid range for certain arguments. In order to achieve this, we will use a configuration file.
  * `test7.cpp`: In this example, we see the detection of a redundant conditional expression. In correlation with `test7rules.xml`
* Configurations
  * `test1-reportings.xml`
  * `test5.cfg`: This is a configuration file that can be seeded as input to the checkers in order to verify that certain function are compliant with the semantics we define for the here (e.g., non-null parameters, initialized parameters, etc.).
  * `test6.cfg`: Idem.
* Reportings
  * `*.txt` files contain output results
* Template
  * How to format the output

