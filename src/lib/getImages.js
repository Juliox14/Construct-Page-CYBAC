export async function getImagesType(type, name) {
    try{
        const response = await fetch(`http://localhost:3000/images/${type}/${name}.jpg`);
        if(response.ok) return `/images/${type}/${name}.jpg`;
        else return `/images/${type}/${name}.png`;
    }catch(error){
        return null;
    }
}