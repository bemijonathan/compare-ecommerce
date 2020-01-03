import Nav from '../components/navbar'
import "../components/index.css"
import Head from 'next/head'
import Footer from '../components/footer'
import Link from 'next/link'
import { Component } from 'react'
import {withRouter} from 'next/router'
class HomePage extends Component {
    state={
        term:''
    }
    render(){
        const getValue = (e) => {
            console.log(e.target.value)
            this.setState({ term: e.target.value });
          }

          const searchValue = () => {
            this.props.router.push(`/search?term=${this.state.term}&page=0`)
          }
    
    return (
        <div>
            <Head>
                <title>My page title</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Nav></Nav>
            <div className="body bg-green-400 flex lg:flex-no-wrap flex-wrap lg:text-left text-center lg:text-sm text-sm items-center">
                <img src="/bags.png" style={{maxWidth:'300px'}} className="lg:m-10 mx-auto"/>
                <div className="lg:text-5xl text-lg text-white lg:m-10 m-5 flex-1">
                    Compare The Prices Of Goods from Two Ecommerce Websites
                    <p> 
                    <input type="search" placeholder="handbags" onInput={getValue} className="bg-white text-lg px-3 py-2 rounded-lg lg:w-auto w-full text-black"/>
                    <button onClick={searchValue} className="bg-white text-lg px-3 text-black py-2 rounded-lg lg:ml-5 my-5 hover:text-black hover:bg-green-500">
                        Search
                    </button>
                    {/* <Link href="/search?term=''&page=0">
                        
                    </Link> */}
                       
                    </p>
                </div>
            </div>
            <div className="flex lg:flex-no-wrap flex-wrap my-10 items-center">
                <div className="lg:p-10 p-5 m-3 text-lg w-full">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Inventore quaerat beatae similique, fugit odit iure dolore deserunt, 
                    necessitatibus sunt, reprehenderit harum obcaecati perspiciatis quo 
                    ratione esse totam possimus a saepe!
                </div>
                <div className="lg:p-10 p-5 m-3 text-lg w-full">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Inventore quaerat beatae similique, fugit odit iure dolore deserunt, 
                    necessitatibus sunt, reprehenderit harum obcaecati perspiciatis quo 
                    ratione esse totam possimus a saepe!
                </div>
                <div className="w-full">
                    <img src="/illustration.png" style={{maxWidth:'300px'}} className="lg:m-6 m-auto"/>
                </div>
            </div>
            {/* <div className="bg-green-300 text-center p-10">
                
                <button className="bg-white text-lg px-3 py-2 rounded-lg ml-5 hover:text-white hover:bg-green-500">
                     Search
                </button>
            </div> */}
            <Footer/>
        </div>
        )
    }
}

export default withRouter(HomePage)