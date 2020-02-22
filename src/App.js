/**
 * Post Client Library
 * 
 * @example
 * const post = new Post({
 *  host : "yourself",
 *  user : "heheh@hehe.com",
 *  token :  "secret",
 *  version : 2
 * })
 * 
 * const posts =  post.posts();
 * 
 * 
 * @see  http://www.google.com
 * @todo  implements all the methods
 * @author Baraka Larbi
 * @category  Post
 */
class Post {
    /**
     * 
     * @constructor
     * @param {Object} options
     * @param {String} options.host the host of your app
     * @param {String} options.user the user of the app
     * @param {String} options.token token must be given 
     * @param {Number} options.version the version number
     * 
     * */
    constructor({host, user , token, version = 3}){
        this.version = version;
        this.host = host;
        this.user = user;
        this.token = token;
    }

    /**
     * 
     * @typedef {Posts} Posts
     * @property {Number} UserId the user id 
     * @property {Number} id the  id 
     * @property {String} title the title of the post 
     * @property {String} body the body of the post
     */

    /**
     * List of all posts  for given number
     * @param {Object} options
     * @param {Number} [options.postnumber=10] the post number
     * @return {Posts[]} posts returned by the Api 
     */

    async posts({postnumber = 10}){
        const maxResult = 100;
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const {data} = await response.json();
        return data;
    }
}