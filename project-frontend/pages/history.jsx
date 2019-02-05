import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import ListIcon from '@material-ui/icons/List'
import { Grid, InputBase } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
let counter = 0;


function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const rows = [
  { id: 'client', numeric: false, disablePadding: false, label: 'Cliente' },
  { id: 'address', numeric: false, disablePadding: true, label: 'Dirección de envio' },
  { id: 'totalQuantity', numeric: true, disablePadding: false, label: 'Cantidad Total' },
  { id: 'totalPrice', numeric: true, disablePadding: false, label: 'Precio Total ($)' },
  { id: 'date', numeric: false, disablePadding: false, label: 'Fecha de pago' },
];

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props;

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>
          {rows.map(
            row => (
              <TableCell
                key={row.id}
                align={row.numeric ? 'right' : 'left'}
                padding={row.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            ),
            this,
          )}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
});

class EnhancedTableToolbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

	  const { numSelected, classes } = this.props;
	  
    return (
      <Toolbar
        className={classNames(classes.root, {
          [classes.highlight]: numSelected > 0,
        })}
      >
        <div className={classes.title}>
          {numSelected > 0 ? (
            <Typography color="inherit" variant="subtitle1">
              {numSelected} selected
            </Typography>
          ) : (
            <Typography variant="h6" id="tableTitle">
              Historial
            </Typography>
          )}
        </div>
        <div className={classes.spacer} />
        <div className={classes.actions}>
          {numSelected > 0 ? (
              <Grid container justify="center">
                  {(()=>{
                      if(this.props.selected.length<=1){
                          let id = this.props.selected[0];
                          return <Grid item xs = {6}>
                              <Tooltip title="Editar">
                              <IconButton aria-label="Delete" onClick={this.props.handleOpen}>
                                  <ListIcon />
                              </IconButton>
                          </Tooltip>
                          </Grid>
                  
                      }
                  })()}
                  <Grid item xs = {6}>
                      <Tooltip title="Eliminar">
                          <IconButton aria-label="Delete">
                          <DeleteIcon />
                          </IconButton>
                      </Tooltip>
                  </Grid>
              </Grid>
          ) : (
			<Grid container justify="space-between" alignItems="center" component={Paper} style={{minWidth:"250px"}}
				 elevation="1">
				<Grid item xs={2} style={{padding:"8px"}}>
					<SearchIcon />
				</Grid>
				<Grid item xs={10} style = {{paddingRight: "16px"}}>
					<InputBase
					placeholder="Buscar por nombre…"
					classes={{
						root: classes.inputRoot,
						input: classes.inputInput,
					}}
					/>
				</Grid>
			</Grid>
			  
          )}
        </div>
      </Toolbar>
    );
  }
  handleChange=()=>{
	this.setState({showFilter: true});
  }
}

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class EnhancedTable extends React.Component {
	state = {
    order: 'asc',
    orderBy: 'calories',
    selected: [],
    data: [1,2,3,4,5,6,7,8,9,10].map((element,index)=>({
		id :  index,
		client       : "jose",
		address      : "jasdsdasdasdasdasdose",
		totalQuantity: index,
		totalPrice   : (Math.random()*15)+5,
		date         : "218-15-2"
	})),
    page: 0,
	rowsPerPage: 5,
	openModal : false,
  };

  handleRequestSort = (event, property) => {
    const orderBy = property;
	let order = 'desc';
	
    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  handleSelectAllClick = event => {
    if (event.target.checked) {
      this.setState(state => ({ selected: state.data.map(n => n.id) }));
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes } = this.props;
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Paper className={classes.root} style={{marginTop: "64px"}}>
        <EnhancedTableToolbar numSelected={selected.length} handleOpen={this.handleOpen} selected={this.state.selected}/>
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {stableSort(data, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  const isSelected = this.isSelected(n.id);
                  return (
                    <TableRow
                      hover
                      onClick={event => this.handleClick(event, n.id)}
                      role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={n.id}
                      selected={isSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox checked={isSelected} />
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none">
                        {n.client}
                      </TableCell>
                      <TableCell >{n.address}</TableCell>
                      <TableCell align="right">{n.totalQuantity}</TableCell>
                      <TableCell align="right">{n.totalPrice}</TableCell>
                      <TableCell >{n.date}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
		<ModalHistory openModal={this.state.openModal} 
		handleClose={this.handleClose} 
		id={this.state.selected.length===1&&this.state.selected[0]}
		></ModalHistory>
      </Paper>
    );
  }
  handleClose = () => {
    this.setState({ openModal: false });
  };
  handleOpen = () => {
    this.setState({ openModal: true});
  };
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

const stylesModal = theme => ({
	paper: {
	  position       : 'absolute',
	  width          : theme.spacing.unit * 50,
	  backgroundColor: theme.palette.background.paper,
	  boxShadow      : theme.shadows[5],
	  padding        : theme.spacing.unit * 4,
	  outline        : 'none',
	},
  });
  
function getModalStyle() {

	return {
	top: `50%`,
	left: `50%`,
	// transform: `translate(50%, 50%)`,
	};
}
class SimpleModal extends React.Component {
  render() { 
	  let {classes,id} = this.props;
    return ( 
		<Modal
		aria-labelledby="simple-modal-title"
		aria-describedby="simple-modal-description"
		open={this.props.openModal}
		onClose={this.props.handleClose}
		>
		<div style = {getModalStyle()}  className={classes.paper}>
			<Typography variant="h6" id="modal-title">
			Text in a modal {id}
			</Typography>
			<Typography variant="subtitle1" id="simple-modal-description">
			Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
			</Typography>
		</div >
		</Modal>
    );
  }
}
const ModalHistory =  withStyles(stylesModal)(SimpleModal);

export default withStyles(styles)(EnhancedTable);
