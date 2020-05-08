import React from 'react';
import './Menu.css'
// import MenuItem from '../../MenuItem/MenuItem'
import computing from './computing.png'
import health from './healthcare-and-medical.png'
import local from './local.png'
import entertainment from './music-and-multimedia.png'
import science from './science.png';


class Menu extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      menuItems: [
       {id: "local", src: local, headline: "Local News", isSelected: true},
       {id: "technology", src: computing, headline: "Technology", isSelected: false},
       {id: "entertainment", src: entertainment, headline:"Entertainment", isSelected: false},
       {id: "science", src: science, headline: "Science", isSelected: false},
       {id: "health", src: health, headline: "Health", isSelected: false}
      ]
    }
  }

  selectTopic = (e) => {
    const itemId = e.target.id
    const updatedState = [...this.state.menuItems];
    this.props.selectTopic(itemId);
    updatedState.map(item => item.id !== itemId ? item.isSelected = false : item.isSelected = true);
  }

  render() {
    const displayMenuItems = this.state.menuItems.map(item => {
      return (
        <section key={item.id} className={item.isSelected ? "menu-item-active" : "menu-item"} id={item.id} onClick={this.selectTopic}>
          <img className="menu-icon" id={item.id} src={item.src} alt={`${item.id}-news`}></img>
          <h2 id={item.id}>{item.headline}</h2>
        </section>
      )
    })
    
    return (
      <aside className="menu-aside">
      {displayMenuItems}
      </aside> 
    )
  }
}

export default Menu;