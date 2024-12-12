import './app.css'
import App from './App.svelte'
import { mount } from "svelte";

/** 
 * This should be here
 * @name  am here
 *
*/
const app = mount(App, {
  target: document.getElementById('app')
})

export default app
