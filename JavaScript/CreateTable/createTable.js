function CreateTable(){
    var row = document.getElementById('rows').value;
    var column = document.getElementById('columns').value;
	
    try {
      if(row == "" || column == ""){
        throw "You need to input numbers";
      }
      else if(isNaN(row) || isNaN(column) || row<1 || column<1){
          throw "You need to input positive number";
      }else{  
          const body = document.body,
          tbl = document.createElement('table');
  		    tbl.style.width = '120px';
  		    tbl.style.border = '3px solid red';

  		    for (let i = 0; i < row; i++) {
    	      const tr = tbl.insertRow();
    		    for (let j = 0; j < column; j++) {
        	    const td = tr.insertCell(); 
              //td.contentEditable = 'true';   
        	    td.appendChild(document.createTextNode(`Cell ${i+1},${j+1}`));

              blockquote = document.createElement('blockquote');
              blockquote.contentEditable = 'true';
              blockquote.innerHTML= "Cell: "+(i+1) +","+(j+1);
              blockquote.innerHTML= "Editable";
              
              td.appendChild(blockquote);
          	  td.style.border = '1px solid blue';
    		    }
  		    }
 		      body.appendChild(tbl);
      }
    }
    catch(err) {
      alert(err);
    }
}