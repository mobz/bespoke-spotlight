[![Build Status](https://secure.travis-ci.org/mobz/bespoke-spotlight.png)](http://travis-ci.org/mobz/bespoke-spotlight)

# bespoke-spotlight

### Fast Search for [Bespoke.js](https://github.com/markdalgleish/bespoke.js)

Fast Search for Bespoke.js slide-decks.

## Download

Download the [production version][min] or the [development version][max] and the [css][css].

[min]: https://raw.github.com/mobz/bespoke-spotlight/master/dist/bespoke-spotlight.min.js
[max]: https://raw.github.com/mobz/bespoke-spotlight/master/dist/bespoke-spotlight.js
[css]: https://raw.github.com/mobz/bespoke-spotlight/master/dist/bespoke-spotlight.css

## Basic Usage

First, include both `bespoke.js`, `bespoke-spotlight.js` and `bespoke-spotlight.css` in your page.

Then, simply include the plugin when initing bespoke

```
			bespoke.horizontal.from('article', {
				spotlight: true
			});
```

Press 'q' (for query) on your keyboard to bring up the search field and 'RETURN' or 'ESC' to close it.

As you type spotlight automatically navigates to the first slide that contains matching text. Spotlight will search headings first, then all other content

## Questions?

Contact me on GitHub or Twitter: [@mobz](http://twitter.com/mobz)

## License

Copyright 2013, Ben Birch  
This content is released under the MIT license  
http://mit-license.org/mobz