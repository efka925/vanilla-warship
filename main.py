from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def hello():
    name = "Mia"
    tiny_list = [1, 2, 3]
    return render_template("base.html", name=name, tiny_list=tiny_list)


# @app.route("/test")
# def whatever():
#     return "Whatever"


# VARIABLE FROM URL
@app.route("/<number>")
def hello_number(number):
    return f"Hello World {number} times!"
