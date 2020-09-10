import React from 'react';
import Header from './component/Header';
import Balance from './component/Balance';
import IncomeExpense from './component/IncomeExpense';
import TransectionList from './component/TransectionList';
import AddTran from './component/AddTran';
import { makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { GlobalProvider } from './context/GlobalState'
import './App.css'








const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
 
 



  return (
    <GlobalProvider>
          <div className={classes.root}>
      <Header />
      <AppBar position="static" color="default">
      
          <Balance />
       
      </AppBar>
      <IncomeExpense />
      <TransectionList />
      <AddTran />
      
   
  
      
    </div>
    </GlobalProvider>
  );
}
