




function App() {
   
  function convertToSeconds(){
    let distanceDifferance;
    let newNos;
    let cd = document.getElementById('currentDistance').value;
    let nd = document.getElementById('newDistance').value;
    let nos = document.getElementById('numberOfSweeps').value;
    let ss = document.getElementById('sweepSeconds').value; 
    if (nd>cd) {
      distanceDifferance = nd/cd;
      newNos = nos*distanceDifferance;

    } else {
      distanceDifferance = cd/nd;
      newNos = nos/distanceDifferance;
    }
    let timeSeconds = newNos * ss;
    let finalTimeSeconds = Math.round(timeSeconds);
 
    function convertHMS(){
        let hours   = Math.floor(finalTimeSeconds / 3600);
        let minutes = Math.floor((finalTimeSeconds - (hours * 3600)) / 60); 
        let seconds = finalTimeSeconds - (hours * 3600) - (minutes * 60); 
        if (hours   < 10) {hours   = "0"+hours;};
        if (minutes < 10) {minutes = "0"+minutes;};
        if (seconds < 10) {seconds = "0"+seconds;};
        document.getElementById("myText").innerHTML = hours+':'+minutes+':'+seconds;

     
        

    };
    
     convertHMS();
    
};


return (
  <div className="App, container">
              <div></div><br/><br/>
              <label>Current Distance </label>
              <input type="number" id="currentDistance"/><br/><br/>
              <label>New Distance </label>
              <input type="number" id="newDistance"/><br/><br/>
              <label>Number Of Sweeps </label>
              <input type="number" id="numberOfSweeps"/><br/><br/>
              <label>Sweep Seconds </label>
              <input type="number" id="sweepSeconds"/><br/><br/>
              <button className="btn" type='submit' onClick={()=>convertToSeconds()}>Click me</button><br/><br/>  
              <h2 id='myText'></h2>
              
            
  </div>

);
   
}

export default App;
