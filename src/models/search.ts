import { Item } from "./item"

export interface Search {
    author: Author,
    categories: string[],
    items:Item[]
}

interface Author{
    name:string, 
    lastname:string
}