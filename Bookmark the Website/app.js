// The Javascript functionality for the project : 


// Step 1 : Lets listen to the events :


myform = document.forms[0];
console.log(myform);


// lets add event listener to the form : 

myform.addEventListener("submit", saveBookmark);


// Lets define our handler function :

function saveBookmark(e) {

    // now lets grab the input elements : 

    let site = document.getElementById('sitename').value;
    let url = document.getElementById('siteurl').value;

    

    if (!site || !url ){
        alert("Please fill the form");
        return false;
    }


    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if (!url.match(regex)) {
        alert("Please enter the valid URL...");
        return false;
    }
   



    // Lets store the input values in an object : 

    let bookmark =  {
    
        siteName : site,
        siteUrl : url
    };
    

    // Test if the bookmarks is Null.

     if (localStorage.getItem('bookmarks') === null) {
        
        // Initalizing the empty array : 
        let bookmarks = [];

        // Add to the Array : 
        bookmarks.push(bookmark);
        
        // set to  localStorage.
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

     } 
     
     // If already exists just add them to the current localStorage:

     else {

        // get bookmarks from the local storage : 

        let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

        // add bookmarks to the array : 

        bookmarks.push(bookmark);
       
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));


     }


     // clear forms :

     document.getElementById('myform').reset();

      // re-fetch  bookmarks : 
      fetchBookmarks();

    e.preventDefault();
}


// deleting the bookmark website using the localStorage.remove() function


function deleteBookmark(url) {

    console.log(url);

    // get bookmarks from the local storage : 

    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    // lets loop through bookmarks :

    for (var i = 0; i < bookmarks.length; i++) {

        if (bookmarks[i].siteUrl == url) {
            bookmarks.splice(i, 1);
        }
    }

    // Reset back to local storage : 
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));


    // re-fetch  bookmarks : 

    fetchBookmarks();
}

function fetchBookmarks(){

    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    console.log(bookmarks); 

    let bookmarksResults = document.getElementById('ul');

  

    bookmarksResults.innerHTML = '';


    bookmarks.forEach((item)=>{

        let name = item.siteName;
        let url = item.siteUrl;
        let li = document.createElement('li');
    
        bookmarksResults.innerHTML +=  '<li class="list-group-item">' +name + `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`+ '<a class="btn btn-info" href="'+url+'" target="_blank"> Visit </a>' +`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`+  
                                        '<a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#"> Delete </a>'+
                                       '</li>';
                                    
    });

    

}









































// The Local storage Testing and Working in Javascript : 

// localStorage Testing and working : localStorage Stores only string.


// localStorage.setItem('Test',"Hello world");
// localStorage.setItem('Data',"Your Data Is in Safe Hands");
// localStorage.setItem('Number',1);
// localStorage.setItem('Bool',true);
// localStorage.setItem('float',123.456);
// localStorage.setItem('array',[1,2,3,4,5,6,7]);
// localStorage.setItem('Object',{1:"apple",2:"pineapple",3:"grapes"});


// console.log(localStorage.getItem('Test') , typeof (localStorage.getItem('Test')) );
// console.log(localStorage.getItem('Data') , typeof (localStorage.getItem('Data')) );
// console.log(localStorage.getItem('Bool') , typeof (localStorage.getItem('Bool')) );
// console.log(localStorage.getItem('Number') , typeof (localStorage.getItem('Number')) );
// console.log(localStorage.getItem('array') , typeof (localStorage.getItem('array')) );
// console.log(localStorage.getItem('Object') , typeof (localStorage.getItem('Object')) );



// localStorage.removeItem('Test');
// localStorage.removeItem('Data');
// localStorage.removeItem('Bool');
// localStorage.removeItem('float');
// localStorage.removeItem('Number');


  
// console.log(localStorage.getItem('Test') , typeof (localStorage.getItem('Test')) );
// console.log(localStorage.getItem('Data') , typeof (localStorage.getItem('Data')) );
// console.log(localStorage.getItem('Bool') , typeof (localStorage.getItem('Bool')) );