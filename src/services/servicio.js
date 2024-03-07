

//CONSUMIENDO APIS

//1. Declarar una variable para almacenar la URL del API

let url = "https://api.spotify.com/v1/artists/6LnftpH4LWfg6QChPT8ekH/top-tracks?market=US"

//2. Almacenar en una variable o en varias variables de control que se necesiten en el API
let token = "Bearer BQCWGmEtWvPdwuFKIOQntRpUeAZSOWbpfM6kHGsZiOokQaN3Psm4ZkS90J60zYxabDYgzK3ZJ-GDobVUkYa4_SWoWk41y7EaPYE94PB-QqPkivgEMwo"

//3. Construir la peticion que se va a enviar
let peticion = {
    method:"GET",
    headers:{
        Authorization:token
    }
}

//4. Ejecutar el consumo del API
fetch(url,peticion)
.then(function name(params) {
    
})
.then(function name(params) {
    
})
.catch(function name(params) {
    
})

