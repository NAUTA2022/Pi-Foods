import LandingPage from "../components/LandingPage";
import Enzyme, {shallow} from "enzyme"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"

Enzyme.configure({adapter: new Adapter()});

describe('LandingPage',()=>{
    it("Debe decir Bienvenido",()=>{
        const wrapper = shallow(<LandingPage/>)
        const title = wrapper.find('div h1')
        expect(title.text()).toBe("Bienvenido")
    })
    it("Debe decir Empezar",()=>{
        const wrapper = shallow(<LandingPage/>)
        const button = wrapper.find('div Link button')
        expect(button.text()).toBe("Entrar")
    })
})