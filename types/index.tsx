export interface Tag {
    name: string
    slug: string
}

export interface Post {
    is_featured: boolean
    id: number
    title: string
    slug: string
    featured_image: string
    content: string
    status: number
    read_time: number
    meta_title: string
    meta_description: string
    created_at: Date
    updated_at: Date
    author: string
    tags: Tag[]
}