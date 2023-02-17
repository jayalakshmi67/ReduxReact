import './App.css';
import Form from './component/Form';
import {connect} from 'react-redux' 

function App(props) {

  const {carName,carModel,carColor} = props.form
  const {logged} =props.login
  const {loginDispatch,logoutDispatch} = props
  //console.log(props)
  return (
    <div className=''>
      <div className='text-center'>
        {logged ?  <button className='btn btn-danger' onClick={()=>logoutDispatch(false)}>Logout</button> :<button className='btn btn-success' onClick={()=>loginDispatch(true)}>Login</button>}
      </div>
      {logged && (
        <>
      <Form/>
      <div className='text-center'>
      <h3>{JSON.stringify({carName,carModel,carColor})}</h3>
      </div>
      </>
      )}
    </div>
  );
}


const mapStateToProps = (state)=>{
  return state
}

const mapDispatchToProps = (dispatch)=>{
  return{
    loginDispatch:(data)=>dispatch({type:'LOGIN-FORM',payload:data}),
    logoutDispatch:(data)=>dispatch({type:'LOGOUT-FORM',payload:data})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
