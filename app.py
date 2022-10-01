
from turtle import title
from flask import Flask, render_template, redirect, request
from flask_mail import Mail, Message    # Import
from flask_bootstrap import Bootstrap

app = Flask(__name__)
bootstrap = Bootstrap(app)
app.config['SECRET_KEY'] = 'tezakstring'

app.config['MAIL_SERVER'] = 'smtp.gmail.com'                # Hostname email servera
app.config['MAIL_PORT'] = 587                               # TCP port email servera
app.config['MAIL_USE_TLS'] = True                           # SSL=DA
app.config['MAIL_USERNAME'] = 'flaskmail12345@gmail.com'    # Korisničko ime email računa
app.config['MAIL_PASSWORD'] = 'ubqvaiwfhpkyotzh'            # Zaporka email računa
mail = Mail(app)



@app.route('/', methods=['get'])
def index():
    title = "Merchandise"
    return render_template('index.html', title=title)

@app.route('/index.html')
def redir():
    return redirect('/')

@app.route('/team/<ime>')
def team(ime):
    if ime == 'Chicago Bulls':
        title = "Chicago Bulls"
        return render_template('bulls.html', title=title)
    elif ime == 'Boston Celtics':
        title = "Boston Celtics"
        return render_template('celtics.html', title=title)
    elif ime == 'G.S. Warriors':
        title = "Golden State Warriors"
        return render_template('gsw.html', title=title)
    elif ime == 'Atlanta Hawks':
        title = "Atlanta Hawks"
        return render_template('hawks.html', title=title)
    elif ime == 'L.A. Lakers':
        title = "L.A. Lakers"
        return render_template('lakers.html', title=title)

@app.route('/Shopping Cart')
def kosarica():
    title = "Shopping Cart"
    return render_template('kosarica.html', title=title)

@app.route('/form', methods=['post', 'get'])
def forma():
    email_sub = request.form.get("email_sub")
    msg = Message('Hi :)', sender=app.config['MAIL_USERNAME'], recipients=[email_sub])
    msg.body = "Thank you for subscribing to our newsletter :)"
    mail.send(msg)
    

    title = "Thank You For Subscribing"
    return render_template('form.html', title=title), {"Refresh": "10; url=/index.html"}