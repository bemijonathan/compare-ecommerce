import React, { Component } from 'react'
import Nav from '../../components/navbar';
import "../../components/index.css"
import Footer from '../../components/footer'
import Frame from '../../components/frame'

export default class SearchComponent extends Component {
  state = {
    term: '',
    site1: true,
    site2: true
  }
  
  render() {
    const getValue = (e) => {
      console.log(e.target.value)
      this.setState({ term: e.target.value });
    }
    const changeSite = (e, site) => {
      console.log(e.target.checked, e.target)
      this.setState({
        site: e.target.value
      })
      console.log(this.state)
    }
    return (
      <>
        <div>
          <Nav />
          <div className="bg-green-700 p-4 text-center flex sm:flex-wrap justify-center items-center">
            <input type="text" name="" placeholder="what item are you searching for" onInput={getValue} id="" className="bg-white mr-3 rounded-lg py-1 px-3" />
            <input type="checkbox" id="" className="ml-3" checked /> Jumia
          <input type="checkbox" className="ml-3" checked /> Konga
          <input type="checkbox" name="" id="" className="ml-3" disabled /> Amazon
          <input type="checkbox" name="" id="" className="ml-3" disabled /> OLX Nigeria
          <input type="checkbox" name="" id="" className="ml-3" disabled /> Jiji
          <input type="checkbox" name="" id="" className="ml-3" disabled /> Alibaba
          <button className="bg-white rounded-lg py-1 px-3 ml-5"> Search </button>
          </div>
          <section className="min-h-screen bg-green-200 flex flex-wrap ">
            <section className="h-100 flex-1">
              <h1 className="text-center text-lg pt-3"> Jumia </h1>
              <div className="flex justify-center item-center mt-20">
                <div id="button"></div >
              </div>
              <div>
                <Frame type={'jumia'}/>
              </div>
            </section>
            <section className="flex-1">
              <h1 className="text-center text-lg pt-3"> Konga </h1>
              <div className="flex justify-center item-center mt-20">
                <div id="button"></div >
              </div>
              <div>
                <Frame type={'konga'}/>
              </div>
            </section>
          </section>
          <Footer />

          <style jsx>{`
            #button {
              height: 40px;
              width: 40px;
              background: transparent;
              border-radius: 50%;
              border: 1px solid white;
              border-top: 2px solid green;
              animation: spinner1 600ms linear infinite;
            }
            @keyframes spinner1 {
              to {
                transform: rotate(360deg);
              }
            }
          `}
        </style>
        </div>
      </>
    )
  }
}
