export type { UseWP } from "./index";

export interface Post {
  date: string | null;
  date_gmt: string | null;
  guid: object;
  id: number;
  link: string;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: "publish" | "future" | "draft" | "pending" | "private";
  type: string;
  password: string;
  permalink_teplate: string;
  generated_slug: string;
  title: { rendered: string };
  content: { rendered: string };
  author: number;
  excerpt: { rendered: string };
  featured_media: number;
  comment_status: string;
  ping_status: string;
  format: string;
  meta: object;
  sticky: boolean;
  template: string;
  categories: number[];
  tags: number[];
  _embedded: EmbeddedPostProperties;
}

export interface EmbeddedPostProperties {
  author: {};
  replies?: Array<
    Array<{
      author: number;
      author_avatar_urls: {
        24: string;
        48: string;
        96: string;
      };
      author_name: string;
      author_url: string;
      content: { rendered: string };
      date: string;
      id: number;
      link: string;
      parent: number;
      type: string;
    }>
  >;
  "wp:featuredmedia"?: Array<{
    alt_text: string;
    author: number;
    caption: { rendered: string };
    date: string;
    id: number;
    link: string;
    media_details: {
      file: string;
      width: number;
      height: number;
      image_meta: {};
      sizes: {
        full: {
          file: string;
          width: number;
          height: number;
          mime_type: string;
          source_url: string;
        };
        medium: {
          file: string;
          width: number;
          height: number;
          mime_type: string;
          source_url: string;
        };
        thumbnail: {
          file: string;
          width: number;
          height: number;
          mime_type: string;
          source_url: string;
        };
      };
    };
    media_type: string;
    mime_type: string;
    slug: string;
    source_url: string;
    title: { rendered: string };
    type: string;
  }>;
  "wp:term"?: Array<
    Array<{ id: number; link: string; name: string; slug: string; taxonomy: string }>
  >;
}

export interface PostRequestParams {
  context?: "view" | "embed" | "edit";
  page?: string | number;
  per_page?: string | number;
  search?: string;
  after?: string;
  author?: string | number;
  author_exclude?: string | number;
  before?: string;
  exclude?: string | number;
  include?: string | number;
  offset?: string | number;
  order?: "asc" | "desc";
  orderby?:
    | "author"
    | "date"
    | "id"
    | "include"
    | "modified"
    | "parent"
    | "relevance"
    | "slug"
    | "include_slugs"
    | "title";
  slug?: string;
  status?: "publish" | "future" | "draft" | "pending" | "private";
  tax_relation?: "AND" | "OR";
  categories?: string | number;
  categories_exclude?: string | number;
  tags?: string | number;
  tags_exclude?: string | number;
  sticky?: boolean;
}

export interface Page {
  date: string | null;
  date_gmt: string | null;
  guid: object;
  id: number;
  link: string;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: "publish" | "future" | "draft" | "pending" | "private";
  type: string;
  password: string;
  permalink_teplate: string;
  generated_slug: string;
  parent: number;
  title: object;
  content: object;
  author: number;
  excerpt: object;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  menu_order: number;
  meta: object;
  sticky: boolean;
  template: string;
}

export interface PageRequestParams {
  context?: "view" | "embed" | "edit";
  page?: string | number;
  per_page?: string | number;
  search?: string;
  after?: string;
  author?: string | number;
  author_exclude?: string;
  before?: string;
  exclude?: string | number;
  include?: string | number;
  menu_order?: string | number;
  offset?: string | number;
  order?: "asc" | "desc";
  orderby?:
    | "author"
    | "date"
    | "id"
    | "include"
    | "modified"
    | "parent"
    | "relevance"
    | "slug"
    | "include_slugs"
    | "title"
    | "menu_order";
  parent?: string | number;
  parent_exclude?: string | number;
  slug?: string;
  status?: "publish" | "future" | "draft" | "pending" | "private";
}

export interface Category {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
  meta: object;
}

export interface CategoryRequestParams {
  context?: "view" | "embed" | "edit";
  page?: string | number;
  per_page?: string | number;
  search?: string;
  exclude?: string | number;
  include?: string | number;
  order?: "asc" | "desc";
  orderby?:
    | "id"
    | "include"
    | "name"
    | "slug"
    | "include_slugs"
    | "term_group"
    | "description"
    | "count";
  hide_empty?: boolean;
  parent?: string | number;
  post?: string | number;
  slug?: string;
}

export interface Comment {
  id: number;
  author: number;
  author_email: string;
  author_ip: string;
  author_name: string;
  author_url: string;
  author_user_agent: string;
  content: object;
  date: string;
  date_gmt: string;
  link: string;
  parent: number;
  post: number;
  status: string;
  type: string;
  author_avatar_urls: object;
  meta: object;
}

export interface CommentRequestParams {
  context?: "view" | "embed" | "edit";
  page?: string | number;
  per_page?: string | number;
  search?: string;
  after?: string;
  author?: string | number;
  author_exclude?: string | number;
  author_email?: string;
  before?: string;
  exclude?: string | number;
  include?: string | number;
  offset?: string | number;
  order?: "asc" | "desc";
  orderby?: "date" | "date_gmt" | "id" | "include" | "post" | "parent" | "type";
  parent?: string | number;
  post?: string | number;
  status?: string;
  type?: string;
  password?: string;
}

export interface Tag {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: "category" | "post_tag" | "nav_menu" | "link_category" | "post_format";
  meta: object;
}

export interface TagRequestParams {
  context?: "view" | "embed" | "edit";
  page?: number | string;
  per_page?: number | string;
  search?: string;
  exclude?: number | string;
  include?: number | string;
  offset?: number | string;
  order?: "asc" | "desc";
  orderby?:
    | "id"
    | "include"
    | "name"
    | "slug"
    | "include_slugs"
    | "term_group"
    | "description"
    | "count";
  hide_empty?: boolean;
  post?: number | string;
  slug?: string;
}

export interface Media {
  date: string | null;
  date_gmt: string | null;
  guid: object;
  id: number;
  link: string;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  permalink_template: string;
  generated_slug: string;
  title: object;
  author: number;
  comment_status: "open" | "closed";
  ping_status: "open" | "closed";
  meta: object;
  template: string;
  alt_text: string;
  caption: object;
  description: object;
  media_type: "image" | "file";
  mime_type: string;
  media_details: object;
  post: number;
  source_url: string;
  missing_image_sizes: string[];
}

export interface MediaRequestParams {
  context?: "view" | "embed" | "edit";
  page?: number | string;
  per_page?: number | string;
  search?: string;
  after?: string;
  author?: number | string;
  author_exclude?: number | string;
  before?: string;
  exclude?: number | string;
  include?: number | string;
  offset?: number | string;
  order?: "asc" | "desc";
  orderby?:
    | "author"
    | "date"
    | "id"
    | "include"
    | "modified"
    | "parent"
    | "relevance"
    | "slug"
    | "include_slugs"
    | "title";
  parent?: number | string;
  parent_exclude?: number | string;
  slug?: string;
  status?: string;
  media_type?: "image" | "video" | "text" | "application" | "audio";
  mime_type?: string;
}

export interface State<T> {
  data: T;
  count: number;
  loading: boolean;
  error: string;
}

export type FetchWithParamsObject<P> = (params?: P) => void;
export type FetchWithRequiredIdentifier = (slug: number | string) => void;
export type Action<T> = { type: T; payload?: any };
export type Reducer<S, A> = (state: State<S>, action: Action<A>) => State<S>;
export type Hook<T, P> = () => [T, P];
