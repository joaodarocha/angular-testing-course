# Angular Testing Course - notes

## Unit Testing

### Jasmine testing framework
#### Introduction
In Jasmine, tests are known as **Specifications**, that why the files end in `*.spec.ts`

Each group of tests (or *specifications*), is called a **Test Suite**. And are defined by the keyword `describe`.
A test (or _specification_) is described by the word `it`.

Each unit test should be divided in 3 phases:
1. Setup phase: 
   * prepare components and services that we want to test
2. Execution Phase:
   * trigger the operation that we want to test
3. Test Assertions Phase:
   * write assertions that are going to fail or be successful
  
#### Debugging tests
Helpful Jasmine methods:
* `pending();` - Marks the test as not yet ready to be run
* `fail();` - Forces the test to fail

#### Mocking dependencies
We should always mock external dependencies of the service/component that we are testing:
* use `jasmine.createSpyObj()` to mock external dependencies
