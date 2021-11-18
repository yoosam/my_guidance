from flask import Flask, request
from flask_mongoengine import MongoEngine

app = Flask(__name__)
database = ['설문1', '설문2']

app = Flask(__name__)
app.config['MONGODB_SETTINGS'] = {
    'db': 'mydatabase',
    'host': 'cluster0.isw6o.mongodb.net',
    'port': 27017,
    'username' : 'shyoo',
    'password' : 'root'
}
db = MongoEngine()
db.init_app(app)

class Survey(db.Document):
    title = db.StringField()
    def to_json(self):
        return {"name": self.title}
               


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/survey", methods = ['GET', 'POST', 'PUT'])
def survey():
    if request.method == 'GET':
        for survey in Survey.objects:
            print(survey)
        return "test"

    if request.method == 'POST':
        # survey = request.form['survey']
        data = request.get_json()
        survey_data = data.get('survey', "")
        database.append(survey_data)
        print(survey_data)
        return survey_data  
    if request.method == 'PUT':
        data = request.get_json()
        survey_data = data.get('survey', "")
        id_data = data.get('id', "")
        database[id_data-1] = survey_data
        return str(id_data)+survey_data
   
@app.route("/survey/<id>", methods=['GET', 'DELETE'])
def survey_id(id):
    if request.method == 'DELETE':
        database.pop(int(id)-1)
        return id

    if request.method == 'GET':
        
        return database[int(id)-1]  


app.run(debug=True)
