    import axios from "axios";
    export default axios.create({
        
        baseURL:"https://api.rawg.io/api",
        params:{
            key:"492a3247700a4faf81a1c71d5ee1a843"
        }
    })