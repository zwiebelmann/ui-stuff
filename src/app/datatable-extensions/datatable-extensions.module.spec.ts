import { DatatableExtensionsModule } from './datatable-extensions.module';

describe('DatatableExtensionsModule', () => {
  let datatableExtensionsModule: DatatableExtensionsModule;

  beforeEach(() => {
    datatableExtensionsModule = new DatatableExtensionsModule();
  });

  it('should create an instance', () => {
    expect(datatableExtensionsModule).toBeTruthy();
  });
});
