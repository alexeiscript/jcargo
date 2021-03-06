import {LandingComponent} from '@core/LandingComponent'

export class Header extends LandingComponent {
    static className = 'header'

    constructor($root) {
        super($root, {
            name: 'Header',
            listeners: ['click']
        })
    }

    toHTML() {
        return `
            <header id="header-id" > 
                <nav class="navigation">
                    <div class="whatsapp-icon">
                        <a href="https://wa.me/447440567819">
                            <i class="fab fa-whatsapp fa-2x"></i>
                        </a>
                    </div>
                    <div class="logo">
                        <a href="#">
                            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 501 288">
                            <defs><style>.class1{font-size:120px;fill:#fff;letter-spacing:-0.06em;}.class1,
                            .class2{font-family:Helvetica-Bold, Helvetica;font-weight:700;}.class2{font-size:35.49px;}
                            .class2,.class5{fill:#8ecfb8;}.class3{letter-spacing:-0.05em;}.class4{letter-spacing:-0.08em;}
                            </style></defs>
                            <title>jcargo-logo</title>
                            <text class="class1" transform="translate(-0.07 216.09)">J CARGO</text>
                            <text class="class2" transform="translate(-2.12 280.87)">REM<tspan class="class3" x="78.86" y="0">O</tspan>
                            <tspan class="class4" x="104.69" y="0">V</tspan><tspan x="125.53" y="0">ALS AND DELIVERIES</tspan>
                            </text><path class="class5" d="M292.7,94.77h90.68A5.61,5.61,0,0,0,388.87,88l-4.95-22.78a11.25,11.25,0,0,
                            0-6.07-7.73l-20-9.71A8.42,8.42,0,0,1,355,45.51l-30.38-37a11.25,11.25,0,0,0-8.69-4.1H292.7A5.62,5.62,0,0,0,
                            287.08,10V89.15A5.62,5.62,0,0,0,292.7,94.77Z"/>
                            <path class="class5" d="M272.45,4.41H119.73A13.54,13.54,0,0,0,106.19,18h0a13.42,13.42,0,0,0,13.43,
                            13.42h111.9a2.21,2.21,0,0,1,2.2,2.21v.28a2.23,2.23,0,0,1-2.23,2.23H155.17a13.55,13.55,0,0,0-13.54,
                            13.55h0a13.42,13.42,0,0,0,13.42,13.43h76.1a2.57,2.57,0,0,1,2.57,2.57h0a2.15,2.15,0,0,1-2.15,
                            2.15H183.5A13.55,13.55,0,0,0,170,81.34h0a13.43,13.43,0,0,0,13.43,13.43h89.07a11.34,11.34,0,0,0,
                            11.34-11.34V15.75A11.34,11.34,0,0,0,272.45,4.41Z"/>
                            </svg>
                        </a>
                    </div>
                    <div class="menu navbar navbar-expand-sm">
                        <ul class="navbar-nav">
                            <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="#aboutUs">About Us</a></li>
                            <li class="nav-item"><a class="nav-link" href="#ourServices">Our Services</a></li>
                            <li class="nav-item"><a class="nav-link" href="#contactUs">Contact</a></li>
                        </ul>
                    </div>
                    <button data-burger="hamburger" id="hamburger" class="hamburger">
                        <span data-burger="hamburger"class="burger"></span>
                    </button>
                    <ul id="mobile-menu" class="mobile-menu">
                        <li><a data-click="home" href="#">Home</a></li>
                        <li><a data-click="about" href="#aboutUs" data-offset="500px">About Us</a></li>
                        <li><a data-click="services" href="#ourServices" data-offset="500px">Our Services</a></li>
                        <li><a data-click="contact" href="#contactUs">Contact</a></li>
                    </ul>
                    <div class="contact">
                        <div class="contact-icon">
                            <a id="phone-nr" href="tel:+44-744-056-7819" 
                            rel="noopener noreferrer">
                                <i class="fas fa-phone-alt fa-2x"></i>
                            </a>
                        </div>
                        <div class="details">
                            <a id="email" href="mailto:contact@jcargo.co.uk" 
                            target="_blank" rel="noopener noreferrer">contact@jcargo.co.uk</a>
                            <a id="phone-nr" href="tel:+44-744-056-7819" 
                            rel="noopener noreferrer">07440 567 819</a>
                        </div>
                    </div>
                </nav>
            </header>
        `
    }

    onClick(event) {
        const mobileMenu = document.getElementById('mobile-menu');
        if (event.target.dataset.burger) {
            mobileMenu.classList.toggle('show');
        }
        if (event.target.dataset.click) {
            mobileMenu.classList.toggle('close');
            setTimeout(function() {
                mobileMenu.classList.remove('show');
                mobileMenu.classList.remove('close');
            }, 500)
        }
    }
}
