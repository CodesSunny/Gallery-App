window.onload=()=>{
    // select upload button
    var uploadBtn = document.getElementById("upload-btn");
    //  upload file
    uploadBtn.onchange=()=>{
        // select input element
       var uploadInput = document.getElementById("upload-input");
    //    select current file 
       var inputFile = uploadInput.files[0];
    //    create file url
    var url = URL.createObjectURL(inputFile);

    //  select gallery div
    var gallery = document.getElementById("gallery");
    // create button
    var button = document.createElement('button');
    // assign class to button
    button.className = "image";
    // create img elment
    var img = document.createElement('img');
    img.src = url;
    // place img inside button
    button.append(img);

    // place button inside gallery div
    gallery.append(button);
    console.log(gallery);
    
    //  select search box
    var search = document.getElementById("search");
    search.style.display = "none";
       
    }  
}