
// const IMPORTANT = true;
// console.log("hello Cedric");




// class HelloWorld extends Component {
//   render() {
//     return (<div> Hello World </div>);
//   }
// }
//
// ReactDom.render(
//   <HelloWorld />,
//   document.getElementById("app")
// );

const USER_DATA = {
  imageURL: "https://avatars.githubusercontent.com/u/4362970?v=3",
  username: "ga-wolf",
  name: "Wolf"
};


const ProfilePic = (props) => {
  return ( <img src={props.imageURL} style={{ width: "100px" }} /> );
};

const ProfileName = (props) => {
  return ( <h3><em>{props.name}</em></h3> );
};

const ProfileLink = (props) => {
  return (
    <div>
      <a href={`https://github.com/${props.username}`} target="_blank">
        {props.username}
      </a>
    </div>
  );
};

class Paragraph extends Component {
  render() {
    console.log(this);
    return ( <p>{this.props.children}</p> );
  }
}


const Avatar = (props) => {
    return (
      <div>
        <ProfilePic imageURL={props.user.imageURL} />
        <ProfileName name={props.user.name} />
        <ProfileLink username={props.user.username} />
        <Paragraph>Some custom text goes here</Paragraph>
      </div>
    );
  };



// class ProfilePic extends Component {
//   render() {
//     console.log( this.props );
//     return ( <img src={this.props.imageURL} style={{ width: "100px" }} /> );
//   }
// };

// class ProfileName extends Component {
//   render() {
//     return ( <h3><em>{this.props.name}</em></h3> );
//   }
// };

// class ProfileLink extends Component {
//   render() {
//     return (
//       <div>
//         <a href={`https://github.com/${this.props.username}`}>
//           {this.props.username}
//         </a>
//       </div>
//     );
//   }
// }

//
// class Avatar extends Component {
//   render () {
//     console.log( this.props );
//     return (
//       <div>
//         <ProfilePic imageURL={this.props.user.imageURL} />
//         <ProfileName name={this.props.user.name} />
//         <ProfileLink username={this.props.user.username} />
//       </div>
//     );
//   }
// }

ReactDom.render(
  <Avatar user={USER_DATA} />,
  document.getElementById("app")
);
