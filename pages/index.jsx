import Nav from '../components/navbar'
import "../components/index.css"
import Head from 'next/head'
import Footer from '../components/footer'
import Link from 'next/link'

function HomePage() {
    return (
        <div>
            <Head>
                <title>My page title</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Nav></Nav>
            <div className="body bg-green-400 flex items-center">
                <img src="/bags.png" width="300" className="m-10"/>
                <div className="text-5xl text-white m-10">
                    Compare The Prices Of Goods from Two Ecommerce Websites
                    <p> 
                    
                        <button className="bg-white text-black text-lg p-3 rounded-lg mr-10 hover:bg-green-700 hover:text-white">
                            <Link href="/search?term=&page=0"> Get started Now </Link>
                        </button>
                        <button className="bg-green-700 text-white text-lg p-3 rounded-lg">
                            How It works
                        </button>
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap my-10 items-center">
                <div className="p-10 m-3 text-lg w-1/3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Inventore quaerat beatae similique, fugit odit iure dolore deserunt, 
                    necessitatibus sunt, reprehenderit harum obcaecati perspiciatis quo 
                    ratione esse totam possimus a saepe!
                </div>
                <div className="p-10 m-3 text-lg w-1/3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Inventore quaerat beatae similique, fugit odit iure dolore deserunt, 
                    necessitatibus sunt, reprehenderit harum obcaecati perspiciatis quo 
                    ratione esse totam possimus a saepe!
                </div>
                <div className="flex-1">
                    <img src="/illustration.png" width="350" className="m-6"/>
                </div>
            </div>
            <div className="bg-green-300 text-center p-10">
                <input type="search" placeholder="handbags" className="bg-white text-lg px-3 py-2 rounded-lg"/>
                <button className="bg-white text-lg px-3 py-2 rounded-lg ml-5 hover:text-white hover:bg-green-500">
                     Search
                </button>
            </div>
            <Footer/>
        </div>
        )
}


<style jsx global>{`
    .body{
        background:green;
    }
`}</style>
export default HomePage