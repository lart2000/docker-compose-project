import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';
import FacebookIcon from '/static/icons/ic_facebook.svg';
import GmailIcon from '/static/icons/ic_gmail.svg'; 

import { Paper, Divider, TablePagination } from '@material-ui/core';
const styles = theme => ({

  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});


class InteractiveList extends React.Component {
  state = {
	  currentPage: 1
  }

  render() {
    const { classes } = this.props;
    const { dense, secondary } = this.state;
    return (
      <div  style={{marginTop : "64px"}}>
				<Grid container component={List} justify="space-evenly" >
					{(()=>{
						return [1,2,3,4,5].map(el=>{
							return <Grid item xs={6} md={5} style={{marginBottom : "16px"}}>
								<Paper>
									<Grid container component={ListItem} >
										<ListItemAvatar>
											<Avatar>
												<FolderIcon />
											</Avatar>
										</ListItemAvatar>
										<ListItemText
										primary={<Typography variant="body1" noWrap>Single-line item</Typography>	}
										secondary={
											<React.Fragment>
												<Typography color="textSecondary" noWrap>asasasdasada</Typography>
												<Typography color="textSecondary" noWrap>asasasdasada</Typography>
											</React.Fragment>
										}
										/>
										<Grid item component={ListItemSecondaryAction} style={{top : "24px"}}>
											
													<IconButton aria-label="Edit">
														<EditIcon />
													</IconButton>
													<IconButton aria-label="Delete">
														<ClearIcon />
													</IconButton>
											
										</Grid>
									</Grid>
									<Divider></Divider>
									<Grid container alignItems="center">
										<IconButton aria-label="Facebook" >
											<FacebookIcon style={{width :"24px",height:"24px", fill:"#3b5998"}}/>
										</IconButton>
										<IconButton aria-label="Gmail">
											<GmailIcon style={{width :"24px", height: "24px", fill : "#c71610"}} />
										</IconButton>
									</Grid>
							</Paper>
							</Grid>
						})
					})()}
				</Grid>
          
				<TablePagination 
				rowsPerPageOptions={[8, 12]}
				labelRowsPerPage = {"Clientes por página"}
				component="div"
				count={20}
				rowsPerPage={8}
				page={this.state.currentPage}
				backIconButtonProps={{
					'aria-label': 'Previous Page',
				}}
				nextIconButtonProps={{
					'aria-label': 'Next Page',
				}}
				onChangePage={this.handleChangePage}
				// onChangeRowsPerPage={this.handleChangeRowsPerPage}
				/>
      </div>
    );
  }
  handleChangePage=(event,currentPage)=>{
	this.setState({currentPage})
  }
}

export default withStyles(styles)(InteractiveList);
