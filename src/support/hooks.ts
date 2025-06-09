import { Before, After } from '@cucumber/cucumber';
import { CustomWorld } from './custom-world';
import { setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(30000);
Before(async function (this: CustomWorld) {
  await this.init();
});

After(async function (this: CustomWorld) {
  await this.close();
});
