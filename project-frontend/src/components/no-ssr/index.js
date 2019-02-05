import React from 'react';
import dynamic from 'next/dynamic';



export default class NoSSR extends React.Component {
	
	render() {
		const Dynamic = dynamic(import('./dynamic'), {
			ssr: false,
			loading : (()=>{
				return  this.props.loading || <span>loading ...</span>
			})
			
		})
		return (
			<Dynamic>
				{this.props.children||""}
			</Dynamic>			
		);
	}
}




