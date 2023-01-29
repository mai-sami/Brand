import Header from "../Components/Header/Header";
import Footer from "../Components/Footer";
import Copyright from "../Components/Footer/Copyright";
import Subscribe from '../Components/Subscribe'
import SubFooter from "../Components/Footer/SubFooter";
 

export function BaseLayout({ children }) {
    return (
        <div>
            <Header />
             {children}
            <Subscribe />
            <Footer />
            <Copyright />
        </div>
    )
}

export function BaseLayoutGust({ children }) {
    return (
        <>
            {children}
            <SubFooter />
        </>
    )
}