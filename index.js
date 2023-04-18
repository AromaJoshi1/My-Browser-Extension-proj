const getJokes = async () => {
    try {
        const res = await fetch( "https://api.chucknorris.io/jokes/random");
        const data = await res.json();
        const myJoke =document.getElementById("myJoke");
        myJoke.innerHTML = data.value;
        
    }catch(error) {}
};

window.addEventListener("load", () =>{
    getJokes();
});

// The await keyword can only be used inside an async function.

// The await keyword makes the function pause the execution and wait for a resolved promise before it continues:

// await is usually used to unwrap promises by passing a Promise as the expression . Using await pauses the execution of its surrounding async function until the promise is settled (that is, fulfilled or rejected). When execution resumes, the value of the await expression becomes that of the fulfilled promise.