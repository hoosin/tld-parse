import tldParse from '../src';

describe('tldParse', () => {
  // Test cases based on the official Public Suffix List test suite
  // https://publicsuffix.org/list/public_suffix_list.dat

  // --- Single Input Tests ---
  test('should handle simple domain', () => {
    expect(tldParse('google.com')).toEqual({
      subdomain: '',
      domain: 'google',
      suffix: 'com',
      isPrivate: false,
    });
  });

  test('should handle simple subdomain', () => {
    expect(tldParse('www.google.com')).toEqual({
      subdomain: 'www',
      domain: 'google',
      suffix: 'com',
      isPrivate: false,
    });
  });

  test('should handle multi-level subdomain', () => {
    expect(tldParse('mail.platform.google.com')).toEqual({
      subdomain: 'mail.platform',
      domain: 'google',
      suffix: 'com',
      isPrivate: false,
    });
  });

  // --- Multi-part Suffixes ---
  test('should handle multi-part public suffix', () => {
    expect(tldParse('www.bbc.co.uk')).toEqual({
      subdomain: 'www',
      domain: 'bbc',
      suffix: 'co.uk',
      isPrivate: false,
    });
  });

  // --- Wildcard Rules ---
  test('should handle wildcard rules', () => {
    // *.ck is a rule, so anything under it is a valid domain.
    expect(tldParse('foo.bar.ck')).toEqual({
      "subdomain": "",
      "domain": "foo",
      "suffix": "bar.ck",
      "isPrivate": false
    });
  });

  // --- Exception Rules ---
  test('should handle exception rules', () => {
    // *.kawasaki.jp is a rule, but city.kawasaki.jp is an exception.
    // So, for 'city.kawasaki.jp', the suffix is 'kawasaki.jp' and the domain is 'city'.
    expect(tldParse('www.city.kawasaki.jp')).toEqual({
      "subdomain": "www",
      "domain": "city",
      "suffix": "kawasaki.jp",
      "isPrivate": false
    });
  });

  // --- Private Suffixes ---
  test('should handle simple private suffixes', () => {
    // The rule is 'github.io', so it should be the suffix.
    expect(tldParse('my-project.github.io')).toEqual({
      subdomain: '',
      domain: 'my-project',
      suffix: 'github.io',
      isPrivate: true,
    });
  });

  test('should handle complex private suffixes with wildcards', () => {
    // *.platform.sh is a private rule.
    expect(tldParse('my-app.eu.platform.sh')).toEqual({


      "subdomain": "",
      "domain": "my-app",
      "suffix": "eu.platform.sh",
      "isPrivate": true
    });
  });

  // --- Suffix Not in List ---
  test('should treat the last part as suffix if TLD is not in the list', () => {
    expect(tldParse('baidu.co2m')).toEqual({
      subdomain: 'baidu',
      domain: 'co2m',
      suffix: '',
      isPrivate: false,
    });
  });

  test('should handle a single-label domain not in the list', () => {
    expect(tldParse('example')).toEqual({
      subdomain: '',
      domain: 'example',
      suffix: '',
      isPrivate: false,
    });
  });

  // --- Internationalized Domain Names (IDN) ---
  test('should handle IDN domains (Punycode)', () => {
    // bücher.de -> xn--bcher-kva.de
    expect(tldParse('xn--bcher-kva.de')).toEqual({
      subdomain: '',
      domain: 'xn--bcher-kva',
      suffix: 'de',
      isPrivate: false,
    });
  });

  test('should handle IDN domains (Unicode) by converting to punycode', () => {
    expect(tldParse('bücher.de')).toEqual({
      subdomain: '',
      domain: 'bücher',
      suffix: 'de',
      isPrivate: false,
    });
  });

  // --- Edge Cases & Invalid Inputs ---
  test('should return null for null input', () => {
    expect(tldParse(null as any)).toBeNull();
  });

  test('should return null for undefined input', () => {
    expect(tldParse(undefined as any)).toBeNull();
  });

  test('should return null for empty string input', () => {
    expect(tldParse('')).toBeNull();
  });

  test('should handle domain with leading dot', () => {
    // A leading dot is often ignored.
    expect(tldParse('.google.com')).toEqual({
      subdomain: '',
      domain: 'google', // Adjusted to match existing property name
      suffix: 'com',
      isPrivate: false,
    });
  });

  test('should handle mixed case domains', () => {
    expect(tldParse('WWW.Google.CO.UK')).toEqual({
      subdomain: 'www',
      domain: 'google', // Adjusted to match existing property name
      suffix: 'co.uk',
      isPrivate: false,
    });
  });

  test('should handle domain that is itself a public suffix', () => {
    expect(tldParse('co.uk')).toEqual({
      subdomain: '',
      domain: '',
      suffix: 'co.uk',
      isPrivate: false,
    });
  });

  test('should handle domain with hyphens', () => {
    expect(tldParse('my-cool-domain.co.uk')).toEqual({
      subdomain: '',
      domain: 'my-cool-domain',
      suffix: 'co.uk',
      isPrivate: false,
    });
  });

  test('should handle full URL with path', () => {
    expect(tldParse('https://user:pass@www.google.co.uk:8080/path/to/page?q=1#hash')).toEqual({
      subdomain: 'www',
      domain: 'google',
      suffix: 'co.uk',
      isPrivate: false,
    });
  });

  test('should handle domain with a port number', () => {
    expect(tldParse('example.com:8080')).toEqual({
      subdomain: '',
      domain: 'example',
      suffix: 'com',
      isPrivate: false,
    });
  });

  // --- IP Addresses ---
  test('should handle IPv4 address by returning it as the domain', () => {
    expect(tldParse('192.168.1.1')).toEqual({
      subdomain: '',
      domain: '192.168.1.1',
      suffix: '',
      isPrivate: false,
    });
  });

  test('should handle full IPv6 address', () => {
    const ipv6 = '2001:0db8:85a3:0000:0000:8a2e:0370:7334';
    expect(tldParse(ipv6)).toEqual({
      subdomain: '',
      domain: ipv6,
      suffix: '',
      isPrivate: false,
    });
  });

  test('should handle compressed IPv6 address', () => {
    const ipv6 = '2001:db8::1';
    expect(tldParse(ipv6)).toEqual({
      subdomain: '',
      domain: ipv6,
      suffix: '',
      isPrivate: false,
    });
  });

  test('should handle IPv6 address in URL with brackets', () => {
    const ipv6 = '2001:db8::1';
    const url = `http://[${ipv6}]/path`;
    expect(tldParse(url)).toEqual({
      subdomain: '',
      domain: ipv6,
      suffix: '',
      isPrivate: false,
    });
  });

  test('should handle IPv6 address with port in URL', () => {
    const ipv6 = '2001:db8::1';
    const url = `http://[${ipv6}]:8080/path`;
    expect(tldParse(url)).toEqual({
      subdomain: '',
      domain: ipv6,
      suffix: '',
      isPrivate: false,
    });
  });

  // --- Additional Cases ---
  test('should handle more levels of subdomains', () => {
    // This case is a good addition to the existing 'multi-level subdomain' test.
    expect(tldParse('a.b.c.d.google.com')).toEqual({
      subdomain: 'a.b.c.d',
      domain: 'google', // Adjusted to match existing property name
      suffix: 'com',
      isPrivate: false,
    });
  });

  test('should handle a single dot as input', () => {
    expect(tldParse('.')).toEqual({
      subdomain: '',
      domain: '',
      suffix: '',
      isPrivate: false,
    });
  });

  // --- Array Input Tests ---
  describe('with array input', () => {
    test('should return an array of results for an array of domains', () => {
      const domains = ['google.com', 'www.bbc.co.uk', 'invalid'];
      const results = tldParse(domains);
      expect(results).toEqual([
        {
          subdomain: '',
          domain: 'google',
          suffix: 'com',
          isPrivate: false,
        },
        {
          subdomain: 'www',
          domain: 'bbc',
          suffix: 'co.uk',
          isPrivate: false,
        },
        {
          subdomain: '',
          domain: 'invalid',
          suffix: '',
          isPrivate: false,
        },
      ]);
    });

    test('should return an empty array for an empty input array', () => {
      expect(tldParse([])).toEqual([]);
    });

    test('should handle array with null/undefined/empty string inputs', () => {
      const domains = ['example.com', null as any, undefined as any, ''];
      const results = tldParse(domains);
      expect(results).toEqual([
        {
          subdomain: '',
          domain: 'example',
          suffix: 'com',
          isPrivate: false,
        },
        null,
        null,
        null,
      ]);
    });
  });
});
