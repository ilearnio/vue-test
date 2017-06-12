import {
  truncate,
  htmlEntitiesEncode,
  lineBreaksToHtml,
  textToHtml
} from '@/lib/helpers/strings'

describe('Helpers Strings', function () {
  const str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

  it('should `truncate` the string', () => {
    expect(truncate(null, 100)).to.equal('')
    expect(truncate('short string', 100)).to.equal('short string')
    expect(truncate(str, 50)).to.equal('Lorem ipsum dolor sit amet, consectetur adipiscing...')
    expect(truncate(str, 27)).to.equal('Lorem ipsum dolor sit amet...') // truncates chars like comma
    expect(truncate('Lorem ipsum" dolor', 12)).to.equal('Lorem ipsum"...') // should keep " char
    expect(truncate(str, 26, ' !!!')).to.equal('Lorem ipsum dolor sit !!!')
  })

  it('should `htmlEntitiesEncode` the string', () => {
    expect(htmlEntitiesEncode('<script "">&\''))
      .to.equal('&lt;script &quot;&quot;&gt;&amp;&apos;')
  })

  it('should convert line breaks in text to HTML breaks with `lineBreaksToHtml`', () => {
    expect(lineBreaksToHtml('one\ntwo\n\nthree\n\n\nfour\n\n\n\n'))
      .to.equal('<p>one<br>two</p><p>three</p><p><br>four</p><p></p><p></p>')
  })

  it('should prepare text as HTML with `textToHtml`', () => {
    expect(textToHtml(null)).to.equal('')
    expect(textToHtml(false)).to.equal('')
    expect(textToHtml(1)).to.equal('<p>1</p>')
    expect(textToHtml('one\ntwo\n\nthree\n\n\nfour\n\n\n\n'))
      .to.equal('<p>one<br>two</p><p>three</p><p><br>four</p><p></p><p></p>')
    expect(textToHtml('<script "">&\''))
      .to.equal('<p>&lt;script &quot;&quot;&gt;&amp;&apos;</p>')
  })
})
