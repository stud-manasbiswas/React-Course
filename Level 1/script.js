// let h1 = document.createElement("h1")
// h1.innerHTML="Manas biswas"
// document.getElementById("root").appendChild(h1)


// creating h1 using react

let h1 =React.createElement("h1",null,"Manas Biswas")
ReactDOM.createRoot(document.getElementById("root")).render(h1)