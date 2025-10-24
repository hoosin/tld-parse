const IPV4_REGEX: RegExp = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

/**
 * Checks if a given string is an IP address (IPv4 or IPv6).
 * This is a pragmatic check; it doesn't validate the IPv6 format strictly,
 * but aims to differentiate IP addresses from hostnames.
 * This function should be called with a string that does NOT contain a port number.
 *
 * @param {string} str The string to check.
 * @returns {boolean} `true` if the string is considered an IP address, otherwise `false`.
 */
export function isIpAddress(str: string): boolean {
  if (IPV4_REGEX.test(str)) {
    return true;
  }
  if (str.includes(':')) {
    const colonCount = (str.match(/:/g) || []).length;
    if (colonCount >= 2 || (str.startsWith('[') && str.endsWith(']'))) {
      return true;
    }
  }
  return false;
}
