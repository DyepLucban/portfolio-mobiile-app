import { apiProvider } from './provider';

export class ApiCore {
  constructor(options) {
    if (options.browse) {
      this.browse = () => {
        return apiProvider.browse(options.url);
      };
    }

    if (options.browseSpecific) {
      this.browseSpecific = (id) => {
        return apiProvider.browseSpecific(options.url, id);
      };
    }

    if (options.post) {
      this.post = (model) => {
        return apiProvider.post(options.url, model);
      };
    }

    if (options.put) {
      this.put = (model) => {
        return apiProvider.put(options.url, model);
      };
    }

    if (options.patch) {
      this.patch = (model) => {
        return apiProvider.patch(options.url, model);
      };
    }

    if (options.remove) {
      this.remove = (id) => {
        return apiProvider.remove(options.url, id);
      };
    }
  }
}