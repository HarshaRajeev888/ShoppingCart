import { ProductEntry } from './product-entry';

describe('ProductEntry', () => {
  it('should create an instance', () => {
    expect(new ProductEntry("","","","","")).toBeTruthy();
  });
});
