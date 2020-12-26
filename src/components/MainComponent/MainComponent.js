import {$} from '@core/dom'

export class MainComponent {
    constructor(selector, options) {
        this.$element = $(selector)
        this.components = options.components || []
    }

    getRoot() {
        const $root = $.create('div', 'jcargo')

        this.components = this.components.map(Component => {
            const $element = $.create('section', Component.className)
            const component = new Component($element)
            $element.html(component.toHTML())
            $root.append($element)

            return component
        })
        return $root
    }

    render() {
        this.$element.append(this.getRoot())
        this.components.forEach(component => component.init())
    }
}