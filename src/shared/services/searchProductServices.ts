import { ItemDesResponse } from "../../models/itemdesResponse";
import { Search } from "../../models/search";

export class SearchProductServices {
    private apiUrl = `http://localhost:3000/api/v1/products/`;
    private categories: string[] = [];
    private static instance: SearchProductServices;

    private headers= new Headers({
        'name': 'john edwin',
        'lastname': 'lopez marulanda'
    })
    
    static getInstance(): SearchProductServices {
        if (!SearchProductServices.instance) {
            SearchProductServices.instance = new SearchProductServices();
        }
        return SearchProductServices.instance;
    }


    async getProducts(name: string): Promise<Search> {
        const apiUrl = `${this.apiUrl}items?q=${name}`;
        const response = await fetch(apiUrl, {
            headers: this.headers,
            cache: 'no-cache'
        })
        const  products  = await response;
        return products.json();

    }

    async getDescriptionProduct(idProduct: string): Promise<ItemDesResponse> {
        const apiUrl = `${this.apiUrl}items/${idProduct}`;
        const response = await fetch(apiUrl, {
            headers: this.headers,
            cache: 'no-cache'
        })
        const  products  = await response;
        return products.json();
    }

    setCategorias(categories: string[]) {
        this.categories = categories;
    }

    getCategorias() {
        return this.categories;
    }

}