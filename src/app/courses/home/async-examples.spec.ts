import { fakeAsync, flush } from '@angular/core/testing';

fdescribe('Async Testing Examples', () => {

  it('Asynchronous test examples with Jasmine done()', (done: DoneFn) => {

    let test = false;

    setTimeout(() => {

      console.log('running assertions');

      test = true;

      expect(test).toBeTruthy();

      done();

    }, 1000);

  });


  it('Asynchronous test example - setTimeout()', fakeAsync(() => {

    let test = false;

    setTimeout(() => {
    });

    setTimeout(() => {

      console.log('running assertions');

      test = true;

      expect(test).toBeTruthy();

    }, 1000);

    flush();

  }));

});
