import React, { Component } from 'react'


export default class Dynamic extends Component {
  render() {
	return (
		this.props.children
	)
  }
}
