export class VIDEO {
    title: string;
    description: string;
    category: number;
    is_free: boolean;
    populary: number;
    id: string;
    img: string

    constructor(title: string, description: string,category: number, is_free: boolean, populary: number, id: string, img:string){
        this.title = title;
        this.description = description;
        this.category = category;
        this.is_free = is_free;
        this.populary = populary;
        this.id = id;
        this.img = img;
    }
}
