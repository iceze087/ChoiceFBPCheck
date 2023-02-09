from flask import Flask, render_template
app = Flask(__name__)

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/notify_evaluation')
def notify_evaluation():
    return render_template('notify_evaluation.html')

@app.route('/evaluate_status')
def evaluate_status():
    return render_template('evaluate_status.html')

@app.route('/evaluate1')
def evaluate1():
    return render_template('evaluate1.html')

@app.route('/grade')
def grade():
    return render_template('grade.html')

@app.route('/employee')
def employee():
    return render_template('employee.html')

@app.route('/formconfig')
def formconfig():
    return render_template('formconfig.html')

@app.route('/fc')
def fc():
    return render_template('fc.html')

@app.route('/account')
def account():
    return render_template('account.html')

@app.route('/audit')
def audit():
    return render_template('audit.html')

if __name__ == "__main__":
    app.run(debug=True , port=5200)
