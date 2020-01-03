import React, {Component} from 'react';

export default class componentName extends Component {
  render() {
    return (
      <>
      <div className="flex justify-between items-center p-2">
        <a className="" href="/"> <b>SHOP</b>bine </a>
        <div className="flex list-none">
          <li className="m-2">Support</li>
          <li className="m-2">Join Us</li>
          {/* <li className="m-2">Developers</li> */}
        </div>
      </div>
      </>
    )
  }
}
