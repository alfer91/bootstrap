# CSS 프레임워크 BootStrap
1. [CDN 프로젝트 생성](#cdn-프로젝트-생성)
1. [버튼과 버튼 그룹](#버튼과-버튼-그룹)
1. [드롭다운과 리스트](#드롭다운과-리스트)
1. [양식, 모달](#양식-모달)
1. [툴팁](#툴팁)
1. [NPM 프로젝트 생성](#npm-프로젝트-생성)
1. [테마 색상 커스터마이징](#테마-색상-커스터마이징)
1. [성능 최적화/트리 쉐이킹](#성능-최적화트리-쉐이킹)

# CSS 프레임워크 BootStrap

## CDN 프로젝트 생성
[bootstrap](https://getbootstrap.com/) 사용하기 위해 css와 js 모두 필요  
[popper.js](https://popper.js.org/) : bootstrap 사용을 위해 필요  
- bootstrap bundle js
- seprated js * 2  
---
`index.html`
```html
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
</head>
```

## 버튼과 버튼 그룹
[Bootstrap - Components - Buttons](https://getbootstrap.com/docs/5.1/components/buttons/)  
[Bootstrap - Components - Button group](https://getbootstrap.com/docs/5.1/components/button-group/)  


```html
<body>
  <div class="btn-group">
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-outline-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <div class="btn btn-outline-primary">ABC</div>
  </div>
</body>
```

## 드롭다운과 리스트
[Bootstrap - Components - Dropdowns](https://getbootstrap.com/docs/5.1/components/dropdowns/)  
[Bootstrap - Components - List group](https://getbootstrap.com/docs/5.1/components/list-group//)  
```html
<body>
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown button
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div>
</body>
```
```html
<body>
  <ul class="list-group">
    <li class="list-group-item list-group-item-action">An item</li>
    <li class="list-group-item list-group-item-action active">A second item</li>
    <li class="list-group-item list-group-item-action">A third item</li>
    <li class="list-group-item list-group-item-action">A fourth item</li>
    <li class="list-group-item list-group-item-action">And a fifth one</li>
  </ul>
</body>
```

## 양식, 모달
[Bootstrap - Form](https://getbootstrap.com/docs/5.1/forms/overview/)  
[Bootstrap - Components - Modal](https://getbootstrap.com/docs/5.1/components/modal/)  
[Bootstrap - Components - Modal -Via JavaScript](https://getbootstrap.com/docs/5.1/components/modal/#via-javascript)  
`main.js`
```js
const emailInputEl = document.querySelector('#exampleInputEmail1');
const modalEl = document.querySelector('#exampleModal');

modalEl.addEventListener('shown.bs.modal', function () {
  emailInputEl.focus()
})
```
`index.html`
```html
<body>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
  </button>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </div>
</body>
```

## 툴팁
[Bootstrap - Components - Tooltips](https://getbootstrap.com/docs/5.1/components/tooltips/)  
you must initialize them yourself - 초기화 필요  
`main.js`
```js
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
```
`index.html`
```html
<body>
  <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
    Tooltip on top
  </button>
  <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right">
    Tooltip on right
  </button>
  <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">
    Tooltip on bottom
  </button>
  <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on left">
    Tooltip on left
  </button>
</body>
```

## NPM 프로젝트 생성
[Bootstrap - Installation](https://getbootstrap.com/)  
`index.html` bootstrap cdn 제거
```bash
$ npm init -y
$ npm i -D parcel-bundler
$ npm i bootstrap@next // beta 버전, project 이름과 module 이름 겹침 주의
```
`package.json`
```json
"scripts": {
  "dev": "parcel index.html",
  "build": "parcel build index.html"
},
```
`main.js`
```js
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle' // bootstrap.bundle 바로 접근
```
`./scss/main.scss`
```scss
@import "../node_modules/bootstrap/scss/bootstrap" // node_modules 거쳐서 접근
```
`index.html`
```html
<head>
  <link rel="stylesheet" href="./scss/main.scss">
  <script defer src="./main.js"></script>
</head>
<div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown button
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div>
```

## 테마 색상 커스터마이징
[Bootstrap - Customize - Color](https://getbootstrap.com/docs/5.1/customize/color/)  
Check out [our Sass maps and loops docs](https://getbootstrap.com/docs/5.1/customize/sass/#maps-and-loops) - Variable defaults

`main.scss`
```scss
@import "../node_modules/bootstrap/scss/functions";
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/mixins";

// Default variable overrides
$theme-colors: (
  "primary":    $primary,
  "secondary":  yellowgreen,  
  "success":    $success,
  "info":       $info,
  "warning":    $warning,
  "danger":     $danger,
  "light":      $light,
  "dark":       $dark
);

@import "../node_modules/bootstrap/scss/bootstrap" // node_modules 거쳐서 접근
```
`index.html`
```html
<body>
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown button
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div>

  <div class="spinner-border text-secondary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</body>
```

## 성능 최적화/트리 쉐이킹
[Bootstrap - Customize - Optimize](https://getbootstrap.com/docs/5.0/customize/optimize/)  
[Bootstrap - Components - Dropdowns - via-javascript](https://getbootstrap.com/docs/5.0/components/dropdowns/#via-javascript)  
[Bootstrap - Components - Modal - via-javascript](https://getbootstrap.com/docs/5.0/components/modal/#via-javascript)  
[popper.js](https://popper.js.org/) - npm
```bash
$ npm i @popperjs/core
```

### Optimize - Dropdown, Spinner, Button, Modal
`main.js`
```js
import Dropdown from 'bootstrap/js/dist/dropdown'
import Modal from 'bootstrap/js/dist/modal'

const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
dropdownElementList.map(function (dropdownToggleEl) {
  return new Dropdown(dropdownToggleEl)
})

new Modal(document.querySelector('#exampleModal'), {
  backdrop: 'static'
})
// button, spinner, ... js 관련 초기화가 필요없는 것들도 있음
```
`main.scss`
```scss
@import "../node_modules/bootstrap/scss/functions";
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/mixins";

$theme-colors: (
  "primary":    $primary,
  "secondary":  yellowgreen,
  "success":    $success,
  "info":       $info,
  "warning":    $warning,
  "danger":     $danger,
  "light":      $light,
  "dark":       $dark
);

@import "../node_modules/bootstrap/scss/bootstrap" // 스타일은 개별적으로 가져오지 않음
```

`index.html`
```html
<body>
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
      aria-expanded="false">
      Dropdown button
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div>

  <div class="spinner-border text-secondary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>

  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
  </button>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</body>
```

