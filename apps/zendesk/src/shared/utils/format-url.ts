export class FormatURL {
  url: string;
  queryEndpointKey: string;

  constructor(url: string) {
    this.url = url;
    this.queryEndpointKey = 'query=';
  }

  updateUrl(url: string) {
    this.url = url;
  }

  getEndpointsAfterQuery() {
    const regExp = new RegExp(this.queryEndpointKey.concat('.+'), 'g');
    const [firstMatch] = this.url.match(regExp) || [''];
    this.updateUrl(firstMatch);
  }

  removeQueryEndpointKey() {
    this.updateUrl(
      this.url.replace(new RegExp(this.queryEndpointKey, 'g'), '')
    );
  }

  decodeUrl() {
    this.updateUrl(decodeURIComponent(this.url));
  }

  removeAmpersand() {
    this.updateUrl(this.url.replace(/&/g, ''));
  }

  removeCharsAfterAmpersand() {
    this.updateUrl(this.url.replace(/&.+/g, ''));
  }

  addSpaces() {
    this.updateUrl(this.url.replace(/\+/g, ' '));
  }
}
