import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  id,
  setCurrentImg,
  onClose,
}) => {
  return (
    <li className={css.imageGalleryItem} onClick={onClose}>
      <img
        className={css.imageGalleryItemImage}
        src={webformatURL}
        alt={id}
        onClick={() => setCurrentImg(largeImageURL)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string.isRequired,
  setCurrentImg: PropTypes.func.isRequired,
};

//   state = {
//     pokemon: null,
//     // loading: false,
//       error: null,
//       status: 'idle'
//   };

//   componentDidUpdate(prevProps) {
//     if (prevProps.query !== this.props.query) {
//       console.log('Change query name');
//       console.log('prevProps.query', prevProps.query);
//       console.log('this.props.query', this.props.query);

//       this.setState({ loading: true, pokemon: null,  });////////////////////////////////////////////

//       // this.fetchPokemon();
//       fetch(`https://pokeapi.co.api/v2/pokemon/${this.props.query}`)
//         .then(res => {
//           if (res.ok) {
//             return res.json();
//           }
//           return Promise.reject(
//            new Error(`Something went wrong and we are working on it, there are no pokemon with  name ${this.props.query}`),
//           );
//         })
//         .then(pokemon => {
//           this.setState({ pokemon , status: 'resolved'});
//         })
//         .catch(error => this.setState({ error, status: 'rejected' }))

//     }
//   }

//     render() {

//         // const {pokemon, loading} = this.state;
//         if (this.state.status === "idle") {
//             return <h1>enter name pokemon...</h1>};
//         if (this.state.status === "pending") {
// return <h1>loading...</h1>
//         }
//         if (this.state.status === "rejected") {
// return <div>{this.state.error.message}</div>
//         }
//          if (this.state.status === "resolved") {
// return <div>Розмытка елемента</div>
//         }

//     return (

//       <div className="image-gallery-item">
//             <h1>ImageGalleryItemInfo</h1>
//             {this.state.error && <div>{this.state.error.message}</div>}
//         {this.state.error && <div>ooops...error...no pokemon</div>}
//         {this.state.loading && <h1>loading...</h1>}
//         {!this.props.query && <h1>enter name pokemon...</h1>}
//         {this.state.pokemon && <div>here will be pokemon</div>}
//         <p>{this.props.query}</p>
//         {/* <img src={this.props.imageUrl} alt={this.props.caption} />
//         <div className="image-gallery-item__caption">{this.props.caption}</div> */}
//       </div>
//     );
//   }
// }
