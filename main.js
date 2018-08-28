var page=1;
var container=document.getElementById('animal');
var btn=document.getElementById('btn');

btn.addEventListener("click",function(){
  var request=new XMLHttpRequest();
  request.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+page+'.json');
  request.onload=function(){
    if(request.status>=200 && request.status<400){
    //console.log(request.responseText);
    var data=JSON.parse(request.responseText) //request.responseText;
    //console.log(data[0]);
      renderHTML(data);
    }else {
      console.log("Server returned an error");
    }
  };
  request.onerror=function() {
          console.log("Connection error;");
  };
  request.send();
  page++;
  if(page>3){
        //btn.classList.add("hide-me");
  //  document.getElementById('btn').addEventListener('click',function(){
  //    btn.style.display="none";
  //  })
    hide();
    container.insertAdjacentHTML('afterend',"THE END");

  }
});
function renderHTML(data){
  var str='';
  for (var i = 0; i < data.length; i++) {
    str+="<p>"+data[i].name+" is a "+ data[i].species+" that like to eat ";
    for (var j = 0; j < data[i].foods.likes.length;j++) {
      if(j==0){
        str+=data[i].foods.likes[j];
      }
        else {
            str+="and "+ data[i].foods.likes[j];
       }
    }
    str+=" and dislikes ";
    for (var j = 0; j < data[i].foods.dislikes.length;j++) {
      if(j==0){
        str+=data[i].foods.dislikes[j];
      }
        else {
            str+="and "+ data[i].foods.dislikes[j];
       }
    }
    str+=". </p>";
  }
  container.insertAdjacentHTML('beforeend',str);
};
function hide(){
  document.getElementById('btn').style.display='none';
}
