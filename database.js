if (!window.indexedDB) {
    window.alert("Your browser does not support our database's current version. Some stuff might not be available");
}

const dbName = "cards";

const startDatabase = () => {
    let request = window.indexedDB.open("CardsDB", 3);
    request.onerror = event => {
        console.log('Not connected to the server',
            "Database error: " + event.target.errorCode
        )
    };
    request.onsuccess = event => {
        console.log('Connected to the server')
    };
    request.onupgradeneeded = event => {
        let db = event.target.result;

        // Cria um objectStore para conter a informação sobre nossos clientes. Nós vamos
        // usar "ssn" como key path porque sabemos que é único;
        let objectStore = db.createObjectStore("cards", { keyPath: "ssn" });

        // Cria um índice para buscar clientes pelo nome. Podemos ter nomes
        // duplicados, então não podemos usar como índice único.
        objectStore.createIndex("nome", "nome", { unique: false });

        // Cria um índice para buscar clientes por email. Queremos ter certeza
        // que não teremos 2 clientes com o mesmo e-mail;
        objectStore.createIndex("email", "email", { unique: true });

        // Usando transação oncomplete para afirmar que a criação do objectStore 
        // é terminada antes de adicionar algum dado nele.
        objectStore.transaction.oncomplete = function (event) {
            // Armazenando valores no novo objectStore.
            let clientesObjectStore = db.transaction("clientes", "readwrite").objectStore("cards");
            for (let i in DadosClientes) {
                clientesObjectStore.add(DadosClientes[i]);
            }
        }
    }
}
