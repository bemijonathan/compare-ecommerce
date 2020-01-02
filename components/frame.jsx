import React, { Component } from 'react'
import { withRouter } from 'next/router'

class FrameComponent extends Component {
  componentDidMount() {
    console.log(this._link)
  }
  _link = `https://konga-jumia.herokuapp.com/${this.props.type}${this.props.router.asPath.replace('/search', '')}`

  getData = async () => {
    // https://konga-jumia.herokuapp.com/konga?term=shoe&page=2
  }

  render() {
    return (
      <>
        <section>
          <div>
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
        <section>
          <div>
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
      </>
    )
  }
}

export default withRouter(FrameComponent)