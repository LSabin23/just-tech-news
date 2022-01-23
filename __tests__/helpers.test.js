const { format_date, format_plural, format_url } = require('../utils/helpers')

test('format_date() returns a date string', () => {
  const date = new Date('2021-01-17 11:20:23')

  expect(format_date(date)).toBe('1/17/2021')
})

test('format_plural() returns properly pluralized words', () => {
  const pluralWord = 'tiger'
  const pluralAmount = 2
  const singularWord = 'lion'
  const singularAmount = 1

  expect(format_plural(pluralWord, pluralAmount)).toBe('tigers')
  expect(format_plural(singularWord, singularAmount)).toBe('lion')
})

test('format_url() returns a simplified URL string', () => {
  const url1 = format_url('http://wikipedia.org/page/1')
  const url2 = format_url('https://www.github.com/octocat/')
  const url3 = format_url('https://www.google.com?q=hello')

  expect(url1).toBe('wikipedia.org')
  expect(url2).toBe('github.com')
  expect(url3).toBe('google.com')
})
