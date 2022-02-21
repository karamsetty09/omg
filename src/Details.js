// component can be created using functions or classes.
// this component deals with cretion of component usign class(old way).

import { Component } from "react";
import { withRouter } from "react-router-dom"; //eslint-disable-line
import Carousel from "./Carousal";

class Details extends Component {
    state  = {loading: true};
//  npm i -D @babel/plugin-proposal-class-properties@7.13.0 @babel/preset-env@7.13.5 @babel/eslint-parser@17.13.4
//  By installing above three below code can be shortened. 
//   constructor() {
//     super();
//     this.state = { loading: true };
//   }
  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );

    const json = await res.json();

    this.setState(
      Object.assign(
        {
          loading: false,
        },
        json.pets[0]
      )
    );

    // this.setState({
    //     loading: false,
    //     name: json.pets[0].name,
    //     breed: json.pets[0].breed,
    //     animal: json.pets[0].animal,
    // })
  }
  render() {
    if(this.state.loading){
        return <h2>Loading ...</h2>
    }
    const {animal, breed, city, state, description, images, name} = this.state;
     return (
        <div className="details">
            <Carousel images={images}></Carousel>
            <div>
                <h1>{name}</h1>
                <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
                <button>Adopt {name}</button>
                <p>{description}</p>
            </div>
        </div>
    );
  }
}
export default withRouter(Details);