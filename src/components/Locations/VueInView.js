import debounce from 'lodash.debounce'

export default class VueInView {
    //private properties
    static #options = {
        wait: 0
    }
    static #elements = []
    #element
    #bind
    #vnode

    static install(Vue, options = {}) {
        this.#options = Object.assign(this.#options, options)
        Vue.directive('in-view', this.directive)
    }

    static get mixin() {
        return {
            directives: {
                inView: this.directive
            }
        }
    }

    static get directive() {
        return {
            unbind: (e, b) => this.unbind(e, b),
            inserted: (e, b, v) => this.inserted(e, b, v)
        }
    }

    static unbind() {
        this.#elements = []
    }

    static inserted(element, bind, vnode) {
        this.#elements.push(new this(element, bind, vnode))

        let listener = debounce(this.scrollListener.bind(this), this.#options.wait)

        window.addEventListener('scroll', listener)
        window.addEventListener('resize', listener)

        // this.scrollListener()
    }

    static scrollListener() {
        this.#elements.forEach(x => x.scrollHandler())
        this.mostInView.emit()
    }

    static get mostInView() {
        return this.#elements.sort((a, b) => (a.percentInView > b.percentInView) ? 1 : -1).reverse()[0]
    }

    constructor(e, b, v) {
        this.#element = e
        this.#bind = b
        this.#vnode = v
        this.scrollValue = window.pageYOffset
    }

    scrollHandler() {
        var viewportTop = window.pageYOffset,
            viewportHeight = window.document.documentElement.clientHeight,
            viewportBottom = viewportTop + viewportHeight,
            documentHeight = window.document.documentElement.scrollHeight,
            scrollPercent = this.roundPercent(viewportTop / (documentHeight - viewportHeight))

        this.rect = this.#element.getBoundingClientRect()

        var elementTop = this.rect.top + viewportTop,
            elementBottom = elementTop + this.rect.height,
            topIn = elementTop > viewportTop && elementTop < viewportBottom,
            bottomIn = elementBottom > viewportTop && elementBottom < viewportBottom,
            percentInView = topIn || bottomIn ? ((bottomIn ? elementBottom : viewportBottom) - (topIn ? elementTop : viewportTop)) / this.rect.height : 0,
            centerPercent = (elementTop - viewportTop + this.rect.height / 2) / viewportHeight,
            zeroPoint = viewportTop - this.rect.height,
            topPercent = (elementTop - zeroPoint) / (viewportBottom - zeroPoint)
        // isAbove = percentInView === 0 && elementTop < viewportTop,
        // isBelow = percentInView === 0 && elementTop > viewportTop

        this.percentInView = percentInView
        this.percentTop = this.roundPercent(topPercent)
        this.percentCenter = this.roundPercent(centerPercent)
        this.scrollPercent = scrollPercent
        this.scrollValue = viewportTop - this.scrollValue

        // this.emit()
    }

    emit() {
        let eventName = 'in-view'
        // if (this.percentInView > 0) {
        // }
        if (this.#vnode.componentInstance) {
            this.#vnode.componentInstance.$emit(eventName, { detail: this })
        } else {
            this.#vnode.elm.dispatchEvent(new CustomEvent(eventName, { detail: this }))
        }
    }

    roundPercent(val) {
        return (val * 1000 | 0) / 1000
    }
}
