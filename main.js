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
