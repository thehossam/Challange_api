let list = document.querySelectorAll("ul li")
let arr = ["https://jsonplaceholder.typicode.com/posts",
            "https://jsonplaceholder.typicode.com/posts?userId=1",
           "https://jsonplaceholder.typicode.com/posts?userId=2",
           "https://jsonplaceholder.typicode.com/posts?userId=3",
           "https://jsonplaceholder.typicode.com/posts?userId=4",
           "https://jsonplaceholder.typicode.com/posts?userId=5",
           "https://jsonplaceholder.typicode.com/posts?userId=6",
           "https://jsonplaceholder.typicode.com/posts?userId=7",
           "https://jsonplaceholder.typicode.com/posts?userId=8",
           "https://jsonplaceholder.typicode.com/posts?userId=9",
           "https://jsonplaceholder.typicode.com/posts?userId=10",
        ]
for (let i = 0; i < arr.length; i++) {
    list[i].setAttribute("user", arr[i])
}
let p = "https://jsonplaceholder.typicode.com/posts";
list.forEach((li)=>{
    li.addEventListener("click", (i)=>{
        list.forEach(li =>{
            li.classList.remove("active")
        })
        li.classList.add("active")
        window.localStorage.setItem("req", i.target.getAttribute("user"))
        console.log(arr.indexOf(window.localStorage.getItem("req")));
        this.location.reload()
    })
})
p = window.localStorage.getItem("req")
window.onload = function () {
    console.log(p);
    list.forEach(li =>{
        li.classList.remove("active")
    })
    list[arr.indexOf(window.localStorage.getItem("req"))].classList.add("active")
}
function Get() {
    let reqaust = new XMLHttpRequest()
    reqaust.open("GET", p)
    reqaust.send()
    reqaust.responseType = "json"
    reqaust.onload = function() {
        let body = document.querySelector(".body")
        let posts = reqaust.response;
        for(pos of posts){ 
            let h = document.createElement("h2")
            body.appendChild(h)
            let text = document.createTextNode(pos.title)
            h.appendChild(text)
        }
    }
}


Get()
