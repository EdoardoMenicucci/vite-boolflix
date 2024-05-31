import { reactive } from "vue";

let myData = reactive({
  modelUser: "",
  stableSearch: "",
  filmsDetails: "",
  // Indirizzo base per prendere i poster
  posterBase: "http://image.tmdb.org/t/p/w342",
  urlSearch: "",
  // TENGO TRACCIA DELLE
  numberPage: 1,
  //TENGO TRACCIA SE IN TOP RATED (A INIZIO PAGINA SI!)
  topRated: true,
  tvSeries: true,
  // TOP / POPULAR
  type: "top_rated",
  // INSERISCO LA FUNZIONE DIRETTAMENTE NELLO STORE COSI CHE POSSA ESSERE RICHIAMATA DA TUTTI I COMPONENTI
  getData() {
    // CREO UNA VARIABILE STABILE E NON REACTIVE COME IL V-MODEL
    let userSearch = this.modelUser;
    // GLI SPAZI NEL SERVER SONO INTERPRETATI CON %20 SPLITTO LA RICERCA DELL UTENTE E UNISCO L'ARRAY GENERATO CON %20
    let userSearchPhp = userSearch.split(" ").join("%20");
    this.stableSearch = userSearchPhp;
    //DOPO AVER PRESO I DATI DALL'UTENTE FACCIO LA RICHIESTA AL SERVER
    this.phpRequest();
  },
  // RICHIESTA AXIOS SEARCH
  phpRequest() {
    if (this.tvSeries == false) {
      if (this.topRated == true || this.tvSeries == false) {
        this.numberPage = 1;
      }
      // OPZIONE NECESSARIA PER AVER ACCESSO AL SERVER
      const options = {
        method: "GET",
        url:
          "https://api.themoviedb.org/3/search/movie?query=" +
          this.stableSearch +
          "&include_adult=false&language=it-IT&page=" +
          this.numberPage,
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2FmZDJhNDAxODc5ZWVhOGZjNjI1NWZkM2M4YmY3YiIsInN1YiI6IjY2NTcxZTU2MWE4ZjExZDYzM2Y4ZjdkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xY2xUBVZ5Dda3gSmSCfG_Yld24zol4JJAwNNGA_OQKY",
        },
      };
      // CHIAMATA AXIOS
      axios.request(options).then((response) => {
        let risultato = response.data.results;
        this.filmsDetails = risultato;
        this.topRated = false;
        console.log(this.filmsDetails);
      });
    } else {
      if (this.topRated == true || this.tvSeries == true) {
        this.numberPage = 1;
      }
      const options = {
        method: "GET",
        url:
          "https://api.themoviedb.org/3/search/tv?query=" +
          this.stableSearch +
          "&include_adult=false&language=it-IT&page=" +
          this.numberPage,
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2FmZDJhNDAxODc5ZWVhOGZjNjI1NWZkM2M4YmY3YiIsInN1YiI6IjY2NTcxZTU2MWE4ZjExZDYzM2Y4ZjdkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xY2xUBVZ5Dda3gSmSCfG_Yld24zol4JJAwNNGA_OQKY",
        },
      };

      axios.request(options).then((response) => {
        let risultato = response.data.results;
        this.filmsDetails = risultato;
        this.topRated = false;
        console.log(this.filmsDetails);
      });
    }
    // SE L'UTENTE AVEVA SCROLLATO PAGINE NEI TOP RATED LO RIPORTO ALLA PRIMA PAGINA QUANDO FA UNA RICERCA PER NOME
  },
  // RICHIESTA AXIOS TOP RATED
  phpRequestTop() {
    // IDENTICO A SOPRA
    this.tvSeries = false;
    if (this.topRated == false) {
      this.numberPage = 1;
    }
    const options = {
      method: "GET",
      url:
        "https://api.themoviedb.org/3/movie/" +
        this.type +
        "?language=it-IT&page=" +
        this.numberPage,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2FmZDJhNDAxODc5ZWVhOGZjNjI1NWZkM2M4YmY3YiIsInN1YiI6IjY2NTcxZTU2MWE4ZjExZDYzM2Y4ZjdkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xY2xUBVZ5Dda3gSmSCfG_Yld24zol4JJAwNNGA_OQKY",
      },
    };
    axios.request(options).then((response) => {
      let risultato = response.data.results;
      this.filmsDetails = risultato;
      this.topRated = true;
      console.log(this.filmsDetails);
    });
  },

  // Funzione per troncare le descrizioni troppo lunghe
  truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    const truncated = text.substr(0, maxLength);
    return truncated.substr(0, truncated.lastIndexOf(" ")) + "...";
  },
  // SEZIONE INPUT BOTTONI
  goToSeries() {
    this.topRated = false;
    if (this.tvSeries == true) {
      this.tvSeries = false;
      this.topRated = true;
      this.type = "now_playing";
      this.goToTopRated();
    } else {
      this.topRated = false;
      this.tvSeries = true;
    }
  },

  //VAI ALLA TOP RATED ITALIA
  goToTopRated() {
    // A OGNI SWITCH PORTO LA RICERCA ALLA PRIMA PAGINA
    (this.tvSeries = false), (this.numberPage = 1);
    //CAMBIO TRA TOP RATED E POPULAR E LIVE NOW A OGNI CLICK SUL BOTTONE
    if (this.type == "top_rated") {
      this.type = "popular";
    } else if (this.type == "popular") {
      this.type = "now_playing";
    } else if (this.type == "now_playing") {
      this.type = "top_rated";
    }
    this.phpRequestTop();
  },
  //PAGINA SUCCESSIVA
  nextPage() {
    if (this.topRated == true) {
      this.numberPage += 1;
      this.phpRequestTop();
    } else {
      if (this.filmsDetails.length <= 19) {
        console.log("non ce altro!");
      } else {
        this.numberPage += 1;
        this.phpRequest();
      }
    }
  },
  //PAGINA PRECEDENTE
  previousPage() {
    if (this.topRated == true) {
      if (this.numberPage == 1) {
        this.numberPage = 1;
        console.log("sei nella prima pagina!");
      } else {
        this.numberPage -= 1;
        this.phpRequestTop();
      }
    } else {
      if (this.numberPage == 1) {
        this.numberPage = 1;
        console.log("sei nella prima pagina!");
      } else {
        this.numberPage -= 1;
        this.phpRequest();
      }
    }
  },
});

export default myData;
