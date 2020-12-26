import {LandingComponent} from '@core/LandingComponent'

export class Services extends LandingComponent {
    static className = 'services-section'

    toHTML() {
        return `
        <div id="ourServices"></div>
            <div id="services" class="services-div"> 
                <h1>OUR SERVICES</h1>
                <div class="icons">
                    <div class="removals top-row">
                        <div class="icon-title">
                            <div class="removals-svg svgs">
                                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 829 480">
                                    <defs><style>.van{fill:#243873;}.house{fill:#8ed0b9;}</style></defs>
                                    <title>removals-icon</title>
                                    <path class="van" d="M818.19,251l-90.34-37.2a17.42,17.42,0,0,1-7.47-5.87L645.6,
                                    105.13a17.43,17.43,0,0,0-14.11-7.19h-69.2a17.45,17.45,0,0,1-17.45-17.26l-.66-59.79A17.45,
                                    17.45,0,0,0,526.73,3.63H20.45A17.45,17.45,0,0,0,3,21.08V392.44a17.45,17.45,0,0,0,17.45,
                                    17.45H123.07a17.41,17.41,0,0,1,17.08,14,70.48,70.48,0,0,0,139.57-14c0-.08,0-.16,0-.24l303.54-.52A17.42,
                                    17.42,0,0,1,600.36,423a70.48,70.48,0,0,0,139.51-14.18h1l70.23,1.65A17.46,17.46,0,0,0,829,393.06V267.16A17.47,
                                    17.47,0,0,0,818.19,251Zm-608.95,192a36.28,36.28,0,1,1,36.27-36.27A36.27,36.27,0,0,1,209.24,443.06ZM589.36,
                                    210.91a12.2,12.2,0,0,1-12.2-12.2v-54a12.57,12.57,0,0,1,12.57-12.57h39a12.19,12.19,0,0,1,10.07,5.32L676,
                                    191.82A12.2,12.2,0,0,1,666,210.91Zm80,232.15a36.28,36.28,0,1,1,36.27-36.27A36.27,36.27,0,0,1,669.4,443.06Z"/>
                                    <polygon class="house" points="191 162 191 259 361 259 361 162 276 85 191 162"/>
                                </svg>
                            </div>
                            <h2>REMOVALS</h2>
                        </div>
                        <p>We will make sure your move runs smoothly and stress-free by guaranteeing 
                        safe handling of your cargo and delivering to the destination in a timely manner. 
                        Our vans are equipped with the necessary tools and equipment for an impecable job. </p>
                    </div>
                    <div class="man-van top-row">
                        <div class="icon-title">
                            <div class="man-van-svg svgs">
                                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1043 479">
                                    <defs><style>.icn,.van{fill:#243873;}.van{stroke:#fff;stroke-miterlimit:10;}</style></defs>
                                    <title>man-van</title>
                                    <path class="icn" d="M1032.19,248l-90.34-37.2a17.42,17.42,0,0,1-7.47-5.87L859.6,102.13a17.43,17.43,
                                    0,0,0-14.11-7.19h-69.2a17.45,17.45,0,0,1-17.45-17.26l-.66-59.79A17.45,17.45,0,0,0,740.73.63H234.45A17.45,
                                    17.45,0,0,0,217,18.08V389.44a17.45,17.45,0,0,0,17.45,17.45H337.07a17.41,17.41,0,0,1,17.08,14,70.48,70.48,
                                    0,0,0,139.57-14c0-.08,0-.16,0-.24l303.54-.52A17.42,17.42,0,0,1,814.36,420a70.48,70.48,0,0,0,139.51-14.18h1l70.23,
                                    1.65A17.46,17.46,0,0,0,1043,390.06V264.16A17.47,17.47,0,0,0,1032.19,248Zm-608.95,192a36.28,36.28,0,1,1,
                                    36.27-36.27A36.27,36.27,0,0,1,423.24,440.06ZM803.36,207.91a12.2,12.2,0,0,1-12.2-12.2v-54a12.57,12.57,0,0,1,
                                    12.57-12.57h39a12.19,12.19,0,0,1,10.07,5.32L890,188.82A12.2,12.2,0,0,1,880,207.91Zm80,232.15a36.28,36.28,0,1,1,
                                    36.27-36.27A36.27,36.27,0,0,1,883.4,440.06Z"/><circle class="icn" cx="88.5" cy="128.25" r="47.75"/>
                                    <path class="van" d="M44.5,337.84v7.51a19,19,0,0,1-18.81,19h0a19,19,0,0,1-19.19-19V236.5a40,40,0,0,1,40-40h85a40,
                                    40,0,0,1,40,40V345.31a19,19,0,0,1-19.19,19h0a19,19,0,0,1-18.81-19V460.67a18.83,18.83,0,0,1-18.83,18.83h-6.34A18.83,
                                    18.83,0,0,1,89.5,460.67V348.5h-1V460.67A18.83,18.83,0,0,1,69.67,479.5H63.33A18.83,18.83,0,0,1,44.5,460.67V265.5"/>
                                </svg>
                            </div>
                            <h2>MAN & VAN</h2>
                        </div>
                        <p>Prompt and efficient service for your Man and Van requirements. 
                        We’re happy to do the heavy lifting for you, as well as assembling and disassembling 
                        of items and even self-assisted loading and unloading of goods. </p>
                    </div>
                    <div class="courier bottom-row">
                        <div class="icon-title">
                            <div class="courier-svg svgs">
                                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 477">
                                    <defs><style>.crr{fill:#253873;}.crr{fill:#243873;}.crr1{fill:#fcfcfd;}</style></defs>
                                    <title>courier</title><path class="crr" d="M104,474c-49.76-.64-89.73-42.89-90.51-92.47C12.74,
                                    333.3,48.43,291,97.11,290.39c30.53-.41,44.89-.39,45-39.87,0-10.18.19-27.83.9-28.52.3-.3,87-2,90,1,
                                    4,4-.18,48.82,7,54,3.81,2.75,55.51,2.34,59,0,8.06-5.39.58-50.21,5-54,3.87-3.31,84-2,86,0,1.58,
                                    1.58-.54,158.48-.07,223.44.16,21.42-10.58,28.32-30.25,28-32.47-.54-64.95-.14-97.43-.14C262.26,473.67,156.86,474.68,104,474Z"/>
                                    <path class="crr" d="M169.7,115.42c0,18.84-1.09,28.59-.26,51.31C169.81,176.79,170,203,168,
                                    207c-1.9,3.8-25.37,1.95-26-1-1.1-5.11-1.41-30-1.16-37.26,1.16-33.74,0-56,.11-83.91C141,62,135,
                                    48,114.76,34.81c-8.57-5.58-25.83-10.32-17-25.08C108.39-8,131,12.34,131.46,12.68,181,50,165.75,79.83,169.7,115.42Z"/>
                                    <path class="crr1" d="M104,315.39c37.59-1.1,68.22,28.25,68.13,65.26-.08,34.79-28.82,63.75-64.31,
                                    64.82-37.54,1.13-68-28.11-68-65.28C39.78,345.27,68.34,316.42,104,315.39Z"/>
                                </svg>
                            </div>
                            <h2>COURIER</h2>
                        </div>
                        <p>Our courier can collect your parcel and deliver it to the desired address as quick as possible. We provide the safest 
                        same day courier delivery service solutions across the United Kingdom and deliver from and to London day or night. </p>
                    </div>
                    <div class="clearance bottom-row">
                        <div class="icon-title">
                            <div class="clearance-svg svgs">
                                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 487"><defs>
                                    <style>.clrnc{fill:#243873;}</style></defs><title>clearance</title>
                                    <path class="clrnc" d="M391.12,301.86c-.63-1.26-3.76-2.74-7.12-5.86-3.4,12.86-6.12,24.7-10,
                                    36-2.55,7.41-4,18.2-12.12,18.58-8.88.42-6.51-13.55-4.39-21.89,16.73-65.92,32.68-132,
                                    50.33-197.73,5.29-19.69,4.87-27.48-19.49-27.23-118.88,1.22-237.77.92-356.65.13-16.93-.11-21.31,
                                    4.48-20.71,21,1,27.68-1,55.6,9.49,82,11.49,28.82,6.36,56.75-1.23,85.45-16.06,60.77-5,
                                    122.9-7.15,184.39-.1,2.75,2.66,5.59,4.08,8.38h100c43.53-5,81.28-12.95,123.46-18.62,
                                    0-.07,0-.13,0-.21s.05-.36.07-.55C224.2,455,208.12,454,194.16,447.85c-6.14-2.7-12.85-4.92-10.08-13,
                                    2.59-7.59,9.14-7.25,15.89-4.89,54.35,19,110.42,32.88,163.67,55.13h42.84c1.42-2.8,4.08-5.59,
                                    4.09-8.39C410.62,417.7,419,357.73,391.12,301.86Zm-145.58-122c-11.78.86-23.67.22-35.52.22v.27c-10.27,
                                    0-20.55.23-30.82-.07-8-.24-13.8-4.66-14.87-12.59-1.1-8.24,4-13.71,11.76-15.26a178.43,
                                    178.43,0,0,1,70.62,0c6.77,1.35,11.46,6,11.65,13.1C258.58,173.83,253.42,179.29,245.54,179.87Z"/>
                                    <path class="clrnc" d="M185.25,85.22c11.84,0,20.7-.49,22.75-2.22,1.2-1,0-12.84-5.86-25.66C194.85,
                                    41.42,190.72,26.46,206,9.09c-43.8,0-83.19,0-122.58,0-4.88,0-9.74.39-12.9,4.52C53.05,36.4,
                                    35.71,59.32,16,85.24,76,85.24,130.62,85.3,185.25,85.22Z"/>
                                    <path class="clrnc" d="M235.08,85.17c55.18,0,110.36,0,164.93,
                                    0-9.45-25.87-55.06-61.92-69.57-72.9A16.44,16.44,0,0,0,320.57,9c-9.28-.06-29.63-.15-54.51,0C257,
                                    9,261,9,249.47,9,239,8.93,222,11,222,11c-4.59,3.68-9.58,12.09-10,18-1.24,17.33,11.37,37.56,
                                    16.39,55.21C228.65,85.11,232.76,85.17,235.08,85.17Z"/>
                                </svg>
                            </div>
                            <h2>CLEARANCE</h2>
                        </div>
                        <p>If there is waste you need removed from a property, we’re happy to help. The service covers collection of 
                        waste from anywhere on the property, 
                        loading it into a van, sweeping up any loose material, and delivering the waste to a licensed disposal facility.  </p>
                    </div>
                </div>
                <p id="side-note">If the service you are interested in is not in this section, please feel free to get in touch anyway, 
                as we strive to meet every need our customer might have, as long as it is safe and reasonable to do so.</p>
            </div>
        `
    }
}
