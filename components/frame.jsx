import React, { Component } from 'react'
import { withRouter } from 'next/router'

class FrameComponent extends Component {
  componentDidMount() {
    console.log(this._link)
    this.setState({ counter:  0 })
    this.getData()

    this.props.router.events.on('routeChangeComplete', (url) => {
    // this.getData()
     console.log(url)
     this.setState({
      loading:true
     })
     this.paginate(url)
    });
  }
  
  _link = `https://konga-jumia.herokuapp.com/${this.props.type}${this.props.router.asPath.replace('/search', '')}`

  getData = async () => {
    const res = await fetch(this._link);
    console.log(this._link)
    const data = await res.json();

    console.log(data);

    this.setState({
      products:data.items,
      totalPage:data.page,
      loading:false
    })
  }

  paginate = async(url) => {
    let newlink = url.replace('/search','');
    let link = `https://konga-jumia.herokuapp.com/${this.props.type}${newlink}`
    this.setState({
      products:[],
      loading:true
    })
    const res = await fetch(link);
    console.log(link)
    const data = await res.json();

    console.log(data)

    this.setState({
      products:data.items,
      totalPage:data.page,
      loading:false
    })
  }

  state={
    counter:0,
    products:[],
    totalPage:'',
    loading:true
  }

  render() {
    const PrevPage = (e) => {
      // this.setState({ counter:  +this.props.router.query.page + 1 })
      if(this.state.counter > 0){
        this.setState({counter:this.state.counter - 1})
      }else{
        this.setState({counter:0})
      }
      page()
    }

    const page = async() => {

      let {term , page} = this.props.router.query
      
      let link = `https://konga-jumia.herokuapp.com/${this.props.type}?term=${term}&page=${this.state.counter}`
      this.setState({
        products:[],
        loading:true
      })

      const res = await fetch(link);
      console.log(link)
      const data = await res.json();

      console.log(data);

      this.setState({
        products:data.items,
        totalPage:data.page,
        loading:false
      })

    }

    const Nextpage = (e) => {
      this.setState({counter:this.state.counter + 1})
      page()
    }

    const listItems = this.state.products.filter((product) => product.image !== null).map((product, i) =>
      <div className="lg:w-1/2 bg-green-600 lg:p-3 p-2 text-white w-full" key={i}>
        <div className="bg-white text-black rounded-lg flex items-center" style={{height:'300px'}}>
          <div className="w-full">
            <p className="m-2 lg:m-3 text-xs lg:text-sm">{product.name.slice(0,50)+ '...'}</p>
            <img src={product.image} className="m-auto rounded-lg object-contain" style={{height:'170px'}}/>
            <div className="flex justify-between lg:m-3 m-2 text-xs lg:text-sm">
              <p>{product.price}</p>
              <a href={product.link} target="_blank" > View </a>
            </div>
          </div>
        </div>
        
      </div>
    );
    return (
      <>
        {this.state.loading ? <div className="flex justify-center item-center mt-20">
          <div id="button"></div >
        </div>: ''}
        <section className="flex flex-wrap max-h-screen overflow-y-auto bg-white m-1 lg:m-3">
          {listItems}
        </section>
        <section className="pagination class flex flex-wrap justify-center items-center pb-5 fixed l-0 r-0 m-auto w-1/2" style={{bottom:'30px'}}>
          <button className="lg:p-2 p-1 text-xs lg:text-sm bg-green-500 text-white rounded-lg mr-3" onClick={Nextpage}>
            {'Next >'}
          </button>

          <span className="text-xs lg:text-sm">{this.state.counter} of {this.state.totalPage } </span> 

          <button className="lg:p-2  p-1 bg-white text-green-800 text-xs lg:text-sm rounded-lg ml-3" onClick={PrevPage}>
            {'< Prev'}
          </button>
        </section>

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
      </>

      
    )
  }
}

export default withRouter(FrameComponent)