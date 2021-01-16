import pymongo
import json
import ast

class MovieDB:

    client = pymongo.MongoClient("mongodb+srv://test_username:test_password@cluster0.zq50t.mongodb.net/TEST?retryWrites=true&w=majority&ssl_cert_reqs=CERT_NONE")
    db = client.TEST
    movies_cols = db.movies

    def __init__(self, loc, encoding):
        self.movies = ast.literal_eval(open(loc, 'r', encoding=encoding).read())
        self.keywords = []

    def set_keywords(self, ott):
        if ott == 'wavve':
            self.keywords = ["title", "img", "actors", "directors", "genre", "synopsis", "rating", "url", "1"]
            for movie in self.movies:
                for keyword in self.keywords[2:5]:
                    movie[keyword] = list(map(lambda x: x["text"], movie[keyword]["list"]))
        elif ott == 'watcha':
            self.keywords = ["title", "img_url", "actors", "directors", "genre", "synopsis", "rating", "url", "2"]

    def insert_to_db_with_parse(self, ott):
        for movie in self.movies:
            movieDocument = {
                "title": movie[self.keywords[0]],
                "thumnail": movie[self.keywords[1]],
                "actors": movie[self.keywords[2]],
                "directors": movie[self.keywords[3]],
                "genres": movie[self.keywords[4]],
                "synopsis": movie[self.keywords[5]],
                "rating": movie[self.keywords[6]],
                "url": movie[self.keywords[7]],
                "OTT": self.keywords[8]
            }
            MovieDB.movies_cols.insert_one(movieDocument)


wavve = MovieDB('./Wavve.txt', 'utf-8-sig')
wavve.set_keywords('wavve')
wavve.insert_to_db_with_parse('wavve')

# watcha = MovieDB('./Watcha.txt', 'utf-8-sig')
# watcha.set_keywords('watcha')
# watcha.insert_to_db_with_parse('watcha')
