import TREE_ICON from '../../../assets/tree.png';
import RUNNING_ICON from '../../../assets/Running.png';
import HIKING_ICON from '../../../assets/Hiking.png';
import ROWING_ICON from '../../../assets/Rowing.png';
import NATURE from '../../../assets/nature_photo.png';
import { MEDIUM_GREY } from '../../../components/Utilities/Constants';

export const MARKERS_DATA = [
  {
    id: '1',
    latitude: 30.262804,
    longitude: -97.737033,
    color: MEDIUM_GREY,
    name: 'Sir Swante Palm Neighborhood Park',
    direction: '200 N IH 35 Svrd SB, Austin, TX 78701',
    img: TREE_ICON,
    picture: NATURE,
    distance: 0.5,
    activities: ['Running', 'Hiking', 'Rowing'],
    icons: [RUNNING_ICON, HIKING_ICON, ROWING_ICON],
    description: 'Swante Palm Neighborhood Park is a municipal park, part of the Philadelphia Parks & Recreation system, in Northeast Philadelphia in the U.S. state of Pennsylvania. Established in 1905 by ordinance of the City of Philadelphia, it includes about 1,600 acres of woodlands, meadows and wetlands.  '
  },
  {
    id: '2',
    latitude: 30.260320,
    longitude: -97.740651,
    color: MEDIUM_GREY,
    name: 'Willow St. (Park)',
    direction: 'Ann and Roy Butler Hike and Bike Trail, Austin, TX 78701',
    img: TREE_ICON,
    picture: NATURE,
    distance: 2.3,
    activities: ['Running', 'Hiking', 'Rowing'],
    icons: [RUNNING_ICON, HIKING_ICON, ROWING_ICON],
    description: 'Willow St Park is a municipal park, part of the Philadelphia Parks & Recreation system, in Northeast Philadelphia in the U.S. state of Pennsylvania. Established in 1905 by ordinance of the City of Philadelphia, it includes about 1,600 acres of woodlands, meadows and wetlands.  '
  },
];
