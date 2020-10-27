// This is the API call function - asynchronous
async function getThemes() {
  // Assigned the url to a reassignable variable inside a fetch method.
  let response = await fetch('http://www.colourlovers.com/api/palettes/new?format=json')

  // Assigned the response to a reassignable variable and use the json method to convert it.
  let data = await response.json()


  // We return the response
  return data
}

// When we recieve the response - we pass it to a new function which show it on the UI
getThemes().then(data => showThemes(data))


// This function is responsible for the visual part of the application
function showThemes(themes) {
  
  
  let firstArr = [
    themes[0],
    themes[1],
    themes[2],
    themes[3],
    themes[4],
    themes[5],
    themes[6],
    themes[7],
    themes[8],
    themes[9]
  ]
  /*for (let i = 0; i < themes.length && i < 10; i++) {
    let firstArr = themes[i];
    console.log(firstArr[0])
  }*/

 // console.log(firstArr)
  this.theme = document.querySelector('.demo')
  
  let output = '';
  let outputAfter = '';
  
  firstArr.forEach((theme) => {
    output += `
    <div class="themes">
      <div class="theme">
        <h4>Name: ${theme.title}</h4>
        <p>Creator: ${theme.userName}</p>
        <p>Date: ${theme.dateCreated}</p>
        <p>Likes: ${theme.numHearts}</p>
      </div>
    </div>
    `;
    
  });

  let secondArr = [
    themes[10],
    themes[11],
    themes[12],
    themes[13],
    themes[14],
    themes[15],
    themes[16],
    themes[17],
    themes[18],
    themes[19]
  ]
  //console.log(secondArr)

  secondArr.forEach((theme) => {
    outputAfter += `
    <div class="themes">
      <div class="theme">
        <h4>Name: ${theme.title}</h4>
        <p>Creator: ${theme.userName}</p>
        <p>Date: ${theme.dateCreated}</p>
        <p>Likes: ${theme.numHearts}</p>
      </div>
    </div>
    `;
  });;
  
  window.addEventListener('scroll', function() {
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      this.theme.innerHTML += outputAfter;
   }
  });

  window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    
    console.log( { scrollTop, scrollHeight, clientHeight });
    
    if(clientHeight + scrollTop >= scrollHeight - 5) {
      
      this.theme.innerHTML = output + outputAfter;
    }
  });


  this.theme.innerHTML = output;
}

