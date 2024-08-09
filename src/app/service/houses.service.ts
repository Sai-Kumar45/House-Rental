import { Injectable } from '@angular/core';
import { property } from './propeties';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousesService {


  propertyinfo:property[]=[
      { id: 1, title: '3BHK Independent Home', type: 'House', price: 1200000, area: '3000 sq ft', location: 'Miyapur,Hyderabad', image: 'house1.jpg', flag1: false, flag2: false, name: 'John Doe', phoneNumber: '+91 9876543210', description: 'Spacious 3BHK home with modern amenities.', facing: 'East' },
      { id: 2, title: '2BHK Independent Home', type: 'House', price: 250000, area: '1500 sq ft', location: 'Kukatpally,Hyderabad', image: 'house2.jpeg', flag1: false, flag2: false, name: 'Jane Smith', phoneNumber: '+91 9876543211', description: 'Comfortable 2BHK house in a quiet neighborhood.', facing: 'West' },
      { id: 3, title: '2BHK Independent Home', type: 'House', price: 750000, area: '2000 sq ft', location: 'Gachibowli,Hyderabad', image: 'house3.jpeg', flag1: false, flag2: false, name: 'Alice Brown', phoneNumber: '+91 9876543212', description: 'Modern 2BHK house with garden.', facing: 'North' },
      { id: 4, title: '2BHK Independent Home', type: 'House', price: 500000, area: '1800 sq ft', location: 'Madhapur,Hyderabad', image: 'https://example.com/images/home4.jpg', flag1: false, flag2: false, name: 'Bob Johnson', phoneNumber: '+91 9876543213', description: 'Cozy 2BHK home with great views.', facing: 'South' },
      { id: 5, title: '2BHK Independent Home', type: 'House', price: 950000, area: '1600 sq ft', location: 'Kondapur,Hyderabad', image: 'https://example.com/images/home5.jpg', flag1: false, flag2: false, name: 'Charlie Davis', phoneNumber: '+91 9876543214', description: 'Elegant 2BHK house with parking.', facing: 'East' },
      { id: 6, title: '3BHK Independent Home', type: 'House', price: 600000, area: '2500 sq ft', location: 'HitechCity,Hyderabad', image: 'https://example.com/images/home6.jpg', flag1: false, flag2: false, name: 'Dana White', phoneNumber: '+91 9876543215', description: 'Spacious 3BHK house with a large backyard.', facing: 'West' },
      { id: 7, title: '3BHK Independent Home', type: 'House', price: 2000000, area: '3000 sq ft', location: 'JubileeHills,Hyderabad', image: 'https://example.com/images/home7.jpg', flag1: false, flag2: false, name: 'Eli Martinez', phoneNumber: '+91 9876543216', description: 'Luxurious 3BHK home with premium fittings.', facing: 'North' },
      { id: 8, title: '2BHK Independent Home', type: 'House', price: 400000, area: '2000 sq ft', location: 'BanjaraHills,Hyderabad', image: 'https://example.com/images/home8.jpg', flag1: false, flag2: false, name: 'Fiona Garcia', phoneNumber: '+91 9876543217', description: 'Comfortable 2BHK house with modern interiors.', facing: 'South' },
      { id: 9, title: '1BHK Independent Home', type: 'House', price: 300000, area: '800 sq ft', location: 'Begumpet,Hyderabad', image: 'https://example.com/images/home9.jpg', flag1: false, flag2: false, name: 'George Lopez', phoneNumber: '+91 9876543218', description: 'Compact 1BHK house ideal for singles.', facing: 'East' },
      { id: 10, title: '2BHK Independent Home', type: 'House', price: 350000, area: '1400 sq ft', location: 'Ameerpet,Hyderabad', image: 'https://example.com/images/home10.jpg', flag1: false, flag2: false, name: 'Hannah Lee', phoneNumber: '+91 9876543219', description: 'Beautiful 2BHK house in a prime location.', facing: 'West' },
      { id: 11, title: '3BHK Independent Home', type: 'House', price: 1150000, area: '3200 sq ft', location: 'Mehdipatnam,Hyderabad', image: 'https://example.com/images/home11.jpg', flag1: false, flag2: false, name: 'Ian Walker', phoneNumber: '+91 9876543220', description: 'Elegant 3BHK home with garden.', facing: 'North' },
      { id: 12, title: '2BHK Independent Home', type: 'House', price: 850000, area: '1800 sq ft', location: 'Manikonda,Hyderabad', image: 'https://example.com/images/home12.jpg', flag1: false, flag2: false, name: 'Jack Brown', phoneNumber: '+91 9876543221', description: 'Cozy 2BHK house with modern amenities.', facing: 'South' },
      { id: 13, title: '3BHK Independent Home', type: 'House', price: 1800000, area: '2900 sq ft', location: 'Miyapur,Hyderabad', image: 'https://example.com/images/home13.jpg', flag1: false, flag2: false, name: 'Kate Green', phoneNumber: '+91 9876543222', description: 'Luxurious 3BHK house with spacious rooms.', facing: 'East' },
      { id: 14, title: '2BHK Independent Home', type: 'House', price: 280000, area: '1600 sq ft', location: 'Kukatpally,Hyderabad', image: 'https://example.com/images/home14.jpg', flag1: false, flag2: false, name: 'Liam Harris', phoneNumber: '+91 9876543223', description: 'Affordable 2BHK house with good ventilation.', facing: 'West' },
      { id: 15, title: '1BHK Independent Home', type: 'House', price: 350000, area: '950 sq ft', location: 'Gachibowli,Hyderabad', image: 'https://example.com/images/home15.jpg', flag1: false, flag2: false, name: 'Mia Clark', phoneNumber: '+91 9876543224', description: 'Compact 1BHK house in a quiet area.', facing: 'North' },
      { id: 16, title: '4BHK Independent Home', type: 'House', price: 2500000, area: '5000 sq ft', location: 'Madhapur,Hyderabad', image: 'https://example.com/images/home16.jpg', flag1: false, flag2: false, name: 'Noah Lewis', phoneNumber: '+91 9876543225', description: 'Massive 4BHK home with luxurious fittings.', facing: 'South' },
      { id: 17, title: '2BHK Independent Home', type: 'House', price: 700000, area: '1500 sq ft', location: 'Kondapur,Hyderabad', image: 'https://example.com/images/home17.jpg', flag1: false, flag2: false, name: 'Olivia Walker', phoneNumber: '+91 9876543226', description: 'Comfortable 2BHK house with modern amenities.', facing: 'East' },
      { id: 18, title: '2BHK Independent Home', type: 'House', price: 900000, area: '2100 sq ft', location: 'HitechCity,Hyderabad', image: 'https://example.com/images/home18.jpg', flag1: false, flag2: false, name: 'Paul Adams', phoneNumber: '+91 9876543227', description: 'Spacious 2BHK house with great views.', facing: 'West' },
      { id: 19, title: '3BHK Independent Home', type: 'House', price: 1200000, area: '2500 sq ft', location: 'JubileeHills,Hyderabad', image: 'https://example.com/images/home19.jpg', flag1: false, flag2: false, name: 'Quinn Hill', phoneNumber: '+91 9876543228', description: 'Modern 3BHK house with garden.', facing: 'North' },
      { id: 20, title: '1BHK Independent Home', type: 'House', price: 200000, area: '700 sq ft', location: 'BanjaraHills,Hyderabad', image: 'https://example.com/images/home20.jpg', flag1: false, flag2: false, name: 'Riley Allen', phoneNumber: '+91 9876543229', description: 'Compact 1BHK house ideal for singles.', facing: 'South' },
      { id: 21, title: '3BHK Independent Home', type: 'House', price: 1000000, area: '2800 sq ft', location: 'Begumpet,Hyderabad', image: 'https://example.com/images/home21.jpg', flag1: false, flag2: false, name: 'Sophie King', phoneNumber: '+91 9876543230', description: 'Spacious 3BHK house with modern interiors.', facing: 'East' },
      { id: 22, title: '2BHK Independent Home', type: 'House', price: 300000, area: '1200 sq ft', location: 'Ameerpet,Hyderabad', image: 'https://example.com/images/home22.jpg', flag1: false, flag2: false, name: 'Thomas Scott', phoneNumber: '+91 9876543231', description: 'Affordable 2BHK house with good amenities.', facing: 'West' },
      { id: 23, title: '2BHK Independent Home', type: 'House', price: 600000, area: '1800 sq ft', location: 'Mehdipatnam,Hyderabad', image: 'https://example.com/images/home23.jpg', flag1: false, flag2: false, name: 'Uma Reed', phoneNumber: '+91 9876543232', description: 'Modern 2BHK house with good ventilation.', facing: 'North' },
      { id: 24, title: '2BHK Independent Home', type: 'House', price: 500000, area: '1400 sq ft', location: 'Manikonda,Hyderabad', image: 'https://example.com/images/home24.jpg', flag1: false, flag2: false, name: 'Victor Price', phoneNumber: '+91 9876543233', description: 'Comfortable 2BHK house with parking.', facing: 'South' },
      { id: 25, title: '2BHK Independent Home', type: 'House', price: 450000, area: '1300 sq ft', location: 'Miyapur,Hyderabad', image: 'https://example.com/images/home25.jpg', flag1: false, flag2: false, name: 'Wendy Morgan', phoneNumber: '+91 9876543234', description: 'Cozy 2BHK house in a prime location.', facing: 'East' },
      { id: 26, title: '3BHK Independent Home', type: 'House', price: 1400000, area: '3100 sq ft', location: 'Kukatpally,Hyderabad', image: 'https://example.com/images/home26.jpg', flag1: false, flag2: false, name: 'Xander Shaw', phoneNumber: '+91 9876543235', description: 'Spacious 3BHK house with premium fittings.', facing: 'West' },
      { id: 27, title: '4BHK Independent Home', type: 'House', price: 2700000, area: '4500 sq ft', location: 'Gachibowli,Hyderabad', image: 'https://example.com/images/home27.jpg', flag1: false, flag2: false, name: 'Yara Hunter', phoneNumber: '+91 9876543236', description: 'Massive 4BHK home with luxurious fittings.', facing: 'North' },
      { id: 28, title: '2BHK Independent Home', type: 'House', price: 850000, area: '2000 sq ft', location: 'Madhapur,Hyderabad', image: 'https://example.com/images/home28.jpg', flag1: false, flag2: false, name: 'Zane Ross', phoneNumber: '+91 9876543237', description: 'Modern 2BHK house with great views.', facing: 'South' },
      // Apartment entries
      { 
        id: 29, title: '1BHK Apartment', type: 'Apartment', price: 350000, area: '600 sq ft', 
        location: 'Miyapur,Hyderabad', image: 'https://example.com/images/apartment1.jpg', 
        flag1: false, flag2: false, name: 'Ava King', phoneNumber: '+91 9876543238', 
        description: 'Compact 1BHK apartment in a well-connected area.', facing: 'East' 
      },
      { 
        id: 30, title: '2BHK Apartment', type: 'Apartment', price: 550000, area: '1200 sq ft', 
        location: 'Kukatpally,Hyderabad', image: 'https://example.com/images/apartment2.jpg', 
        flag1: false, flag2: false, name: 'Benjamin Scott', phoneNumber: '+91 9876543239', 
        description: 'Modern 2BHK apartment with good amenities.', facing: 'West' 
      },
      { 
        id: 31, title: '3BHK Apartment', type: 'Apartment', price: 750000, area: '1800 sq ft', 
        location: 'Gachibowli,Hyderabad', image: 'https://example.com/images/apartment3.jpg', 
        flag1: false, flag2: false, name: 'Charlotte Morgan', phoneNumber: '+91 9876543240', 
        description: 'Spacious 3BHK apartment with great views.', facing: 'North' 
      },
      { 
        id: 32, title: '2BHK Apartment', type: 'Apartment', price: 500000, area: '1100 sq ft', 
        location: 'Madhapur,Hyderabad', image: 'https://example.com/images/apartment4.jpg', 
        flag1: false, flag2: false, name: 'Daniel Reed', phoneNumber: '+91 9876543241', 
        description: 'Comfortable 2BHK apartment in a prime location.', facing: 'South' 
      },
      { 
        id: 33, title: '3BHK Apartment', type: 'Apartment', price: 800000, area: '1900 sq ft', 
        location: 'Kondapur,Hyderabad', image: 'https://example.com/images/apartment5.jpg', 
        flag1: false, flag2: false, name: 'Evelyn Price', phoneNumber: '+91 9876543242', 
        description: 'Elegant 3BHK apartment with modern interiors.', facing: 'East' 
      },
      { 
        id: 34, title: '1BHK Apartment', type: 'Apartment', price: 300000, area: '650 sq ft', 
        location: 'HitechCity,Hyderabad', image: 'https://example.com/images/apartment6.jpg', 
        flag1: false, flag2: false, name: 'Felix Ross', phoneNumber: '+91 9876543243', 
        description: 'Cozy 1BHK apartment ideal for singles.', facing: 'West' 
      },
      { 
        id: 35, title: '2BHK Apartment', type: 'Apartment', price: 450000, area: '1000 sq ft', 
        location: 'JubileeHills,Hyderabad', image: 'https://example.com/images/apartment7.jpg', 
        flag1: false, flag2: false, name: 'Grace Hunter', phoneNumber: '+91 9876543244', 
        description: 'Affordable 2BHK apartment with good ventilation.', facing: 'North' 
      },
      { 
        id: 36, title: '3BHK Apartment', type: 'Apartment', price: 650000, area: '1700 sq ft', 
        location: 'BanjaraHills,Hyderabad', image: 'https://example.com/images/apartment8.jpg', 
        flag1: false, flag2: false, name: 'Henry Shaw', phoneNumber: '+91 9876543245', 
        description: 'Luxurious 3BHK apartment with premium fittings.', facing: 'South' 
      },
      { 
        id: 37, title: '2BHK Apartment', type: 'Apartment', price: 500000, area: '1150 sq ft', 
        location: 'Begumpet,Hyderabad', image: 'https://example.com/images/apartment9.jpg', 
        flag1: false, flag2: false, name: 'Isabella Walker', phoneNumber: '+91 9876543246', 
        description: 'Comfortable 2BHK apartment in a well-connected area.', facing: 'East' 
      },
      { 
        id: 38, title: '1BHK Apartment', type: 'Apartment', price: 280000, area: '700 sq ft', 
        location: 'Ameerpet,Hyderabad', image: 'https://example.com/images/apartment10.jpg', 
        flag1: false, flag2: false, name: 'James Adams', phoneNumber: '+91 9876543247', 
        description: 'Compact 1BHK apartment ideal for small families.', facing: 'West' 
      },
      { 
        id: 39, title: '3BHK Apartment', type: 'Apartment', price: 850000, area: '2000 sq ft', 
        location: 'Mehdipatnam,Hyderabad', image: 'https://example.com/images/apartment11.jpg', 
        flag1: false, flag2: false, name: 'Katherine Allen', phoneNumber: '+91 9876543248', 
        description: 'Spacious 3BHK apartment with great amenities.', facing: 'North' 
      },
      { 
        id: 40, title: '2BHK Apartment', type: 'Apartment', price: 600000, area: '1300 sq ft', 
        location: 'Manikonda,Hyderabad', image: 'https://example.com/images/apartment12.jpg', 
        flag1: false, flag2: false, name: 'Lucas King', phoneNumber: '+91 9876543249', 
        description: 'Modern 2BHK apartment in a prime location.', facing: 'South' 
      },
      // PG entries
      { 
        id: 41, title: 'PG for Men', type: 'PG', price: 8000, area: '300 sq ft', 
        location: 'Miyapur,Hyderabad', image: 'https://example.com/images/pg1.jpg', 
        flag1: false, flag2: false, name: 'Nina Reed', phoneNumber: '+91 9876543250', 
        description: 'Comfortable PG accommodation for men.', facing: 'East' 
      },
      { 
        id: 42, title: 'PG for Women', type: 'PG', price: 9000, area: '350 sq ft', 
        location: 'Kukatpally,Hyderabad', image: 'https://example.com/images/pg2.jpg', 
        flag1: false, flag2: false, name: 'Olivia Scott', phoneNumber: '+91 9876543251', 
        description: 'Safe and secure PG accommodation for women.', facing: 'West' 
      },
      { 
        id: 43, title: 'PG for Men', type: 'PG', price: 7500, area: '280 sq ft', 
        location: 'Gachibowli,Hyderabad', image: 'https://example.com/images/pg3.jpg', 
        flag1: false, flag2: false, name: 'Peter Price', phoneNumber: '+91 9876543252', 
        description: 'Affordable PG accommodation for men.', facing: 'North' 
      },
      { 
        id: 44, title: 'PG for Women', type: 'PG', price: 8500, area: '320 sq ft', 
        location: 'Madhapur,Hyderabad', image: 'https://example.com/images/pg4.jpg', 
        flag1: false, flag2: false, name: 'Quinn Ross', phoneNumber: '+91 9876543253', 
        description: 'Comfortable and safe PG for women.', facing: 'South' 
      },
      { 
        id: 45, title: 'PG for Men', type: 'PG', price: 7000, area: '250 sq ft', 
        location: 'Kondapur,Hyderabad', image: 'https://example.com/images/pg5.jpg', 
        flag1: false, flag2: false, name: 'Riley Hunter', phoneNumber: '+91 9876543254', 
        description: 'Budget-friendly PG for men.', facing: 'East' 
      },
      { 
        id: 46, title: 'PG for Women', type: 'PG', price: 9500, area: '400 sq ft', 
        location: 'HitechCity,Hyderabad', image: 'https://example.com/images/pg6.jpg', 
        flag1: false, flag2: false, name: 'Sophia Shaw', phoneNumber: '+91 9876543255', 
        description: 'Luxury PG accommodation for women.', facing: 'West' 
      },
      { 
        id: 47, title: 'PG for Men', type: 'PG', price: 8500, area: '300 sq ft', 
        location: 'JubileeHills,Hyderabad', image: 'https://example.com/images/pg7.jpg', 
        flag1: false, flag2: false, name: 'Thomas Walker', phoneNumber: '+91 9876543256', 
        description: 'Comfortable PG accommodation for men.', facing: 'North' 
      },
      { 
        id: 48, title: 'PG for Women', type: 'PG', price: 10000, area: '450 sq ft', 
        location: 'BanjaraHills,Hyderabad', image: 'https://example.com/images/pg8.jpg', 
        flag1: false, flag2: false, name: 'Uma Adams', phoneNumber: '+91 9876543257', 
        description: 'Premium PG accommodation for women.', facing: 'South' 
      },
      { 
        id: 49, title: 'PG for Men', type: 'PG', price: 8000, area: '280 sq ft', 
        location: 'Begumpet,Hyderabad', image: 'https://example.com/images/pg9.jpg', 
        flag1: false, flag2: false, name: 'Victor King', phoneNumber: '+91 9876543258', 
        description: 'Affordable PG for men with modern amenities.', facing: 'East' 
      },
      { 
        id: 50, title: 'PG for Women', type: 'PG', price: 9000, area: '350 sq ft', 
        location: 'Ameerpet,Hyderabad', image: 'https://example.com/images/pg10.jpg', 
        flag1: false, flag2: false, name: 'Wendy Morgan', phoneNumber: '+91 9876543259', 
        description: 'Comfortable and safe PG for women.', facing: 'West' 
      },
      { 
        id: 51, title: 'PG for Men', type: 'PG', price: 7500, area: '260 sq ft', 
        location: 'Mehdipatnam,Hyderabad', image: 'https://example.com/images/pg11.jpg', 
        flag1: false, flag2: false, name: 'Xander Ross', phoneNumber: '+91 9876543260', 
        description: 'Affordable PG for men in a prime location.', facing: 'North' 
      },
      { 
        id: 52, title: 'PG for Women', type: 'PG', price: 9500, area: '380 sq ft', 
        location: 'Manikonda,Hyderabad', image: 'https://example.com/images/pg12.jpg', 
        flag1: false, flag2: false, name: 'Yara Hunter', phoneNumber: '+91 9876543261', 
        description: 'Luxury PG for women with modern amenities.', facing: 'South' 
      },
      { 
        id: 53, title: 'PG for Men', type: 'PG', price: 7000, area: '240 sq ft', 
        location: 'Miyapur,Hyderabad', image: 'https://example.com/images/pg13.jpg', 
        flag1: false, flag2: false, name: 'Zane Shaw', phoneNumber: '+91 9876543262', 
        description: 'Budget-friendly PG for men.', facing: 'East' 
      }
    
  ]
  constructor() { }
//to display the all houses on homecomponent in cards format
  getproperty(){
    return of(this.propertyinfo)
  }

  //to view the individuval details of each home 
  gethouseById(id:any){
    return this.propertyinfo.find((item)=>item.id==id)
  }
  // add property
  addproperty(pro:any){
    if(!this.propertyinfo.find((i)=> i.id==pro.id)){
      this.propertyinfo.push(pro)
    }
  }
  lengthofdata(){
    return this.propertyinfo.length
  }
  
}
