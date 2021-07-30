import 'mocha';

import { expect } from 'chai';
import { HomeController } from '../../controller/home';

describe('HomeController', () => {
  it('should give back `Home`', () => {
    let service = new HomeController();

    expect(service.get()).to.equal('Home');
  });
});
