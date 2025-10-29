import { Suffixes } from './suffixes';
import IExtractResult from './result';

let suffixes = new Suffixes('');

/**
 * Updates the suffix data used by the parser.
 * @param {string} tldData - The new suffix data string.
 */
export function updateSuffixes(tldData: string) {
  suffixes = new Suffixes(tldData);
}

/**
 * Finds the longest matching rule for a given domain.
 * @param {string[]} domainParts - The parts of the domain, split by '.'.
 * @returns {{ suffix: string; rule: string } | null} The found match or null.
 */
function findLongestMatch(domainParts: string[]): { suffix: string; rule: string } | null {
  const rules = suffixes.getRules();

  for (let i = 0; i < domainParts.length; i++) {
    const candidateSuffix = domainParts.slice(i).join('.');
    const exceptionRule = '!' + candidateSuffix;

    if (rules.has(exceptionRule)) {
      return { suffix: domainParts.slice(i + 1).join('.'), rule: exceptionRule };
    }

    if (rules.has(candidateSuffix)) {
      return { suffix: candidateSuffix, rule: candidateSuffix };
    }

    const wildcardRule = '*.' + domainParts.slice(i + 1).join('.');
    if (rules.has(wildcardRule)) {
      return { suffix: candidateSuffix, rule: wildcardRule };
    }
  }

  return null;
}

/**
 * Extracts the subdomain, domain, and suffix from a domain string.
 * @param {string} domain - The domain to parse.
 * @returns {IExtractResult} An object containing the parts of the domain.
 */
export function extract(domain: string): IExtractResult {
  if (suffixes.getRules().size === 0) {
    throw new Error(
      'Suffix list is not loaded. Please use `tldParse.register(tldData)` to load the Public Suffix List before parsing. If you want a version with the list built-in, use the default import instead of `tld-parse/core`.'
    );
  }

  const domainParts = domain.toLowerCase().split('.').filter(Boolean);
  const match = findLongestMatch(domainParts);

  if (!match) {
    const suffix = ''
    const sld = domainParts.pop() || '';
    const subdomain = domainParts.join('.');
    return { subdomain, domain: sld, suffix, isPrivate: false };
  }

  const { suffix, rule } = match;
  const isPrivate = suffixes.isPrivate(rule);

  const suffixParts = suffix.split('.');
  const nonSuffixPartCount = domainParts.length - suffixParts.length;
  const nonSuffixParts = nonSuffixPartCount > 0 ? domainParts.slice(0, nonSuffixPartCount) : [];

  const sld = nonSuffixParts.pop() || '';
  const subdomain = nonSuffixParts.join('.');

  return { subdomain, domain: sld, suffix, isPrivate };
}
