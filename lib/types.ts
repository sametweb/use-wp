export interface IData<T> {
    data: Array<T> | T;
    loading: boolean;
    error: string;
}

export interface IAction<T> {
    type: T;
    payload?: any;
}

export interface IPost {
    id: number;
    date: string;
    date_gmt: string;
    modified: string;
    slug: string;
    status: string;
    title: { rendered: string | JSX.Element | JSX.Element[] };
    content: { rendered: string | JSX.Element | JSX.Element[]; };
    excerpt: { rendered: string | JSX.Element | JSX.Element[]; };
    categories: Array<number>;
    author: number;
    featured_media: number;
    comment_status: "open" | "closed";
    tags: Array<number>;
}

export interface IPostQueryParams {
    page?: number | string; // default 1
    per_page?: number | string; // default 10
    search?: string;
    author?: number | string; // single author id or comma separated author ids
    offset?: number | string;
    order?: "desc" | "asc";
    orderby?: "author" | "date" | "id" | "include" | "modified" | "parent" | "relevance" | "slug" | "include_slugs" | "title";
    slug?: string;
    categories?: number | string; // single category id or comma separated category ids
    tags?: number | string; // single tag id or comma separated tag ids
}

export interface IPage extends IPost {
    menu_order: number;
}

export interface IComment {
    id: number;
    date: string;
    date_gmt: string;
    post: number;
    status: string;
    author_name: string;
    author_ip: string;
    content: { rendered: string };
    author_avatar_urls: {
        "24": string;
        "48": string;
        "96": string;
    };
}

export interface ITag {
    id: number;
    count: number;
    name: string;
    slug: string;
    description: string;
}

export interface ICategory {
    id: number;
    count: number;
    description: string;
    name: string;
    slug: string;
    parent: number;
}

export interface IMedia {
    id: number;
    date: string;
    date_gmt: string;
    title: { rendered: string };
    alt_text: string;
    url: string;

}