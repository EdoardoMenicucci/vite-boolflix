import { reactive } from "vue";

let myData = reactive({
    names: ['pippo'],
    modelUser: 'ritorno al futuro',
    stableSearch: '',
    filmsDetails:'',
    // Indirizzo base per prendere i poster
    posterBase: 'http://image.tmdb.org/t/p/w342',
    numberPage: 1,
    // INSERISCO LA FUNZIONE DIRETTAMENTE NELLO STORE COSI CHE POSSA ESSERE RICHIAMATA DA TUTTI I COMPONENTI
    getData() {
        // CREO UNA VARIABILE STABILE E NON REACTIVE COME IL V-MODEL
        let userSearch = this.modelUser
        // GLI SPAZI NEL SERVER SONO INTERPRETATI CON %20 SPLITTO LA RICERCA DELL UTENTE E UNISCO L'ARRAY GENERATO CON %20
        let userSearchPhp = userSearch.split(' ').join('%20')
        this.stableSearch = userSearchPhp
        //DOPO AVER PRESO I DATI DALL'UTENTE FACCIO LA RICHIESTA AL SERVER
        this.phpRequest();
      },
      // RICHIESTA AXIOS
      phpRequest(){
        // OPZIONE NECESSARIA PER AVER ACCESSO AL SERVER
        const options = {
          method: 'GET',
          url: 'https://api.themoviedb.org/3/search/movie?query=' + this.stableSearch + '&include_adult=false&language=it-IT&page='+this.numberPage,
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2FmZDJhNDAxODc5ZWVhOGZjNjI1NWZkM2M4YmY3YiIsInN1YiI6IjY2NTcxZTU2MWE4ZjExZDYzM2Y4ZjdkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xY2xUBVZ5Dda3gSmSCfG_Yld24zol4JJAwNNGA_OQKY'
          }
        };
        // CHIAMATA AXIOS
        axios
          .request(options)
          .then((response) => {
            let risultato = response.data.results
            this.filmsDetails = risultato
            console.log(this.filmsDetails);
          })
      },
      // Funzione per troncare le descrizioni troppo lunghe
      truncateText(text, maxLength) {
        if (text.length <= maxLength) {
          return text;
        }
        const truncated = text.substr(0, maxLength);
        return truncated.substr(0, truncated.lastIndexOf(" ")) + "...";
      },
      nextPage(){
        if (this.filmsDetails.length <= 20) {
          console.log('non ce altro!');
        } else {
          this.numberPage += 1;
          this.phpRequest()
        }

      },
      previousPage(){
        if (this.numberPage = 1) {
          this.numberPage = 1
          console.log('sei nella prima pagina!');
        } else {
          this.numberPage -= 1
          this.phpRequest()
        }
        

      },
})

export default myData