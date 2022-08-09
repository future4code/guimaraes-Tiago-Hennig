export type post = {
   id: string,
   photo: string,
   description: string,
   type: string,
   authorId: string,
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