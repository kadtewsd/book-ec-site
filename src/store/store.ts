import { Book } from '../domain/Book'

export function getBooks(): Book[] {
    const books: Book[] = [
        new Book("B07FGW6TW2", "パラレル・パラダイス4", "https://images-fe.ssl-images-amazon.com/images/I/51s4VOkmpWL._BG0,0,0,0_FMpng_.jpg"),
        new Book("B07DLYYM3F", "冴えない彼女の育て方", "https://images-fe.ssl-images-amazon.com/images/I/51kyGzZXx4L._BG0,0,0,0_FMpng_.jpg"),
        new Book("B07F3K8LJL", "僕らはみんな河合荘(10)", "https://images-fe.ssl-images-amazon.com/images/I/51NdY3JI+kL._BG0,0,0,0_FMpng_.jpg"),
        new Book("B00J8AATHM", "銃夢 Last Order1", "https://images-fe.ssl-images-amazon.com/images/I/51-QVff5Q3L._BG0,0,0,0_FMpng_.jpg"),
        new Book("B01IUUX6IO", "中間管理録トネガワ（１）", "https://images-fe.ssl-images-amazon.com/images/I/613s46FESBL._BG0,0,0,0_FMpng_.jpg")
    ];
    return books;
};