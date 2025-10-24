import tld from '../../data/public_suffix_list.dat';

/**
 * @class Suffixes
 * @description Manages the public and private suffix lists for domain parsing.
 */
class Suffixes {
  private readonly publicSuffixes: Set<string>;
  private readonly privateSuffixes: Set<string>;

  /**
   * Initializes the Suffixes by loading and parsing the suffix data.
   */
  constructor() {
    const [publicPart, privatePart] = tld.split('===BEGIN PRIVATE DOMAINS===');
    this.publicSuffixes = this.parsePart(publicPart);
    this.privateSuffixes = this.parsePart(privatePart);
  }

  /**
   * Parses a part of the suffix data file.
   * @param {string} part - The raw string data to parse.
   * @returns {Set<string>} A set of suffix rules.
   * @private
   */
  private parsePart(part: string): Set<string> {
    return new Set(
      part
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line && !line.startsWith('//'))
    );
  }

  /**
   * Returns the set of all suffix rules (public and private).
   * @returns {Set<string>} A set of all suffix rules.
   */
  public getRules(): Set<string> {
    return new Set([...this.publicSuffixes, ...this.privateSuffixes]);
  }

  /**
   * Checks if a given rule is a private suffix rule.
   * @param {string} rule - The rule to check.
   * @returns {boolean} True if the rule is private, false otherwise.
   */
  public isPrivate(rule: string): boolean {
    return this.privateSuffixes.has(rule);
  }
}

export default new Suffixes();
