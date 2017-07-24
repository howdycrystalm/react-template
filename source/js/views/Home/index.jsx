import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { testAction, testAsync } from 'actions/app';
import Icon from 'components/Global/Icon';
import bookImg from '../../../assets/img/book2.jpg';
import SquareBox from 'components/Global/SquareBox'
import BannerBox from 'components/Global/BannerBox'
import InfoBox from 'components/Global/InfoBox'
import { routeCodes } from '../../views/App';


export default class Home extends Component {
  static propTypes = {
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='Home'>
        <h1>Self Help Law Center</h1>
        <BannerBox boxTitle='Do I need a lawyer?'
             boxContent='Learn more about representing yourself in court, and explore frequently asked questions.'
             buttonText='FAQs'
             buttonLink={ routeCodes.FAQs }
        />
        <div className='grid grid-pad'>
          <SquareBox boxTitle='Small Claims'
               imgSrc='../assets/icons/smallclaims.svg'
               boxContent='Filing a Small Claim' /> 
          <SquareBox boxTitle='Eviction'
               imgSrc='../assets/icons/eviction.svg' /> 
          <SquareBox boxTitle='Traffic'
               imgSrc='../assets/icons/traffic.svg' /> 
          <SquareBox boxTitle='Domestic Violence'
               imgSrc='../assets/icons/dv.svg' /> 
          <SquareBox boxTitle='Family Law'
               imgSrc='../assets/icons/family.svg' /> 
          <SquareBox boxTitle='Guardianship'
               imgSrc='../assets/icons/guardianship.svg' /> 
        </div>
        <InfoBox boxTitle='FAQs'
             boxContent='[list of 5 FAQs]'
             buttonText='View'/>
      </div>

    )
  }
}

/// going to want to iterate over the <SquareBox /> component and fill it with the different categories and their links
/// reference Knock for iteration template... 
/// how to display links for square-box on hover?


















// @connect(state => ({
//   asyncData: state.app.get('asyncData'),
//   asyncError: state.app.get('asyncError'),
//   asyncLoading: state.app.get('asyncLoading'),
//   counter: state.app.get('counter'),
// }))
// export default class Home extends Component {
//   static propTypes = {
//     asyncData: PropTypes.string,
//     asyncError: PropTypes.object,
//     asyncLoading: PropTypes.bool,
//     counter: PropTypes.number,
//     // from react-redux connect
//     dispatch: PropTypes.func,
//   }

//   constructor() {
//     super();

//     this.handleAsyncButtonClick = this.handleAsyncButtonClick.bind(this);
//     this.handleTestButtonClick = this.handleTestButtonClick.bind(this);
//   }

//   handleAsyncButtonClick() {
//     const { dispatch } = this.props;

//     dispatch(testAsync());
//   }

//   handleTestButtonClick() {
//     const { dispatch } = this.props;

//     dispatch(testAction());
//   }

//   render() {
//     const {
//       asyncData,
//       asyncError,
//       asyncLoading,
//       counter,
//     } = this.props;

//     return (
//       <div className='Dashboard'>
//         <h1>Self Help Law Center</h1>
//         <p>
//           Boilerplate for building React components with Redux.
//         </p>

//         <hr />

//         <h2>Examples</h2>

//         <h3>Synchronous action</h3>
//         <div className='Example'>
//           <p>Counter: { counter }</p>
//           <button onClick={ this.handleTestButtonClick }>
//             Increase
//           </button>
//         </div>

//         <h3>Async action example</h3>
//         <div className='Example'>
//           { asyncData && <p>{ asyncData }</p> }
//           { asyncLoading && <p>Loading...</p> }
//           { asyncError && <p>Error: { asyncError }</p> }
//           <button
//             disabled={ asyncLoading }
//             onClick={ this.handleAsyncButtonClick }
//           >
//             Get async data
//           </button>
//         </div>

//         <h3>Background image</h3>
//         <div className='Example'>
//           <div className='BackgroundImgExample' />
//         </div>

//         <h3>Image imported to the component</h3>
//         <div className='Example'>
//           <img src={ bookImg } alt='' className='ImgExample' />
//         </div>

//         <h3>SVG sprite icon set</h3>
//         <div className='Example'>
//           <Icon glyph='square' />
//           <Icon glyph='circle' />
//           <Icon glyph='triangle' />
//         </div>
//       </div>
//     );
//   }
// }
