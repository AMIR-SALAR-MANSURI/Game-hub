    import axios from "axios";
    export default axios.create({
        
        baseURL:"https://api.rawg.io/api",
        params:{
            // key:"492a3247700a4faf81a1c71d5ee1a843"
            // key:"c7b18323a47d40c394ea5b019646b1f5"
            key:"c542e67aec3a4340908f9de9e86038af"
        }
    })