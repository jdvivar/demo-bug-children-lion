import {
  html,
  LitElement,
  TemplateResult,
} from 'lit-element'

export class DemoChildren extends LitElement {

  render (): TemplateResult {
    return html`
        ${[...this.children]}
    `
  }
}