import longwood from './assets/longwood.JPG';
import longwood2 from './assets/longwood2.png';
import cityhall from './assets/cityhall.JPG';
import cityhall2 from './assets/cityhall2.png';
import artmuseum from './assets/artmuseum.JPG';
import artmuseum2 from './assets/artmuseum2.png';

const destinations = [
  {
    id: 1,
    title: 'Longwood Garden',
    location: 'Kennett Square, PA',
    category: 'Nature',
    description: 'Longwood Garden is a beautiful botanical garden known for its stunning landscapes and seasonal displays.',
    recommendedTime: 'Spring or Summer',
    website: 'https://longwoodgardens.org/',
    photos: [longwood, longwood2],
  },
  {
    id: 2,
    title: 'Philadelphia City Hall',
    location: 'Philadelphia, PA',
    category: 'Culture',
    description: 'Philadelphia City Hall is an iconic building with historic architecture and a view of the city from the observation deck.',
    recommendedTime: 'All year',
    website: 'https://www.phlvisitorcenter.com/CityHall',
    photos: [cityhall, cityhall2],
  },
  {
  id: 3,
  title: 'Philadelphia Museum of Art',
  location: 'Philadelphia, PA',
  category: 'Art',
  description: 'The Philadelphia Museum of Art is famous for its extensive art collections and the iconic “Rocky Steps.”',
  recommendedTime: 'All year',
  website: 'https://www.visitpham.org/',
  photos: [artmuseum, artmuseum2],
  }
];

export default destinations;