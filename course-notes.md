# Angular Testing Course - notes

## Unit Testing

### Jasmine testing framework

#### Introduction

In Jasmine, tests are known as **Specifications**, that why the files end in `*.spec.ts`

Each group of tests (or *specifications*), is called a **Test Suite**. And are defined by the keyword `describe`. A
test (or _specification_) is described by the word `it`.

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
* `xdescribe()` / `xit()` => **disables** tests
* `fdescribe()` / `fit()` => **focus** only this test

### Angular Service Testing

#### Mocking dependencies

We should always mock external dependencies of the service/component that we are testing:

* use `jasmine.createSpyObj()` to mock external dependencies

#### HTTP testing

Use `httpTestingController` to mock HTTP calls. <br>For example:

```typescript
// Mock HTTP request
const mockRequest = httpTestingController.expectOne('/api/courses/12');

expect(mockRequest.request.method).toEqual('GET');

// Trigger the mock HTTP request and sets the response payload
mockRequest.flush(COURSES[12]);

// Or trigger the response with an error
mockRequest.flush('Save course failed', {
  status: 500,
  statusText: 'Internal Server Error'
});
```

### Angular Component Testing

#### Setup

We only need to `import` the Module where the `component` is declared.

#### Utilities

`ComponentFixture` - utility type that brings a lot of features that we need to test a component <br>
`fixture.debugElement` - utility to query the DOM element and debug the component <br>
`fixture.detectChanges()` - synchronously updates the DOM <br>
`NoopAnimationsModule` - When we need to test a component that has Angular Material components with animations

### Asynchronous Testing

#### Jamsmine done()

We can pass the paramaters `done: DoneFn` and use it to tell the runner where our tests finishes by calling `done()`
. <br>
Example:

```typescript
 it('Asynchronous test examples with Jasmine done()', (done: DoneFn) => {

  let test = false;

  setTimeout(() => {

    test = true;

    expect(test).toBeTruthy();

    done();

  }, 1000);

});
```

#### Angular's zoneJS `fakeAsync() + tick()`

We can use `fakeAsync()` to mark our test as having asynchronous calls, and then use `tick()` to simulate the passing of
time.

Example:

```typescript
  it('Asynchronous test example - setTimeout()', fakeAsync(() => {

  let test = false;

  setTimeout(() => {

    test = true;


  }, 1000);

  tick(1000);

  expect(test).toBeTruthy();

}));
```

#### Angular's zoneJS `fakeAsync() + flush()`
We can use `flush()` to force the test to run all asynchronous code that was pending. 

Example:
```typescript
it('Asynchronous test example - setTimeout()', fakeAsync(() => {

    let test = false;

    setTimeout(() => {});

    setTimeout(() => {

      test = true;

      expect(test).toBeTruthy();

    }, 1000);

    flush();

  }));
```
