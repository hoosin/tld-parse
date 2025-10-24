/**
 * @interface ExtractResult
 * @description Represents the result of a domain extraction operation.
 */
export default interface ExtractResult {
  /**
   * The subdomain part of the domain.
   * e.g., for 'www.google.com', it is 'www'.
   * @type {string}
   */
  subdomain: string;

  /**
   * The main domain part (Second-Level Domain).
   * e.g., for 'www.google.com', it is 'google'.
   * @type {string}
   */
  domain: string;

  /**
   * The suffix or Top-Level Domain (TLD).
   * e.g., for 'www.google.com', it is 'com'.
   * @type {string}
   */
  suffix: string;

  /**
   * Indicates if the domain is under a private TLD according to the Public Suffix List.
   * @type {boolean}
   */
  isPrivate: boolean;
}
