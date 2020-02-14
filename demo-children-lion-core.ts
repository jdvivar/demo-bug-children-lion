import {
  html,
  LitElement,
  TemplateResult,
} from '@lion/core'

export class DemoChildren extends LitElement {

  render (): TemplateResult {
    return html`
        ${[...this.children]}
    `
  }
}