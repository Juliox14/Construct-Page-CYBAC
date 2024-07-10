import { getAllItems } from './fs';
import { flatDeep } from '../utils/flatDeep';

export const getBlogTags = () => {
    const blogs = getAllItems('blogs');

    const tags = flatDeep(blogs.map((blog) => blog.tag));

    return [...new Set(tags)];
};
