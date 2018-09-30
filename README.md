## fork from CHEF-KOCH.github.io
[![Build Status](https://travis-ci.org/dty717/dty717.github.io.svg?branch=master)](https://travis-ci.org/dty717/dty717.github.io)
[![LICENSE](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://raw.githubusercontent.com/mmistakes/minimal-mistakes/master/LICENSE.txt)
[![Jekyll](https://img.shields.io/badge/jekyll-%3E%3D%203.6-blue.svg)](https://jekyllrb.com/)
[![Ruby gem](https://img.shields.io/gem/v/minimal-mistakes-jekyll.svg)](https://rubygems.org/gems/minimal-mistakes-jekyll)
[![PayPal](https://img.shields.io/badge/PayPal-tip%20me-green.svg?logo=paypal)](https://www.paypal.me/nvinside)


:sparkles: Some information about my site: 
- ToDo.md
- Readme.md

## Jekyll Powered site

My main stack is:
- Jekyll (Blog)
- Github Pages (GitHub)
- Travis CI (build)
- Algolia (Search)
- Staticmanv2 (Comments)
- Wufoo (Contact Form)
- Mailchimp (eMail)
- Upscri.be (eMail Newsletter [disabled])
- Proze.io (TailoredMail [disabled])
- Google Analytics (Google opt-in)
- Font Awesome (Fonts)


# Formatting for my Blog

To run an instance of this locally:

```bash
> bundle install

> jekyll build

> jekyll serve --livereload
```


## FAQ

#### How to update ruby

```
ruby -v
curl -L https://get.rvm.io | bash -s stable
rvm install ruby-[version]
rvm install ruby-2.4.3
rvm use ruby-2.4.3
rvm --default use 2.4.3
```


#### Assets in Jekyll

First, create an assets directory.

mkdir assets
Add an image to the assets directory.

cp path/to/image.png ./assets/
The image can be displayed as follows.

![useful image]({{ site.url }}/assets/image.png)

Note that downloads can be made available with the same strategy.

You can download the PDF [here]({{ site.url }}/assets/document.pdf).


#### Installing Jekyll

See here for a [detailed guide](https://jekyllrb.com/docs/installation/). Windows user can follow this guide over [here](https://github.com/juthilo/run-jekyll-on-windows)


#### Troubleshooting

If having the following error

```bash
> /Library/Ruby/Gems/2.3.0/gems/bundler-1.16.1/lib/bundler/runtime.rb:313:in `check_for_activated_spec!': You have already activated public_suffix 3.0.2, but your Gemfile requires public_suffix 2.0.5. Prepending `bundle exec` to your command may solve this. (Gem::LoadError)

```

Try:
`bundle clean --force`


## Blog structure (Overview)

├── gulp                      # => gulp tasks (soon?)
├── src                       # => source Jekyll files and assets
|  ├── _includes
|  ├── _layouts
|  ├── _plugins
|  ├── ...
|  ├── _posts
|  ├── assets
|  |  ├── icons
|  |  ├── images
|  |  |   └── feature
|  |  ├── javascript
|  |  |   ├── plugins
|  |  |   ├── vendor
|  |  |   └── main.js
|  |  ├── stylesheets
|  |  |   ├── vendor
|  |  |   ├── ...
|  |  |   └── style.scss
├── .editorconfig
├── .gitignore
├── .htaccess
├── _config.dev.yml
├── _config.yml
├── Gemfile
├── robots.txt
├── #
├── ...

## Pages 


dty717.github.io
└── _pages/
    ├── 404.md               # 404 page
    ├── about.md             # About page
    └── contact.md           # Contact page


## Plugins

[jekyll-paginate](https://github.com/jekyll/jekyll-paginate)	    Pagination Generator for Jekyll.
[jekyll-sitemap](https://github.com/jekyll/jekyll-sitemap)	    Jekyll plugin to silently generate a sitemaps.org compliant sitemap for your Jekyll site.
[jekyll-gist](https://github.com/jekyll/jekyll-gist)	        Liquid tag for displaying GitHub Gists in Jekyll sites.
[jekyll-feed](https://github.com/jekyll/jekyll-feed)       A Jekyll plugin to generate an Atom (RSS-like) feed of your Jekyll posts.
[jemoji](https://github.com/jekyll/jemoji)	            GitHub-flavored emoji plugin for Jekyll.
