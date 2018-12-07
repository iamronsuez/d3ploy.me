import React, { Component } from 'react';
import classnames from 'classnames';
import HeaderDefault from './HeaderDefault';
import Hero from './Hero';
import Video from './Video';

export default class Base extends Component {
  
  constructor(props) {
    super(props)
  }

  components (name) {
    return {
      header: HeaderDefault,
      hero: Hero,
      video: Video
    }[name]
  }

  render() {
    const { classes, components } = this.props;

    return (
      <div className={classnames('base-component', classes)}>
        {components.map((item) => {
          const Section = this.components(item.name)
          return ( <Section {...item}/> )
        })}
      </div>
    )
  }
}