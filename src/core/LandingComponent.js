import {DomListener} from '@core/DomListeners'

export class LandingComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
  }
    // return html template
    toHTML() {
        return ''
    }

    init() {
      this.initDomListeners()
    }

    destroy() {
      this.removeDomListeners()
    }
}
