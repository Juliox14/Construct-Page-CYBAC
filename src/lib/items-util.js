// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';

// export function getItemsFiles(type) {
//     const itemsDirectory = path.join(process.cwd(), 'src/data', type);
//     return fs.readdirSync(itemsDirectory);
// }

// export function getItemData(itemIdentifier, type) {
//     const itemsDirectory = path.join(`${process.cwd()}/src/data/${type}`);
//     const itemSlug = itemIdentifier.replace(/\.md$/, '');
//     const filePath = path.join(itemsDirectory, `${itemSlug}.md`);
//     const fileContent = fs.readFileSync(filePath, 'utf-8');
//     const { data, content } = matter(fileContent);

//     const itemData = {
//         slug: itemSlug,
//         ...data,
//         content,
//     };

//     return itemData;
// }

// export function getAllItems(type) {
//     const itemFiles = getItemsFiles(type);

//     const allItems = itemFiles.map((itemFile) => getItemData(itemFile, type));

//     const sortedItems = allItems.sort((itemA, itemB) =>
//         itemA.date > itemB.date ? -1 : 1
//     );

//     return sortedItems;
// }


export async function getItemsBy(type, slug){
    try {
        const response = (await fetch(`http://localhost:3000/api/${type}/${slug}`)).json();
        return response;
    } catch (error) {
        return null;
    }
}

export async function getElement(type) {
    try {
        const response = (await fetch(`http://localhost:3000/api/${type}`)).json();
        return response;
    } catch (error) {
        return null;
    }
}

// export function getFeaturedItems(items) {
//     return items.filter((item) => item.isFeatured);
// }
