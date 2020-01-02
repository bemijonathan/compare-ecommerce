import React, { Component } from 'react'
import { withRouter } from 'next/router'

class FrameComponent extends Component {
  componentDidMount() {
    console.log(this._link)
    this.setState({ counter:  +this.props.router.query.page })
  }
  _link = `https://konga-jumia.herokuapp.com/${this.props.type}${this.props.router.asPath.replace('/search', '')}`

  getData = async () => {
    await fetch(this._link,).then(e => console.log(e))
    // https://konga-jumia.herokuapp.com/konga?term=shoe&page=2
  }

  state={
    counter:0
  }

  render() {
    const PrevPage = (e) => {
      // this.setState({ counter:  +this.props.router.query.page + 1 })
      if(this.state.counter > 0){
        this.setState({counter:this.state.counter - 1})
      }else{
        this.setState({counter:0})
      }
      console.log(this.state)
    }
    return (
      <>
        <section className="flex flex-wrap ">
          <div className="w-1/4">
            <div>
              Image
              </div>
            <div>
              title
              </div>
            <div>
              Price
              </div>
            <button>
              Visit
              </button>
          </div>
        </section>
        <section className="pagination class flex flex-wrap justify-center items-center">
          <button className="p-2 bg-green-500 text-white rounded-lg mr-3" >
            Next >>
          </button>

          <button className="p-2 bg-white text-green-800 rounded-lg mr-3" onClick={PrevPage}>
            {'Prev <<'}
          </button>
        </section>
      </>
    )
  }
}

export default withRouter(FrameComponent)