// from data.js
var tableData = data;
var datelist = tableData.map(item=> item.datetime);

// YOUR CODE HERE!
var UFOTable = d3.select("#ufo-table");
UFOTable.attr("class","table table-striped");
var tbody = UFOTable.select("tbody");
tableData.forEach((data) => {
        var row = tbody.append("tr");
        Object.entries(data).forEach(([key, value]) => {
            row.append("td").text(data[key]);
               row.append("td").text(data[value]);
        });
      });


var button = d3.select("#filter-btn");  
button.on("click",function(){
    d3.event.preventDefault();
    $("#p1").html("");
    var inputDate = d3.select("#datetime").property("value").toLowerCase();
    var inputCity = d3.select("#city").property("value").toLowerCase();
    var inputState = d3.select("#state").property("value").toLowerCase();
    var inputCountry = d3.select("#country").property("value").toLowerCase();
    var inputShape = d3.select("#shape").property("value").toLowerCase();

    var search = new Map();
    if(inputDate != ""){search.set('datetime', inputDate);};
    if(inputCity != ""){search.set('city', inputCity);};
    if(inputState !=""){search.set('state', inputState);};
    if(inputCountry !=""){search.set('country', inputCountry);};
    if(inputShape !=""){search.set('shape', inputShape);};
    console.log(search);
    var val = [];
    var k = [];
    var filteredData = [];
    tableData.filter(item => {
        for (var value of search.values()) {
            val.push(value);
        }
        for (var key of search.keys()) {
            k.push(key);
        }
        if (val.every(o => Object.values(item).includes(o)) === true){
            filteredData.push(item);
        }
        else{
            console.log("not found");
        }
        for (var i = 0; i < k.length; i++) {
            var K = k[i];
            if(item[K] != val[i]){
                var index = filteredData.indexOf(item);
                if (index !== -1) filteredData.splice(index, 1);
            }
        }    
    });   
    console.log(filteredData);
    if (filteredData.length == 0){
        document.getElementById("p1").innerHTML = "Sorry,no result is found!";
    }
 
    $("#ufo-table > tbody").html("");
    filteredData.forEach((data) => {
        var row = tbody.append("tr");
        Object.entries(data).forEach(([key, value]) => {
            row.append("td").text(data[key]);
            row.append("td").text(data[value]);
        });
    });

});

var button = d3.select("#filter-reset");  
button.on("click",function(){
    d3.event.preventDefault();
    d3.select("#datetime").property('value', "");
    d3.select("#city").property('value', "");
    d3.select("#state").property('value', "");
    d3.select("#country").property('value', "");
    d3.select("#shape").property('value', "");
});
// var button = d3.select("#filter-btn");  
// button.on("click",function(){
//     d3.event.preventDefault();
//     var inputDate = d3.select("#datetime").property("value").toLowerCase();
//     var inputCity = d3.select("#city").property("value").toLowerCase();
//     var inputState = d3.select("#state").property("value").toLowerCase();
//     var inputCountry = d3.select("#country").property("value").toLowerCase();
//     var inputShape = d3.select("#shape").property("value").toLowerCase();
//     var filter = {
//         datetime: inputDate,
//         city: inputCity,
//         state: inputState,
//         country: inputCountry,
//         shape: inputShape
//       };
//     var filteredData = [];
//     tableData.filter(item => {
//         for (var key in filter) {
//         if (item[key] === undefined || item[key] != filter[key]){
//             console.log("Data not found");}
//         else{filteredData.push(item);}
//         }
//         });
//     console.log(filteredData);


    // var input = inputDate || inputCity || inputState || inputCountry || inputShape;
    // var filteredData = tableData.filter(function(item){
    //         return Object.values(item).some( val => 
    //             String(val).toLowerCase().includes(input) 
    //         );
    //     });

//     var filteredData = tableData.filter(function(item){
//         return Object.values(item).some(val=> String(val).includes(input))
//     });
    

// var params = {
//     datetime:inputDate ,
//     city: inputCity,
//     state: inputState,
//     country: inputCountry,
//     shape: inputShape,
// };
// console.log(params);

// var keys = Object.keys(params);
// var filteredData = [];
// tableData.filter(function(item) {
//     var flag = false;
//     for (var i = 0; i < keys.length; i++) {
//         var key = keys[i];
//         if (item[key] === params[key]) {
//            filteredData.push(item);
//         }
//     }
// }); 
    
//     console.log(filteredData);
//     $("#ufo-table > tbody").html("");
//     filteredData.forEach((data) => {
//         var row = tbody.append("tr");
//         Object.entries(data).forEach(([key, value]) => {
//             row.append("td").text(data[key]);
//             row.append("td").text(data[value]);
//         });
//         });
// });


// var inputDate = d3.select("#datetime");
// inputDate.on("change", function() {
// d3.event.preventDefault();
// var searchDate = d3.event.target.value;
// console.log(searchDate);
// if (datelist.includes(searchDate)){
//     var results = tableData.filter(obj => {
//         return obj.datetime === searchDate
//         });
//     console.log(results);
//     $("#ufo-table > tbody").html("");
//     results.forEach((result) => {
//         var row = tbody.append("tr");
//         Object.entries(result).forEach(([key, value]) => {
//             row.append("td").text(result[key]);
//             row.append("td").text(result[value]);
//         });
//     });
// }
// else{console.log("Date is not found");
// }
// });





