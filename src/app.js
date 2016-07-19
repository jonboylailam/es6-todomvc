import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'
import './app.css'

import {$on} from './helpers'
import {updateTodo} from './todo'
import toggleGraph from './graph'

$on(window, 'load', onLoad)
$on(window, 'hashchange', updateTodo)

// this is exported for Hot Module Replacement
export function onLoad() { // eslint-disable-line import/prefer-default-export
  updateTodo()
  const toggleGraphButton = document.querySelector('.toggle-graph')
  $on(
    toggleGraphButton,
    'click',
    () => {
      const active = toggleGraph()
      if (active) {
        toggleGraphButton.classList.add('active')
      } else {
        toggleGraphButton.classList.remove('active')
      }
    },
  )
}
