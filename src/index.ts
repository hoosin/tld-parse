import { extract, updateSuffixes } from './core/tld';
import { isIpAddress } from './utils';
import { parseHostname } from './core/parser';
import ExtractResult from './core/result';
import initialTld from '../data/public_suffix_list.dat';

// Initialize the suffix list immediately for the non-core version
updateSuffixes(initialTld);

/**
 * Extracts domain parts from a single domain string.
 * @param domain The domain string to parse.
 * @returns {IResult | null} The extracted domain parts or null.
 */
function extractSingle(domain: string): ExtractResult | null {
  if (typeof domain !== 'string' || !domain) {
    return null;
  }

  const { hostnameForExtraction, parsedUrlHostname } = parseHostname(domain);

  // For IPv6 addresses in URLs, the hostname might be wrapped in brackets (e.g., http://[::1]/).
  const ipCandidate = parsedUrlHostname.replace(/^\[|\]$/g, '');

  if (isIpAddress(ipCandidate)) {
    return {
      subdomain: '',
      domain: ipCandidate,
      suffix: '',
      isPrivate: false,
    };
  }

  return extract(hostnameForExtraction);
}

// Define the main function with overloads
function tldParse(domain: string): ExtractResult | null;
function tldParse(domain: string[]): (ExtractResult | null)[];
function tldParse(domain: string | string[]): ExtractResult | null | (ExtractResult | null)[] {
  if (Array.isArray(domain)) {
    return domain.map(extractSingle);
  }
  return extractSingle(domain);
}

// Attach the register method to the main function
tldParse.register = (tldData: string) => {
  updateSuffixes(tldData);
};

// Make the result type available to consumers of the library.
export { ExtractResult };

// Export the main function as default
export default tldParse;
