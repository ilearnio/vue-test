import {
  truncate,
  htmlEntitiesEncode
} from '@/lib/helpers/strings'

describe('Helpers Strings', function () {
  const str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

  it('should `truncate` the string', () => {
    expect(truncate(str, 50)).to.equal('Lorem ipsum dolor sit amet, consectetur adipiscing...')
    expect(truncate(str, 60).length).to.be.below(64)
    expect(truncate(str, 65).length).to.be.below(69)
    expect(truncate(str, 70).length).to.be.below(74)
  })

  it('should `htmlEntitiesEncode` the string', () => {
    expect(htmlEntitiesEncode('<script "">&\'')).to.equal('&lt;script &quot;&quot;&gt;&amp;&apos;')
  })
})
