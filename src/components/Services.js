import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
import Title from './Title'

export default class Services extends Component {
  state={
    services: [
      {
      icon:<FaCocktail />,
      title:"Free Cocktails",
      info: "Enjoy sophisticated, hand-crafted cocktails at any of our wetbars on location."
      },
      {
      icon:<FaHiking />,
      title:"Endless Hiking",
      info: "Explore nature with our offer of scenic views and numerous trails."
      },
      {
      icon:<FaShuttleVan />,
      title:"Free Shuttle",
      info: "No parking - no problem. Enjoy our free shuttle services to get you to and from our many amentities!"
    },
    {
    icon:<FaBeer />,
    title:"Strongest Beer",
    info: "Grab a craft beer from one of the hundreds of local breweries on tap."
    },
  ]
}

  render () {
    return (
      <section className="services">
      <Title title="Services" />
      <div className="services-center">
      {this.state.services.map((item,index) => {
        return (
        <article key={index} className="service">
          <span>{item.icon}</span>
          <h6>{item.title}</h6>
          <p>{item.info}</p>
        </article>
        );
      })}
      </div>
      </section>
    );
  }
}
