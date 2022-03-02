
window.onload = () => {
 randomUserGenerator()
}

const randomUserGenerator = () => {

    console.log(fetch('https://randomuser.me/api')).then((response)=> {
        console.log(response);
        console.log(response.json());
        })
    }