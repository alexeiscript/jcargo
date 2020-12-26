import {LandingComponent} from '@core/LandingComponent'
import image2 from './persons.svg'

export class About extends LandingComponent {
    static className = 'about-section'

    toHTML() {
        return `
            <div id="aboutUs"></div>
            <div id="about" class="about-div" data-offset="500px"> 
                <h1>ABOUT US</h1>
                <div class="text-div">
                    <div class="text-left">
                        <p>We are a removals and 
                        delivery company based 
                        in East London, with 
                        nationwide coverage. 
                        Our services are 
                        available 24/7
                        and on short notice.
                        </p>
                    </div>
                    <div class="text-middle">
                        <p>Whether you’re moving home, relocating your 
                        business, or simply need an item moved from 
                        one destination to another,  J CARGO gladly offers 
                        solutions tailored to suit your needs. Our dedicated 
                        team can handle any type of 
                        transportation service in London,  the surrounding 
                        areas and even nationwide.</p>
                    </div>
                    <div class="text-right">
                        <p>The vehicles in our fleet are equipped with tail lifts,
                        pallet trucks, straps and blankets - all of which assure 
                        an efficient process, allowing your goods to be
                        transported in a safe and responsible manner.</p>
                    </div>
                </div>
                <div class="image-div-2">
                    ${image2}
                </div>
            </div>
        `
    }
}
