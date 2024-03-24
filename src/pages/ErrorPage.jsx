import Layout from "../Layout";

const ErrorPage = () => {
    return (
        <Layout>
            <div className={'flex-grow justify-center'}>
                <img src={'./bearValley.JPG'} alt="Photo captured at Bear Valley, California by Alex Kefer"
                     className={'flex-auto rounded-3xl hover:scale-[101%] transition duration-300  drop-shadow-2xl hover:ring-4'}/>
                <div
                    className="text-center text-white justify-center flex flex-col my-6 bg-black bg-opacity-15 p-4 rounded-2xl">
                    <h1 className="text-4xl font-bold">404</h1>
                    <h2 className="text-2xl">Page Not Found</h2>
                    <p className="text-lg">Sorry, the page you are looking for does not exist.</p>
                    <p className={'text-md font-thin'}>Either the page you are looking for really does not exist or is still a
                        work in progress.</p>
                </div>
            </div>
        </Layout>
    );
}

export default ErrorPage;