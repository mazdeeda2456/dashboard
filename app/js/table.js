var TableModule = (function(){
    var tab = document.getElementsByTagName('tbody');
    var col = document.getElementsByTagName('colgroup');
    var index = _findelement(table[week_initvalue - 1].row[0], "active");
    var col_index;
    var lastrowitem = {
        active:  '<td><svg class="babells-logo option-active" id="barbells" viewBox="0 0 463 463"><path d="M447.5,208H431v-24.5c0-8.547-6.953-15.5-15.5-15.5h-16c-0.169,0-0.333,0.02-0.5,0.025V167.5c0-8.547-6.953-15.5-15.5-15.5h-16c-8.547,0-15.5,6.953-15.5,15.5V224H111v-56.5c0-8.547-6.953-15.5-15.5-15.5h-16c-8.547,0-15.5,6.953-15.5,15.5v0.525C63.833,168.02,63.669,168,63.5,168h-16c-8.547,0-15.5,6.953-15.5,15.5V208H15.5C6.953,208,0,214.953,0,223.5v16c0,8.547,6.953,15.5,15.5,15.5H32v24.5c0,8.547,6.953,15.5,15.5,15.5h16c0.169,0,0.333-0.02,0.5-0.025v0.525c0,8.547,6.953,15.5,15.5,15.5h16c8.547,0,15.5-6.953,15.5-15.5V239h241v56.5c0,8.547,6.953,15.5,15.5,15.5h16c8.547,0,15.5-6.953,15.5-15.5v-0.525c0.167,0.005,0.331,0.025,0.5,0.025h16c8.547,0,15.5-6.953,15.5-15.5V255h16.5c8.547,0,15.5-6.953,15.5-15.5v-16C463,214.953,456.047,208,447.5,208z M15.5,240c-0.276,0-0.5-0.225-0.5-0.5v-16c0-0.275,0.224-0.5,0.5-0.5H32v17H15.5z M63.5,280h-16c-0.276,0-0.5-0.225-0.5-0.5v-96c0-0.275,0.224-0.5,0.5-0.5h16c0.276,0,0.5,0.225,0.5,0.5v96C64,279.775,63.776,280,63.5,280z M96,295.5c0,0.275-0.224,0.5-0.5,0.5h-16c-0.276,0-0.5-0.225-0.5-0.5v-16v-96v-16c0-0.275,0.224-0.5,0.5-0.5h16c0.276,0,0.5,0.225,0.5,0.5V295.5z M384,295.5c0,0.275-0.224,0.5-0.5,0.5h-16c-0.276,0-0.5-0.225-0.5-0.5v-128c0-0.275,0.224-0.5,0.5-0.5h16c0.276,0,0.5,0.225,0.5,0.5v16v96V295.5z M416,279.5c0,0.275-0.224,0.5-0.5,0.5h-16c-0.276,0-0.5-0.225-0.5-0.5v-96c0-0.275,0.224-0.5,0.5-0.5h16c0.276,0,0.5,0.225,0.5,0.5V279.5z M448,239.5c0,0.275-0.224,0.5-0.5,0.5H431v-17h16.5c0.276,0,0.5,0.225,0.5,0.5V239.5z"/></g></svg><svg class="checkmark-logo option-active" id="checkmark" viewBox="0 0 32 32"><path d="M27 4l-15 15-7-7-5 5 12 12 20-20z"></path></svg></td>',
        inactive: '<td><svg class="babells-logo option-inactive" id="barbells" viewBox="0 0 463 463"><path d="M447.5,208H431v-24.5c0-8.547-6.953-15.5-15.5-15.5h-16c-0.169,0-0.333,0.02-0.5,0.025V167.5c0-8.547-6.953-15.5-15.5-15.5h-16c-8.547,0-15.5,6.953-15.5,15.5V224H111v-56.5c0-8.547-6.953-15.5-15.5-15.5h-16c-8.547,0-15.5,6.953-15.5,15.5v0.525C63.833,168.02,63.669,168,63.5,168h-16c-8.547,0-15.5,6.953-15.5,15.5V208H15.5C6.953,208,0,214.953,0,223.5v16c0,8.547,6.953,15.5,15.5,15.5H32v24.5c0,8.547,6.953,15.5,15.5,15.5h16c0.169,0,0.333-0.02,0.5-0.025v0.525c0,8.547,6.953,15.5,15.5,15.5h16c8.547,0,15.5-6.953,15.5-15.5V239h241v56.5c0,8.547,6.953,15.5,15.5,15.5h16c8.547,0,15.5-6.953,15.5-15.5v-0.525c0.167,0.005,0.331,0.025,0.5,0.025h16c8.547,0,15.5-6.953,15.5-15.5V255h16.5c8.547,0,15.5-6.953,15.5-15.5v-16C463,214.953,456.047,208,447.5,208z M15.5,240c-0.276,0-0.5-0.225-0.5-0.5v-16c0-0.275,0.224-0.5,0.5-0.5H32v17H15.5z M63.5,280h-16c-0.276,0-0.5-0.225-0.5-0.5v-96c0-0.275,0.224-0.5,0.5-0.5h16c0.276,0,0.5,0.225,0.5,0.5v96C64,279.775,63.776,280,63.5,280z M96,295.5c0,0.275-0.224,0.5-0.5,0.5h-16c-0.276,0-0.5-0.225-0.5-0.5v-16v-96v-16c0-0.275,0.224-0.5,0.5-0.5h16c0.276,0,0.5,0.225,0.5,0.5V295.5z M384,295.5c0,0.275-0.224,0.5-0.5,0.5h-16c-0.276,0-0.5-0.225-0.5-0.5v-128c0-0.275,0.224-0.5,0.5-0.5h16c0.276,0,0.5,0.225,0.5,0.5v16v96V295.5z M416,279.5c0,0.275-0.224,0.5-0.5,0.5h-16c-0.276,0-0.5-0.225-0.5-0.5v-96c0-0.275,0.224-0.5,0.5-0.5h16c0.276,0,0.5,0.225,0.5,0.5V279.5z M448,239.5c0,0.275-0.224,0.5-0.5,0.5H431v-17h16.5c0.276,0,0.5,0.225,0.5,0.5V239.5z"/></g></svg></td>',
    }
    
    var _tableinit = function(){
        var lastrow = '';
        //timerow
        for(var i=0 ; i < table[week_initvalue-1].col1.length; i++){
            tab[0].children[0].insertAdjacentHTML( 'beforeend', '<th>' + table[week_initvalue - 1].col1[i] +'</th>');
        }
        //content
        for(var i=0 ; i < table[week_initvalue - 1].row.length; i++){
            let content = '';
            for(var j=0 ; j < table[week_initvalue - 1].row[i].length; j++){
                if(table[week_initvalue - 1].row[i][j].type == "time")
                {
                    zm = '<td rowspan="'+ table[week_initvalue - 1].row[i][j].rowspan +'" ><label>' + table[week_initvalue - 1].row[i][j].description + '</label> AM </td>';
                }   
                else if (table[week_initvalue - 1].row[i][j].type == "done"){
                    if(i == 1) lastrow += lastrowitem.active;
                    zm +=  '<td><div class="training-done">'+ table[week_initvalue - 1].row[i][j].description +'<svg id="training-done-icon"><filter filterUnits="objectBoundingBox" x="-11.76" y="0.00" width="50.00" height="50.00" id="filter0"><feFlood flood-color="rgb(255,255,255)" result="coFloodOut1" /> <feComposite in="coFloodOut1" in2="SourceAlpha" operator="in" result="coOverlay1" /><feBlend in="coOverlay1" in2="SourceGraphic" mode="normal" result="colorOverlay1" /> </filter><g transform="matrix(0.81 0.00 0.00 0.80 0.00 0.00)"><circle cx="10.00" cy="10.00" r="10.00" fill="rgb(255,127,25)" /><image x="4" y="0" width="17" height="15" filter="url(#filter0)" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAQAAADj9gSfAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAFPSURBVEjHpdLPK4RBHMfx97Y8ScpFbRwoF5fNSZHkpj3R5k7ucsF1D/gLOHLS2pwoouyBo5SDkkT+AT8uUuhZ9HV4nqaZx2yemWfm9Mz306uZ7/PNk231UOUzC5BjjleEU3+iwBGCINR9iSleYmKPwAcIWI8BYZu8D9HLhSJqfsQYz4rY9yNmCBVR9+tFRQHCDZ3uQE5rpvBInzuRZ0cjGoz4EDWNEBbssQnK5Jo+pGoQu/bYNA2EK0rW6oZBPNBhC83yoyLHDCSqKwbxzbD9HgdGLKRCq6rNGzVhtVnbAg4T0WsGAShrdxSES1rSd18IWWSUD+Psi6LbT4zeb36vuc9Cct/R9j9i642+x9MQEXPWhKimJQDaObcQb3S7INDF/R9kyY0A6OfJIG614XNYQ7xrSMmHAJhUs3riSwAsxwNXzILAFsJmNiIavkK66C9JHvtOmu4LRQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0wOC0yMVQxNDoyNjoyNiswMDowMEVkDX0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTctMDgtMjFUMTQ6MjY6MjYrMDA6MDA0ObXBAAAAAElFTkSuQmCC"/><image x="16" y="0" width="5" height="5" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA0lBMVEX/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr///9pRhx1AAAARHRSTlMABhxKhaigAhtBdq7FtiJfn8/l0bMOFzVt6PndeS5Ljs3r+NubTi9VgNjZkxJqmOrnnEkTVnu7yp1TFSU9aUcYDx9DJMrPNBQAAAABYktHREWOs6hXAAAAaElEQVQI12NgAAJGJmYWVjYQi52Dk4ubhxfE5OMXEBQSFmEQFROX4JaUkhaQYZCVk1dQVFJWUVVjUNfQdHHR0pbTYWDQ1dN3MTA0MgbqMTE1M7ewtAJpt7axlbCzB7EYHBw5nZwZQSwAr50KDmit4zgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDgtMjFUMTQ6MjY6MjYrMDA6MDBFZA19AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTA4LTIxVDE0OjI2OjI2KzAwOjAwNDm1wQAAAABJRU5ErkJggg=="/></g></svg></div><img src="'+ table[week_initvalue - 1].row[i][j].image +'" onerror="this.style.display=' + "'" + "none" + "'" + '" /></td>'
                }else if(table[week_initvalue - 1].row[i][j].type == "todo"  || table[week_initvalue - 1].row[i][j].type == "active"){
                    zm+= '<td><div>'+ table[week_initvalue - 1].row[i][j].description  +'</div><img src="'+ table[week_initvalue - 1].row[i][j].image +'" onerror="this.style.display=' + "'" + "none" + "'" + '"/></td>'
                    if(i == 1 &&  table[week_initvalue - 1].row[i][j].type == "active") lastrow += lastrowitem.active;  
                    else if(i == 1) lastrow += lastrowitem.inactive;
                } else if (table[week_initvalue - 1].row[i][j].type == "freeday"){
                    zm += '<td rowspan="5" class="transform-text"><div>'+ table[week_initvalue - 1].row[i][j].description +'<img onerror="this.style.display=' + "'" + "none" + "'" + '" /></div><svg viewBox="0 0 510 510" style="enable-background:new 0 0 510 510;" xml:space="preserve"><g><g id="keyboard-alt"><path d="M344.25,229.5c20.4,0,38.25-17.85,38.25-38.25S364.65,153,344.25,153S306,170.85,306,191.25S323.85,229.5,344.25,229.5zM165.75,229.5c20.4,0,38.25-17.85,38.25-38.25S186.15,153,165.75,153s-38.25,17.85-38.25,38.25S145.35,229.5,165.75,229.5zM255,408c66.3,0,122.4-43.35,145.35-102h-290.7C132.6,364.65,188.7,408,255,408z M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255S395.25,0,255,0z M255,459c-112.2,0-204-91.8-204-204S142.8,51,255,51s204,91.8,204,204S367.2,459,255,459z" /></g></svg></td>';
                }
            }    
            tab[0].children[i+1].insertAdjacentHTML( 'afterbegin', zm);
        }
        tab[0].children[7].insertAdjacentHTML( 'beforeend', lastrow);
        //isactive
        _activecolumn(index,index);
        col_index = index;        
        //lastrow
        for(var i=0 ; i < table[week_initvalue-1].row7.length; i++){
            tab[0].children[6].insertAdjacentHTML( 'afterbegin', '<td>' + table[week_initvalue - 1].row7[i] +'</td>');
        }
    }

    var _changecontent =  function(){
        var index = _findelement(table[week_initvalue - 1].row[0], "active");
        var lastrow = '';
        //time-row
        for(var i=0 ; i < table[week_initvalue-1].col1.length; i++){
            tab[0].children[0].children[i+1].innerHTML = table[week_initvalue - 1].col1[i];
        }
        //rows-content
        for(var i = 1; i < tab[0].childElementCount -2; i++)
        {
            for(var j = 1; j < tab[0].children[i].childElementCount; j++)
            {
                if(tab[0].children[i].children[j].getElementsByTagName('svg').length && j < 7) {
                    tab[0].children[i].children[j].getElementsByTagName('div')[0].removeChild(tab[0].children[i].children[j].getElementsByTagName('svg')[0]);
                }
                if(table[week_initvalue - 1].row[i-1][j].type == "done"){
                    tab[0].children[i].children[j].getElementsByTagName('div')[0].classList.add('training-done');
                    tab[0].children[i].children[j].childNodes[0].insertAdjacentHTML( 'beforeend', '<svg id="training-done-icon"><filter filterUnits="objectBoundingBox" x="-11.76" y="0.00" width="50.00" height="50.00" id="filter0"><feFlood flood-color="rgb(255,255,255)" result="coFloodOut1" /> <feComposite in="coFloodOut1" in2="SourceAlpha" operator="in" result="coOverlay1" /><feBlend in="coOverlay1" in2="SourceGraphic" mode="normal" result="colorOverlay1" /> </filter><g transform="matrix(0.81 0.00 0.00 0.80 0.00 0.00)"><circle cx="10.00" cy="10.00" r="10.00" fill="rgb(255,127,25)" /><image x="4" y="0" width="17" height="15" filter="url(#filter0)" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAQAAADj9gSfAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAFPSURBVEjHpdLPK4RBHMfx97Y8ScpFbRwoF5fNSZHkpj3R5k7ucsF1D/gLOHLS2pwoouyBo5SDkkT+AT8uUuhZ9HV4nqaZx2yemWfm9Mz306uZ7/PNk231UOUzC5BjjleEU3+iwBGCINR9iSleYmKPwAcIWI8BYZu8D9HLhSJqfsQYz4rY9yNmCBVR9+tFRQHCDZ3uQE5rpvBInzuRZ0cjGoz4EDWNEBbssQnK5Jo+pGoQu/bYNA2EK0rW6oZBPNBhC83yoyLHDCSqKwbxzbD9HgdGLKRCq6rNGzVhtVnbAg4T0WsGAShrdxSES1rSd18IWWSUD+Psi6LbT4zeb36vuc9Cct/R9j9i642+x9MQEXPWhKimJQDaObcQb3S7INDF/R9kyY0A6OfJIG614XNYQ7xrSMmHAJhUs3riSwAsxwNXzILAFsJmNiIavkK66C9JHvtOmu4LRQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0wOC0yMVQxNDoyNjoyNiswMDowMEVkDX0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTctMDgtMjFUMTQ6MjY6MjYrMDA6MDA0ObXBAAAAAElFTkSuQmCC"/><image x="16" y="0" width="5" height="5" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA0lBMVEX/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr/gBr///9pRhx1AAAARHRSTlMABhxKhaigAhtBdq7FtiJfn8/l0bMOFzVt6PndeS5Ljs3r+NubTi9VgNjZkxJqmOrnnEkTVnu7yp1TFSU9aUcYDx9DJMrPNBQAAAABYktHREWOs6hXAAAAaElEQVQI12NgAAJGJmYWVjYQi52Dk4ubhxfE5OMXEBQSFmEQFROX4JaUkhaQYZCVk1dQVFJWUVVjUNfQdHHR0pbTYWDQ1dN3MTA0MgbqMTE1M7ewtAJpt7axlbCzB7EYHBw5nZwZQSwAr50KDmit4zgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDgtMjFUMTQ6MjY6MjYrMDA6MDBFZA19AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTA4LTIxVDE0OjI2OjI2KzAwOjAwNDm1wQAAAABJRU5ErkJggg=="/></g></svg>');
                if(i == 1)lastrow += lastrowitem.active;
                }else if(table[week_initvalue - 1].row[i-1][j].type == "active" && i == 1) lastrow += lastrowitem.active;
                else if(table[week_initvalue - 1].row[i-1][j].type == "todo" && i == 1) lastrow += lastrowitem.inactive;
                if(table[week_initvalue - 1].row[i-1][j].image != "#"){
                    tab[0].children[i].children[j].getElementsByTagName('img')[0].removeAttribute("style");
                }        
                tab[0].children[i].children[j].getElementsByTagName('img')[0].setAttribute('src',  table[week_initvalue - 1].row[i-1][j].image);
                tab[0].children[i].children[j].getElementsByTagName('div')[0].childNodes[0];
                tab[0].children[i].children[j].getElementsByTagName('div')[0].childNodes[0].nodeValue = table[week_initvalue - 1].row[i-1][j].description;  
            }
        }
        //add content row 6
        while (tab[0].children[7].childElementCount > 1) {
            tab[0].children[7].removeChild(tab[0].children[7].lastChild);
        }
        tab[0].children[7].insertAdjacentHTML( 'beforeend', lastrow);

        //add border active row
        _activecolumn(index, col_index);
        //row 7 content
        for(var i=0 ; i < table[week_initvalue-1].row7.length; i++){
            tab[0].children[6].children[i].innerHTML = table[week_initvalue - 1].row7[i];
        }
    }

    function _activecolumn(index, col_index){
        if(index != -1){
            tab[0].children[0].children[index].style.color = '#ff801a';   
            col[0].children[index].style.border = "3px solid #ff801a"; 
        } 
        else{ 
            tab[0].children[0].children[col_index].style.color = "";      
            col[0].children[col_index].style.border = ""; 
        }
        for(var i = 1; i < tab[0].children.length - 2; i++){
            if(index != -1) tab[0].children[i].children[index].style.fontWeight = "700";
            else tab[0].children[i].children[col_index].style.fontWeight = "";
        };
    }
    function _findelement(array, type){
        for(var i = 0 ; i < array.length; i++) if(array[i].type === 'active') return i;
        return -1;
    }
    return {
        tableinit: _tableinit,
        changecontent: _changecontent
    }
})();
