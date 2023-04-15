let apiQuotes = [];
async function getQuotes(){
    const apiUrl = "";
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
    }catch(error){

    }
}