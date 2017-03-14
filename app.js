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
    timestamp: '' },
    events: []
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
     var events = [
      {
        Team: "Real Madrid",
        MatchRating: 8.3,
        Goals: 0,
        OwnGoals: 0,
        GoalAssists: 1,
        ShotsOnTarget: 0,
        ShotsAttempted: 1,
        Passes: 17,
        PassesAttempted: 18,
        Dribbles: 8,
        DribblesAttempted: 10,
        Crosses: 0,
        CrossesAttempted: 0,
        Tackles: 0,
        TacklesAttempted: 0,
        Saves: 0,
        Player: "Cristiano Ronaldo",
        GameID: 47,
        PositionType: "A",
        PlayerNumber: 7,
        Position: "LW",
        timestamp: 1489458390000
      },
      {
        Team: "Real Madrid",
        MatchRating: 8,
        Goals: 0,
        OwnGoals: 0,
        GoalAssists: 0,
        ShotsOnTarget: 1,
        ShotsAttempted: 1,
        Passes: 23,
        PassesAttempted: 25,
        Dribbles: 13,
        DribblesAttempted: 14,
        Crosses: 0,
        CrossesAttempted: 0,
        Tackles: 0,
        TacklesAttempted: 4,
        Saves: 0,
        Player: "Karim Benzema",
        GameID: 47,
        PositionType: "A",
        PlayerNumber: 9,
        Position: "ST",
        timestamp: 1489458390000
      },
      {
        Team: "Real Madrid",
        MatchRating: 8.7,
        Goals: 1,
        OwnGoals: 0,
        GoalAssists: 0,
        ShotsOnTarget: 1,
        ShotsAttempted: 2,
        Passes: 18,
        PassesAttempted: 21,
        Dribbles: 10,
        DribblesAttempted: 11,
        Crosses: 0,
        CrossesAttempted: 1,
        Tackles: 0,
        TacklesAttempted: 0,
        Saves: 0,
        Player: "Gareth Bale",
        GameID: 47,
        PositionType: "A",
        PlayerNumber: 11,
        Position: "RW",
        timestamp: 1489458390000
      },
      {
        Team: "Real Madrid",
        MatchRating: 7.6,
        Goals: 0,
        OwnGoals: 0,
        GoalAssists: 0,
        ShotsOnTarget: 1,
        ShotsAttempted: 1,
        Passes: 19,
        PassesAttempted: 21,
        Dribbles: 9,
        DribblesAttempted: 9,
        Crosses: 0,
        CrossesAttempted: 0,
        Tackles: 4,
        TacklesAttempted: 6,
        Saves: 0,
        Player: "Luka Modrić",
        GameID: 47,
        PositionType: "M",
        PlayerNumber: 19,
        Position: "CDM",
        timestamp: 1489458390000
      },
      {
        Team: "Real Madrid",
        MatchRating: 7.9,
        Goals: 0,
        OwnGoals: 0,
        GoalAssists: 0,
        ShotsOnTarget: 1,
        ShotsAttempted: 3,
        Passes: 27,
        PassesAttempted: 31,
        Dribbles: 12,
        DribblesAttempted: 14,
        Crosses: 1,
        CrossesAttempted: 1,
        Tackles: 2,
        TacklesAttempted: 2,
        Saves: 0,
        Player: "Toni Kroos",
        GameID: 47,
        PositionType: "M",
        PlayerNumber: 8,
        Position: "CDM",
        timestamp: 1489458390000
      },
      {
        Team: "Real Madrid",
        MatchRating: 8.5,
        Goals: 0,
        OwnGoals: 0,
        GoalAssists: 0,
        ShotsOnTarget: 0,
        ShotsAttempted: 1,
        Passes: 25,
        PassesAttempted: 30,
        Dribbles: 3,
        DribblesAttempted: 3,
        Crosses: 0,
        CrossesAttempted: 0,
        Tackles: 3,
        TacklesAttempted: 5,
        Saves: 0,
        Player: "Casemiro",
        GameID: 47,
        PositionType: "MD",
        PlayerNumber: 14,
        Position: "CDM",
        timestamp: 1489458390000
      },
      {
        Team: "Real Madrid",
        MatchRating: 7.4,
        Goals: 0,
        OwnGoals: 0,
        GoalAssists: 0,
        ShotsOnTarget: 0,
        ShotsAttempted: 0,
        Passes: 15,
        PassesAttempted: 16,
        Dribbles: 4,
        DribblesAttempted: 6,
        Crosses: 0,
        CrossesAttempted: 0,
        Tackles: 2,
        TacklesAttempted: 2,
        Saves: 0,
        Player: "Marcelo",
        GameID: 47,
        PositionType: "D",
        PlayerNumber: 12,
        Position: "LB",
        timestamp: 1489458390000
      },
      {
        Team: "Real Madrid",
        MatchRating: 7.6,
        Goals: 0,
        OwnGoals: 0,
        GoalAssists: 0,
        ShotsOnTarget: 0,
        ShotsAttempted: 0,
        Passes: 17,
        PassesAttempted: 17,
        Dribbles: 4,
        DribblesAttempted: 4,
        Crosses: 0,
        CrossesAttempted: 0,
        Tackles: 0,
        TacklesAttempted: 0,
        Saves: 0,
        Player: "Dani Carvajal",
        GameID: 47,
        PositionType: "D",
        PlayerNumber: 2,
        Position: "RB",
        timestamp: 1489458390000
      },
      {
        Team: "Real Madrid",
        MatchRating: 7.1,
        Goals: 0,
        OwnGoals: 0,
        GoalAssists: 0,
        ShotsOnTarget: 0,
        ShotsAttempted: 0,
        Passes: 13,
        PassesAttempted: 13,
        Dribbles: 3,
        DribblesAttempted: 5,
        Crosses: 0,
        CrossesAttempted: 0,
        Tackles: 0,
        TacklesAttempted: 2,
        Saves: 0,
        Player: "Sergio Ramos",
        GameID: 47,
        PositionType: "D",
        PlayerNumber: 4,
        Position: "CB",
        timestamp: 1489458390000
      },
      {
        Team: "Real Madrid",
        MatchRating: 8.3,
        Goals: 0,
        OwnGoals: 0,
        GoalAssists: 0,
        ShotsOnTarget: 0,
        ShotsAttempted: 0,
        Passes: 8,
        PassesAttempted: 8,
        Dribbles: 2,
        DribblesAttempted: 2,
        Crosses: 0,
        CrossesAttempted: 0,
        Tackles: 3,
        TacklesAttempted: 3,
        Saves: 0,
        Player: "Pepe",
        GameID: 47,
        PositionType: "D",
        PlayerNumber: 3,
        Position: "CB",
        timestamp: 1489458390000
      },
      {
        Team: "Real Madrid",
        MatchRating: 7,
        Goals: 0,
        OwnGoals: 0,
        GoalAssists: 0,
        ShotsOnTarget: 0,
        ShotsAttempted: 0,
        Passes: 4,
        PassesAttempted: 4,
        Dribbles: 0,
        DribblesAttempted: 0,
        Crosses: 0,
        CrossesAttempted: 0,
        Tackles: 0,
        TacklesAttempted: 0,
        Saves: 1,
        Player: "Keylor Navas",
        GameID: 47,
        PositionType: "GK",
        PlayerNumber: 1,
        Position: "GK",
        timestamp: 1489458390000
      }
     ];

      // Set the collection of events
      this.events = events;

      // or push them on separately
      // for (var i in events) {
      //   this.events.push(events[i]);
      // }
    },

    // Adds an event to the existing events array
    addEvent: function() {
      if(this.event.Player) {
        this.events.push(this.event);
        this.event = {
         Team: "",
         MatchRating: '',
         Goals: 1,
         OwnGoals: 0,
         GoalAssists: 0,
         ShotOnTarget: 4,
         ShotsAttempted: 8,
         Passes: 12,
         PassesAttempted: 15,
         Dribbles: 10,
         DribblesAttempted: 14,
         Crosses: 0,
         CrossesAttempted: 1,
         Tackles: 2,
         TacklesAttempted: 4,
         Saves: 0,
         Player: "",
         GameID: '',
         PositionType: "A",
         PlayerNumber: 7,
         Position: "LW",
         timestamp: ''
        };
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
