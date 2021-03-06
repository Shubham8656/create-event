import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import  './View.css';

function View(props){
    
    const {event,title,catagory,summary,register,link,tz,start,end,starttime,endtime,file1,file2} = props.data;
    
    const proceedHandler=()=>{
      alert('Event Created Successfully..')
    }
    return(
        <div>
            <h2>View Your Details</h2>
            <div className='edit-proceed'>
              <Link to='/'><button>Edit</button></Link>
              <button onClick={proceedHandler}>Proceed</button>
            </div>

            <div>
              <div className='horizon'>
                <h3>Event : -</h3>
                <div>{event}</div>
              </div>

              <div className='horizon'>
                <h3>File 1 : -</h3>
                <img id='uploadPreview' src={file1} alt='file1'></img>
              </div>

              <div className='horizon'>
                <h3>Title : -</h3>
                <div>{title}</div>
              </div>

              <div className='horizon'>
                <h3>Catagory : -</h3>
                <div>{catagory}</div>
              </div>

              <div className='horizon'>
                <h3>Summary : -</h3>
                <div>{summary}</div>
              </div>

              <div className='horizon'>
                <h3>Registration Link : -</h3>
                <div>{register}</div>
              </div>

              <div className='horizon'>
                <h3>Online Link : -</h3>
                <div>{link}</div>
              </div>

              <div className='horizon'>
                <h3>Time Zone : -</h3>
                <div>{tz}</div>
              </div>

              <div className='horizon'>
                <h3>Start date : -</h3>
                <div>{start}</div>
              </div>

              <div className='horizon'>
                <h3>Start time : -</h3>
                <div>{starttime}</div>
              </div>

              <div className='horizon'>
                <h3>End date : -</h3>
                <div>{end}</div>
              </div>

              <div className='horizon'>
                <h3>End time : -</h3>
                <div>{endtime}</div>
              </div>

              <div className='horizon'>
                <h3>File 2 : -</h3>
                <img id='uploadPreview' src={file2} alt='file2'></img>
              </div>
            </div>
        </div>
    );
}
const mapStateToProps=(state)=>{
     return{
         data:state.data
     }
}
export default connect(mapStateToProps)(View)
