document.onreadystatechange = function () {
  if (document.readyState === 'interactive') renderApp();

  function renderApp() {
    var onInit = app.initialized();

    onInit.then(getClient).catch(handleErr);

    function getClient(_client) {
      window.client = _client;
      client.events.on('app.activated', onAppActivate);
    }
  }
};

function onAppActivate() {
  var textElement = document.getElementById('apptext');
  var getContact = client.data.get('contact');
  getContact.then(showContact).catch(handleErr);

  function showContact(payload) {
    textElement.innerHTML = `Ticket created by ${payload.contact.name}`;
    

}
}

function handleErr(err) {
  console.error(`Error occured. Details:`, err);
}

// var unirest =  require('unirest')

 var API_KEY = "HXT2y48a0Fjp86iJ68u";
 var FD_ENDPOINT = "newaccount1622290986437";

 var PATH = "/api/v2/tickets";
 var URL =  "https://" + FD_ENDPOINT + ".freshdesk.com"+ PATH;

// var Request = unirest.get(URL);

// Request.auth({
//   user: API_KEY,
//   pass: "X",
//   sendImmediately: true
// })
// .end(function(response){
//     console.log(response.body);
//     console.log("Response Status : ", response.status);
//     if(response.status != 200){
//       console.log("X-Request-Id :" + response.headers['x-request-id']);
//     }
//   });
var PATH1 = "/api/v2/contacts";
var URL1 =  "https://" + FD_ENDPOINT + ".freshdesk.com"+ PATH1;

fetch(URL1).then(response => {
    let c = response.json();
    return c;
}).then(result => {
    console.log(result);    
}).catch(error => {
    console.log(error);
});
function createthtd(eleName, value = "", className = "") {

  var td = document.createElement(eleName)
  td.setAttribute('class', className);
  td.innerHTML = value;
  return td;
}

function createlink(eleName, value = "", className = "") {
  var a = document.createElement(eleName);
  a.setAttribute("href", value)
  a.innerHTML = value;
  return a;
}
var container = document.createElement('div');
container.classList.add('container-fluid','table-responsive-sm','table-responsive-md','table-responsive-lg','table-responsive-xl');

var table = document.createElement('table');
table.setAttribute('class', 'table');

var thead = document.createElement('thead');
thead.setAttribute('class', 'thead');

var tr = document.createElement('tr');
var th1 = createthtd('th', 'id');
var th2 = createthtd('th', 'name');
var th3 = createthtd('th', 'email')
tr.append(th1, th2, th3);
thead.append(tr);

function foo(e) {
  table.innerHTML = "";
  console.log(e.id);
  var tbody = document.createElement('tbody')
  var tbodytr1 = document.createElement('tr');
  var td1 = createthtd('th', e.id,'id')
  var td2 = createthtd('th',e.name,'name')
  var td3 = createlink('th', e.email);
  tbodytr1.append(td1, td2,td3)
  tbody.append(tbodytr1)
  table.append(thead, tbody);
  container.append(table);
  document.body.append(container);
}


fetch(URL).then(response => {
  let c = response.json();
  return c;
}).then(result => {
  console.log(result);    
}).catch(error => {
  console.log(error);
});

function createthtd(eleName, value = "", className = "") {

    var td = document.createElement(eleName)
    td.setAttribute('class', className);
    td.innerHTML = value;
    return td;
}
function createlink(eleName,value="",className=""){
    var a=document.createElement(eleName);
    a.setAttribute("href",value)
    a.innerHTML=value;
    return a;
}
var container = document.createElement('div');
container.setAttribute('class', 'container');

var table = document.createElement('table');
table.setAttribute('class', 'table');

var thead = document.createElement('thead');
thead.setAttribute('class', 'thead');

var tr = document.createElement('tr');
var sn=createthtd('th','sn')
var th1 = createthtd('th', 'id');
var th2 = createthtd('th', 'name');
var th3 = createthtd('th', 'email');
tr.append(sn,th1, th2, th3);
thead.append(tr);


function foo(e) {
    table.innerHTML = "";
    for (i = 0; i < 100; i++) {
        console.log(e.data.memes[i]);
        var tbody = document.createElement('tbody')
        var tbodytr1 = document.createElement('tr');
        var sn=createthtd('th',(i+1))
        var td1 = createthtd('th', e.data[i].id)
        var td2 = createthtd('th', e.data[i].name)
        var td3 = createthtd('th')
        var tl3 = createlink('a', e.data[i].email)
        td3.append(tl3)
        tbodytr1.append(sn,td1, td2, td3)
        tbody.append(tbodytr1)
        table.append(thead, tbody);
        container.append(table);
        document.body.append(container);
    }
}