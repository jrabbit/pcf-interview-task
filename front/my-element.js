import { LitElement, html, css } from 'lit'

function getCookie (name) {
  let cookieValue = null
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim()
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1))
        break
      }
    }
  }
  return cookieValue
}

/**
 * An example element.
 * skeleton from https://github.com/PolymerLabs/lit-element-starter-js
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class SubscribeMatic extends LitElement {
  static get styles () {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
      }
    `
  }

  static get properties () {
    return {
      /**
       * The name to say "Hello" to.
       */
      name: { type: String },

      /**
       * The number of times the button has been clicked.
       */
      count: { type: Number }
    }
  }

  constructor () {
    super()
    this.name = 'World'
    this.count = 0
  }

  // https://lit.dev/docs/templates/lists/
  render () {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <form>
      <input name="name" required></input>
      <input type="email" required></input>
      <select name="subscription_type" required>
        <option>Free</option>
        <option>Plus</option>
        <option>Pro</option>
      </select>
        <input type="submit" value="add">
      </form>
      <slot></slot>
    `
  }

  _onClick () {
    /* do the ajax dance here */
    this.count++
  }

  // ref from https://kbarker.dev/blog/serialize-form-data-into-a-json-string-in-vanilla-js
  serializeJSON (form) {
    // Create a new FormData object
    const formData = new FormData(form)

    // Create an object to hold the name/value pairs
    const pairs = {}

    // Add each name/value pair to the object
    for (const [name, value] of formData) {
      pairs[name] = value
    }

    // Return the JSON string
    return JSON.stringify(pairs)
  }

  // end contrib
  _add_row () {
    const csrftoken = Cookies.get('csrftoken')
    const request = new Request(
      '/ajax-target',
      { headers: { 'X-CSRFToken': csrftoken } }
    )
    fetch(request, {
      method: 'POST',
      mode: 'same-origin' // Do not send CSRF token to another domain.
    }).then(function (response) {
      // ...
    })
  }
}

window.customElements.define('subscribe-matic', SubscribeMatic)
