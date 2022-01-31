import styled from 'styled-components';


const imageUrl = "https://image.tmdb.org/t/p/original";


const HomeDiv = styled.nav`
background-image: url(${props => (`${imageUrl}${props.poster}`)});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
opacity: 1;
height: 50%;
background-size: 45% 100%;
`;


export {HomeDiv};