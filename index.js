var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
        var data = JSON.parse(xhttp.responseText);
        var container = document.getElementById('container');
       data.slice(1).forEach(function(row, i) {
       var rowDiv = document.createElement('div');
       rowDiv.classList.add('row');
       rowDiv.innerHTML = `
       <div class="left-section">
       <h5 class="company">${row.company}</h5>
       <h3 class="position">${row.position}</h3>
       <p class="location">${row.location}</p>
       </div>
       <div class="mid-section">
          ${row.tags.map(function(tag){
                return`<div class="tag">${tag}</div>`
          }).join('')}
       </div>
       <div class="mid-right-section">
       ${new Date(row.date).toLocaleString()}
       </div>
       <div class="right-section">
            <a href=${row.url}>
              <button class="apply">Apply</button>
            </a>
       </div>
       `;
       container.appendChild(rowDiv);
       })
    }
};
xhttp.open("GET", "https://remoteok.com/api?tag=css", true);
xhttp.send();