from flask import Flask, render_template, request
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

@app.route('/', methods=['POST', 'GET'])
def index():
    return render_template('index.html')


@app.route('/perfil', methods=['POST', 'GET'])
def perfil():
    if request.method == 'POST':
        nome = request.form['nome']
        email = request.form['email']
        senha = request.form['senha']
        escolha = request.form['escolha']
        check = request.form['emails']
        sexo = request.form['sexo']
        return render_template('perfil.html', nome = nome, email = email, senha = senha, escolha = escolha, check = check, sexo = sexo)
    else:
        return 'Você não está cadastrado'


@app.route('/chat')
def chat():
    return render_template('chat.html')

@socketio.on('msg')
def msg(msg):
    emit('resp', msg, broadcast=True)

if __name__ == '__main__':
    socketio.run(app)

#feito num momento de tédio