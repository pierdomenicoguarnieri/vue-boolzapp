# Vue Boolzapp

## Consegna

**Milestone 1**

Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

**Milestone 2**

Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato


**Milestone 3**

Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

**Milestone 4**

Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

**Milestone 5 - opzionale**

Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti 

## Steps

**Steps Milestone 1:**

1. Creo il markup

2. Importo Vue

3. Nel return di data creo un database che conterrà le seguenti proprietà:

    - Un array di oggetti, ogni oggetto avrà le seguenti proprietà:

      - Nome del contatto

      - Avatar

      - Visible 

      - Messages che sarà un array di oggetti, ogni singolo oggetto avrà le seguenti proprietà:

        - Date, che conterrà la data e l'ora del messaggio

        - Message, che conterrà il testo del messaggio

        - Status, che indicherà se il messaggio è stato inviato o ricevuto

          - Nel caso in cui sia stato inviato, sarà visualizzato a destra ed il colore dello sfondo del messaggio sarà verde

          - Nel caso in cui sia stato ricevuto, sarà visualizzato a sinistra ed il colore dello sfondo del messaggio  sarà bianco

4. Utilizzando il v-for stampiamo dinamicamente il database

**Steps Milestone 2:**

1. Aggiungo un ciclo v-for che stampa che l'array dei messaggi di ogni contatto. per far ciò scrivo:

    - v-for="contact in contacts"

    - {{contact[index].messages.text}}

2. Nella barra delle chat modifico al click il valore dell'index, questo mi permette di visualizzare le diverse chat

**Steps Milestone 3:**

1. Creiamo una nuova proprietà nel return di data

2. Tramite un v-model nel campo di input andremo a salvare quello che viene scritto nella proprietà

3. Creiamo una funzione che viene eseguita al @keyup.enter e che crea un oggetto che viene poi pushato nell'array di messaggi del contatto

4. Con una timing function, dopo un secondo dall'invio del messaggio da parte dell'utente pushiamo all'interno dell'array dei messaggi del contatto un nuovo messaggio che abbia come testo "Ok!"

**Steps Milestone 4:**

1. Creo un v-model all'input di ricerca che modifichi la proprietà checkMsg 

2. Tramite una funzione e sfruttando le proprietà delle stringhe utilizzo `.includes` per verificare se la srtinga inserita sia presente nel nome dei contatti