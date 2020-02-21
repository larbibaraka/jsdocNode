class Post {
    constructor({host, user , token, version = 3}){
        this.version = version;
        this.host = host;
        this.user = user;
        this.token = token;
    }

    async posts({postnumber = 10}){
        const maxResult = 100;
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const {data} = await response.json();
        return data;
    }
}