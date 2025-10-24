import { extract } from './core/tld';
import { isIpAddress } from './utils/isIpAddress';
import { parseHostname } from './core/parser';
import ExtractResult from './core/result';



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

/**
 * Extracts the subdomain, domain, and suffix from a given domain string or an array of domain strings.
 * Handles domain names, URLs, and IP addresses.
 *
 * @param {string | string[]} domain - The domain string or array of strings to parse.
 * @returns {ExtractResult | null | (ExtractResult | null)[]} The parsed domain parts.
 */
export default function tldParse(domain: string): ExtractResult | null;
export default function tldParse(domain: string[]): (ExtractResult | null)[];
export default function tldParse(domain: string | string[]): ExtractResult | null | (ExtractResult | null)[] {
  if (Array.isArray(domain)) {
    return domain.map(extractSingle);
  }
  return extractSingle(domain);
}
// Make the result type available to consumers of the library.
export { ExtractResult }
