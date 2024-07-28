from flask import Flask, request, jsonify
from flask_pymongo import PyMongo


app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/kimomay"
mongo = PyMongo(app)

@app.route('/',methods=["GET"])
def sayHi():
    print("hiiiiii")
    return jsonify({"message":"Default Route"})

@app.route('/addbook',methods=["POST"])
def add_books():
    data = request.get_json()
    print(data)
    books = mongo.db.books

    books.insert_one(data)
    return jsonify({"message":"Book Added"})

@app.route('/books',methods=["GET"])
def get_books():
    print("hiiiiii")
    books  = mongo.db.books
    result = []
    for book in books.find():
        print(book)
        result.append({"_id":str(book["_id"]),"title":book["title"],"author":book["author"]})
    return jsonify({"data":result})

# @app.route('/getbooksByAuthor/<string:author>',methods=["GET"])
# def getByAuthor(author):
#     books  = mongo.db.books
#     result = []
#     for book in books.find({"author":author}):
#         print(book)
#         result.append({"_id":str(book["_id"]),"title":book["title"],"author":book["author"]})
#     return jsonify({"data":result})


#Query Params
@app.route('/getbooksByAuthor',methods=["GET"])
def getByAuthor():
    author = request.args.get('author','')
    books  = mongo.db.books
    result = []
    for book in books.find({"author":author}):
        print(book)
        result.append({"_id":str(book["_id"]),"title":book["title"],"author":book["author"]})
    return jsonify({"data":result})


if __name__=="__main__":
    app.run(port=8000,debug=True)