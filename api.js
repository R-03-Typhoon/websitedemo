import PocketBase from "./pocketbase.es.mjs";
const url = 'https://websitedemo.pockethost.io/'
const pb = new PocketBase(url)
async function getAllPosts() {
    const records = await pb.collection('posts').getFullList();
    return records
    
}
export {getAllPosts}