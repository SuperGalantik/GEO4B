//array of paragraphers

/**TODO:
 *  
 */





import { ParagrapherModel } from "./app/sidebar/paragraphers.model";

const arrowIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>`

export const images_path: {paragraph: string, images_path: string[]}[] =
[
    {
        paragraph: "2",
        images_path: ["EBW_Schema_GEO4B.jpg"]
    },

    {
        paragraph: "3.1",
        images_path: ["water_p_3/3-1/3-1_Layout_Interfaccia.png"]
    },

    {
        paragraph: "3.3",
        images_path: ["water_p_3/3-3/3-3_Seleziona_oggetti_su_mappa.png", "water_p_3/3-3/3-3-1_Dettagli_oggetto.png"]
    }

]

export const waterParagraphers: ParagrapherModel[] = 
[
    //Introduzione
    {
        id: 1,
        title: "introduzione",
        content: 
            `
            Il presente documento è il Manuale Utente del Client WEB della Piattaforma 
            Geo4B Water release 1.0, il prodotto verticale basato sulla Piattaforma Geo4B 
            Core di EBWorld per la gestione delle infrastrutture delle reti Idrica e Fognaria.
            Nel documento saranno elencate e descritte le funzionalità presenti nella 
            release di prodotto, sia quelle comprese nel pacchetto Geo4B Core sia quelle 
            specifiche del verticale Water.
            Le immagini, i loghi e quanto riportato nel prosieguo del documento sono 
            puramente indicativi, non è escluso infatti che le singole installazioni e le 
            configurazioni di prodotto necessarie ai singoli casi abbiano un aspetto 
            diverso da quello qui mostrato.
            La release 1.0 della Piattaforma Geo4B Water prevede l’integrazione diretta e 
            completa con il software di Network Inventory, GE Smallworld Core, sul quale 
            sono stati implementati il Modello dei Dati e le Funzionalità necessarie alla 
            gestione dell’infrastruttura dedicata al ciclo integrato delle acque. Nelle 
            pagine che seguono funzionalità e schemi architetturali fanno quindi 
            riferimento ad un Backend della Piattaforma basato su GE Smallworld Core.
            Nel presente documento, Geo4B Water, sarà indicata indistintamente come 
            Piattaforma e/o Prodotto, nel primo caso si farà riferimento all’intero 
            ecosistema, nel secondo caso al Client WEB oggetto del presente Manuale 
            Utente.
            Nell’ultimo paragrafo del documento sarà presentata una roadmap di 
            prodotto con l’elenco e la descrizione delle funzionalità che saranno 
            introdotte nelle successive release previste per l’anno 2024.
            `,
        under_paragraphers: [],
    },

    //Architettura della piattaforma
    {
        id: 2,
        title: "architettura della piattaforma",
        content: 
            `
            La piattaforma si compone di diversi moduli architetturali e funzionali che 
            permettono di gestire tutte le informazioni legate alle reti idriche e fognarie di 
            pertinenza, accedendo alle stesse attraverso Client e modalità diverse a 
            seconda del contesto/fase di processo e/o del profilo utente.
            A seguire sarà presentata una versione sintetica dello schema architetturale, 
            al fine di mostrare una preview delle componenti applicative coinvolte.
            Si rimanda ai documenti dedicati la descrizione di dettaglio di queste 
            componenti, nel presente documento ci si limiterà a descrivere le funzionalità 
            presenti in Geo4B Water WEB App.
            <img src="${images_path[0].images_path[0]}" alt="${images_path[0].images_path[0]}"/>
            `,
        under_paragraphers: [],
    },

    //Funzionalità
    {
        id: 3,
        title: "funzionalità",
        content: 
            `Le funzionalità presenti nella release 1.0 di Geo4B Water WEB App saranno 
            organizzate e descritte per ambito funzionale in modo da permettere 
            all’utente di individuare in maniera semplice il paragrafo a cui fare riferimento 
            in ogni momento.`,
        under_paragraphers: 
        [
            {
                id: 1, 
                title: "layout dell'interfaccia utente", 
                content: 
                    `
                    Il Client WEB si presenta come mostrato nella seguente immagine, nella quale 
                    si possono immediatamente individuare le sezioni descritte successivamente.
                    Si possono subito evidenziare le tre sezioni principali che compongono 
                    l’interfaccia utente, che ovviamente ha come spazio dominante quello della 
                    mappa geografica e quindi della rappresentazione degli elementi delle reti
                    idrica e fognaria geolocalizzati sul territorio:
                    <ul>
                        <li>
                            <p>
                            <strong>MAPPA</strong>${arrowIcon}
                            Come anticipato la mappa è l’elemento più importante del 
                            prodotto, sulla mappa sono presenti anche la “Overview View”, cioè la 
                            sezione in cui è mostrata la zona visualizzata al momento in un contesto 
                            più ampio, e l’indicazione delle coordinate geografiche intercettate dal 
                            puntatore del mouse
                            </p>
                        </li>

                        <li>
                            <p>
                            <strong>SIDEBAR</strong>${arrowIcon}
                            La sidebar posizionata nella parte sinistra dell’interfaccia 
                            utente permette di accedere alle funzionalità principali del prodotto
                            </p>
                        </li>

                        <li>
                            <p>
                            <strong>BASEMAP</strong>${arrowIcon}
                            La sezione presenta una toolbar che permette di accedere 
                            alle funzionalità di scelta e configurazione della base cartografica
                            </p>
                        </li>

                        <li>
                            <p>
                            <strong>GOOGLE SEARCH</strong>${arrowIcon}
                            La sezione permette di utilizzare la funzionalità di 
                            ricerca indirizzi e/o Point of Interest di Google Maps.
                            </p>
                        </li>
                    </ul>
                    `,
            },

            {
                id: 2,
                title: "navigazione della mappa",
                content: 
                `
                    Le funzionalità di navigazione della mappa sono state semplificate al massimo 
                    in modo da avere una rappresentazione il più pulita possibile senza per questo 
                    limitare la User Experience proposta. Si è osservato infatti che nelle 
                    applicazioni più comuni (es. Google Maps) la navigazione avviene utilizzando 
                    esclusivamente il mouse, tasto sx per il PAN e rotellina per lo Zoom-In e Zoom-Out, pertanto si è deciso di adottare esclusivamente questa modalità 
                    operativa.
                `,
            },

            {
                id: 3,
                title: "selezione di oggetti sulla mappa",
                content: 
                `
                    Una volta pubblicati ed attivati i livelli sulla mappa, gli stessi possono essere 
                    consultati mediante selezione cliccando con il puntatore del mouse in 
                    prossimità della presenza di un qualsiasi elemento visualizzato.
                    La selezione è attiva solo per i livelli pre-configurati, quali ad esempio quelli 
                    delle reti idrica e fognaria, gestiti nell’Inventory GE Smallworld, e per i livelli
                    caricati da file geografici esterni.
                    La selezione non è attiva per i livelli esterni da servizio perché non vi è uno 
                    standard unico sulla gestione di questi servizi per cui non sempre è possibile 
                    prevedere quale potrebbe essere la modalità corretta per recuperare le 
                    informazioni di dettaglio.
                    Sono naturalmente selezionabili solo gli elementi dei livelli in quel momento 
                    attivi.
                    In seguito al click sulla mappa viene attivato un menù di disambiguazione che 
                    mostra tutti gli elementi dei diversi livelli sottesi al punto cliccato, come 
                    mostrato nella seguente immagine.
                    <img src="${images_path[2].images_path[0]}" alt="${images_path[2].images_path[0]}" />
                    Come si potrà leggere nel capitolo riservato alla Roadmap di prodotto, la 
                    modalità operativa qui descritta sarà aggiornata nella release 1.1 in cui verrà 
                    ulteriormente migliorata la User Experience.
                    Dal menù di disambiguazione si può scorrere per selezionare l’elemento 
                    desiderato e successivamente fare il GoTo sulla mappa o aprire la Scheda di 
                    Dettaglio, agendo sugli appositi bottoni.
                    La Scheda di Dettaglio che si apre e che riporta i valori degli attributi 
                    dell’oggetto è mostrata nell’immagine che segue.
                    <img src="${images_path[2].images_path[1]}" alt="${images_path[2].images_path[1]}" />
                `
            },

            {
                id: 4,
                title: "",
                content: ``
            },

            {
                id: 5,
                title: "",
                content: ``
            },

            {
                id: 6,
                title: "",
                content: ``
            },

            {
                id: 7,
                title: "",
                content: ``
            },

            {
                id: 8,
                title: "",
                content: ``
            },

            {
                id: 9,
                title: "",
                content: ``
            },

            {
                id: 10,
                title: "",
                content: ``
            },

            {
                id: 11,
                title: "",
                content: ``
            },

            {
                id: 12,
                title: "",
                content: ``
            },
        ],
    },  

    //
    {
        id: 4,
        title: "roadmap di prodotto",
        content: ``,
        under_paragraphers: [],
    },      
]