export interface post {
   id: string,
   photo: string,
   description: string,
   type: string,
   authorId: string
}

export interface PostInputDTO {
   photo: string,
   description: string,
   type: postType,
   authorId: string,
}

export enum postType {
   NORMAL = "normal",
   EVENT = "event"
}

export interface postFeed {
   name: string,
   photo: string,
   description: string,
   type: string,
   created_at: string
}

export interface postDB {
   id: string,
   photo: string,
   description: string,
   type: string,
   author_id: string,
   created_at: string
}