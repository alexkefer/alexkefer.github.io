import Header from "./components/Header";
import Footer from "./components/Footer";
import './pages/HomePage.css';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
    return (
        <div
            className="min-h-screen max-w-screen justify-between flex-col flex bg-gradient-to-tl from-cyan-500 via-sky-700 to-violet-700 animated-background">
            <div className="mx-auto flex flex-col max-w-4xl">
                <Header/>
                <main className="container mx-auto">
                    {/* Main content area */}
                    {children}
                </main>
            </div>
            <div className="static w-full bg-blue-950 bg-opacity-30 mt-24">
                <Footer/>
            </div>
        </div>
    );
};

export default Layout;