export async function getImagesType(type, name) {
    try{
        const response = await fetch(`http://localhost:3000/images/${type}/${name}.jpg`);
        if(response.ok) return `/images/${type}/${name}.jpg`;
        else{
            const secondResponse = await fetch(`http://localhost:3000/images/${type}/${name}.png`);
            if(secondResponse.ok) return `/images/${type}/${name}.png`;
            else return '';
        } 
    }catch(error){
        return null;
    }
}