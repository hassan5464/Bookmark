



var siteName = document.getElementById("siteName");
var siteURL = document.getElementById("siteURL");
var tableDisplay = document.getElementById("datadisplay");




var dataHolder = [];

if (localStorage.getItem("sites") !== null){
  dataHolder = JSON.parse(localStorage.getItem("sites"));
  display()
};



function chackValidation(element) {
  var regex = {
    siteName : /^[A-Z][a-z]{2,20}$/g , 
    siteURL : /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})(\/[\/\w .-]*)*\/?$/g
  }
  if ( regex[element.id].test(element.value)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    console.log("🚀 ~", siteName.classList.contains("is-valid"));

  }else {
    element.classList.add( "is-invalid");
    element.classList.remove( "is-valid");
  //   Swal.fire({
  //     title: `Site Name or Url is not valid, Please follow the rules below :
  //     Site name must contain at least 3 characters
  //     Site URL must be a valid one`,
  //     showClass: {
  //       popup: `
  //         animate__animated
  //         animate__fadeInUp
  //         animate__faster
  //       `
  //     },
  //     hideClass: {
  //       popup: `
  //         animate__animated
  //         animate__fadeOutDown
  //         animate__faster
  //       `
  //     }
  //   });
  // }
  
}
}



function addData(){
  if(siteName.classList.contains("is-valid") && siteURL.classList.contains("is-valid")){
    console.log("hooooba");
    
    var dataObj = {
      siteName : siteName.value ,
      siteUrl : siteURL.value
    };
    
    dataHolder.push(dataObj);
    localStorage.setItem("sites", JSON.stringify(dataHolder));
    
    
    clear()
    display() 
  }else{
    console.log("nnnoooooooooo");
    Swal.fire({
      icon: "error",
      title: "Site Name or Url is not valid, Please follow the rules below :",
      html: `
      Site name must contain at least 3 characters and start with Uppercase <br>,
      Site URL must be a valid one
    `,
      text: "Site URL must be a valid one ",
    });  }

  };
  


function clear() {
    siteName.value = null ;
    siteURL.value = null  ;

}

function display() {
  var cartoona = ``;
  for (let i = 0 ; i < dataHolder.length; i++) {
    cartoona += `      
    <tr>
        <th scope="row">${i + 1}</th>
        <td>${dataHolder[i].siteName}</td>
        <td><button type="submit" class="rounded btnVisit" onclick="window.open('${dataHolder[i].siteUrl}', '_blank')"><i class="fa-regular fa-eye"></i> Visit</button></td>
        <td><button type="submit" class="rounded btnDelete" onclick="deletedItem(${i})"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
      </tr>
`
}
  tableDisplay.innerHTML = cartoona;
}

function deletedItem(deleteIndex) {
  dataHolder.splice(deleteIndex, 1);
  console.log("deleted")
  localStorage.setItem("sites", JSON.stringify(dataHolder));
  display();
}




//    

