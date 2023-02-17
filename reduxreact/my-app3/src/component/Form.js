import {connect} from 'react-redux'


function Form(props){
   
    const {carName,carModel,carColor} = props.form
    
    const {carNameDispatch,carModelDispatch,carColorDispatch,submitDispatch} = props
   
    function handleSubmit(e){
            e.preventDefault();
            submitDispatch()
   }
    return(
        <div className ='container' style={{maxWidth:'700px'}}>
        <form onSubmit= {handleSubmit}>
         <div className = 'text-center mt-5'>
            <h2>Redux Form</h2>
         </div>
         <label htmlFor ="">CarName</label>
         <input type = "text" value = {carName} id='carName' onChange={(e)=>carNameDispatch(e.target.value)} className='form-control'/><br />
         <label htmlFor ="">CarModel</label>
         <input type = "text" value = {carModel} id='carModel' onChange={(e)=>carModelDispatch(e.target.value)} className='form-control'/><br />
         <label htmlFor ="">CarColor</label>
         <input type = "text" value = {carColor} id='carColor' onChange={(e)=>carColorDispatch(e.target.value)} className='form-control'/><br />
          <div className = 'text-center mt-5'>
            <button className = 'btn btn-success'>Submit</button>
          </div>
          </form>
        </div>
     )
}

const mapStateToProps = (state)=>{
    return state
}

const mapDispatchToProps = (dispatch)=>{
    return{
        carNameDispatch:(data)=>dispatch({type:'CARNAME-INPUT',payload:data}),
        carModelDispatch:(data)=>dispatch({type:'CARMODEL-INPUT',payload:data}),
        carColorDispatch:(data)=>dispatch({type:'CARCOLOR-INPUT',payload:data}),
        submitDispatch:()=>dispatch({type:'FORM-SUBMIT'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Form)