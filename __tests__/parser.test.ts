import { parseHostname } from '../src/core/parser';

describe('parseHostname', () => {
  // Test case for line 61-63 (catch block)
  test('should handle invalid URL formats and return original string', () => {
    const result = parseHostname('justastring');
    expect(result.hostnameForExtraction).toBe('justastring');
    expect(result.parsedUrlHostname).toBe('justastring');
  });

  // Test case for IDN processing - simple
  test('should correctly parse IDN domains (Unicode)', () => {
    const result = parseHostname('http://例子.com/path');
    expect(result.hostnameForExtraction).toBe('例子.com');
    expect(result.parsedUrlHostname).toBe('xn--fsqu00a.com');
  });

  // Test case for IDN processing - with port
  test('should correctly parse IDN domains with port (Unicode)', () => {
    const result = parseHostname('http://例子.com:8080/path');
    expect(result.hostnameForExtraction).toBe('例子.com');
    expect(result.parsedUrlHostname).toBe('xn--fsqu00a.com');
  });

  // Test case for the 'else' branch of `if (isOriginalDomainIdn)`
  test('should cover non-IDN URL parsing (else branch of isOriginalDomainIdn)', () => {
    const result = parseHostname('https://www.google.com/search');
    expect(result.hostnameForExtraction).toBe('www.google.com');
    expect(result.parsedUrlHostname).toBe('www.google.com');
  });

  // Test case for a plain IDN domain
  test('should correctly parse a plain IDN domain', () => {
    const result = parseHostname('你好.com');
    expect(result.hostnameForExtraction).toBe('你好.com');
  });

  // Test case for line 47 (the userinfo stripping line)
  test('should correctly parse IDN domains with userinfo', () => {
    const result = parseHostname('http://user:pass@例子.com/path');
    expect(result.hostnameForExtraction).toBe('例子.com');
    expect(result.parsedUrlHostname).toBe('xn--fsqu00a.com');
  });

  // Test case for line 43 (IPv6 without external port, hitting the else branch)
  test('should correctly parse IPv6 address without external port', () => {
    const result = parseHostname('http://[2001:db8::1]');
    expect(result.hostnameForExtraction).toBe('[2001:db8::1]');
    expect(result.parsedUrlHostname).toBe('[2001:db8::1]');
  });

  // Additional test cases for good measure
  test('should parse a simple domain', () => {
    const result = parseHostname('example.com');
    expect(result.hostnameForExtraction).toBe('example.com');
    expect(result.parsedUrlHostname).toBe('example.com');
  });

  test('should parse a URL with path and query', () => {
    const result = parseHostname('https://www.example.com/path?query=1');
    expect(result.hostnameForExtraction).toBe('www.example.com');
    expect(result.parsedUrlHostname).toBe('www.example.com');
  });

  test('should parse a URL with port', () => {
    const result = parseHostname('http://sub.example.com:8080/path');
    expect(result.hostnameForExtraction).toBe('sub.example.com');
    expect(result.parsedUrlHostname).toBe('sub.example.com');
  });

  test('should parse IPv4 address', () => {
    const result = parseHostname('http://192.168.1.1/path');
    expect(result.hostnameForExtraction).toBe('192.168.1.1');
    expect(result.parsedUrlHostname).toBe('192.168.1.1');
  });

  test('should parse IPv6 address with port', () => {
    const result = parseHostname('http://[::1]:8080/path');
    expect(result.hostnameForExtraction).toBe('[::1]');
    expect(result.parsedUrlHostname).toBe('[::1]');
  });

  test('should handle domain with userinfo', () => {
    const result = parseHostname('http://user:pass@example.com/path');
    expect(result.hostnameForExtraction).toBe('example.com');
    expect(result.parsedUrlHostname).toBe('example.com');
  });

  test('should handle domain with multiple slashes', () => {
    const result = parseHostname('http://example.com//path');
    expect(result.hostnameForExtraction).toBe('example.com');
    expect(result.parsedUrlHostname).toBe('example.com');
  });



  // Test case for line 47 (IDN processing)
  test('should correctly parse IDN domains (Unicode)', () => {
    const result = parseHostname('http://例子.com/path');
    expect(result.hostnameForExtraction).toBe('例子.com');
    expect(result.parsedUrlHostname).toBe('xn--fsqu00a.com'); // Corrected Punycode from URL constructor
  });






  test('should handle domain with multiple slashes', () => {
    const result = parseHostname('http://example.com//path');
    expect(result.hostnameForExtraction).toBe('example.com');
    expect(result.parsedUrlHostname).toBe('example.com');
  });


});
