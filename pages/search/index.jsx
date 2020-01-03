import React, { Component } from 'react'
import Nav from '../../components/navbar';
import "../../components/index.css"
import Footer from '../../components/footer'
import Frame from '../../components/frame'
import {withRouter} from 'next/router'

class SearchComponent extends Component {
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
    const searchValue = () => {
      this.props.router.push(`/search?term=${this.state.term}&page=0`)
    }
    return (
      <>
        <div>
          <Nav />
          <div className="bg-green-700 p-4 text-center flex flex-wrap lg:flex-nowrap justify-center items-center">
            <input type="text" name="" placeholder="what item are you searching for" onInput={getValue} id="" className="bg-white lg:mr-3 m-3  rounded-lg py-1 px-3 lg:w-auto w-full" />
            <input type="checkbox" id="" className="ml-3" checked /> Jumia
          <input type="checkbox" className="ml-3" checked /> Konga
          <input type="checkbox" name="" id="" className="ml-3" disabled /> Amazon
          <input type="checkbox" name="" id="" className="ml-3" disabled /> OLX Nigeria
          <input type="checkbox" name="" id="" className="ml-3" disabled /> Jiji
          <input type="checkbox" name="" id="" className="ml-3" disabled /> Alibaba
          <button className="bg-white rounded-lg py-1 px-3 lg:ml-5 m-0 w-1/2 lg:w-auto" onClick={searchValue}> Search </button>
          </div>
          <section className="min-h-screen flex">
            <section className="h-100 flex-1">
              <h1 className="text-center text-lg pt-3"> Jumia </h1>
              
              <div>
                <Frame type={'jumia'}/>
              </div>
            </section>
            <section className="flex-1">
              <h1 className="text-center text-lg pt-3"> Konga </h1>
            
              <div>
                <Frame type={'konga'}/>
              </div>
            </section>
          </section>
          <Footer />
        </div>
      </>
    )
  }
}

export default withRouter(SearchComponent)