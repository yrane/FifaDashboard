// var Vue = require("vue");

new Vue({

  // We want to target the div with an id of 'events'
  el: '#events',

  // Here we can register any values or collections that hold data
  // for the application
  data: {
    event: {
    Team: "Real Madrid",
    MatchRating: 0,
    Goals: 0,
    OwnGoals: 0,
    GoalAssists: 0,
    ShotsOnTarget: 0,
    ShotsAttempted: 0,
    Passes: 0,
    PassesAttempted: 0,
    Dribbles: 0,
    DribblesAttempted: 0,
    Crosses: 0,
    CrossesAttempted: 0,
    Tackles: 0,
    TacklesAttempted: 0,
    Saves: 0,
    Player: "",
    GameID: '',
    PositionType: "",
    PlayerNumber: 0,
    Position: "",
    timestamp: Date.now() },
    // time_in_millis = Date.now();
    events: [],
    positiontypes: []
  },
  watch: {
    'event.Player': function(val) {
     for (var i = 0; i < this.events.length; i++){
      if (val == this.events[i]['Player']){
       this.event.Position = this.events[i].Position;
       this.event.PositionType = this.events[i].PositionType;
       this.event.PlayerNumber = this.events[i].PlayerNumber;
       this.event.Team = this.events[i].Team;
       // this.event.timestamp = this.events[i].timestamp;
      }
     }
      // change of userinput, do something
    }
  },
  // Anything within the ready function will run when the application loads
  mounted: function() {
    // When the application loads, we want to call the method that initializes
    // some data
    this.fetchEvents();
  },

  // Methods we want to use in our application are registered here
  methods: {
    // We dedicate a method to retrieving and setting some data
    fetchEvents: function() {
     // var time_in_millis = Date.now();
     var positiontypes = ['A', 'D', 'M', 'MA', 'MD', 'GK']
     var events = [
      {
        Team: "Real Madrid",
        Player: "Cristiano Ronaldo",
        PositionType: "A",
        PlayerNumber: 7,
        Position: "LW",
        // timestamp: time_in_millis
      },
      {
        Team: "Real Madrid",
        Player: "Karim Benzema",
        PositionType: "A",
        PlayerNumber: 9,
        Position: "ST",
        // timestamp: time_in_millis
      },
      {
        Team: "Real Madrid",
        Player: "Gareth Bale",
        PositionType: "A",
        PlayerNumber: 11,
        Position: "RW",
        // timestamp: time_in_millis
      },
      {
        Team: "Real Madrid",
        Player: "Luka Modrić",
        PositionType: "M",
        PlayerNumber: 19,
        Position: "CDM",
        // timestamp: time_in_millis
      },
      {
        Team: "Real Madrid",
        Player: "Toni Kroos",
        PositionType: "M",
        PlayerNumber: 8,
        Position: "CDM",
        // timestamp: time_in_millis
      },
      {
        Team: "Real Madrid",
        Player: "Casemiro",
        PositionType: "MD",
        PlayerNumber: 14,
        Position: "CDM",
        // timestamp: time_in_millis
      },
      {
        Team: "Real Madrid",
        Player: "Marcelo",
        PositionType: "D",
        PlayerNumber: 12,
        Position: "LB",
        // timestamp: time_in_millis
      },
      {
        Team: "Real Madrid",
        Player: "Dani Carvajal",
        PositionType: "D",
        PlayerNumber: 2,
        Position: "RB",
        // timestamp: time_in_millis
      },
      {
        Team: "Real Madrid",
        Player: "Sergio Ramos",
        PositionType: "D",
        PlayerNumber: 4,
        Position: "CB",
        // timestamp: time_in_millis
      },
      {
        Team: "Real Madrid",
        Player: "Pepe",
        PositionType: "D",
        PlayerNumber: 3,
        Position: "CB",
        // timestamp: time_in_millis
      },
      {
        Team: "Real Madrid",
        Player: "Keylor Navas",
        PositionType: "GK",
        PlayerNumber: 1,
        Position: "GK",
        // timestamp: time_in_millis
      },
      {
        Team: "Real Madrid",
        Player: "James Rodríguez",
        PositionType: "MA",
        PlayerNumber: 10,
        Position: "CA",
        // timestamp: time_in_millis
      },
      {
        Team: "Real Madrid",
        Player: "Isco",
        PositionType: "MA",
        PlayerNumber: 22,
        Position: "CA",
        // timestamp: time_in_millis
      },
      {
        Team: "Real Madrid",
        Player: "Morata",
        PositionType: "A",
        PlayerNumber: 21,
        Position: "ST",
        // timestamp: time_in_millis
      }
     ];

      // Set the collection of events
      this.events = events;
      this.positiontypes = positiontypes;

      // or push them on separately
      // for (var i in events) {
      //   this.events.push(events[i]);
      // }
    },

    // Adds an event to the existing events array
    addEvent: function() {
      if(this.event.Player) {
       console.log(this.event.Player)
       this.$http.post('/', JSON.stringify(this.event), {
        headers: {
         'Content-Type': 'application/json'
         }
       }).then(function(response){
        console.log(response)
       });
       }
      }
    }

    // deleteEvent: function(index) {
    //   if(confirm("Are you sure you want to delete this event?")) {
    //   // if(true) {
    //     // $remove is a Vue convenience method similar to splice
    //
    //     // window.alert;
    //     this.events.splice(index, 1);
    //    //  this.events = this.events.filter(function (id) {
    //    //     return event.id != index;
    //    // });
    //   }
    // }
  // }
});
