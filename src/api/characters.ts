import { instace } from "./base.api"

const endpoint = "character"

export const characters = {
    getAll: function ({page =1 }:{page?:number}) {
        return instace.get(endpoint, {params:{
            page
        }})
    },
    getById: function ({id}:{id?:string | undefined }) {
        return instace.get(`${endpoint}/${id}` )
    }
} 