
import NoteContext from "./noteContext";
import React, { useState } from "react";
// import house images
import House1 from './houses/house1.png';
import House2 from './houses/house2.png';
import House3 from './houses/house3.png';
import House4 from './houses/house4.png';
import House5 from './houses/house5.png';
import House6 from './houses/house6.png';
import House7 from './houses/house7.png';
import House8 from './houses/house8.png'; 
import House9 from './houses/house9.png';
import House10 from './houses/house10.png';
import House11 from './houses/house11.png';
import House12 from './houses/house12.png';
// import house large images
import House1Lg from './houses/house1lg.png';
import House2Lg from './houses/house2lg.png';
import House3Lg from './houses/house3lg.png';
import House4Lg from './houses/house4lg.png';
import House5Lg from './houses/house5lg.png';
import House6Lg from './houses/house6lg.png';
import House7Lg from './houses/house7lg.png';
import House8Lg from './houses/house8lg.png';
import House9Lg from './houses/house9lg.png';
import House10Lg from './houses/house10lg.png';
import House11Lg from './houses/house11lg.png';
import House12Lg from './houses/house12lg.png';

const NoteState = (props) => {
   const notesInitial = [
   
  {
    id: 1,
    name: 'Spot On Hostels',
    description:
      'Air conditioned rooms with TV, seating area, and attached bathroom are available at this property. The dining area comes with a toaster and electric kettle. Other facilities include first aid, daily housekeeping, power backup, card payment system, and CCTV protection.',
    image: House1,
    imageLg: House1Lg,
    city: 'Kaman ',
    address: '7240C Argyle St. Lawndale, CA 90260',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '1100',
  },
  {
    id: 2,
    type: 'House',
    name: 'Collection O Hostels',
    description:
      'Air conditioned rooms with TV, seating area, and attached bathroom are available at this property. The dining area comes with a toaster and electric kettle. Other facilities include first aid, daily housekeeping, power backup, card payment system, and CCTV protection.',
    image: House2,
    imageLg: House2Lg,
    city: 'Virar ',
    address: '798 Talbot St. Bridgewater, NJ 08807',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '1400',
  },
  {
    id: 3,
    type: 'House',
    name: 'Glen Creek Hostels',
    description:
      'Air conditioned rooms with TV, seating area, and attached bathroom are available at this property. The dining area comes with a toaster and electric kettle. Other facilities include first aid, daily housekeeping, power backup, card payment system, and CCTV protection.',
    image: House3,
    imageLg: House3Lg,
    city: 'Mira Road  ',
    address: '2 Glen Creek St. Alexandria, VA 22304',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '1700',
  },
  {
    id: 4,
    type: 'House',
    name: 'Woodland Hostels',
    description:
      'Air conditioned rooms with TV, seating area, and attached bathroom are available at this property. The dining area comes with a toaster and electric kettle. Other facilities include first aid, daily housekeeping, power backup, card payment system, and CCTV protection.',
    image: House4,
    imageLg: House4Lg,
    city: 'Bhayander ',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '2000',
  },
  {
    id: 5,
    type: 'House',
    name: 'Westport Hostels',
    description:
      'Air conditioned rooms with TV, seating area, and attached bathroom are available at this property. The dining area comes with a toaster and electric kettle. Other facilities include first aid, daily housekeeping, power backup, card payment system, and CCTV protection.',
    image: House5,
    imageLg: House5Lg,
    city: 'Vasai ',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '5',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2015',
    price: '2100',
  },
  {
    id: 6,
    type: 'House',
    name: 'Pawnee Hostels',
    description:
      'Air conditioned rooms with TV, seating area, and attached bathroom are available at this property. The dining area comes with a toaster and electric kettle. Other facilities include first aid, daily housekeeping, power backup, card payment system, and CCTV protection.',
    image: House6,
    imageLg: House6Lg,
    city: 'Naigaon ',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '6',
    bathrooms: '3',
    surface: '6200 sq ft',
    year: '2014',
    price: '2200',
  },

  {
    id: 7,
    type: 'House',
    name: 'Argyle Hostels',
    description:
      'Air conditioned rooms with TV, seating area, and attached bathroom are available at this property. The dining area comes with a toaster and electric kettle. Other facilities include first aid, daily housekeeping, power backup, card payment system, and CCTV protection.',
    image: House7,
    imageLg: House7Lg,
    city: 'Bhiwandi ',
    address: '7240C Argyle St. Lawndale, CA 90260',
    bedrooms: '5',
    bathrooms: '3',
    surface: '3200 sq ft',
    year: '2015',
    price: '1170',
  },
  {
    id: 8,
    type: 'House',
    name: ' Talbot Hostels',
    description:
      'Air conditioned rooms with TV, seating area, and attached bathroom are available at this property. The dining area comes with a toaster and electric kettle. Other facilities include first aid, daily housekeeping, power backup, card payment system, and CCTV protection.',
    image: House8,
    imageLg: House8Lg,
    city: 'Thane ',
    address: '798 Talbot St. Bridgewater, NJ 08807',
    bedrooms: '7',
    bathrooms: '2',
    surface: '2200 sq ft',
    year: '2019',
    price: '1450',
  },
  {
    id: 9,
    type: 'House',
    name: 'Townhouse 1108 Arc Palace Hostels',
    description:
      'Air conditioned rooms with TV, seating area, and attached bathroom are available at this property. The dining area comes with a toaster and electric kettle. Other facilities include first aid, daily housekeeping, power backup, card payment system, and CCTV protection.',
    image: House9,
    imageLg: House9Lg,
    city: 'Nalasopara ',
    address: '2 Glen Creek St. Alexandria, VA 22304',
    bedrooms: '4',
    bathrooms: '4',
    surface: '4600 sq ft',
    year: '2015',
    price: '1390',
  },
  {
    id: 10,
    type: 'House',
    name: 'SilverKey Executive Stays Hostels',
    description:
      'Air conditioned rooms with TV, seating area, and attached bathroom are available at this property. The dining area comes with a toaster and electric kettle. Other facilities include first aid, daily housekeeping, power backup, card payment system, and CCTV protection.',
    image: House10,
    imageLg: House10Lg,
    city: 'Borivali ',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '5',
    bathrooms: '2',
    surface: '5200 sq ft',
    year: '2014',
    price: '1800',
  },
  {
    id: 11,
    type: 'House',
    name: 'Townhouse OAK Hostels',
    description:
      'Air conditioned rooms with TV, seating area, and attached bathroom are available at this property. The dining area comes with a toaster and electric kettle. Other facilities include first aid, daily housekeeping, power backup, card payment system, and CCTV protection.',
    image: House11,
    imageLg: House11Lg,
    city: 'Kandivali ',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '5',
    bathrooms: '2',
    surface: '3200 sq ft',
    year: '2011',
    price: '2130',
  },
  {
    id: 12,
    type: 'House',
    name: 'Capital O Hostels',
    description:
      'Air conditioned rooms with TV, seating area, and attached bathroom are available at this property. The dining area comes with a toaster and electric kettle. Other facilities include first aid, daily housekeeping, power backup, card payment system, and CCTV protection.',
    image: House12,
    imageLg: House12Lg,
    city: 'Malad ',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '4',
    bathrooms: '3',
    surface: '5200 sq ft',
    year: '2013',
    price: '2210',
  },

  ]
  const [rooms,city] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{rooms,city}}>
            {props.children}
        </NoteContext.Provider>
    )
    }
export default NoteState;