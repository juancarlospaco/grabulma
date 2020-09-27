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
          <img src="https://source.unsplash.com/112x28/?kitten" alt="" width="112" height="28" loading="lazy">
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
          <img src="https://source.unsplash.com/112x28/?kitten" alt="" width="112" height="28" loading="lazy">
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
    <div class="modal is-active">
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
    <div class="modal is-active">
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
          <img src="https://source.unsplash.com/99x99/?kitten" alt="" loading="lazy">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="https://source.unsplash.com/48x48/?kitten" alt="" loading="lazy">
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
          <span class="tag is-info">text</span>
        </div>
      </div>
      <div class="control">
        <div class="tags has-addons">
          <span class="tag is-dark">text</span>
          <span class="tag is-success">text</span>
        </div>
      </div>
      <div class="control">
        <div class="tags has-addons">
          <span class="tag is-dark">text</span>
          <span class="tag is-primary">text</span>
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
            <img src="https://source.unsplash.com/64x64/?kitten" alt="" loading="lazy">
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

  plugin('bulma_buttons_grid', {
    label:    'Buttons Grid 3x3',
    content: `
    <div class="buttons has-addons">
      <button class="button is-success is-selected">Yes</button>
      <button class="button">Maybe</button>
      <button class="button">No</button>
    </div>
    <div class="buttons has-addons">
      <button class="button">Yes</button>
      <button class="button is-info is-selected">Maybe</button>
      <button class="button">No</button>
    </div>
    <div class="buttons has-addons">
      <button class="button">Yes</button>
      <button class="button">Maybe</button>
      <button class="button is-danger is-selected">No</button>
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

  plugin('bulma_buttons_list', {
    label:    'Buttons List',
    content: `
    <div class="buttons">
      <button class="button">One</button>
      <button class="button">Two</button>
      <button class="button">Three</button>
      <button class="button">Four</button>
      <button class="button">Five</button>
      <button class="button">Six</button>
      <button class="button">Seven</button>
      <button class="button">Eight</button>
      <button class="button">Nine</button>
      <button class="button">Ten</button>
      <button class="button">Eleven</button>
      <button class="button">Twelve</button>
      <button class="button">Thirteen</button>
      <button class="button">Fourteen</button>
      <button class="button">Fifteen</button>
      <button class="button">Sixteen</button>
      <button class="button">Seventeen</button>
      <button class="button">Eighteen</button>
      <button class="button">Nineteen</button>
      <button class="button">Twenty</button>
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

  plugin('bulma_buttons_big', {
    label:    'Button Big Light Rounded',
    content: `
    <button class="button is-primary is-rounded is-light is-large is-fullwidth">
      <span class="icon is-small">
          <i class="fas fa-check"></i>
      </span>
      <span>
        button
      </span>
    </button>`,
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

  plugin('bulma_buttons_small', {
    label:    'Button Small Light Rounded',
    content: `
    <button class="button is-primary is-rounded is-light is-small">
      <span class="icon is-small">
          <i class="fas fa-check"></i>
      </span>
      <span>
        button
      </span>
    </button>`,
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


  /* Bulma Files *********************************************************/


  plugin('bulma_files_small', {
    label:    'Files small',
    content: `
    <div class="file has-name is-light is-small">
      <label class="file-label">
        <input class="file-input" type="file" name="resume">
        <span class="file-cta">
          <span class="file-icon">
            <i class="fas fa-upload"></i>
          </span>
          <span class="file-label">
            Choose a file…
          </span>
        </span>
        <span class="file-name">
          file.ext
        </span>
      </label>
    </div>`,
    category: 'Bulma➡️Files',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/form/file';
      el.appendChild(a);
    },
  });

  plugin('bulma_files_centered', {
    label:    'Files big centered',
    content: `
    <div class="file has-name is-boxed is-light is-fullwidth is-large is-centered">
      <label class="file-label">
        <input class="file-input" type="file" name="resume">
        <span class="file-cta">
          <span class="file-icon">
            <i class="fas fa-upload"></i>
          </span>
          <span class="file-label">
            Choose a file…
          </span>
        </span>
        <span class="file-name">
          file.ext
        </span>
      </label>
    </div>`,
    category: 'Bulma➡️Files',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/form/file';
      el.appendChild(a);
    },
  });


  /* Bulma Selects *********************************************************/


  plugin('bulma_selects_multiple', {
    label:    'Select Multiple Choice',
    content: `
    <div class="select is-multiple is-small">
      <select multiple size="4">
        <option value="Option 0">Option 0</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
    </div>`,
    category: 'Bulma➡️Selects',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/form/select';
      el.appendChild(a);
    },
  });

  plugin('bulma_selects_simple', {
    label:    'Select Simple',
    content: `
    <div class="field">
      <div class="control has-icons-left">
        <div class="select is-rounded is-small">
          <select>
            <option selected >Option 0</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
        <div class="icon is-small is-left">
          <i class="fas fa-globe"></i>
        </div>
      </div>
    </div>`,
    category: 'Bulma➡️Selects',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/form/select';
      el.appendChild(a);
    },
  });


  /* Bulma Tiles *********************************************************/


  plugin('bulma_tiles_0', {
    label:    'Tiles 0',
    content: `
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-primary">
              <p class="title">Vertical...</p>
              <p class="subtitle">Top tile</p>
            </article>
            <article class="tile is-child notification is-warning">
              <p class="title">...tiles</p>
              <p class="subtitle">Bottom tile</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-info">
              <p class="title">Middle tile</p>
              <p class="subtitle">With an image</p>
              <figure class="image is-4by3">
                <img src="https://source.unsplash.com/640x480/?kitten" alt="" loading="lazy">
              </figure>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-danger">
            <p class="title">Wide tile</p>
            <p class="subtitle">Aligned with the right tile</p>
            <div class="content">
              text
            </div>
          </article>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-success">
          <div class="content">
            <p class="title">Tall tile</p>
            <p class="subtitle">With even more content</p>
            <div class="content">
              text
            </div>
          </div>
        </article>
      </div>
    </div>`,
    category: 'Bulma➡️Tiles',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/layout/tiles';
      el.appendChild(a);
    },
  });

  plugin('bulma_tiles_1', {
    label:    'Tiles 1',
    content: `
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">One</p>
          <p class="subtitle">Subtitle</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Two</p>
          <p class="subtitle">Subtitle</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Three</p>
          <p class="subtitle">Subtitle</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Four</p>
          <p class="subtitle">Subtitle</p>
        </article>
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-9">
        <div class="tile">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">Five</p>
              <p class="subtitle">Subtitle</p>
              <div class="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
              </div>
            </article>
          </div>
          <div class="tile is-8 is-vertical">
            <div class="tile">
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">Six</p>
                  <p class="subtitle">Subtitle</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">Seven</p>
                  <p class="subtitle">Subtitle</p>
                </article>
              </div>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">Eight</p>
                <p class="subtitle">Subtitle</p>
              </article>
            </div>
          </div>
        </div>
        <div class="tile">
          <div class="tile is-8 is-parent">
            <article class="tile is-child box">
              <p class="title">Nine</p>
              <p class="subtitle">Subtitle</p>
              <div class="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </div>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">Ten</p>
              <p class="subtitle">Subtitle</p>
              <div class="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <div class="content">
            <p class="title">Eleven</p>
            <p class="subtitle">Subtitle</p>
            <div class="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
              <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
            </div>
          </div>
        </article>
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Twelve</p>
          <p class="subtitle">Subtitle</p>
          <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut.</p>
          </div>
        </article>
      </div>
      <div class="tile is-parent is-6">
        <article class="tile is-child box">
          <p class="title">Thirteen</p>
          <p class="subtitle">Subtitle</p>
          <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          </div>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Fourteen</p>
          <p class="subtitle">Subtitle</p>
          <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut.</p>
          </div>
        </article>
      </div>
    </div>`,
    category: 'Bulma➡️Tiles',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/layout/tiles';
      el.appendChild(a);
    },
  });


  /* Bulma Footers *********************************************************/


  plugin('bulma_footers_simple', {
    label:    'Footer Simple',
    content: `
    <footer class="footer">
      <div class="content has-text-centered">
        <p> text </p>
      </div>
    </footer>`,
    category: 'Bulma➡️Footers',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/layout/footer';
      el.appendChild(a);
    },
  });

  plugin('bulma_footers_empty', {
    label:    'Footer Empty',
    content: `
    <footer class="footer">
      <div class="content">
      </div>
    </footer>`,
    category: 'Bulma➡️Footers',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/layout/footer';
      el.appendChild(a);
    },
  });


  /* Bulma Heros *********************************************************/


  plugin('bulma_heros_gradient', {
    label:    'Hero Gradient',
    content: `
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            title
          </h1>
          <h2 class="subtitle">
            subtitle
          </h2>
        </div>
      </div>
    </section>`,
    category: 'Bulma➡️Heros',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/layout/hero';
      el.appendChild(a);
    },
  });

  plugin('bulma_heros_big', {
    label:    'Hero Big Full',
    content: `
    <section class="hero is-primary is-medium">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item">
                <img src="https://bulma.io/images/bulma-type-white.png" alt="" loading="lazy">
              </a>
              <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroA" class="navbar-menu">
              <div class="navbar-end">
                <a class="navbar-item is-active">
                  text
                </a>
                <a class="navbar-item">
                  text
                </a>
                <a class="navbar-item">
                  text
                </a>
                <span class="navbar-item">
                  <a class="button is-primary is-inverted">
                    <span class="icon">
                      <i class="fab fa-github"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Title
          </h1>
          <h2 class="subtitle">
            Subtitle
          </h2>
        </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot">
        <nav class="tabs">
          <div class="container">
            <ul>
              <li class="is-active"><a>text</a></li>
              <li><a>text</a></li>
              <li><a>text</a></li>
              <li><a>text</a></li>
              <li><a>text</a></li>
              <li><a>text</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </section>`,
    category: 'Bulma➡️Heros',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/layout/hero';
      el.appendChild(a);
    },
  });


  /* Bulma Media Objects *********************************************************/


  plugin('bulma_mediaobj_simple', {
    label:    'MediaObject Simple',
    content: `
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="https://source.unsplash.com/64x64/?kitten" alt="" loading="lazy">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
          </p>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item">
              <span class="icon is-small"><i class="fas fa-reply"></i></span>
            </a>
            <a class="level-item">
              <span class="icon is-small"><i class="fas fa-retweet"></i></span>
            </a>
            <a class="level-item">
              <span class="icon is-small"><i class="fas fa-heart"></i></span>
            </a>
          </div>
        </nav>
      </div>
      <div class="media-right">
        <button class="delete"></button>
      </div>
    </article>`,
    category: 'Bulma➡️MediaObjects',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/layout/media-object';
      el.appendChild(a);
    },
  });

  plugin('bulma_mediaobj_empty', {
    label:    'MediaObject Empty',
    content: `
    <article class="media">
      <div class="media-content">
        text
      </div>
    </article>`,
    category: 'Bulma➡️MediaObjects',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://bulma.io/documentation/layout/media-object';
      el.appendChild(a);
    },
  });


  /* Bulma Templates *********************************************************/


  plugin('bulma_templates_hero', {
    label:    'Hero 4 links',
    content: `
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-spaced">Title</h1>
          <h2 class="subtitle">Subtitle</h2>
          <div class="buttons is-centered">
            <a class="control button is-primary" href="#">link</a>
            <a class="control button is-light" href="#">link</a>
            <a class="control button is-primary" href="#">link</a>
            <a class="control button is-light" href="#">link</a>
          </div>
        </div>
      </div>
    </section>`,
    category: 'Bulma➡️Templates',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">'
  });

  plugin('bulma_templates_section', {
    label:    'Section 4 paragraphs',
    content: `
    <section class="section">
      <div class="container py-4">
        <h2 class="title has-text-centered mb-6">title</h2>
        <div class="columns">
          <div class="column is-3">
            <h4 class="title is-spaced is-4">title</h4>
            <p class="subtitle is-6">subtitle</p>
            <a href="#">link</a>
          </div>
          <div class="column is-3">
            <h4 class="title is-spaced is-4">title</h4>
            <p class="subtitle is-6">subtitle</p>
            <a href="#">link</a>
          </div>
          <div class="column is-3">
            <h4 class="title is-spaced is-4">title</h4>
            <p class="subtitle is-6">subtitle</p>
            <a href="#">link</a>
          </div>
          <div class="column is-3">
            <h4 class="title is-spaced is-4">title</h4>
            <p class="subtitle is-6">subtitle</p>
            <a href="#">link</a>
          </div>
        </div>
      </div>
    </section>`,
    category: 'Bulma➡️Templates',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">'
  });

  plugin('bulma_templates_team', {
    label:    'Meet the Team',
    content: `
    <section class="section">
      <div class="container has-text-centered py-4">
        <h2 class="title">Team</h2>
        <p class="subtitle mb-6">Meet the Team</p>
        <div class="columns is-centered is-multiline py-5">
          <div class="column is-6 is-3-widescreen mb-6">
            <div class="level">
              <div class="level-item">
                <figure class="image is-128x128">
                  <img class="is-rounded" src="https://source.unsplash.com/128x128/?kitten" alt="" width="128" height="128" loading="lazy">
                </figure>
              </div>
            </div>
            <h5 class="title is-5">Fatto Catto</h5>
            <p class="subtitle is-6">CEO</p>
          </div>
          <div class="column is-6 is-3-widescreen mb-6">
            <div class="level">
              <div class="level-item"><figure class="image is-128x128"><img class="is-rounded" src="https://source.unsplash.com/128x128/?kitten" alt="" width="128" height="128" loading="lazy"></figure></div>
            </div>
            <h5 class="title is-5">Grumpy Cat</h5>
            <p class="subtitle is-6">COO</p>
          </div>
          <div class="column is-6 is-3-widescreen mb-6">
            <div class="level">
              <div class="level-item"><figure class="image is-128x128"><img class="is-rounded" src="https://source.unsplash.com/128x128/?kitten" alt="" width="128" height="128" loading="lazy"></figure></div>
            </div>
            <h5 class="title is-5">Catovich</h5>
            <p class="subtitle is-6">CFO</p>
          </div>
          <div class="column is-6 is-3-widescreen mb-6">
            <div class="level">
              <div class="level-item"><figure class="image is-128x128"><img class="is-rounded" src="https://source.unsplash.com/128x128/?kitten" alt="" width="128" height="128" loading="lazy"></figure></div>
            </div>
            <h5 class="title is-5">Cat Erine</h5>
            <p class="subtitle is-6">Marketing</p>
          </div>
          <div class="column is-6 is-3-widescreen mb-6">
            <div class="level">
              <div class="level-item"><figure class="image is-128x128"><img class="is-rounded" src="https://source.unsplash.com/128x128/?kitten" alt="" width="128" height="128" loading="lazy"></figure></div>
            </div>
            <h5 class="title is-5">Fluffly Cat</h5>
            <p class="subtitle is-6">Chief</p>
          </div>
          <div class="column is-6 is-3-widescreen mb-6">
            <div class="level">
              <div class="level-item"><figure class="image is-128x128"><img class="is-rounded" src="https://source.unsplash.com/128x128/?kitten" alt="" width="128" height="128" loading="lazy"></figure></div>
            </div>
            <h5 class="title is-5">Puss in Boots</h5>
            <p class="subtitle is-6">Programmer</p>
          </div>
          <div class="column is-6 is-3-widescreen mb-6">
            <div class="level">
              <div class="level-item"><figure class="image is-128x128"><img class="is-rounded" src="https://source.unsplash.com/128x128/?kitten" alt="" width="128" height="128" loading="lazy"></figure></div>
            </div>
            <h5 class="title is-5">Nyan Cat</h5>
            <p class="subtitle is-6">Investor</p>
          </div>
        </div>
      </div>
    </section>`,
    category: 'Bulma➡️Templates',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">'
  });

  plugin('bulma_templates_pricing', {
    label:    'Pricing Plans',
    content: `
    <section class="section">
      <div class="container has-text-centered py-4">
        <h2 class="title">Pricing</h2>
        <hr class="my-6">
        <div class="columns">
          <div class="column">
            <h3 class="title is-4">Small</h3>
            <h4 class="title is-spaced is-5">$10 <small>Per user / monthly</small></h4>
            <p class="subtitle">Manage everything yourself.</p>
            <hr>
            <ul>
              <li>9GB storage</li>
              <li>3 Applications</li>
              <li>9 users max</li>
              <li>Unlimited Data</li>
            </ul>
            <hr>
            <div class="buttons is-centered">
              <button class="button is-primary" type="button">Contact Sales</button>
            </div>
          </div>
          <div class="column">
            <h3 class="title is-4">Medium</h3>
            <h4 class="title is-spaced is-5">$50 <small>Per user / monthly</small></h4>
            <p class="subtitle">We build what you need.</p>
            <hr>
            <ul>
              <li>999GB storage</li>
              <li>9 Applications</li>
              <li>99 users max</li>
              <li>Unlimited Data</li>
            </ul>
            <hr>
            <button class="button is-primary is-outlined" type="button">Contact Sales</button>
          </div>
          <div class="column">
            <h3 class="title is-4">Enterprise</h3>
            <h4 class="title is-spaced is-5">$100 <small>Per user / monthly</small></h4>
            <p class="subtitle">We do everything for you.</p>
            <hr>
            <ul>
              <li>Unlimited everything</li>
              <li>Unlimited everything</li>
              <li>Unlimited everything</li>
              <li>Unlimited everything</li>
            </ul>
            <hr>
            <button class="button is-primary is-outlined" type="button">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>`,
    category: 'Bulma➡️Templates',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">'
  });

  plugin('bulma_templates_faq', {
    label:    'FAQ',
    content: `
    <section class="section">
      <div class="container py-4">
        <h2 class="title has-text-centered mb-6">Frequently Asked Questions</h2>
        <div class="mb-6">
          <div class="card block">
            <div class="card-content">
              <div class="media">
                <div class="media-left"><figure class="image is-64x64"><img class="is-rounded" src="https://source.unsplash.com/64x64/?kitten" alt=""></figure></div>
                <div class="media-content">
                  <h3 class="title is-4">Whats the meaning of Life?</h3>
                  <p>42.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card block">
            <div class="card-content">
              <div class="media">
                <div class="media-left"><figure class="image is-64x64"><img class="is-rounded" src="https://source.unsplash.com/64x64/?kitten" alt=""></figure></div>
                <div class="media-content">
                  <h3 class="title is-4">Is Schrödinger's cat alive?</h3>
                  <p>Maybe.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="buttons is-centered"><a class="button is-primary" href="#">Learn more</a></div>
      </div>
    </section>`,
    category: 'Bulma➡️Templates',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">'
  });

  plugin('bulma_templates_contact', {
    label:    'Contact form',
    content: `
    <section class="section">
      <div class="container py-4">
        <h2 class="title has-text-centered mb-6">Contact us</h2>
        <div class="columns">
          <div class="column is-6"><img src="https://source.unsplash.com/512x256/?kitten" alt=""></div>
          <div class="column is-6">
            <form>
              <div class="field">
                <div class="control">
                  <input class="input" type="email" placeholder="Email">
                </div>
              </div>
              <div class="field">
                <div class="select is-fullwidth"><select><option disabled="" selected="">Select product</option><option>Product 1</option><option>Product 2</option><option>Product 3</option></select></div>
              </div>
              <div class="field">
                <div class="control"><textarea class="textarea" rows="5" placeholder="Message..."></textarea></div>
              </div>
              <div class="field">
                <div class="control">
                  <button class="button is-primary is-fullwidth" type="submit">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>`,
    category: 'Bulma➡️Templates',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">'
  });

  plugin('bulma_templates_contact2', {
    label:    'Contact form 2',
    content: `
    <section class="section">
      <div class="container py-4">
        <h2 class="title has-text-centered mb-6">Contact us</h2>
        <div class="columns">
          <div class="column is-6">
            <h4 class="title is-spaced is-4">Send a message</h4>
            <p class="subtitle">We answer your questions</p>
            <div>
              <div class="media">
                <div class="media-left"><figure class="image is-24x24"><img src="https://source.unsplash.com/99x99/?kitten" alt=""></figure></div>
                <div class="media-content">
                  <div class="content">
                    <p>Fake Street 123</p>
                  </div>
                </div>
              </div>
              <div class="media">
                <div class="media-left"><figure class="image is-24x24"><img src="https://source.unsplash.com/99x99/?kitten" alt=""></figure></div>
                <div class="media-content">
                  <div class="content">
                    <p>666-666-666</p>
                  </div>
                </div>
              </div>
              <div class="media">
                <div class="media-left"><figure class="image is-24x24"><img src="https://source.unsplash.com/99x99/?kitten" alt=""></figure></div>
                <div class="media-content">
                  <div class="content">
                    <p>root@server.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-5 is-offset-1">
            <form>
              <div class="field">
                <div class="control">
                  <input class="input" type="email" placeholder="Email">
                </div>
              </div>
              <div class="field">
                <div class="select is-fullwidth"><select><option disabled="" selected="">Select product</option><option>Product 1</option><option>Product 2</option><option>Product 3</option></select></div>
              </div>
              <div class="field">
                <div class="control"><textarea class="textarea" rows="5" placeholder="Message..."></textarea></div>
              </div>
              <div class="field">
                <div class="control">
                  <button class="button is-primary is-fullwidth" type="submit">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>`,
    category: 'Bulma➡️Templates',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">'
  });

  plugin('bulma_templates_learn', {
    label:    'Learn More',
    content: `
    <section class="section">
      <div class="container py-r">
        <h2 class="title">Meet our product</h2>
        <div class="columns">
          <div class="column is-9"><a href="#"><img src="https://source.unsplash.com/256x256/?kitten" alt=""></a></div>
          <div class="column is-3">
            <div class="columns is-mobile is-multiline">
              <div class="column is-4-mobile is-12-tablet"><a href="#"><img src="https://source.unsplash.com/99x99/?kitten" alt=""></a></div>
              <div class="column is-4-mobile is-12-tablet"><a href="#"><img src="https://source.unsplash.com/99x99/?kitten" alt=""></a></div>
              <div class="column is-4-mobile is-12-tablet"><a href="#"><img src="https://source.unsplash.com/99x99/?kitten" alt=""></a></div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column is-half">
            <h4 class="title is-spaced is-4">Title</h4>
            <p class="subtitle">subtitle</p>
            text
          </div>
        </div>
      </div>
    </section>`,
    category: 'Bulma➡️Templates',
    media:    '<img src="bulma.svg" height=32 width=32 loading="lazy">'
  });


}
