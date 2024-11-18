export interface Note {
    title: string
    content: string | null
}

export type NoteOption = Partial<Note>