export interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    className: string;
    githubUrl?: string;
    externalUrl?: string;
    image?: string;
}
