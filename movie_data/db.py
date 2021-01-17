import pymongo
import ast

class MovieDB:

    client = pymongo.MongoClient("mongodb+srv://test_username:test_password@cluster0.zq50t.mongodb.net/TEST?retryWrites=true&w=majority&ssl_cert_reqs=CERT_NONE")
    db = client.TEST
    movies_cols = db.movies

    def __init__(self, loc, encoding):
        self.movies = ast.literal_eval(open(loc, 'r', encoding=encoding).read())
        self.keywords = []

    def insert_to_db_with_parse(self, ott):
        for movie in self.movies:
            movieDocument = {
                "title": movie["title"],
                "thumbnail": movie["thumbnail"],
                "actors": movie["actors"],
                "directors": movie["directors"],
                "genres": movie["genres"],
                "synopsis": movie["synopsis"],
                "rating": movie["rating"],
                "url": movie["url"],
                "OTT": ott
            }
            print("진행 중... {} {}".format(movieDocument["title"], ott))
            MovieDB.movies_cols.insert_one(movieDocument)


wavve = MovieDB('./Wavve.txt', 'utf-8-sig')
wavve.insert_to_db_with_parse(1)

watcha = MovieDB('./Watcha.txt', 'utf-8-sig')
watcha.insert_to_db_with_parse(2)
