export default (editor, opts = {}) => {
  const plugin = editor.BlockManager.add; // Alias for convenience.


  /* Nim-lang.org Source Code Filter *********************************************************/


  plugin('nim_scf_header_basic', {
    label: 'Header Basic',
    content: '#? stdtmpl\n',
    category: 'Nim lang➡️SCF',
    media:    '<img src="nim.svg" height=32 width=64 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://nim-lang.org/docs/filters.html';
      el.appendChild(a);
    },
  });

  plugin('nim_scf_header_full', {
    label: 'Header Full',
    content: `
    #? stdtmpl | strip
    #include prelude
    #
    #
    #proc generateHTML*(argument: string): string =
    #  discard
    #end proc
    #
    `,
    category: 'Nim lang➡️SCF',
    media:    '<img src="nim.svg" height=32 width=64 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://nim-lang.org/docs/filters.html';
      el.appendChild(a);
    },
  });

  plugin('nim_scf_proc', {
    label: 'Function',
    content: `
    #
    #proc generateHTML*(argument0: int, argument1: float, argument2: bool): string =
    #  discard
    #end proc
    #
    `,
    category: 'Nim lang➡️SCF',
    media:    '<img src="nim.svg" height=32 width=64 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://nim-lang.org/docs/manual.html#procedures';
      el.appendChild(a);
    },
  });

  plugin('nim_scf_template', {
    label: 'Template',
    content: `
    #
    #template generateHTML*(argument0: int, argument1: float, argument2: bool): string =
    #  discard
    #end template
    #
    `,
    category: 'Nim lang➡️SCF',
    media:    '<img src="nim.svg" height=32 width=64 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://nim-lang.org/docs/manual.html#templates';
      el.appendChild(a);
    },
  });

  plugin('nim_scf_arrow_func', {
    label: 'Arrow Functions',
    content: `
    #
    #let name0 = (argument: int) {.inline.} => echo argument
    #let name1 = (argument: bool) {.inline.} => echo argument
    #let name2 = (argument: float) {.inline.} => echo argument
    #
    `,
    category: 'Nim lang➡️SCF',
    media:    '<img src="nim.svg" height=32 width=64 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://github.com/nim-lang/Nim/wiki/Nim-for-TypeScript-Programmers#arrow-functions';
      el.appendChild(a);
    },
  });

  plugin('nim_scf_comprehension', {
    label: 'List Comprehension',
    content: `
    #
    #let variable = collect(newSeq):
    #  for item in @[-9, 1, 42, 0, -1, 9]: item
    #
    #let variable = collect(initTable(4)):
    #  for key, value in @[-9, 1, 42, 0, -1, 9]: {key: value}
    #
    `,
    category: 'Nim lang➡️SCF',
    media:    '<img src="nim.svg" height=32 width=64 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://github.com/nim-lang/Nim/wiki/Nim-for-Python-Programmers#list-comprehensions';
      el.appendChild(a);
    },
  });

  plugin('nim_scf_if', {
    label: 'if...elif...else',
    content: `
    #
    #if condition:
    #  discard
    #elif condition:
    #  discard
    #else:
    #  discard
    #end if
    #
    `,
    category: 'Nim lang➡️SCF',
    media:    '<img src="nim.svg" height=32 width=64 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://nim-lang.org/docs/manual.html#statements-and-expressions-if-statement';
      el.appendChild(a);
    },
  });

  plugin('nim_scf_for', {
    label: 'for loop',
    content: `
    #
    #for i in 0..9:
    #  echo i
    #end for
    #
    `,
    category: 'Nim lang➡️SCF',
    media:    '<img src="nim.svg" height=32 width=64 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://nim-lang.org/docs/manual.html#iterators-and-the-for-statement';
      el.appendChild(a);
    },
  });

  plugin('nim_scf_case', {
    label: 'case switch',
    content: `
    #
    #case condition
    #of value0:
    #  discard
    #of value1:
    #  discard
    #else:
    #  discard
    #end case
    #
    `,
    category: 'Nim lang➡️SCF',
    media:    '<img src="nim.svg" height=32 width=64 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://nim-lang.org/docs/manual.html#statements-and-expressions-case-statement';
      el.appendChild(a);
    },
  });

  plugin('nim_scf_while', {
    label: 'while infinite loop',
    content: `
    #
    #while true:
    #  discard
    #end while
    #
    `,
    category: 'Nim lang➡️SCF',
    media:    '<img src="nim.svg" height=32 width=64 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://nim-lang.org/docs/manual.html#statements-and-expressions-while-statement';
      el.appendChild(a);
    },
  });

  plugin('nim_scf_try', {
    label: 'try...except...finally',
    content: `
    #
    #try:
    #  discard
    #except IOError as e:
    #  echo e.msg
    #except:
    #  discard
    #finally:
    #  discard
    #end try
    #
    `,
    category: 'Nim lang➡️SCF',
    media:    '<img src="nim.svg" height=32 width=64 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://nim-lang.org/docs/manual.html#exception-handling-try-statement';
      el.appendChild(a);
    },
  });

  plugin('nim_scf_variables', {
    label: 'variables declaration',
    content: `
    #
    #const
    #  constant_immutable0 = 0
    #  constant_immutable1 = 42
    #  constant_immutable2 = 666
    #  constant_immutable3 = true
    #  constant_immutable4 = 3.14
    #  constant_immutable5 = @[1, 2, 3]
    #
    #let
    #  variable_immutable0 = 0
    #  variable_immutable1 = 42
    #  variable_immutable2 = 666
    #  variable_immutable3 = true
    #  variable_immutable4 = 3.14
    #  variable_immutable5 = @[1, 2, 3]
    #
    #var
    #  variable_mutable0: int
    #  variable_mutable1: char
    #  variable_mutable2: float
    #  variable_mutable3: string
    #
    `,
    category: 'Nim lang➡️SCF',
    media:    '<img src="nim.svg" height=32 width=64 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://nim-lang.org/docs/manual.html#statements-and-expressions-var-statement';
      el.appendChild(a);
    },
  });


  /* Fonts *********************************************************/


  plugin('fonts_ubuntu', {
    label: 'Ubuntu',
    content: '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" async defer >',
    category: 'Fonts',
    media:    '<img src="google_fonts.webp" height=32 width=64 loading="lazy">'
  });

  plugin('fonts_oxygen', {
    label: 'Oxygen',
    content: '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Oxygen&display=swap" async defer >',
    category: 'Fonts',
    media:    '<img src="google_fonts.webp" height=32 width=64 loading="lazy">'
  });

  plugin('fonts_roboto', {
    label: 'Roboto',
    content: '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" async defer >',
    category: 'Fonts',
    media:    '<img src="google_fonts.webp" height=32 width=64 loading="lazy">'
  });

  plugin('fonts_lato', {
    label: 'Lato',
    content: '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato&display=swap" async defer >',
    category: 'Fonts',
    media:    '<img src="google_fonts.webp" height=32 width=64 loading="lazy">'
  });


  /* Unsplash images *********************************************************/


  plugin('unsplash_images_random', {
    label:    'Random',
    content:  '<img src="https://source.unsplash.com/random" height="99" width="99" loading="lazy">\n',
    category: 'Unsplash➡️Images',
    media:    '<img src="unsplash.svg" height=32 width=32 loading="lazy">'
  });

  plugin('unsplash_images_daily', {
    label:    'Daily Best',
    content:  '<img src="https://source.unsplash.com/daily" height="99" width="99" loading="lazy">\n',
    category: 'Unsplash➡️Images',
    media:    '<img src="unsplash.svg" height=32 width=32 loading="lazy">'
  });

  plugin('unsplash_images_weekly', {
    label:    'Weekly Best',
    content:  '<img src="https://source.unsplash.com/weekly" height="99" width="99" loading="lazy">\n',
    category: 'Unsplash➡️Images',
    media:    '<img src="unsplash.svg" height=32 width=32 loading="lazy">'
  });

  plugin('unsplash_images_featured', {
    label:    'Featured Curated',
    content:  '<img src="https://source.unsplash.com/featured" height="99" width="99" loading="lazy">\n',
    category: 'Unsplash➡️Images',
    media:    '<img src="unsplash.svg" height=32 width=32 loading="lazy">'
  });


  /* SVG Patterns *********************************************************/


  plugin('svg_patterns_gradient', {
    label:    'Gradient',
    content: `
    <svg xmlns='http://www.w3.org/2000/svg' width='99' height='99'>
      <linearGradient id='g' x2='1' y2='1'>
      <stop stop-color='#F19'/>
      <stop offset='100%' stop-color='#0CF'/>
      </linearGradient>
      <rect width='99' height='99' fill='url(#g)'/>
    </svg>`,
    category: 'SVG➡️Patterns',
    media:    '<img src="svg.svg" height=32 width=32 loading="lazy">'
  });

  plugin('svg_patterns_noise', {
    label:    'Perlin Noise',
    content: `
    <svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='99' height='99'>
      <filter id='n'>
        <feTurbulence type='fractalNoise' baseFrequency='.7' numOctaves='10' stitchTiles='stitch'/>
      </filter>
      <rect width='500' height='500' fill='#000'/>
      <rect width='500' height='500' filter="url(#n)" opacity='0.4'/>
    </svg>`,
    category: 'SVG➡️Patterns',
    media:    '<img src="svg.svg" height=32 width=32 loading="lazy">'
  });


  /* Bulma Tabs *********************************************************/


  plugin('bulma_tabs_rounded', {
    label:    'Tabs Rounded Full-Width',
    content: `
    <div class="tabs is-toggle is-toggle-rounded is-fullwidth is-small">
      <ul>
        <li class="is-active">
          <a>
            <span class="icon is-small"><i class="fas fa-image"></i></span>
            <span>Tab 0</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small"><i class="fas fa-music"></i></span>
            <span>Tab 1</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small"><i class="fas fa-film"></i></span>
            <span>Tab 2</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small"><i class="fas fa-file-alt"></i></span>
            <span>Tab 3</span>
          </a>
        </li>
      </ul>
    </div>`,
    category: 'Bulma➡️Tabs',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/components/tabs';
      el.appendChild(a);
    },
  });

  plugin('bulma_tabs_centered', {
    label:    'Tabs Centered',
    content: `
    <div class="tabs is-toggle is-centered is-small is-small">
      <ul>
        <li class="is-active">
          <a>
            <span class="icon is-small"><i class="fas fa-image"></i></span>
            <span>Tab 0</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small"><i class="fas fa-music"></i></span>
            <span>Tab 1</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small"><i class="fas fa-film"></i></span>
            <span>Tab 2</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small"><i class="fas fa-file-alt"></i></span>
            <span>Tab 3</span>
          </a>
        </li>
      </ul>
    </div>`,
    category: 'Bulma➡️Tabs',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/components/tabs';
      el.appendChild(a);
    },
  });


  /* Bulma Panels *********************************************************/


  plugin('bulma_panels_0', {
    label:    'Panels 0',
    content: `
    <nav class="panel is-primary">
      <p class="panel-heading">
        Title
      </p>
      <div class="panel-block">
        <p class="control has-icons-left">
          <input class="input" type="text" placeholder="Search">
          <span class="icon is-left">
            <i class="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </div>
      <p class="panel-tabs">
        <a class="is-active">All</a>
        <a>tab 0</a>
        <a>tab 1</a>
        <a>tab 2</a>
        <a>tab 3</a>
      </p>
      <a class="panel-block is-active">
        <span class="panel-icon">
          <i class="fas fa-book" aria-hidden="true"></i>
        </span>
        text
      </a>
      <a class="panel-block">
        <span class="panel-icon">
          <i class="fas fa-book" aria-hidden="true"></i>
        </span>
        text
      </a>
      <a class="panel-block">
        <span class="panel-icon">
          <i class="fas fa-book" aria-hidden="true"></i>
        </span>
        text
      </a>
      <a class="panel-block">
        <span class="panel-icon">
          <i class="fas fa-book" aria-hidden="true"></i>
        </span>
        text
      </a>
      <a class="panel-block">
        <span class="panel-icon">
          <i class="fas fa-code-branch" aria-hidden="true"></i>
        </span>
        text
      </a>
      <a class="panel-block">
        <span class="panel-icon">
          <i class="fas fa-code-branch" aria-hidden="true"></i>
        </span>
        text
      </a>
      <label class="panel-block">
        <input type="checkbox">
        option
      </label>
      <div class="panel-block">
        <button class="button is-link is-outlined is-fullwidth">
          button
        </button>
      </div>
    </nav>`,
    category: 'Bulma➡️Panels',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/components/panel';
      el.appendChild(a);
    },
  });

  plugin('bulma_panels_1', {
    label:    'Panels 1',
    content: `
    <nav class="panel is-success">
      <p class="panel-heading">
        Title
      </p>
      <div class="panel-block">
        <p class="control has-icons-left">
          <input class="input" type="text" placeholder="Search">
          <span class="icon is-left">
            <i class="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </div>
      <p class="panel-tabs">
        <a class="is-active">All</a>
        <a>tab 0</a>
        <a>tab 1</a>
        <a>tab 2</a>
        <a>tab 3</a>
      </p>
      <a class="panel-block is-active">
        <span class="panel-icon">
          <i class="fas fa-book" aria-hidden="true"></i>
        </span>
        text
      </a>
      <a class="panel-block">
        <span class="panel-icon">
          <i class="fas fa-book" aria-hidden="true"></i>
        </span>
        text
      </a>
      <a class="panel-block">
        <span class="panel-icon">
          <i class="fas fa-book" aria-hidden="true"></i>
        </span>
        text
      </a>
      <a class="panel-block">
        <span class="panel-icon">
          <i class="fas fa-book" aria-hidden="true"></i>
        </span>
        text
      </a>
      <a class="panel-block">
        <span class="panel-icon">
          <i class="fas fa-code-branch" aria-hidden="true"></i>
        </span>
        text
      </a>
      <a class="panel-block">
        <span class="panel-icon">
          <i class="fas fa-code-branch" aria-hidden="true"></i>
        </span>
        text
      </a>
      <label class="panel-block">
        <input type="checkbox">
        option
      </label>
      <div class="panel-block">
        <button class="button is-link is-outlined is-fullwidth">
          button
        </button>
      </div>
    </nav>`,
    category: 'Bulma➡️Panels',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/components/panel';
      el.appendChild(a);
    },
  });


  /* Bulma Paginations *********************************************************/


  plugin('bulma_paginations_centered', {
    label:    'Pagination Centered Rounded',
    content: `
    <nav class="pagination is-centered is-rounded is-small" role="navigation" aria-label="pagination">
      <a class="pagination-previous">Previous</a>
      <a class="pagination-next">Next</a>
      <ul class="pagination-list">
        <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
        <li><span class="pagination-ellipsis">&hellip;</span></li>
        <li><a class="pagination-link" aria-label="Goto page 45">45</a></li>
        <li><a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
        <li><a class="pagination-link" aria-label="Goto page 47">47</a></li>
        <li><span class="pagination-ellipsis">&hellip;</span></li>
        <li><a class="pagination-link" aria-label="Goto page 86">86</a></li>
      </ul>
    </nav>`,
    category: 'Bulma➡️Paginations',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/components/pagination';
      el.appendChild(a);
    },
  });

  plugin('bulma_paginations_rounded', {
    label:    'Pagination Simple',
    content: `
    <nav class="pagination is-small" role="navigation" aria-label="pagination">
      <a class="pagination-previous">Previous</a>
      <a class="pagination-next">Next</a>
      <ul class="pagination-list">
        <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
        <li><span class="pagination-ellipsis">&hellip;</span></li>
        <li><a class="pagination-link" aria-label="Goto page 45">45</a></li>
        <li><a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
        <li><a class="pagination-link" aria-label="Goto page 47">47</a></li>
        <li><span class="pagination-ellipsis">&hellip;</span></li>
        <li><a class="pagination-link" aria-label="Goto page 86">86</a></li>
      </ul>
    </nav>`,
    category: 'Bulma➡️Paginations',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/components/pagination';
      el.appendChild(a);
    },
  });


  /* Bulma Navbars *********************************************************/


  plugin('bulma_navbars_transparent', {
    label:    'Navbar Transparent',
    content: `
    <nav class="navbar is-primary is-transparent is-fixed-top is-spaced">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <img src="https://source.unsplash.com/112x28/?kitten" alt="" width="112" height="28">
        </a>
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="#">
            Home
          </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="#">
              text
            </a>
            <hr class="navbar-divider">
            <div class="navbar-dropdown is-boxed">
              <a class="navbar-item" href="#">
                text
              </a>
              <a class="navbar-item" href="#">
                text
              </a>
              <a class="navbar-item" href="#">
                text
              </a>
              <a class="navbar-item" href="#">
                text
              </a>
              <a class="navbar-item" href="#">
                text
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item" href="#">
                text
              </a>
              <a class="navbar-item is-active" href="#">
                text
              </a>
            </div>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="#" target="_blank" href="#">
                  <span class="icon">
                    <i class="fab fa-twitter"></i>
                  </span>
                  <span>
                    Tweet
                  </span>
                </a>
              </p>
              <p class="control">
                <a class="button is-primary" href="#">
                  <span class="icon">
                    <i class="fas fa-download"></i>
                  </span>
                  <span>Download</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>`,
    category: 'Bulma➡️Navbars',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/components/navbar';
      el.appendChild(a);
    },
  });

  plugin('bulma_navbars_simple', {
    label:    'Navbar Simple',
    content: `
    <nav class="navbar is-primary is-fixed-top">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <img src="https://source.unsplash.com/112x28/?kitten" alt="" width="112" height="28">
        </a>
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="#">
            text
          </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="#">
              text
            </a>
            <hr class="navbar-divider">
            <div class="navbar-dropdown is-boxed">
              <a class="navbar-item" href="#">
                text
              </a>
              <a class="navbar-item" href="#">
                text
              </a>
              <a class="navbar-item" href="#">
                text
              </a>
              <a class="navbar-item" href="#">
                text
              </a>
              <a class="navbar-item" href="#">
                text
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item" href="#">
                text
              </a>
              <a class="navbar-item is-active" href="#">
                text
              </a>
            </div>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="#" target="_blank" href="#">
                  <span class="icon">
                    <i class="fab fa-twitter"></i>
                  </span>
                  <span>
                    Tweet
                  </span>
                </a>
              </p>
              <p class="control">
                <a class="button is-primary" href="#">
                  <span class="icon">
                    <i class="fas fa-download"></i>
                  </span>
                  <span>Download</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>`,
    category: 'Bulma➡️Navbars',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/components/navbar';
      el.appendChild(a);
    },
  });


  /* Bulma Modals *********************************************************/


  plugin('bulma_modals_card', {
    label:    'Modal Card Big',
    content: `
    <div class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Title</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          Content
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">OK</button>
          <button class="button">Cancel</button>
        </footer>
      </div>
    </div>`,
    category: 'Bulma➡️Modals',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/components/modal';
      el.appendChild(a);
    },
  });

  plugin('bulma_modals_image', {
    label:    'Modal Image Big',
    content: `
    <div class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Title</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <img src="https://source.unsplash.com/999x666/?kitten" alt="" title="" height=666 width=999 loading="lazy">
        </section>
      </div>
    </div>`,
    category: 'Bulma➡️Modals',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/components/modal';
      el.appendChild(a);
    },
  });


  /* Bulma Messages *********************************************************/


  plugin('bulma_messages_simple', {
    label:    'Message Simple',
    content: `
    <article class="message is-primary">
      <div class="message-header">
        <p>Title</p>
        <button class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">
        Content
      </div>
    </article>`,
    category: 'Bulma➡️Messages',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/components/message';
      el.appendChild(a);
    },
  });

  plugin('bulma_messages_small', {
    label:    'Message Small',
    content: `
    <article class="message is-primary is-small">
      <div class="message-header">
        <p>Title</p>
        <button class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">
        Content
      </div>
    </article>`,
    category: 'Bulma➡️Messages',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/components/message';
      el.appendChild(a);
    },
  });


  /* Bulma Menus *********************************************************/


  plugin('bulma_menus_big', {
    label:    'Menu Big',
    content: `
    <aside class="menu">
      <p class="menu-label">
        text
      </p>
      <ul class="menu-list">
        <li><a>text</a></li>
        <li><a>text</a></li>
      </ul>
      <p class="menu-label">
        text
      </p>
      <ul class="menu-list">
        <li><a>text</a></li>
        <li>
          <a class="is-active">text</a>
          <ul>
            <li><a>text</a></li>
            <li><a>text</a></li>
            <li><a>text</a></li>
          </ul>
        </li>
        <li><a>text</a></li>
        <li><a>text</a></li>
        <li><a>text</a></li>
      </ul>
      <p class="menu-label">
        text
      </p>
      <ul class="menu-list">
        <li><a>text</a></li>
        <li><a>text</a></li>
        <li><a>text</a></li>
      </ul>
    </aside>`,
    category: 'Bulma➡️Menus',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/components/menu';
      el.appendChild(a);
    },
  });

  plugin('bulma_menus_small', {
    label:    'Menu Small',
    content: `
    <aside class="menu">
      <p class="menu-label">
        text
      </p>
      <ul class="menu-list">
        <li><a>text</a></li>
      </ul>
      <p class="menu-label">
        text
      </p>
      <ul class="menu-list">
        <li><a>text</a></li>
        <li>
          <a class="is-active">text</a>
          <ul>
            <li><a>text</a></li>
          </ul>
        </li>
        <li><a>text</a></li>
      </ul>
      <p class="menu-label">
        text
      </p>
      <ul class="menu-list">
        <li><a>text</a></li>
      </ul>
    </aside>`,
    category: 'Bulma➡️Menus',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/components/menu';
      el.appendChild(a);
    },
  });


  /* Bulma Dropdowns *********************************************************/


  plugin('bulma_dropdowns_hoverable', {
    label:    'Dropdown Hoverable',
    content: `
    <div class="dropdown is-hoverable">
      <div class="dropdown-trigger">
        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
          <span>Dropdown button</span>
          <span class="icon is-small">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <a href="#" class="dropdown-item">
            text
          </a>
          <a class="dropdown-item">
            text
          </a>
          <a href="#" class="dropdown-item is-active">
            text
          </a>
          <a href="#" class="dropdown-item">
            text
          </a>
          <hr class="dropdown-divider">
          <a href="#" class="dropdown-item">
            text
          </a>
        </div>
      </div>
    </div>`,
    category: 'Bulma➡️Dropdowns',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/components/dropdown';
      el.appendChild(a);
    },
  });

  plugin('bulma_dropdowns_dropup', {
    label:    'Dropdown DropUp',
    content: `
    <div class="dropdown is-hoverable is-up">
      <div class="dropdown-trigger">
        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
          <span>Dropdown button</span>
          <span class="icon is-small">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <a href="#" class="dropdown-item">
            text
          </a>
          <a class="dropdown-item">
            text
          </a>
          <a href="#" class="dropdown-item is-active">
            text
          </a>
          <a href="#" class="dropdown-item">
            text
          </a>
          <hr class="dropdown-divider">
          <a href="#" class="dropdown-item">
            text
          </a>
        </div>
      </div>
    </div>`,
    category: 'Bulma➡️Dropdowns',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/components/dropdown';
      el.appendChild(a);
    },
  });


  /* Bulma Cards *********************************************************/


  plugin('bulma_cards_image', {
    label:    'Cards Image',
    content: `
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src="https://source.unsplash.com/999x666/?kitten" alt="">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="https://source.unsplash.com/99x99/?kitten" alt="">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">Title</p>
            <p class="subtitle is-6">Subtitle</p>
          </div>
        </div>
        <div class="content">
          text
        </div>
      </div>
    </div>`,
    category: 'Bulma➡️Cards',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/components/card';
      el.appendChild(a);
    },
  });

  plugin('bulma_cards_text', {
    label:    'Cards Text',
    content: `
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          Title
        </p>
        <a href="#" class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div class="card-content">
        <div class="content">
          text
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">button</a>
        <a href="#" class="card-footer-item">button</a>
        <a href="#" class="card-footer-item">button</a>
      </footer>
    </div>`,
    category: 'Bulma➡️Cards',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/components/card';
      el.appendChild(a);
    },
  });


  /* Bulma Breadcrumbs *********************************************************/


  plugin('bulma_breadcrumbs_small', {
    label:    'Breadcrumbs Small',
    content: `
    <nav class="breadcrumb has-arrow-separator is-small" aria-label="breadcrumbs">
      <ul>
        <li>
          <a href="#">
            <span class="icon is-small">
              <i class="fas fa-home" aria-hidden="true"></i>
            </span>
            <span>Breadcrumb 0</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon is-small">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            <span>Breadcrumb 1</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon is-small">
              <i class="fas fa-puzzle-piece" aria-hidden="true"></i>
            </span>
            <span>Breadcrumb 2</span>
          </a>
        </li>
        <li class="is-active">
          <a href="#">
            <span class="icon is-small">
              <i class="fas fa-thumbs-up" aria-hidden="true"></i>
            </span>
            <span>Breadcrumb 3</span>
          </a>
        </li>
      </ul>
    </nav>`,
    category: 'Bulma➡️Breadcrumbs',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/components/breadcrumb';
      el.appendChild(a);
    },
  });


  plugin('bulma_breadcrumbs_big', {
    label:    'Breadcrumbs Big',
    content: `
    <nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
      <ul>
        <li>
          <a href="#">
            <span class="icon is-small">
              <i class="fas fa-home" aria-hidden="true"></i>
            </span>
            <span>Breadcrumb 0</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon is-small">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            <span>Breadcrumb 1</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon is-small">
              <i class="fas fa-puzzle-piece" aria-hidden="true"></i>
            </span>
            <span>Breadcrumb 2</span>
          </a>
        </li>
        <li class="is-active">
          <a href="#">
            <span class="icon is-small">
              <i class="fas fa-thumbs-up" aria-hidden="true"></i>
            </span>
            <span>Breadcrumb 3</span>
          </a>
        </li>
      </ul>
    </nav>`,
    category: 'Bulma➡️Breadcrumbs',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/components/breadcrumb';
      el.appendChild(a);
    },
  });


  /* Bulma Tags *********************************************************/


  plugin('bulma_tags_simple', {
    label:    'Tags',
    content: `
    <div class="field is-grouped is-grouped-multiline">
      <div class="control">
        <div class="tags has-addons">
          <span class="tag is-dark">text</span>
          <span class="tag is-info"></span>
          <button class="delete is-small"></button>
        </div>
      </div>
      <div class="control">
        <div class="tags has-addons">
          <span class="tag is-dark">text</span>
          <span class="tag is-success">text</span>
          <button class="delete is-small"></button>
        </div>
      </div>
      <div class="control">
        <div class="tags has-addons">
          <span class="tag is-dark">text</span>
          <span class="tag is-primary">text</span>
          <button class="delete is-small"></button>
        </div>
      </div>
    </div>`,
    category: 'Bulma➡️Tags',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/components/tag';
      el.appendChild(a);
    },
  });

  plugin('bulma_tags_rounded', {
    label:    'Tags Rounded',
    content: `
    <div class="field is-grouped is-grouped-multiline">
      <span class="tag is-rounded">
      text
      <button class="delete is-small"></button>
      </span>
      <span class="tag is-rounded">
      text
      <button class="delete is-small"></button>
      </span>
    </div>`,
    category: 'Bulma➡️Tags',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/components/tag';
      el.appendChild(a);
    },
  });


  /* Bulma Tables *********************************************************/


  plugin('bulma_tables_scrollable', {
    label:    'Table Scrollable Striped Hoverable',
    content: `
    <div class="table-container">
    <table class="table is-bordered is-striped is-narrow is-hoverable">
      <thead>
        <tr>
          <th>Column title</th>
          <th>Column title</th>
          <th>Column title</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>Column title</th>
          <th>Column title</th>
          <th>Column title</th>
        </tr>
      </tfoot>
      <tbody>
        <tr>
          <td>text</td>
          <td>text</td>
          <td>text</td>
        </tr>
        <tr>
          <td>text</td>
          <td>text</td>
          <td>text</td>
        </tr>
      </tbody>
    </table>
    </div>`,
    category: 'Bulma➡️Tables',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/components/table';
      el.appendChild(a);
    },
  });

  plugin('bulma_tables_fullwidth', {
    label:    'Table Striped Hoverable Fullwidth',
    content: `
    <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>Column title</th>
          <th>Column title</th>
          <th>Column title</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>Column title</th>
          <th>Column title</th>
          <th>Column title</th>
        </tr>
      </tfoot>
      <tbody>
        <tr>
          <td>text</td>
          <td>text</td>
          <td>text</td>
        </tr>
        <tr>
          <td>text</td>
          <td>text</td>
          <td>text</td>
        </tr>
      </tbody>
    </table>`,
    category: 'Bulma➡️Tables',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/components/table';
      el.appendChild(a);
    },
  });


  /* Bulma Progress *********************************************************/


  plugin('bulma_progress_big', {
    label:    'Progress Big',
    content: `
    <progress class="progress is-large is-primary" max="100">15%</progress>
    `,
    category: 'Bulma➡️Progress',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/components/progress';
      el.appendChild(a);
    },
  });

  plugin('bulma_progress_small', {
    label:    'Progress Small',
    content: `
    <progress class="progress is-small is-primary" max="100">15%</progress>
    `,
    category: 'Bulma➡️Progress',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/components/progress';
      el.appendChild(a);
    },
  });


  /* Bulma Notifications *********************************************************/


  plugin('bulma_notifications_simple', {
    label:    'Notifications Simple',
    content: `
    <div class="notification is-primary">
      <button class="delete"></button>
      text
    </div>`,
    category: 'Bulma➡️Notifications',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/components/notification';
      el.appendChild(a);
    },
  });

  plugin('bulma_notifications_light', {
    label:    'Notifications Light',
    content: `
    <div class="notification is-primary is-light">
      <button class="delete"></button>
      text
    </div>`,
    category: 'Bulma➡️Notifications',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/components/notification';
      el.appendChild(a);
    },
  });


  /* Bulma Boxes *********************************************************/


  plugin('bulma_boxes_image', {
    label:    'Box Image',
    content: `
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img src="https://source.unsplash.com/128x128/?kitten" alt="">
          </figure>
        </div>
      </article>
    </div>`,
    category: 'Bulma➡️Boxes',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/components/box';
      el.appendChild(a);
    },
  });

  plugin('bulma_boxes_text', {
    label:    'Box Text',
    content: `
    <div class="box">
      <div class="content">
        text
      </div>
    </div>`,
    category: 'Bulma➡️Boxes',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/components/box';
      el.appendChild(a);
    },
  });


  /* Bulma Buttons *********************************************************/


  plugin('bulma_buttons_grouped', {
    label:    'Buttons Grouped',
    content: `
    <div class="field is-grouped">
      <p class="control">
        <button class="button is-link is-light is-small is-rounded">
          button
        </button>
      </p>
      <p class="control">
        <button class="button is-light is-small is-rounded">
          button
        </button>
      </p>
      <p class="control">
        <button class="button is-danger is-light is-small is-rounded">
          button
        </button>
      </p>
    </div>`,
    category: 'Bulma➡️Buttons',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/elements/button';
      el.appendChild(a);
    },
  });

  plugin('bulma_buttons_addons', {
    label:    'Buttons Addons',
    content: `
    <div class="field has-addons">
      <p class="control">
        <button class="button is-light is-small is-rounded">
          <span class="icon is-small">
            <i class="fas fa-align-left"></i>
          </span>
          <span>Left</span>
        </button>
      </p>
      <p class="control">
        <button class="button is-light is-small is-rounded">
          <span class="icon is-small">
            <i class="fas fa-align-center"></i>
          </span>
          <span>Center</span>
        </button>
      </p>
      <p class="control">
        <button class="button is-light is-small is-rounded">
          <span class="icon is-small">
            <i class="fas fa-align-right"></i>
          </span>
          <span>Right</span>
        </button>
      </p>
    </div>`,
    category: 'Bulma➡️Buttons',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/elements/button';
      el.appendChild(a);
    },
  });














}
