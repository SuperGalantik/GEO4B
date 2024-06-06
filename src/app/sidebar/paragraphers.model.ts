export type ParagrapherModel = 
{
    id: number,
    title: string, 
    content: string,
    under_paragraphers: {id: number, title: string, content: string}[],
}
