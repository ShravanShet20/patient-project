//const defaultState = { patients: ["Shiva","Sagar"] };

//const defaultState = { patients: [ {name:"Shiva", email:"s@.com"}, {name:"Sagar", email:"ss@.com"} ] };

const defaultState = { patients: [], searchedPatients:[{name:"Preetham",email:"Preethu@jan.com"}] };
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then(response => response.json())
    // .then(response => defaultState.patients = response 
    //     );


defaultState.searchedPatients = 
[{"name":"Preetham","email":"Preethu@jan.com"}];


defaultState.patients = [
    {
      "id": 1,
      "name": "Preetham",
      "username": "Preethu",
      "email": "Preethu@jan.com",
      "address": {
        "street": "vijayanagar",
        "suite": "Apt. 101",
        "city": "Mysore",
        "zipcode": "570017",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "9742458713",
      "website": "hildegard.org",
      "company": {
        "name": "v2soft.com",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Darshan",
      "username": "Darshu",
      "email": "Darshan@11.com",
      "address": {
        "street": "hebbal",
        "suite": "Apt. 102",
        "city": "Banglore",
        "zipcode": "90566",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "895623741",
      "website": "exelsoft.net",
      "company": {
        "name": "exelsoft",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Sathish",
      "username": "Sathi",
      "email": "Sathish@01.com",
      "address": {
        "street": "Palace road",
        "suite": "Suite 847",
        "city": "Mysore",
        "zipcode": "570001",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "7894561230",
      "website": "wipro.info",
      "company": {
        "name": "wipro",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    },
    {
      "id": 4,
      "name": "Sanketh",
      "username": "Sanki",
      "email": "Sanketh@20.org",
      "address": {
        "street": "forum Mall",
        "suite": "Apt. 692",
        "city": "Banglore",
        "zipcode": "53919",
        "geo": {
          "lat": "29.4572",
          "lng": "-164.2990"
        }
      },
      "phone": "8569741230",
      "website": "kriya.biz",
      "company": {
        "name": "kriya",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
      }
    },
    {
      "id": 5,
      "name": "Vinay",
      "username": "BT",
      "email": "Vinay@elaxi.com",
      "address": {
        "street": "park view",
        "suite": "Suite 351",
        "city": "Tumkur",
        "zipcode": "58794",
        "geo": {
          "lat": "-31.8129",
          "lng": "62.5342"
        }
      },
      "phone": "8745963214",
      "website": "elaxi.info",
      "company": {
        "name": "elaxi",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
      }
    },
   
  
  ]




console.log(defaultState.patients);

const PatientSearchReducer = (state = defaultState , action) => {
    let newState=null;

    switch (action.type) {

        case "FETCH-PATIENT-LIST-COMPLETED":

            console.log("4. Inside patient reducer FETCH-PATIENT-LIST-COMPLETED ");
            newState = {...state};
            newState.patients = action.payload.patients.map( item => item.name );
            return newState;

        case "SEARCHED_PATIENTS_LIST" :
            console.log("5. Inside patient reducer SEARCHED_PATIENTS_LIST ");
            newState = {...state};
            newState.searchedPatients 
            = 
            state.patients.filter (item => item.name.toString().toLowerCase().trim()
            .indexOf(action.payload.search.toLowerCase().trim())!==-1)
            
            console.log(newState.searchedPatients);
            return newState;




        default: return state;
    }
}

export default PatientSearchReducer;