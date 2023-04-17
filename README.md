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