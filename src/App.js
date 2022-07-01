
function App() {
   
  function convertToSeconds(){
    let distanceDifferance;
    let newNos;
    let cd = document.getElementById('currentDistance').value;
    let nd = document.getElementById('newDistance').value;


    let nos = document.getElementById('numberOfSweeps').value;
    let ss = document.getElementById('sweepSeconds').value; 

    document.getElementById("nnewDistance").innerHTML = 'New values for: '+ nd+"Km";


    


    if (nd>cd) {
      distanceDifferance = nd/cd;
      newNos = nos*distanceDifferance;

    } else {
      distanceDifferance = cd/nd;
      newNos = nos/distanceDifferance;
    }
     var nnos = Number(newNos.toFixed(3));
    document.getElementById("newSweeps").innerHTML = 'Number of Sweeps: '+ nnos;

    let timeSeconds = newNos * ss;
    let finalTimeSeconds = Math.round(timeSeconds);

    let nttps = timeSeconds/nnos;


    document.getElementById("TPSS").innerHTML = 'Time per sweep, seconds: '+ Number(nttps.toFixed(3));


 
    function convertHMS(){
        let hours   = Math.floor(finalTimeSeconds / 3600);
        let minutes = Math.floor((finalTimeSeconds - (hours * 3600)) / 60); 
        let seconds = finalTimeSeconds - (hours * 3600) - (minutes * 60); 
        if (hours   < 10) {hours   = "0"+hours;};
        if (minutes < 10) {minutes = "0"+minutes;};
        if (seconds < 10) {seconds = "0"+seconds;};
        document.getElementById("totalTime").innerHTML = 'Total time '+hours+':'+minutes+':'+seconds;

     
        

    };
    
     convertHMS();
    
};


return (
  <div className="App, container">
              <div></div><br/><br/>
              <label className="flow-text">Current Distance </label>
              <input type="number" id="currentDistance"/><br/><br/>
              <label className="flow-text">New Distance </label>
              <input type="number" id="newDistance"/><br/><br/>
              <label className="flow-text">Number Of Sweeps </label>
              <input type="number" id="numberOfSweeps"/><br/><br/>
              <label className="flow-text">Time Per Sweep in Seconds </label>
              <input type="number" id="sweepSeconds"/><br/><br/>
              <button className="btn" type='submit' onClick={()=>convertToSeconds()}>Click me</button><br/><br/>  
              <form>
                <br/>
                <label id="nnewDistance" className="flow-text"></label> <br/>
                <label id="newSweeps" className="flow-text"></label> <br/>
                <label id="TPSS" className="flow-text"></label><br/>
                <label id="totalTime" className="flow-text"></label>
              </form>
              
            
  </div>

);
   
}

export default App;
