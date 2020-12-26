import {LandingComponent} from '@core/LandingComponent'

export class Footer extends LandingComponent {
    static className = 'footer-component'

    toHTML() {
        const year = new Date();
        const currentYear = year.getFullYear();
        return `
            <div class="footer-div"> 
                <div class="title">
                    <h3>&copy J CARGO LTD ${currentYear}</h3>
                </div>
                <div class="icons">
                    <p>Designed and developed by <a href="https://alexei.one">Alexei Stavila</a></p>
                </div>
            </div>
        `
    }
}
