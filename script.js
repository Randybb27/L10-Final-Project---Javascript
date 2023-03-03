// const resdiv =  document.getElementById(`results`);
const wrapdiv = document.getElementById("advicewrapper");

fetch('https://api.adviceslip.com/advice').then(response => {
    return (response.json());
}).then(advicedata => {
    console.log(advicedata);
    const Adviceobj = advicedata.slip;
    wrapdiv.innerHTML =`<p>${Adviceobj.advice}</p>`;
}).catch(error => {
    console.log(error);
});




// const baseURL ="https://api.adviceslip.com/advice";

// function fetch() {
//     const advice =  document.getElementById("advice");
//     console.log(advice)

//     $.ajax(
//         baseURL,

//         {
//             dataType:"jsop",
//             jsonp:'advise',
//             success: function (APIResponse) {
//                 console.log(APIResponse)

//                 var advice = document.createElement('p');
//             advice.innerHTML = "Advice for the Day" + APIResponse.results;
//             advicewrapper.appendChild(advice);
//         }
//         })
// }