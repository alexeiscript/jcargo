import {MainComponent} from '@/components/MainComponent/MainComponent'
import {Header} from '@/components/header/Header'
import {Home} from '@/components/home/Home'
import {About} from '@/components/about/About'
import {Services} from '@/components/services/Services'
import {Contact} from '@/components/contact/Contact'
import {Footer} from '@/components/footer/Footer'
import './scss/styles.scss'

const jcargo = new MainComponent('#app', {
    components: [Header, Home, About, Services, Contact, Footer]
})

jcargo.render()
