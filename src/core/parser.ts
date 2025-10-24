/**
 * @interface IParsedHostname
 * @description Represents the result of parsing a raw domain string.
 */
interface IParsedHostname {
  /**
   * The hostname to be used for domain extraction.
   * For IDNs, this will be the Unicode version.
   * @type {string}
   */
  hostnameForExtraction: string;

  /**
   * The hostname parsed from the URL, potentially in Punycode.
   * Used for IP address checks.
   * @type {string}
   */
  parsedUrlHostname: string;
}

/**
 * Parses a raw domain string to extract a clean hostname for processing.
 * This function handles URLs, IDNs (Internationalized Domain Names), and various edge cases.
 * @param {string} domain - The raw domain string to parse.
 * @returns {IParsedHostname} An object containing hostnames for extraction and IP checks.
 */
export function parseHostname(domain: string): IParsedHostname {
  let parsedUrlHostname: string = domain;
  let hostnameForExtraction: string = domain;

  const isOriginalDomainIdn = /[^\u0000-\u007F]/.test(domain);

  try {
    const url = new URL(domain.includes('//') ? domain : `http://${domain}`);
    parsedUrlHostname = url.hostname; // This will be Punycode for IDNs

    if (isOriginalDomainIdn) {
      // For IDNs, we reconstruct the Unicode hostname from the original string
      // to avoid Punycode conversion for the extraction logic.
      let tempDomain = domain;
      const protocolEndIndex = tempDomain.indexOf('//');
      if (protocolEndIndex !== -1) {
        tempDomain = tempDomain.substring(protocolEndIndex + 2);
      }
      const userinfoEndIndex = tempDomain.indexOf('@');
      if (userinfoEndIndex !== -1) {
        tempDomain = tempDomain.substring(userinfoEndIndex + 1);
      }
      const firstSlashIndex = tempDomain.indexOf('/');
      const firstQuestionMarkIndex = tempDomain.indexOf('?');
      const firstHashIndex = tempDomain.indexOf('#');
      let endIndex = tempDomain.length;
      if (firstSlashIndex !== -1) endIndex = Math.min(endIndex, firstSlashIndex);
      if (firstQuestionMarkIndex !== -1) endIndex = Math.min(endIndex, firstQuestionMarkIndex);
      if (firstHashIndex !== -1) endIndex = Math.min(endIndex, firstHashIndex);
      tempDomain = tempDomain.substring(0, endIndex);

      const portColonIndex = tempDomain.lastIndexOf(':');
      if (portColonIndex !== -1) {
        // Be careful not to strip part of an IPv6 address
        const bracketIndex = tempDomain.indexOf(']');
        if (bracketIndex === -1 || portColonIndex > bracketIndex) {
          tempDomain = tempDomain.substring(0, portColonIndex);
        }
      }
      hostnameForExtraction = tempDomain;
    } else {
      hostnameForExtraction = parsedUrlHostname;
    }
  } catch (e) {
    // If URL constructor fails, we assume the input is a raw hostname or IP.
    // The original input is used for both paths.
  }

  return { hostnameForExtraction, parsedUrlHostname };
}
